"use client";

import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Loader } from "@/components/ui/Loader";
import { resume } from "@/data/resume";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Failed to send message");
        setStatus("sent");
        (e.currentTarget as HTMLFormElement).reset();
        return;
      }

      // GitHub Pages friendly fallback: open the user's email client.
      const subject = encodeURIComponent(`Portfolio contact: ${payload.name}`);
      const body = encodeURIComponent(`Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}\n`);
      window.location.href = `mailto:${resume.contact.email}?subject=${subject}&body=${body}`;

      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2 md:grid-cols-2">
        <label className="grid gap-1 text-sm font-semibold text-neutral-900 dark:text-white">
          Name
          <input
            name="name"
            required
            className="h-11 rounded-xl border border-black/10 bg-white/80 px-3 text-sm text-neutral-900 shadow-sm outline-none focus:border-neutral-950/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/30"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-1 text-sm font-semibold text-neutral-900 dark:text-white">
          Email
          <input
            name="email"
            type="email"
            required
            className="h-11 rounded-xl border border-black/10 bg-white/80 px-3 text-sm text-neutral-900 shadow-sm outline-none focus:border-neutral-950/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/30"
            placeholder="you@email.com"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm font-semibold text-neutral-900 dark:text-white">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-xl border border-black/10 bg-white/80 p-3 text-sm text-neutral-900 shadow-sm outline-none focus:border-neutral-950/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/30"
          placeholder="What would you like to build or explore together?"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
          Send message
        </Button>
        {status === "sending" ? <Loader /> : null}
        {status === "sent" ? <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Sent. Thanks!</div> : null}
        {status === "error" ? <div className="text-sm font-semibold text-red-700 dark:text-red-300">{error}</div> : null}
      </div>
    </form>
  );
}
