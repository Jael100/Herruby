import { C, FONTS } from '../../lib/tokens.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

const TEAM = [
  { initial: 'S', name: 'Sylvia Udemeh-Amasiani', role: 'CEO & Founder', bg: `linear-gradient(135deg, ${C.rubyDeep}, ${C.ruby})`, bio: '10+ years corporate including GSK. Exit founder of Bridgebooks (IFC Awardee). CDMP certified data professional with expertise in consumer intelligence.' },
  { initial: 'C', name: 'Chinemeze Amasiani',    role: 'COO & Client Relationships', bg: 'linear-gradient(135deg,#5C6BC0,#7C8BD0)', bio: '15+ years in corporate across project management, customer experience and business process optimization. PMP certified.' },
  { initial: 'A', name: 'Anita David',           role: 'Head of Programs', bg: 'linear-gradient(135deg,#5E8C61,#78A87B)', bio: 'Co-founder of Bolpath and Everlasting Arm Senior Care Homes. 8+ years in the care industry and 8+ years in corporate environments.' },
  { initial: 'J', name: 'Juliet Ukwella',        role: 'Head of Technology', bg: 'linear-gradient(135deg,#27AE8F,#3DC9A8)', bio: 'MSc Cyber Security (CISSP). Author and publisher. 5+ years of technology experience building secure, scalable digital products.' },
];

export default function Team() {
  return (
    <section id="team" style={{ background: C.cream, padding: '120px 0' }}>
      <div className="container">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: 72 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.ruby, display: 'block', marginBottom: 16, fontFamily: FONTS.sans }}>
            The Team
          </span>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 700, lineHeight: 1.2, color: C.slate }}>
            Built by women who understand the journey.
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="team-grid">
          {TEAM.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.1}>
              <div style={{
                background: 'white', borderRadius: 22, padding: '32px 24px',
                textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                height: '100%',
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: m.bg, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 16px',
                  fontFamily: FONTS.serif, fontSize: '1.8rem', fontWeight: 700, color: 'white',
                }}>
                  {m.initial}
                </div>
                <div style={{ fontFamily: FONTS.serif, fontSize: '1.2rem', fontWeight: 700, color: C.slate, marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: C.ruby, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12, fontFamily: FONTS.sans }}>{m.role}</div>
                <p style={{ fontSize: '0.82rem', color: C.muted, lineHeight: 1.65, fontFamily: FONTS.sans }}>{m.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .team-grid{ grid-template-columns:1fr 1fr!important; } }
        @media(max-width:580px){ .team-grid{ grid-template-columns:1fr!important; } }
      `}</style>
    </section>
  );
}
