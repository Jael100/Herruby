import Link from 'next/link';
import { C, FONTS } from '../../lib/tokens.js';

const AGENDA = [
  { time: '10:00', title: 'Doors open & welcome',      desc: 'Coffee, connect with the Her Ruby team and fellow attendees.' },
  { time: '10:20', title: 'Expert keynote',            desc: 'Live talk on midlife hormonal health, energy & cognitive performance.' },
  { time: '11:00', title: 'Platform preview',          desc: 'Hands-on first look at the Her Ruby app — My Body, Programmes, Wallet.' },
  { time: '11:30', title: 'Wealth & Financial Wellness', desc: 'First look at our Wealth pillar — Money Circles, retirement readiness, and financial coaching designed for midlife women.', highlight: true },
  { time: '12:00', title: 'Ruby Circle intro',         desc: 'Join a live Circle session and meet women navigating the same stage.' },
  { time: '12:30', title: 'Q&A + refreshments',        desc: 'Ask anything. Mingle. Leave with your 30-day pilot access code.' },
  { time: '1:00',  title: 'Close',                     desc: 'Take home pilot credits and an invite to our private post-event Circle.' },
];

const BADGES = [
  'Navigating midlife', 'Feeling burnt out', 'Planning retirement',
  'An empty nester', 'Curious about your money', 'Ready to invest in you',
];

export const metadata = {
  title: 'Her Ruby Pilot Day — Saturday June 20, 2026',
  description: 'Free event for midlife women in Ontario. Platform preview, expert keynote, Wealth pillar first look, and Ruby Circle. 10am–1pm.',
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
              Free Pilot Event · Ontario
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
              A morning for midlife women who are done putting themselves last. First look at Her Ruby — including the brand-new Wealth pillar.
            </p>

            {/* Date / time / location */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 32 }}>
              {[
                { icon: '📅', text: 'Saturday, June 20, 2026' },
                { icon: '🕙', text: '10:00 AM – 1:00 PM' },
                { icon: '📍', text: 'Ontario, Canada — venue in confirmation email' },
                { icon: '🎟', text: 'Free · Limited to 60 women' },
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

            {/* Wealth spotlight badge */}
            <div style={{
              background: 'rgba(92,107,192,0.18)',
              border: '1px solid rgba(92,107,192,0.4)',
              borderRadius: 14, padding: '14px 18px',
              marginBottom: 28,
              display: 'flex', gap: 12, alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: 2 }}>💰</span>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#A0AEFF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                  New at this pilot
                </div>
                <div style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'white' }}>Wealth & Financial Wellness</strong> — first look at Money Circles, retirement readiness tools, and financial coaching designed for midlife women.
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
              Register Free on Eventbrite →
            </a>
          </div>

          {/* RIGHT — agenda */}
          <div style={{
            background: 'rgba(0,0,0,0.28)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
            padding: '48px 36px',
          }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
              Agenda
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {AGENDA.map(item => (
                <div key={item.time} style={{
                  background: item.highlight
                    ? 'rgba(92,107,192,0.18)'
                    : 'rgba(255,255,255,0.05)',
                  border: item.highlight
                    ? '1px solid rgba(92,107,192,0.35)'
                    : '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 12, padding: '12px 14px',
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: item.highlight ? '#A0AEFF' : C.goldLight, minWidth: 36, paddingTop: 2, flexShrink: 0 }}>
                    {item.time}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.83rem', fontWeight: 600, color: item.highlight ? '#C0CCFF' : 'white', marginBottom: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                      {item.title}
                      {item.highlight && (
                        <span style={{ background: 'rgba(92,107,192,0.5)', color: '#C0CCFF', fontSize: '0.58rem', fontWeight: 700, padding: '1px 6px', borderRadius: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>New</span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Who it's for */}
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
                This is for you if you are…
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

      {/* REGISTER SECTION */}
      <div id="register" style={{ width: '100%', maxWidth: 960, marginTop: 32, padding: '0 16px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 20, padding: '36px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <div style={{ fontFamily: FONTS.serif, fontSize: '1.6rem', fontWeight: 700, color: 'white', marginBottom: 6 }}>
              Ready to claim your spot?
            </div>
            <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 480 }}>
              60-second registration on Eventbrite. You'll receive a confirmation email with the venue address and everything you need for June 20.
            </p>
          </div>
          <a
            href={process.env.NEXT_PUBLIC_EVENTBRITE_URL || '#'}
            target="_blank" rel="noopener noreferrer"
            style={{
              background: 'white', color: C.rubyDeep, borderRadius: 12,
              padding: '13px 28px', fontSize: '0.92rem', fontWeight: 600,
              textDecoration: 'none', flexShrink: 0,
            }}
          >
            Register on Eventbrite →
          </a>
        </div>
      </div>

      <p style={{ marginTop: 20, fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
        © 2026 Her Ruby / Lael Ventures
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
