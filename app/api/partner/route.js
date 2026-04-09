import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { first, last, company, email } = await req.json();
    if (!first || !last || !company || !email) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Notify the team
    await resend.emails.send({
      from: 'Her Ruby <onboarding@resend.dev>',
      to: 'info@herruby.com',
      subject: `✦ Employer Enquiry — ${company}`,
      html: `
        <h2>New Employer Partnership Enquiry</h2>
        <p><strong>Name:</strong> ${first} ${last}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}</p>
      `,
    });

    // Send confirmation to the enquirer
    await resend.emails.send({
      from: 'Her Ruby <onboarding@resend.dev>',
      to: email,
      subject: 'Her Ruby — Partnership Enquiry Received ✦',
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 520px; margin: 0 auto; padding: 40px 24px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: #B8292F; display: inline-flex; align-items: center; justify-content: center; font-size: 1.4rem; color: white; font-weight: 700;">♦</div>
          </div>
          <h1 style="font-size: 1.6rem; color: #2A2A35; text-align: center; margin-bottom: 16px;">Thank you, ${first}!</h1>
          <p style="font-size: 0.95rem; color: #6B6B7B; line-height: 1.8; text-align: center;">
            We've received your partnership enquiry for <strong>${company}</strong> and our team will be in touch within 24 hours to discuss how Her Ruby can support your team's midlife wellbeing.
          </p>
          <p style="font-size: 0.85rem; color: #9B9BAB; text-align: center; margin-top: 32px;">
            With love,<br/>The Her Ruby Team<br/>🇨🇦 Ontario, Canada
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Partner enquiry error:', err);
    return NextResponse.json({ error: 'Failed to process enquiry' }, { status: 500 });
  }
}
