import { C, FONTS } from '../../lib/tokens.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

const PILLARS = [
  {
    icon: '◉', color: C.ruby, title: 'Personalized Intelligence', tag: 'My Body',
    desc: 'Daily check-ins and symptom tracking across 6 key metrics — energy, clarity, stress, sleep, hot flashes, mood. AI-driven insights explain what\'s happening hormonally and what to do about it.',
    sub: { icon: '🔒', label: 'Safe & Verified', note: 'PIPEDA-compliant · Canadian data residency · End-to-end encrypted. Your data is yours — always.' },
  },
  {
    icon: '◈', color: C.gold, title: 'Guided Programmes', tag: 'Programmes',
    desc: 'Curated experiential sessions with licensed professionals — from Reclaim Strength & Balance to Brain & Body Vitality. In-person, digital, and lunchtime formats designed for midlife women.',
    sub: { icon: '◆', label: 'Wellness Wallet', note: 'Fund sessions via employer credits, self top-up, or a gift. 1 credit = $20 of value. Never worry about access.' },
  },
  {
    icon: '❋', color: C.sage, title: 'Ruby Circle', tag: 'Community',
    desc: 'Women-only community spaces organised by interest, pain points, and passion. Mandatory identity verification keeps every member safe and the space genuinely trusted.',
    sub: null,
  },
  {
    icon: '♦', color: C.teal, title: 'Knowledge Hub', tag: 'Hub',
    desc: 'Live expert sessions and on-demand content across health, career, nutrition, mental wellness, and financial planning — all relevant to midlife women.',
    sub: null,
  }
];

export default function Solution() {
  return (
    <section id="solution" style={{ background: C.cream, padding: '120px 0' }}>
      <div className="container">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: 72 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.ruby, display: 'block', marginBottom: 16, fontFamily: FONTS.sans }}>Our Solution</span>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 700, lineHeight: 1.2, color: C.slate, maxWidth: 680, margin: '0 auto 16px' }}>
            Four pillars. One platform. Built for her.
          </h2>
          <p style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.8, maxWidth: 520, margin: '0 auto', fontFamily: FONTS.sans }}>
            Not a diet app. Not generic wellness. A complete ecosystem — health, community, programmes, and knowledge — designed specifically for midlife women.
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }} className="pillars-grid">
          {PILLARS.map((p, i) => (
            <ScrollReveal key={p.title} delay={(i % 2) * 0.12}>
              <div style={{ background: 'white', borderRadius: 28, padding: '44px 40px', borderTop: `4px solid ${p.color}`, boxShadow: '0 4px 28px rgba(0,0,0,0.05)', height: '100%' }}>
                <div style={{ fontSize: '2.6rem', marginBottom: 18 }}>{p.icon}</div>
                <h3 style={{ fontFamily: FONTS.serif, fontSize: '1.8rem', fontWeight: 700, color: C.slate, marginBottom: 12, lineHeight: 1.15 }}>{p.title}</h3>
                <p style={{ fontSize: '0.92rem', color: C.muted, lineHeight: 1.8, marginBottom: 20, fontFamily: FONTS.sans }}>{p.desc}</p>
                <span style={{ display: 'inline-block', background: p.color, color: 'white', borderRadius: 20, padding: '5px 14px', fontFamily: FONTS.sans, fontSize: '0.75rem', fontWeight: 600 }}>{p.tag}</span>
                {p.sub && (
                  <div style={{ marginTop: 24, background: p.color + '0D', border: `1px solid ${p.color}25`, borderRadius: 16, padding: '16px 18px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: 1 }}>{p.sub.icon}</span>
                    <div>
                      <div style={{ fontFamily: FONTS.sans, fontSize: '0.78rem', fontWeight: 700, color: p.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{p.sub.label}</div>
                      <div style={{ fontFamily: FONTS.sans, fontSize: '0.83rem', color: C.muted, lineHeight: 1.6 }}>{p.sub.note}</div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
      <style>{`
        @media(max-width:700px){ .pillars-grid{ grid-template-columns:1fr!important; } }
      `}</style>
    </section>
  );
}
