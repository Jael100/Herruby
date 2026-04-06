import Link from 'next/link';
import { C, FONTS } from '../../lib/tokens.js';

const AGENDA = [
  { time: '10:00', dur: ' 5 min', icon: '☕', title: 'Doors open & welcome',              desc: 'Coffee, connect, settle in.',                                                             cls: 'n' },
  { time: '10:05', dur: '30 min', icon: '🎙', title: 'Expert keynote',                    desc: 'Midlife hormonal health, energy & cognitive performance.',                                 cls: 'n' },
  { time: '10:35', dur: '30 min', icon: '🎵', title: 'Zumba wellness class',              desc: 'Move your body — because joy is the best medicine.',                                       cls: 'n' },
  { time: '11:05', dur: '30 min', icon: '🔬', title: "What's happening to my body?",      desc: 'Understanding perimenopause, menopause & what your symptoms are really telling you.',      cls: 'b' },
  { time: '11:35', dur: '30 min', icon: '💰', title: 'Wealth conversation',               desc: 'Money Circles, retirement readiness & financial coaching for midlife women.',              cls: 'w' },
  { time: '12:05', dur: '20 min', icon: '📱', title: "Platform preview & let's co-create", desc: 'See the Her Ruby app live — then shape what we build next. Your questions matter.',       cls: 'n' },
  { time: '12:25', dur: '25 min', icon: '❋',  title: 'Network over canapés',              desc: 'How Her Ruby Circle works — meet your community over drinks and bites.',                   cls: 'n' },
  { time: '12:50', dur: '10 min', icon: '🎁', title: 'Goodie bag & close',                desc: 'Pick up your goodie bag and 30-day pilot access code.',                                    cls: 'n' },
];

const BADGES = [
  'Navigating midlife', 'Feeling burnt out', 'Planning retirement',
  'An empty nester', 'Curious about my body', 'Ready to invest in me',
];

