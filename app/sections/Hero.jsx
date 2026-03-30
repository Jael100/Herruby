import { C, FONTS } from '../../lib/tokens.js';

export default function Hero() {
  return (
    <section id="top" style={{
      minHeight: '100vh',
      background: `linear-gradient(150deg, ${C.rubyDeep} 0%, ${C.ruby} 60%, #C83338 100%)`,
      position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Decorative rings */}
      {[400,650,900].map(sz => (
        <div key={sz} style={{
          position: 'absolute', width: sz, height: sz, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.08)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
        }}/>
      ))}
      {/* Grain texture */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
      }}/>

      <div className="container" style={{
        position: 'relative', zIndex: 2, flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '120px 5% 80px',
      }}>
        <h1 style={{
          fontFamily: FONTS.serif,
          fontSize: 'clamp(3rem,7vw,6.5rem)',
          fontWeight: 700, lineHeight: 1.08,
          color: 'white', letterSpacing: '-0.02em',
          marginBottom: 28, maxWidth: 820,
        }}>
          The vitality platform<br/>
          built <em style={{ fontStyle:'italic', color:'rgba(255,255,255,0.75)' }}>for her</em> midlife.
        </h1>

        <p style={{
          fontSize: 'clamp(1rem,1.5vw,1.2rem)', lineHeight: 1.8,
          color: 'rgba(255,255,255,0.78)', maxWidth: 560, marginBottom: 48,
          fontFamily: FONTS.sans,
        }}>
          Her Ruby integrates personalized health intelligence, curated experiential programmes,
          verified community, and flexible wellness funding — everything a woman navigating midlife needs, in one place.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="#join" style={{
            background: 'white', color: C.rubyDeep,
            borderRadius: 14, padding: '16px 36px',
            fontFamily: FONTS.sans, fontSize: '1rem', fontWeight: 600,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}>
            Join the Waitlist ✦
          </a>
          <a href="#solution" style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1.5px solid rgba(255,255,255,0.4)',
            color: 'white', borderRadius: 14, padding: '16px 36px',
            fontFamily: FONTS.sans, fontSize: '1rem', fontWeight: 500,
          }}>
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
