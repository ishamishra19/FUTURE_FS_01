import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(1000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey || !to) {
      throw new Error(
        "Email is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL in .env, then restart dev server.",
      );
    }

    const resend = new Resend(apiKey);
    const subject = `New portfolio contact from ${data.name}`;
    const text = [`Name: ${data.name}`, `Email: ${data.email}`, "", "Message:", data.message].join(
      "\n",
    );

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      text,
    });

    if (error) {
      console.error("contact email send failed:", error);
      if (error.message?.toLowerCase().includes("api key is invalid")) {
        throw new Error(
          "Invalid RESEND_API_KEY in .env. Add a valid key from Resend dashboard and retry.",
        );
      }
      if (error.message?.includes("only send testing emails to your own email address")) {
        throw new Error(
          "Resend test-mode restriction: send to your Resend account email, or verify a domain and use a from address on that domain.",
        );
      }
      if (error.message) {
        throw new Error(error.message);
      }
      throw new Error("Could not send your message. Please try again.");
    }

    return { ok: true as const };
  });
