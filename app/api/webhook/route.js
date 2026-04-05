import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event;
  try {
    // If webhook secret is set, verify the signature
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

    console.log('=== GIFT PAYMENT CONFIRMED ===');
    console.log('Recipient:', recipient_email);
    console.log('Credits:', credits);
    console.log('Pack:', pack_id);
    console.log('Amount:', session.amount_total / 100, session.currency?.toUpperCase());
    console.log('Buyer email:', session.customer_details?.email);
    console.log('Gift message:', gift_message || '(none)');
    console.log('Session ID:', session.id);
    console.log('==============================');

    // TODO: When database is ready, save the gift record here
    // TODO: When email service is ready (e.g. Resend, SendGrid), send gift email to recipient
  }

  return NextResponse.json({ received: true });
}
