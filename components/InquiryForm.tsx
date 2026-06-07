"use client";
import { useState } from "react";
import { EVENT_FORM_OPTIONS } from "@/lib/site";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Something went wrong.");
      setStatus("ok");
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="bg-white border rounded-2xl p-10 text-center shadow-sm">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold">Thank you!</h3>
        <p className="text-ink/70 mt-2">
          Your tour request is in. We&apos;ll reach out within 1–2 business days. For anything urgent,
          call us at <a href="tel:+19188303692" className="text-accent underline">918-830-3692</a>.
        </p>
      </div>
    );
  }

  const field = "w-full border border-ink/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50";

  return (
    <form onSubmit={onSubmit} className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm grid gap-4">
      {/* Honeypot — bots fill this, humans don't */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid md:grid-cols-2 gap-4">
        <label className="text-sm">Name*<input required name="name" className={field} /></label>
        <label className="text-sm">Email*<input required type="email" name="email" className={field} /></label>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="text-sm">Phone<input name="phone" type="tel" className={field} /></label>
        <label className="text-sm">Event Type
          <select name="event_type" className={field} defaultValue="">
            <option value="" disabled>Select…</option>
            {EVENT_FORM_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="text-sm">Event Date<input name="event_date" type="date" className={field} /></label>
        <label className="text-sm">Guest Count<input name="guest_count" type="number" min={1} className={field} /></label>
      </div>
      <label className="text-sm">Message
        <textarea name="message" rows={4} className={field} placeholder="Tell us about your event…" />
      </label>

      {status === "error" && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-accent text-primary font-semibold rounded-full px-6 py-3 hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request My Tour"}
      </button>
      <p className="text-xs text-ink/50">
        By submitting you agree to our <a href="/privacy" className="underline">Privacy Policy</a>. We never share your info.
      </p>
    </form>
  );
}
