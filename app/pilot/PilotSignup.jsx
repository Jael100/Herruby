'use client';
import { useState } from 'react';
import { C, FONTS } from '../../lib/ui.js';

export default function PilotSignup() {
  const [form, setForm] = useState({ name: '', email: '', employer: '', note: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const up = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    // Wire to POST /api/pilot-signup or Formspree in production
    await new Promise(r => setTimeout(r, 900));
    setSent(true);
    setLoading(false);
  }

  const inp = (type, placeholder, key) => (
    <input
      type={type} required={key !== 'employer' && key !== 'note'}
      placeholder={placeholder} value={form[key]} onChange={up(key)}
      style={{
        width: '100%', padding: '13px 16px', marginBottom: 12,
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 12, fontFamily: FONTS.sans, fontSize: '0.9rem',
        color: 'white', outline: 'none',
      }}
    />
  );

  return (
    <div style={{
      background: 'rgba(255,255,255,0.07)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 26, padding: '36px 32px',
    }}>
      {!sent ? (
        <>
          <div style={{ fontFamily: FONTS.serif, fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: 6 }}>
            Or register directly here
          </div>
          <p style={{ fontFamily: FONTS.sans, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: 22 }}>
            Prefer not to use Eventbrite? Leave your details and we'll confirm your spot by email.
          </p>
          <form onSubmit={submit}>
            {inp('text', 'Your full name', 'name')}
            {inp('email', 'Email address', 'email')}
            <input
              type="text" placeholder="Employer / company (optional)" value={form.employer} onChange={up('employer')}
              style={{ width: '100%', padding: '13px 16px', marginBottom: 12, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, fontFamily: FONTS.sans, fontSize: '0.9rem', color: 'white', outline: 'none' }}
            />
            <textarea
              placeholder="Anything you'd like us to know in advance (optional)"
              value={form.note} onChange={up('note')}
              style={{ width: '100%', padding: '13px 16px', marginBottom: 16, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, fontFamily: FONTS.sans, fontSize: '0.9rem', color: 'white', outline: 'none', minHeight: 80, resize: 'vertical' }}
            />
            <button type="submit" disabled={loading} style={{
              width: '100%', background: 'white', color: C.rubyDeep,
              border: 'none', borderRadius: 12, padding: '14px',
              fontFamily: FONTS.sans, fontSize: '0.95rem', fontWeight: 600,
              cursor: 'pointer', opacity: loading ? 0.7 : 1, transition: 'all 0.2s',
            }}>
              {loading ? 'Registering…' : 'Reserve My Spot ✦'}
            </button>
            <p style={{ fontFamily: FONTS.sans, fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: 12, textAlign: 'center' }}>
              We'll confirm your spot within 24 hours. No payment required.
            </p>
          </form>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>✦</div>
          <div style={{ fontFamily: FONTS.serif, fontSize: '1.8rem', fontWeight: 700, color: 'white', marginBottom: 12 }}>
            You're registered!
          </div>
          <p style={{ fontFamily: FONTS.sans, fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
            Thank you, {form.name.split(' ')[0]}! We'll send a confirmation to <strong style={{ color: 'white' }}>{form.email}</strong> within 24 hours with venue details and everything you need for June 20.
          </p>
          <p style={{ fontFamily: FONTS.sans, fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginTop: 16 }}>
            We can't wait to meet you. ♦
          </p>
        </div>
      )}
    </div>
  );
}
