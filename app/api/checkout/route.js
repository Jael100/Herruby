import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PACKS = {
  p1: { credits: 5,  price: 10000, label: 'Starter — 5 credits' },
  p2: { credits: 10, price: 18000, label: 'Monthly — 10 credits' },
  p3: { credits: 20, price: 32000, label: 'Quarterly — 20 credits' },
};

export async function POST(req) {
  try {
    const { packId, recipientEmail, message } = await req.json();
    const pack = PACKS[packId];
    if (!pack) {
      return NextResponse.json({ error: 'Invalid pack' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: `Her Ruby Gift — ${pack.label}`,
              description: `Wellness credits gift for ${recipientEmail}`,
            },
            unit_amount: pack.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      metadata: {
        pack_id: packId,
        credits: String(pack.credits),
        recipient_email: recipientEmail,
        gift_message: message || '',
      },
      success_url: `${req.nextUrl.origin}/gift-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/#gift`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
