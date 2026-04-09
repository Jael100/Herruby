import Stripe from 'stripe';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event;
  try {
    if (process.env.STRIPE_WEBHOOK_SECRET) {
      event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } else {
      event = JSON.parse(body);
    }
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const { recipient_email, credits, pack_id, gift_message } = session.metadata;
    const buyerEmail = session.customer_details?.email;
    const amount = (session.amount_total / 100).toFixed(2);
    const currency = session.currency?.toUpperCase() || 'CAD';

    console.log('=== GIFT PAYMENT CONFIRMED ===');
    console.log('Recipient:', recipient_email);
    console.log('Credits:', credits);
    console.log('Pack:', pack_id);
    console.log('Amount:', amount, currency);
    console.log('Buyer email:', buyerEmail);
    console.log('Gift message:', gift_message || '(none)');
    console.log('==============================');

    // Send gift email to recipient
    try {
      const giftResult = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: recipient_email,
        subject: 'Someone sent you a Her Ruby wellness gift!',
        html: `
          <div style="font-family: 'Georgia', serif; max-width: 520px; margin: 0 auto; padding: 40px 24px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <div style="width: 48px; height: 48px; border-radius: 12px; background: #B8292F; display: inline-flex; align-items: center; justify-content: center; font-size: 1.4rem; color: white; font-weight: 700;">♦</div>
            </div>
            <h1 style="font-size: 1.6rem; color: #2A2A35; text-align: center; margin-bottom: 16px;">You've received a wellness gift! 🎁</h1>
            <p style="font-size: 0.95rem; color: #6B6B7B; line-height: 1.8; text-align: center;">
              Someone special has gifted you <strong>${credits} Her Ruby wellness credits</strong> (${currency} $${amount}).
            </p>
            ${gift_message ? `
              <div style="background: #FFF8F8; border-radius: 16px; padding: 24px; margin: 24px 0; text-align: center;">
                <p style="margin: 0; font-style: italic; color: #2A2A35; line-height: 1.7;">"${gift_message}"</p>
              </div>
            ` : ''}
            <p style="font-size: 0.9rem; color: #6B6B7B; line-height: 1.8; text-align: center;">
              Use your credits to book programmes, join communities, or access expert knowledge — all on your own terms.
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://herruby.com" style="background: #B8292F; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 0.95rem;">Redeem Your Credits →</a>
            </div>
            <p style="font-size: 0.85rem; color: #9B9BAB; text-align: center; margin-top: 32px;">
              With love,<br/>The Her Ruby Team<br/>🇨🇦 Ontario, Canada
            </p>
          </div>
        `,
      });
      console.log('Gift email result:', JSON.stringify(giftResult));
    } catch (emailErr) {
      console.error('Failed to send gift email:', emailErr);
    }

    // Notify the team
    try {
      const teamResult = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'abhi.simpletranslate@gmail.com',
        subject: `✦ Gift Purchase — ${credits} credits ($${amount})`,
        html: `
          <h2>Gift Purchase Confirmed</h2>
          <p><strong>Pack:</strong> ${pack_id} — ${credits} credits</p>
          <p><strong>Amount:</strong> ${currency} $${amount}</p>
          <p><strong>Buyer:</strong> ${buyerEmail || '(unknown)'}</p>
          <p><strong>Recipient:</strong> ${recipient_email}</p>
          <p><strong>Message:</strong> ${gift_message || '(none)'}</p>
          <p><strong>Stripe Session:</strong> ${session.id}</p>
        `,
      });
      console.log('Team email result:', JSON.stringify(teamResult));
    } catch (emailErr) {
      console.error('Failed to send team notification:', emailErr);
    }
  }

  return NextResponse.json({ received: true });
}
