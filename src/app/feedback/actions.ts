"use server";

import { Resend } from "resend";
import { auth } from "@/auth";

const FEEDBACK_TO = "abs@techbbq.org";
const FEEDBACK_FROM = "TechBBQ Tools <onboarding@resend.dev>";

export type SendFeedbackResult =
  | { ok: true }
  | { ok: false; error: string };

export async function sendFeedback(formData: FormData): Promise<SendFeedbackResult> {
  const session = await auth();
  if (!session?.user?.email) {
    return { ok: false, error: "Not signed in." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, error: "Feedback is not configured. Try again later." };
  }

  const message = String(formData.get("message") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();

  if (!message) {
    return { ok: false, error: "Write something before sending." };
  }
  if (message.length > 5000) {
    return { ok: false, error: "Keep it under 5000 characters." };
  }

  const fromUser = session.user.name
    ? `${session.user.name} <${session.user.email}>`
    : session.user.email;

  const finalSubject = subject
    ? `[TechBBQ Tools] ${subject}`
    : `[TechBBQ Tools] Feedback from ${session.user.name ?? session.user.email}`;

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: FEEDBACK_FROM,
      to: FEEDBACK_TO,
      replyTo: session.user.email,
      subject: finalSubject,
      text: `From: ${fromUser}\n\n${message}`,
    });
    if (result.error) {
      return { ok: false, error: result.error.message };
    }
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Failed to send feedback.",
    };
  }
}
