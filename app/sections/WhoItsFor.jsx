import { C, FONTS } from '../../lib/tokens.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

const PERSONAS = [
  {
    emoji: '👩‍💼',
    name: 'Margaret, 52',
    role: 'Senior Director · Working full-time',
    quote: '"I\'m running on empty by 2pm. The brain fog started last year and my team has noticed. I need support that understands what\'s happening to my body at work."',
  },
  {
    emoji: '🌿',
    name: 'Diane, 59',
    role: 'Empty nester · Career transition',
    quote: '"My kids have left and my social circle has shrunk. I want experiences that restore my joy and a community of women who actually understand this stage of life."',
  },
  {
    emoji: '✦',
    name: 'Carol, 64',
    role: 'Post-menopause · Recently retired',
    quote: '"I want to stay independent, strong, and connected. I\'m done being told to \'just accept it.\' I want real information and real support from real women."',
  },
];

export default function WhoItsFor() {
  return (
    <section style={{ background: C.blush, padding: '120px 0' }}>
      <div className="container">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: 72 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.ruby, display: 'block', marginBottom: 16, fontFamily: FONTS.sans }}>
            Who It's For
          </span>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 700, lineHeight: 1.2, color: C.slate, maxWidth: 640, margin: '0 auto' }}>
            She has spent a lifetime giving. Now it's her turn.
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="personas-grid">
          {PERSONAS.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.1}>
              <div style={{
                background: 'white', borderRadius: 24, padding: '36px 28px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                position: 'relative', overflow: 'hidden', height: '100%',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: `linear-gradient(90deg, ${C.ruby}, ${C.gold})`,
                }}/>
                <div style={{
                  width: 56, height: 56, borderRadius: 18,
                  background: C.blush, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.8rem', marginBottom: 20,
                }}>
                  {p.emoji}
                </div>
                <div style={{ fontFamily: FONTS.serif, fontSize: '1.4rem', fontWeight: 700, color: C.slate, marginBottom: 4 }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '0.82rem', color: C.ruby, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16, fontFamily: FONTS.sans }}>
                  {p.role}
                </div>
                <p style={{ fontSize: '0.92rem', color: C.muted, lineHeight: 1.75, fontStyle: 'italic', fontFamily: FONTS.sans }}>
                  {p.quote}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .personas-grid{ grid-template-columns:1fr 1fr!important; } }
        @media(max-width:580px){ .personas-grid{ grid-template-columns:1fr!important; } }
      `}</style>
    </section>
  );
}
