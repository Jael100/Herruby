import { C, FONTS } from '../../lib/tokens.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

const STEPS = [
  { n: 1, title: 'Create your account', desc: 'Sign up with email, Google, or Apple ID in under 60 seconds. Free to join — no credit card required.' },
  { n: 2, title: 'Personalise your experience', desc: 'A 5-question onboarding sets your goals, symptoms and life stage — so every recommendation is built for you.' },
  { n: 3, title: 'Verify your identity', desc: 'A 2-minute ID check unlocks Circles and paid programmes. Done once. Keeps every member safe.' },
  { n: 4, title: 'Start your journey', desc: 'Book a session, join a Circle, log your energy, or explore the Knowledge Hub. Your Ruby is waiting.' },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: C.cream, padding: '120px 0' }}>
      <div className="container">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: 72 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.ruby, display: 'block', marginBottom: 16, fontFamily: FONTS.sans }}>
            How It Works
          </span>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 700, lineHeight: 1.2, color: C.slate, maxWidth: 560, margin: '0 auto' }}>
            From first sign-up to first transformation.
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, position: 'relative' }} className="steps-grid">
          {/* Connector line */}
          <div style={{
            position: 'absolute', top: 36, left: '10%', right: '10%',
            height: 2, background: `linear-gradient(90deg, ${C.ruby}, ${C.gold}, ${C.ruby})`,
            opacity: 0.2, pointerEvents: 'none',
          }} className="connector"/>

          {STEPS.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 0.1} style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: `linear-gradient(135deg, ${C.rubyDeep}, ${C.ruby})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px', position: 'relative', zIndex: 1,
                boxShadow: '0 8px 24px rgba(184,41,47,0.3)',
              }}>
                <span style={{ fontFamily: FONTS.serif, fontSize: '1.6rem', fontWeight: 700, color: 'white' }}>{s.n}</span>
              </div>
              <h3 style={{ fontFamily: FONTS.serif, fontSize: '1.2rem', fontWeight: 700, color: C.slate, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: '0.88rem', color: C.muted, lineHeight: 1.7, fontFamily: FONTS.sans }}>{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .steps-grid{ grid-template-columns:1fr 1fr!important; } .connector{ display:none; } }
        @media(max-width:580px){ .steps-grid{ grid-template-columns:1fr!important; } }
      `}</style>
    </section>
  );
}
