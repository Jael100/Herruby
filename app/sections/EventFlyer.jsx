'use client';
import { C, FONTS } from '../../lib/tokens.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

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

export default function EventFlyer() {
  const eb = process.env.NEXT_PUBLIC_EVENTBRITE_URL || '#';
  return (
    <section id="event" style={{ background: '#160808', padding: '100px 5% 80px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        {/* Section header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.goldLight, display: 'block', marginBottom: 16, fontFamily: FONTS.sans }}>
              Upcoming Event
            </span>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, lineHeight: 1.2, color: 'white', maxWidth: 640, margin: '0 auto 16px' }}>
              Her Ruby Pilot Day
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto', fontFamily: FONTS.sans }}>
              A free 3-hour morning for midlife women. Move, learn, connect — and leave with real tools.
            </p>
          </div>
        </ScrollReveal>

        {/* Event card */}
        <ScrollReveal delay={0.15}>
          <div style={{
            background: C.rubyDeep,
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 32px 100px rgba(0,0,0,0.65)',
            position: 'relative',
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

            {/* Header band */}
            <div style={{
              background: 'rgba(0,0,0,0.25)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              padding: '18px 40px',
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

            {/* Main grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 380px',
              position: 'relative', zIndex: 2,
            }} className="flyer-grid">

              {/* Left — hero content */}
              <div style={{ padding: '44px 44px 40px 48px' }}>
                <h3 style={{
                  fontFamily: FONTS.serif,
                  fontSize: 'clamp(1.8rem,3.5vw,2.6rem)',
                  fontWeight: 700, lineHeight: 1.1,
                  color: 'white', letterSpacing: '-0.01em',
                  marginBottom: 12,
                }}>
                  Reclaim your energy,<br />
                  confidence &amp;{' '}
                  <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)' }}>vitality.</em>
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 400, marginBottom: 24, fontFamily: FONTS.sans }}>
                  A focused 3-hour morning for midlife women who are done putting themselves last. Move, learn, connect — and leave with real tools.
                </p>

                {/* Date / time / location */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 28 }}>
                  {[
                    { icon: '📅', text: 'Saturday, June 20, 2026' },
                    { icon: '🕙', text: '10:00 AM – 1:00 PM  (3 hours)' },
                    { icon: '📍', text: 'Ontario, Canada — exact location shared after registration' },
                    { icon: '🎟', text: 'Free · Limited spots' },
                  ].map(({ icon, text }) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: 'rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.85rem', flexShrink: 0,
                      }}>{icon}</div>
                      <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.88)', fontWeight: 500, fontFamily: FONTS.sans }}>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Feature highlights */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
                  <div style={{ background: 'rgba(92,107,192,0.16)', border: '1px solid rgba(92,107,192,0.32)', borderRadius: 12, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center', flex: 1, minWidth: 160 }}>
                    <span style={{ fontSize: '1.1rem' }}>🔬</span>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#C0CCFF', marginBottom: 2, fontFamily: FONTS.sans }}>What's happening to my body?</div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.44)', fontFamily: FONTS.sans }}>Understand your symptoms</div>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(184,134,42,0.15)', border: '1px solid rgba(184,134,42,0.30)', borderRadius: 12, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center', flex: 1, minWidth: 160 }}>
                    <span style={{ fontSize: '1.1rem' }}>💰</span>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: C.goldLight, marginBottom: 2, fontFamily: FONTS.sans }}>Wealth conversation</div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.44)', fontFamily: FONTS.sans }}>Money Circles & retirement</div>
                    </div>
                  </div>
                </div>

                {/* CTA button */}
                <a
                  href={eb} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    background: 'white', color: C.rubyDeep,
                    borderRadius: 12, padding: '14px 28px',
                    fontSize: '0.95rem', fontWeight: 600, fontFamily: FONTS.sans,
                    textDecoration: 'none',
                    boxShadow: '0 8px 28px rgba(0,0,0,0.2)',
                  }}
                >
                  Reserve My Free Spot →
                </a>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: 10, fontFamily: FONTS.sans }}>60 seconds on Eventbrite · No payment required</p>
              </div>

              {/* Right — agenda */}
              <div style={{
                background: 'rgba(0,0,0,0.28)',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
                padding: '44px 32px',
              }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14, fontFamily: FONTS.sans }}>
                  What's on
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {AGENDA.map(item => {
                    const s = hi[item.cls];
                    return (
                      <div key={item.time} style={{
                        background: s.bg, border: s.border,
                        borderRadius: 10, padding: '10px 13px',
                        display: 'flex', gap: 10, alignItems: 'flex-start',
                      }}>
                        <span style={{ fontSize: '0.88rem', flexShrink: 0, width: 20, textAlign: 'center', marginTop: 2 }}>{item.icon}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap', marginBottom: 2 }}>
                            <span style={{ fontSize: '0.66rem', fontWeight: 600, color: s.time, flexShrink: 0, fontFamily: FONTS.sans }}>{item.time}</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: s.title, lineHeight: 1.2, fontFamily: FONTS.sans }}>{item.title}</span>
                            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.26)', flexShrink: 0, fontFamily: FONTS.sans }}>{item.dur}</span>
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.5, fontFamily: FONTS.sans }}>{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Who it's for */}
                <div style={{ marginTop: 18 }}>
                  <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 10, fontFamily: FONTS.sans }}>
                    For you if you are…
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {BADGES.map(b => (
                      <span key={b} style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: 20, padding: '4px 10px',
                        fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, fontFamily: FONTS.sans,
                      }}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer strip */}
            <div style={{
              background: `linear-gradient(90deg, #5A1215, ${C.rubyDeep}, #9E2226)`,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              padding: '14px 48px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 10,
              position: 'relative', zIndex: 2,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ background: 'rgba(240,214,136,0.18)', border: '1px solid rgba(240,214,136,0.35)', borderRadius: 6, padding: '3px 9px', fontSize: '0.65rem', fontWeight: 700, color: C.goldLight, textTransform: 'uppercase', fontFamily: FONTS.sans }}>FREE</div>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', fontFamily: FONTS.sans }}>No cost to attend · Spaces are limited</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontFamily: FONTS.sans }}>
                info@herruby.com · herruby.ca
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Register bar */}
        <ScrollReveal delay={0.25}>
          <a href={eb} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'white', color: C.rubyDeep, borderRadius: 14,
            padding: '18px 26px', marginTop: 20, width: '100%',
            boxShadow: '0 12px 40px rgba(0,0,0,0.4)', flexWrap: 'wrap', gap: 10, textDecoration: 'none',
          }}>
            <div>
              <div style={{ fontSize: '0.96rem', fontWeight: 700, marginBottom: 3, fontFamily: FONTS.sans }}>Reserve My Free Spot on Eventbrite</div>
              <div style={{ fontSize: '0.72rem', opacity: 0.52, fontFamily: FONTS.sans }}>Saturday June 20 · 10:00 AM – 1:00 PM · Ontario, Canada</div>
            </div>
            <div style={{ background: C.rubyDeep, color: 'white', borderRadius: 10, padding: '11px 22px', fontSize: '0.88rem', fontWeight: 600, flexShrink: 0, fontFamily: FONTS.sans }}>Register Free →</div>
          </a>
        </ScrollReveal>
      </div>

      <style>{`
        @media(max-width:720px){
          .flyer-grid{grid-template-columns:1fr!important}
          .flyer-grid>div:last-child{border-left:none!important;border-top:1px solid rgba(255,255,255,0.08)!important}
        }
      `}</style>
    </section>
  );
}
