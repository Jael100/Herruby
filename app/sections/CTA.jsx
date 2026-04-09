'use client';
import { useState } from 'react';
import { C, FONTS } from '../../lib/ui.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again.');
    }
    setLoading(false);
  }

  return (
    <section id="join" style={{
      background: `linear-gradient(150deg, ${C.rubyDeep} 0%, ${C.ruby} 60%, #C83338 100%)`,
      padding: '120px 5%', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {[350, 600].map(sz => (
        <div key={sz} style={{
          position: 'absolute', width: sz, height: sz, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.08)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
        }}/>
      ))}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 640, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ fontSize: '4rem', marginBottom: 24 }}>♦</div>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2.2rem,5vw,4.5rem)', fontWeight: 700, lineHeight: 1.15, color: 'white', marginBottom: 20, letterSpacing: '-0.02em' }}>
            Your Ruby is waiting for you.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, marginBottom: 48, fontFamily: FONTS.sans }}>
            Join Canadian women who are reclaiming their energy, confidence and performance through midlife.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" required
                style={{
                  flex: 1, minWidth: 260, maxWidth: 360,
                  padding: '16px 22px', border: 'none', borderRadius: 14,
                  fontFamily: FONTS.sans, fontSize: '1rem', outline: 'none',
                  color: C.slate, background: 'rgba(255,255,255,0.95)',
                }}
              />
              <button type="submit" disabled={loading} style={{
                background: 'white', color: C.rubyDeep, borderRadius: 14,
                padding: '16px 36px', border: 'none', cursor: 'pointer',
                fontFamily: FONTS.sans, fontSize: '1rem', fontWeight: 600,
                opacity: loading ? 0.7 : 1, transition: 'all 0.2s',
              }}>
                {loading ? 'Adding you…' : 'Join the Waitlist ✦'}
              </button>
            </form>
          ) : (
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', marginTop: 16, fontFamily: FONTS.sans }}>
              ✦ You're on the list! We'll be in touch soon.
            </div>
          )}

          <p style={{ marginTop: 20, fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontFamily: FONTS.sans }}>
            🇨🇦 Built in Canada · PIPEDA Compliant · Your data is yours
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
