import { C, FONTS } from '../../lib/tokens.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

const PROBLEMS = [
  { num: '01', title: 'Fragmented care', desc: 'Medical, fitness, mental health and social services operate in silos — with no integrated solution tailored to her specific needs.' },
  { num: '02', title: 'Invisible symptoms', desc: 'Fatigue, hot flashes, brain fog, sleep disruption, and joint pain reduce daily functioning but consistently go unaddressed in the system.' },
  { num: '03', title: 'Loss of connection', desc: 'Empty nest, shrinking social networks, and the burden of being primary caregiver all arrive simultaneously — increasing isolation risk.' },
];

const STATS = [
  { value: '2.4M', label: 'Canadian women navigating midlife — underserved by the system' },
  { value: '$3.5B', label: 'Annual employer cost of midlife health gaps in Canada' },
  { value: '$400B', label: 'Global preventive healthcare market — fastest growing' },
  { value: 'Zero', label: 'Integrated solutions built specifically for this woman' },
];

export default function Problem() {
  return (
    <section style={{ background: C.slate, padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(184,134,42,0.5), transparent)',
      }}/>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
          className="problem-grid">
          {/* Left — heading + stats */}
          <ScrollReveal>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.goldLight, marginBottom: 20, display: 'block', fontFamily: FONTS.sans }}>
              The Problem
            </span>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2.2rem,4vw,3.8rem)', fontWeight: 700, lineHeight: 1.15, color: 'white', marginBottom: 24 }}>
              Midlife women face a perfect storm — and are given nothing.
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.65)', marginBottom: 36, fontFamily: FONTS.sans }}>
              Hormonal changes, chronic stress, caregiving responsibilities, and shifting identities converge all at once. The healthcare system was not built for this intersection. Neither was any wellness product on the market.
            </p>
            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16, padding: '20px 22px',
                }}>
                  <div style={{ fontFamily: FONTS.serif, fontSize: '2rem', fontWeight: 700, color: C.goldLight, lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, fontFamily: FONTS.sans }}>{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — problem cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROBLEMS.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 0.1}>
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 20, padding: '28px 28px',
                  transition: 'background 0.25s, border-color 0.25s',
                }}>
                  <span style={{ fontFamily: FONTS.serif, fontSize: '2rem', fontWeight: 700, color: C.goldLight, display: 'block', marginBottom: 10 }}>{p.num}</span>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'white', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: FONTS.sans }}>{p.title}</div>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontFamily: FONTS.sans }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .problem-grid{ grid-template-columns:1fr!important; gap:48px!important; } }
      `}</style>
    </section>
  );
}
