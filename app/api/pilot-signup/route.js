import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, employer, note } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Notify the team
    await resend.emails.send({
      from: 'Her Ruby <onboarding@resend.dev>',
      to: 'info@herruby.com',
      subject: `✦ Pilot Registration — ${name}`,
      html: `
        <h2>New Pilot Event Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Employer:</strong> ${employer || '(not provided)'}</p>
        <p><strong>Note:</strong> ${note || '(none)'}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}</p>
      `,
    });

    // Send confirmation to the registrant
    await resend.emails.send({
      from: 'Her Ruby <onboarding@resend.dev>',
      to: email,
      subject: "You're registered for Her Ruby Pilot Day ✦",
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 520px; margin: 0 auto; padding: 40px 24px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: #B8292F; display: inline-flex; align-items: center; justify-content: center; font-size: 1.4rem; color: white; font-weight: 700;">♦</div>
          </div>
          <h1 style="font-size: 1.6rem; color: #2A2A35; text-align: center; margin-bottom: 16px;">You're registered, ${name.split(' ')[0]}!</h1>
          <p style="font-size: 0.95rem; color: #6B6B7B; line-height: 1.8; text-align: center;">
            We're thrilled to have you at the Her Ruby Pilot Day.
          </p>
          <div style="background: #FFF8F8; border-radius: 16px; padding: 24px; margin: 24px 0; text-align: center;">
            <p style="margin: 0 0 8px; font-weight: 700; color: #2A2A35;">📅 Saturday, June 20, 2026</p>
            <p style="margin: 0 0 8px; color: #6B6B7B;">⏰ 10:00 AM – 1:00 PM</p>
            <p style="margin: 0; color: #6B6B7B;">📍 Ontario, Canada</p>
          </div>
          <p style="font-size: 0.9rem; color: #6B6B7B; line-height: 1.8; text-align: center;">
            The exact venue address will be shared in a follow-up email closer to the event. No payment is required — this event is free.
          </p>
          <p style="font-size: 0.85rem; color: #9B9BAB; text-align: center; margin-top: 32px;">
            Questions? Reply to this email or reach us at info@herruby.com<br/><br/>
            With love,<br/>The Her Ruby Team<br/>🇨🇦 Ontario, Canada
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Pilot signup error:', err);
    return NextResponse.json({ error: 'Failed to process registration' }, { status: 500 });
  }
}
