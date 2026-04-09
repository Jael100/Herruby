import Stripe from 'stripe';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

function generateGiftCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'RUBY-';
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
    if (i === 3) code += '-';
  }
  return code;
}

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

    // Generate gift code and save to Supabase
    const giftCode = generateGiftCode();
    console.log('Gift code:', giftCode);

    try {
      const { error: dbError } = await supabase.from('gift_codes').insert({
        code: giftCode,
        credits: parseInt(credits),
        pack_id,
        sender_email: buyerEmail || null,
        recipient_email,
        gift_message: gift_message || null,
        stripe_session_id: session.id,
      });
      if (dbError) console.error('Failed to save gift code to DB:', dbError);
      else console.log('Gift code saved to Supabase');
    } catch (dbErr) {
      console.error('Supabase error:', dbErr);
    }

    console.log('==============================');

    // Send gift email to recipient with redemption code
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
            <div style="background: #F8F6F3; border-radius: 16px; padding: 24px; margin: 24px 0; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 0.85rem; color: #6B6B7B;">Your redemption code:</p>
              <p style="margin: 0; font-size: 1.6rem; font-weight: 700; color: #B8292F; letter-spacing: 0.1em;">${giftCode}</p>
            </div>
            <p style="font-size: 0.9rem; color: #6B6B7B; line-height: 1.8; text-align: center;">
              Open the Her Ruby app, go to your <strong>Wallet</strong>, tap <strong>Redeem</strong>, and enter this code to claim your credits.
            </p>
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
        subject: `Gift Purchase — ${credits} credits ($${amount})`,
        html: `
          <h2>Gift Purchase Confirmed</h2>
          <p><strong>Pack:</strong> ${pack_id} — ${credits} credits</p>
          <p><strong>Amount:</strong> ${currency} $${amount}</p>
          <p><strong>Buyer:</strong> ${buyerEmail || '(unknown)'}</p>
          <p><strong>Recipient:</strong> ${recipient_email}</p>
          <p><strong>Gift Code:</strong> ${giftCode}</p>
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
