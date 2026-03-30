'use client';
import { C, FONTS } from '../../lib/ui.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

const FEATURES = [
  { icon: '⚡', text: <><strong>Daily energy check-in</strong> with symptom sliders across 6 key metrics — energy, clarity, stress, sleep, hot flashes, mood</> },
  { icon: '📊', text: <><strong>Trend analysis</strong> with 3-week comparison charts and Ruby AI insights that contextualise what the data means for your body</> },
  { icon: '🔒', text: <><strong>KYC-gated Circles</strong> — women-only community spaces verified with a 2-minute identity check, protecting every member</> },
  { icon: '◆', text: <><strong>Wallet-first booking</strong> — redeem employer credits or self-funded balance directly at checkout for any session</> },
];

export default function AppPreview() {
  return (
    <section style={{
      background: `linear-gradient(160deg, ${C.rubyDeep} 0%, #9E2226 100%)`,
      padding: '120px 0', overflow: 'hidden', position: 'relative',
    }}>
      {/* dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }}/>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="preview-grid">

          {/* Text side */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <ScrollReveal>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.goldLight, display: 'block', marginBottom: 16, fontFamily: FONTS.sans }}>
                The App
              </span>
              <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, lineHeight: 1.2, color: 'white', marginBottom: 16 }}>
                Built with her in mind. Every detail.
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 36, fontFamily: FONTS.sans }}>
                The Her Ruby app brings together symptom intelligence, community, programmes, and wallet into one elegant mobile experience.
              </p>
            </ScrollReveal>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 44 }}>
              {FEATURES.map((f, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: 'rgba(255,255,255,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1rem', flexShrink: 0, marginTop: 1,
                    }}>{f.icon}</div>
                    <p style={{ fontFamily: FONTS.sans, fontSize: '0.92rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, margin: 0 }}>
                      {f.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Download CTA */}
            <ScrollReveal delay={0.3}>
              <div style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 20, padding: '24px 28px',
              }}>
                <p style={{ fontFamily: FONTS.sans, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: 16 }}>
                  Download the App
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {/* App Store */}
                  <a href="#join" style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: 'black', color: 'white', borderRadius: 12,
                    padding: '12px 20px', textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'transform 0.18s',
                  }}>
                    <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>🍎</span>
                    <div>
                      <div style={{ fontFamily: FONTS.sans, fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>Download on the</div>
                      <div style={{ fontFamily: FONTS.sans, fontSize: '0.95rem', fontWeight: 600 }}>App Store</div>
                    </div>
                  </a>
                  {/* Google Play */}
                  <a href="#join" style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: 'black', color: 'white', borderRadius: 12,
                    padding: '12px 20px', textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'transform 0.18s',
                  }}>
                    <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>▶</span>
                    <div>
                      <div style={{ fontFamily: FONTS.sans, fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>Get it on</div>
                      <div style={{ fontFamily: FONTS.sans, fontSize: '0.95rem', fontWeight: 600 }}>Google Play</div>
                    </div>
                  </a>
                </div>
                <p style={{ fontFamily: FONTS.sans, fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginTop: 14 }}>
                  Launching soon — join the waitlist to be first.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Phone mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            <ScrollReveal delay={0.2}>
              <div style={{
                width: 280,
                background: 'linear-gradient(160deg,#1a1a2e,#2a1515)',
                borderRadius: 44, padding: 14,
                boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
              }}>
                <div style={{ background: '#FDF9F6', borderRadius: 32, overflow: 'hidden', minHeight: 540 }}>
                  {/* Phone header */}
                  <div style={{ background: `linear-gradient(150deg,${C.rubyDeep},${C.ruby})`, padding: '20px 18px 16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(255,255,255,0.6)', fontFamily: FONTS.sans, marginBottom: 12 }}>
                      <span>9:41 AM</span><span>♦ Her Ruby</span><span>●●●●</span>
                    </div>
                    <div style={{ fontFamily: FONTS.serif, color: 'white', fontSize: 20, fontWeight: 700, marginBottom: 3 }}>Good morning, Sylvia ✦</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', fontFamily: FONTS.sans }}>Midlife Vitality · Women 40+</div>
                    <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                      {['Daily Check-In','My Trends','Actions'].map((t,i) => (
                        <div key={t} style={{ background: i===0?'white':'rgba(255,255,255,0.2)', borderRadius: 20, padding: '5px 10px', fontSize: 9, color: i===0?C.ruby:'white', fontFamily: FONTS.sans, fontWeight: i===0?600:400 }}>{t}</div>
                      ))}
                    </div>
                  </div>
                  {/* Phone body */}
                  <div style={{ padding: 14 }}>
                    <div style={{ background: 'white', borderRadius: 14, padding: 14, marginBottom: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                      <div style={{ fontSize: 9, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: FONTS.sans, marginBottom: 6 }}>Today's Work Energy</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontFamily: FONTS.serif, fontSize: 26, fontWeight: 700, color: C.ruby, lineHeight: 1 }}>7</div>
                        <div style={{ fontSize: 9, color: C.sage, fontFamily: FONTS.sans, fontWeight: 600 }}>↑ Improving</div>
                      </div>
                      <div style={{ height: 6, background: '#EEE4E4', borderRadius: 3, marginTop: 8 }}>
                        <div style={{ width: '70%', height: '100%', borderRadius: 3, background: `linear-gradient(90deg,${C.ruby},#D44)` }}/>
                      </div>
                    </div>
                    <div style={{ background: '#EEF5EE', borderRadius: 14, padding: 14, border: '1px solid rgba(94,140,97,0.2)' }}>
                      <div style={{ fontSize: 8, color: C.sage, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: FONTS.sans, fontWeight: 600, marginBottom: 5 }}>Ruby Understands This</div>
                      <div style={{ fontSize: 10, color: C.slate, lineHeight: 1.55, fontFamily: FONTS.sans }}>Brain fog at work is often hormonal. Movement breaks every 90 min clinically restore focus.</div>
                    </div>
                  </div>
                  {/* Bottom nav */}
                  <div style={{ display: 'flex', borderTop: '1px solid #EEE4E4', marginTop: 6 }}>
                    {[['◉','My Body'],['◈','Programs'],['❋','Circle'],['◆','Wallet'],['♦','Hub']].map(([ic,lb],i) => (
                      <div key={lb} style={{ flex: 1, textAlign: 'center', padding: '8px 2px' }}>
                        <div style={{ fontSize: 13, color: i===0?C.ruby:'#C0AAAA' }}>{ic}</div>
                        <div style={{ fontSize: 7, color: i===0?C.ruby:'#C0AAAA', fontFamily: FONTS.sans, fontWeight: i===0?600:400, marginTop: 1 }}>{lb}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .preview-grid{ grid-template-columns:1fr!important; gap:48px!important; } }
      `}</style>
    </section>
  );
}
