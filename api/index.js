import server from '../dist/server/server.js';

export default async function handler(req, res) {
  // 1. Convert Vercel Node.js Request to standard Web Request
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const url = new URL(req.url, `${protocol}://${host}`);
  
  const reqHeaders = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      reqHeaders.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach(v => reqHeaders.append(key, v));
    }
  }

  const init = {
    method: req.method,
    headers: reqHeaders,
  };

  // Only read body if it's a method that allows one
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    init.body = Buffer.concat(chunks);
  }

  const request = new Request(url, init);

  // 2. Pass the Web Request to TanStack Start's SSR Server
  const response = await server.fetch(request);

  // 3. Convert standard Web Response back to Vercel Node.js Response
  res.statusCode = response.status;
  res.statusMessage = response.statusText;

  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (response.body) {
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
  }
  res.end();
}
