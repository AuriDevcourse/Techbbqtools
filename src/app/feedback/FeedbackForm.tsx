"use client";

import { useState, useTransition } from "react";
import { Send, Check } from "lucide-react";
import { sendFeedback } from "./actions";

export function FeedbackForm({ userEmail }: { userEmail: string }) {
  const [pending, startTransition] = useTransition();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await sendFeedback(fd);
      if (result.ok) {
        setSent(true);
        setSubject("");
        setMessage("");
      } else {
        setError(result.error);
      }
    });
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-accent/40 p-8 text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
          <Check className="h-5 w-5" />
        </div>
        <h2 className="text-lg font-semibold text-foreground">Thanks — sent.</h2>
        <p className="mt-2 text-sm text-muted">
          Auri will pick it up and reply to{" "}
          <span className="font-medium text-foreground">{userEmail}</span>.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-pill px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-border bg-accent/40 p-6"
    >
      <div className="text-xs text-muted">
        Replying as <span className="font-medium text-foreground">{userEmail}</span>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-foreground">
          Subject <span className="text-muted">(optional)</span>
        </span>
        <input
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-foreground"
          placeholder="Short summary"
          maxLength={120}
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-foreground">
          What's on your mind?
        </span>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, 5000))}
          rows={8}
          required
          className="w-full resize-y rounded-lg border border-border bg-white px-3 py-2 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-foreground"
          placeholder="Bug, idea, feature request, frustration — all welcome."
        />
        <span className="mt-1 block text-right text-xs text-muted">
          {message.length} / 5000
        </span>
      </label>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={pending || !message.trim()}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {pending ? (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-background/40 border-t-background" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send feedback
          </>
        )}
      </button>
    </form>
  );
}
