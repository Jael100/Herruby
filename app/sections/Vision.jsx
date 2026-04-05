import { C, FONTS } from '../../lib/tokens.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

export default function Vision() {
  return (
    <section style={{ background: C.parchment, padding: '100px 5%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <ScrollReveal>
          <blockquote style={{
            fontFamily: FONTS.serif, fontStyle: 'italic',
            fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 600,
            lineHeight: 1.45, color: C.rubyDeep, marginBottom: 28,
          }}>
            "Women like my mom have spent decades building families, careers, and communities.
            Her Ruby helps them finally invest in themselves — with guidance that understands their bodies,
            experiences that restore joy, and a community that supports them."
          </blockquote>
          <div style={{ width: 56, height: 3, background: `linear-gradient(90deg, ${C.ruby}, ${C.gold})`, borderRadius: 2, margin: '32px auto' }}/>
          <p style={{ fontSize: '0.9rem', color: C.muted, fontWeight: 500, letterSpacing: '0.06em', fontFamily: FONTS.sans }}>
            — Sylvia Udemeh-Amasiani, Head of Project
          </p>
          <p style={{ fontSize: '1rem', color: C.slate, lineHeight: 1.8, maxWidth: 560, margin: '20px auto 0', fontFamily: FONTS.sans }}>
            Because when midlife women thrive — everyone around them benefits.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
