import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot: if "company" is filled, silently accept (drop) the bot.
    if (body.company) return NextResponse.json({ ok: true });

    if (!body.name || !body.email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (url && key) {
      const supabase = createClient(url, key);
      const { error } = await supabase.from("inquiries").insert({
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        event_type: body.event_type || null,
        event_date: body.event_date || null,
        guest_count: body.guest_count ? Number(body.guest_count) : null,
        message: body.message || null,
        source: "website",
      });
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Optional email notification to info@cepedasec.com via Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Cepedas Website <onboarding@resend.dev>",
        to: process.env.INQUIRY_TO_EMAIL || "info@cepedasec.com",
        subject: `New tour inquiry — ${body.name}`,
        text: [
          `Name: ${body.name}`,
          `Email: ${body.email}`,
          `Phone: ${body.phone || "-"}`,
          `Event Type: ${body.event_type || "-"}`,
          `Event Date: ${body.event_date || "-"}`,
          `Guest Count: ${body.guest_count || "-"}`,
          `Message: ${body.message || "-"}`,
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Server error" }, { status: 500 });
  }
}