const hi = {
  b: { bg: 'rgba(92,107,192,0.16)', border: '1px solid rgba(92,107,192,0.32)', time: '#A0AEFF', title: '#C0CCFF' },
  w: { bg: 'rgba(184,134,42,0.15)', border: '1px solid rgba(184,134,42,0.30)', time: C.goldLight, title: C.goldLight },
  n: { bg: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', time: 'rgba(240,214,136,0.72)', title: 'white' },
};

export const metadata = {
  title: 'Her Ruby Pilot Day — Saturday June 20, 2026',
  description: 'Free 3-hour event for midlife women in Ontario. Expert keynote, Zumba, body education, Wealth conversation, platform preview & more. 10am–1pm.',
};

export default function FlyerPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#160808',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '0 0 56px',
      fontFamily: FONTS.sans,
    }}>

      {/* ── NAV BAR ── */}
      <nav style={{
        width: '100%',
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(22,8,8,0.97)', backdropFilter: 'blur(14px)',
        padding: '0 5%', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: FONTS.serif, fontSize: '1.4rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: C.ruby, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'white' }}>♦</div>
          Her Ruby
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Link href="/" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', fontFamily: FONTS.sans, textDecoration: 'none' }}>← Back to Home</Link>
          <a href={process.env.NEXT_PUBLIC_EVENTBRITE_URL || '#register'} style={{ background: 'white', color: C.rubyDeep, borderRadius: 22, padding: '8px 20px', fontSize: '0.88rem', fontWeight: 600, fontFamily: FONTS.sans, textDecoration: 'none' }}>
            Register Now →
          </a>
        </div>
      </nav>

      {/* ── EVENT CARD ── */}
      <div style={{
        width: '100%', maxWidth: 960,
        background: C.rubyDeep,
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 32px 100px rgba(0,0,0,0.65)',
        position: 'relative',
        marginTop: 32,
      }}>
        {/* Decorative rings */}
        {[480, 720].map(sz => (
          <div key={sz} style={{
            position: 'absolute', borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.06)',
            width: sz, height: sz,
            top: '40%', left: '28%',
            transform: 'translate(-50%,-50%)',
            pointerEvents: 'none',
          }} />
        ))}

        {/* ── HEADER BAND ── */}
        <div style={{
          background: 'rgba(0,0,0,0.25)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
          position: 'relative', zIndex: 2,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: 'rgba(255,255,255,0.14)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: FONTS.serif, fontSize: '1.1rem', color: 'white', fontWeight: 700,
            }}>♦</div>
            <span style={{ fontFamily: FONTS.serif, fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>Her Ruby</span>
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(240,214,136,0.15)',
            border: '1px solid rgba(240,214,136,0.3)',
            borderRadius: 100, padding: '5px 14px',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.goldLight }} />
            <span style={{ fontSize: '0.68rem', fontWeight: 600, color: C.goldLight, textTransform: 'uppercase', letterSpacing: '0.16em' }}>
              Free Pilot Event · Ontario, Canada
            </span>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          position: 'relative', zIndex: 2,
        }} className="flyer-main-grid">

          {/* LEFT — hero content */}
          <div style={{ padding: '48px 44px 44px 48px' }}>
            <h1 style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(2rem,4.5vw,3.2rem)',
              fontWeight: 700, lineHeight: 1.1,
              color: 'white', letterSpacing: '-0.01em',
              marginBottom: 12,
            }}>
              Reclaim your energy,<br />
              confidence &amp;{' '}
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)' }}>vitality.</em>
            </h1>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 400, marginBottom: 28 }}>
              A focused 3-hour morning for midlife women who are done putting themselves last. Move, learn, connect — and leave with real tools.
            </p>

            {/* Date / time / location */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 32 }}>
              {[
                { icon: '📅', text: 'Saturday, June 20, 2026' },
                { icon: '🕙', text: '10:00 AM – 1:00 PM  (3 hours)' },
                { icon: '📍', text: 'Ontario, Canada — exact location shared with registered participants' },
                { icon: '🎟', text: 'Free · Limited spots' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', flexShrink: 0,
                  }}>{icon}</div>
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.88)', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Feature highlights */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
              <div style={{ background: 'rgba(92,107,192,0.16)', border: '1px solid rgba(92,107,192,0.32)', borderRadius: 12, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center', flex: 1, minWidth: 160 }}>
                <span style={{ fontSize: '1.1rem' }}>🔬</span>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#C0CCFF', marginBottom: 2 }}>What's happening to my body?</div>
                  <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.44)' }}>Understand your symptoms</div>
                </div>
              </div>
              <div style={{ background: 'rgba(184,134,42,0.15)', border: '1px solid rgba(184,134,42,0.30)', borderRadius: 12, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center', flex: 1, minWidth: 160 }}>
                <span style={{ fontSize: '1.1rem' }}>💰</span>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: C.goldLight, marginBottom: 2 }}>Wealth conversation</div>
                  <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.44)' }}>Money Circles & retirement</div>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <a
              href={process.env.NEXT_PUBLIC_EVENTBRITE_URL || '#register'}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'white', color: C.rubyDeep,
                borderRadius: 12, padding: '13px 26px',
                fontSize: '0.92rem', fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(0,0,0,0.2)',
              }}
            >
              Reserve My Free Spot →
            </a>
          </div>

          {/* RIGHT — agenda */}
          <div style={{
            background: 'rgba(0,0,0,0.28)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
            padding: '48px 36px',
          }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
              What's on
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {AGENDA.map(item => {
                const s = hi[item.cls];
                return (
                  <div key={item.time} style={{
                    background: s.bg, border: s.border,
                    borderRadius: 10, padding: '10px 13px',
                    display: 'flex', gap: 10, alignItems: 'flex-start',
                  }}>
                    <span style={{ fontSize: '0.9rem', flexShrink: 0, width: 20, textAlign: 'center', marginTop: 2 }}>{item.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap', marginBottom: 2 }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 600, color: s.time, flexShrink: 0 }}>{item.time}</span>
                        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: s.title, lineHeight: 1.2 }}>{item.title}</span>
                        <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.26)', flexShrink: 0 }}>{item.dur}</span>
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Who it's for */}
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
                For you if you are…
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {BADGES.map(b => (
                  <span key={b} style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 20, padding: '4px 10px',
                    fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500,
                  }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER STRIP ── */}
        <div style={{
          background: `linear-gradient(90deg, #5A1215, ${C.rubyDeep}, #9E2226)`,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '14px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 10,
          position: 'relative', zIndex: 2,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ background: 'rgba(240,214,136,0.18)', border: '1px solid rgba(240,214,136,0.35)', borderRadius: 6, padding: '3px 9px', fontSize: '0.65rem', fontWeight: 700, color: C.goldLight, textTransform: 'uppercase' }}>FREE</div>
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>No cost to attend · Spaces are limited</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
            info@herruby.com · herruby.ca
          </span>
        </div>
      </div>

      {/* REGISTER BAR */}
      <a href={process.env.NEXT_PUBLIC_EVENTBRITE_URL || '#'} target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'white', color: C.rubyDeep, borderRadius: 14,
        padding: '18px 26px', marginTop: 20, width: '100%', maxWidth: 960,
        boxShadow: '0 12px 40px rgba(0,0,0,0.4)', flexWrap: 'wrap', gap: 10, textDecoration: 'none',
      }}>
        <div>
          <div style={{ fontSize: '0.96rem', fontWeight: 700, marginBottom: 3 }}>Reserve My Free Spot on Eventbrite</div>
          <div style={{ fontSize: '0.72rem', opacity: 0.52 }}>Saturday June 20 · 10:00 AM – 1:00 PM · Ontario, Canada</div>
        </div>
        <div style={{ background: C.rubyDeep, color: 'white', borderRadius: 10, padding: '11px 22px', fontSize: '0.88rem', fontWeight: 600, flexShrink: 0 }}>Register Free →</div>
      </a>

      <p style={{ marginTop: 16, fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
        Screenshot or print-to-PDF to share · © 2026 Her Ruby / Lael Ventures
      </p>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        a:hover{opacity:0.88}
        @media(max-width:720px){
          .flyer-main-grid{grid-template-columns:1fr!important}
          div[style*="borderLeft: 1px solid"]{border-left:none!important;border-top:1px solid rgba(255,255,255,0.08)!important}
          div[style*="padding: 48px 44px"]{padding:32px 24px!important}
          div[style*="padding: 48px 36px"]{padding:28px 24px!important}
          div[style*="padding: 14px 48px"]{padding:12px 24px!important}
          div[style*="padding: 36px 48px"]{padding:24px 20px!important}
        }
      `}</style>
    </div>
  );
}
