'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { C, FONTS } from '../../lib/ui.js';

const PACK_LABELS = { p1: 'Starter', p2: 'Monthly', p3: 'Quarterly' };

export default function GiftSuccessPage() {
  const params = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionId = params.get('session_id');
    if (!sessionId) { setLoading(false); return; }
    fetch(`/api/checkout/session?session_id=${sessionId}`)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [params]);

  return (
    <div style={{
      minHeight: '100vh',
      background: C.cream,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
    }}>
      <div style={{
        background: 'white',
        borderRadius: 28,
        padding: '60px 48px',
        maxWidth: 520,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 16px 60px rgba(0,0,0,0.08)',
      }}>
        {loading ? (
          <p style={{ fontFamily: FONTS.sans, color: C.muted }}>Loading payment details...</p>
        ) : (
          <>
            <div style={{ fontSize: '4rem', marginBottom: 20 }}>🎁</div>
            <h1 style={{
              fontFamily: FONTS.serif,
              fontSize: '2.2rem',
              fontWeight: 700,
              color: C.slate,
              marginBottom: 14,
            }}>
              Gift sent successfully!
            </h1>

            {data?.status === 'paid' && (
              <div style={{
                background: C.blush || '#FFF5F5',
                borderRadius: 16,
                padding: '20px 24px',
                marginBottom: 24,
                textAlign: 'left',
              }}>
                <div style={{ fontFamily: FONTS.sans, fontSize: '0.85rem', color: C.muted, marginBottom: 10 }}>
                  <strong style={{ color: C.slate }}>Pack:</strong> {PACK_LABELS[data.packId] || data.packId} — {data.credits} credits
                </div>
                <div style={{ fontFamily: FONTS.sans, fontSize: '0.85rem', color: C.muted, marginBottom: 10 }}>
                  <strong style={{ color: C.slate }}>Amount:</strong> ${(data.amountTotal / 100).toFixed(2)} {data.currency?.toUpperCase()}
                </div>
                <div style={{ fontFamily: FONTS.sans, fontSize: '0.85rem', color: C.muted, marginBottom: data.giftMessage ? 10 : 0 }}>
                  <strong style={{ color: C.slate }}>Recipient:</strong> {data.recipientEmail}
                </div>
                {data.giftMessage && (
                  <div style={{ fontFamily: FONTS.sans, fontSize: '0.85rem', color: C.muted }}>
                    <strong style={{ color: C.slate }}>Your message:</strong> "{data.giftMessage}"
                  </div>
                )}
              </div>
            )}

            <p style={{
              fontFamily: FONTS.sans,
              fontSize: '1rem',
              color: C.muted,
              lineHeight: 1.8,
              marginBottom: 12,
            }}>
              {data?.recipientEmail
                ? `A gift email will be sent to ${data.recipientEmail} with their wellness credits and a personalised redemption code.`
                : 'The recipient will receive a gift email with their wellness credits and a personalised redemption code.'
              }
            </p>
            <p style={{
              fontFamily: FONTS.sans,
              fontSize: '0.9rem',
              color: C.muted,
              lineHeight: 1.7,
              marginBottom: 36,
            }}>
              She can redeem them in the Her Ruby app — on her own terms, at her own pace.
            </p>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                background: C.ruby,
                color: 'white',
                borderRadius: 14,
                padding: '14px 32px',
                fontFamily: FONTS.sans,
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              Back to Home
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
