import Link from 'next/link';
import { C, FONTS } from '../../lib/tokens.js';
import PilotSignup from './PilotSignup.jsx';

export const metadata = {
  title: 'Her Ruby Pilot Programme — May 16 2026 · Ontario',
  description: 'Join the Her Ruby pilot in Brampton, Ontario — May 16, 2026. Free event for midlife women 40+. Experience the platform before public launch.',
  openGraph: {
    title: 'Her Ruby Pilot Day — May 16 2026',
    description: 'A free morning for midlife women in Ontario. Expert talk, platform preview, Ruby Circle, and refreshments.',
    type: 'website',
    url: 'https://herruby.ca/pilot',
  },
};

const AGENDA = [
  { time: '10:00 AM', title: 'Doors open & welcome', desc: 'Arrive, grab a coffee, meet the Her Ruby team and your fellow attendees.' },
  { time: '10:20 AM', title: 'Expert keynote', desc: 'A live 40-minute session on midlife hormonal health, energy, and cognitive performance by a licensed clinician.' },
  { time: '11:00 AM', title: 'Platform preview', desc: 'Be the first to experience the Her Ruby app hands-on. Walk through My Body, Programmes, and the Wallet live.' },
  { time: '11:40 AM', title: 'Ruby Circle intro', desc: 'See how verified Circles work, join your first community session, and meet other women at this exact stage of life.' },
  { time: '12:10 PM', title: 'Open Q&A + refreshments', desc: 'Ask the team anything. Mingle over light refreshments. Leave with next steps and your free pilot access code.' },
  { time: '1:00 PM', title: 'Close', desc: 'Take home a 30-day pilot credit and an invite to our private post-event Slack circle.' },
];

const WHAT_YOU_GET = [
  { icon: '◉', title: '30-day free pilot access', desc: 'Full access to the Her Ruby platform for 30 days — My Body tracking, Knowledge Hub, and community circles.' },
  { icon: '◈', title: 'One complimentary programme session', desc: 'We'll credit your wallet with 1 programme session of your choice to use during the pilot period.' },
  { icon: '❋', title: 'Early access to Ruby Circle', desc: 'Join the pilot community circle before public launch. Your feedback directly shapes the product.' },
  { icon: '♦', title: 'Direct access to founders', desc: 'Monthly check-in calls with the Her Ruby founding team throughout the pilot period.' },
];

const FAQS = [
  { q: 'Is this event really free?', a: 'Yes — completely. No credit card, no catch. Just register and show up. Refreshments are on us.' },
  { q: 'Where is it taking place?', a: 'The venue is in Ontario (Brampton area). Exact address is shared in your confirmation email after you register on Eventbrite.' },
  { q: 'Who is the event for?', a: 'Women navigating midlife — roughly 40 to 68. You do not need to be tech-savvy. The platform is designed to be intuitive for everyone.' },
  { q: 'What should I bring?', a: 'Just yourself and your curiosity. Your phone if you want to try the app live. Everything else is provided.' },
  { q: 'Will my data be collected at the event?', a: 'Only what you choose to share. We collect registration details for logistics. The platform itself is PIPEDA-compliant — your health data is always private.' },
  { q: 'Can I bring a friend?', a: 'Absolutely. The more the merrier — just ask her to register separately so we have accurate numbers for seating and refreshments.' },
];

const TEAM = [
  { initial: 'S', name: 'Sylvia Udemeh-Amasiani', role: 'CEO & Founder', bg: `linear-gradient(135deg, ${C.rubyDeep}, ${C.ruby})` },
  { initial: 'C', name: 'Chinemeze Amasiani',    role: 'COO',            bg: 'linear-gradient(135deg,#5C6BC0,#7C8BD0)' },
  { initial: 'A', name: 'Anita David',           role: 'Head of Programs', bg: 'linear-gradient(135deg,#5E8C61,#78A87B)' },
  { initial: 'J', name: 'Juliet Ukwella',        role: 'Head of Technology', bg: 'linear-gradient(135deg,#27AE8F,#3DC9A8)' },
];

const styles = {
  label: { fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 14, fontFamily: FONTS.sans },
  serifHead: { fontFamily: FONTS.serif, fontWeight: 700, lineHeight: 1.15 },
};

export default function PilotPage() {
  return (
    <div style={{ fontFamily: FONTS.sans, background: C.cream, color: C.slate }}>

      {/* ── NAV BAR ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(125,26,29,0.97)', backdropFilter: 'blur(14px)',
        padding: '0 5%', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: FONTS.serif, fontSize: '1.4rem', fontWeight: 700, color: 'white' }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: C.ruby, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'white' }}>♦</div>
          Her Ruby
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Link href="/" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', fontFamily: FONTS.sans }}>← Back to Home</Link>
          <a href="#register" style={{ background: 'white', color: C.rubyDeep, borderRadius: 22, padding: '8px 20px', fontSize: '0.88rem', fontWeight: 600, fontFamily: FONTS.sans }}>
            Register Now →
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        background: `linear-gradient(150deg, ${C.rubyDeep} 0%, ${C.ruby} 55%, #C83338 100%)`,
        padding: '80px 5% 90px', position: 'relative', overflow: 'hidden',
      }}>
        {[380, 640, 900].map(sz => (
          <div key={sz} style={{ position: 'absolute', width: sz, height: sz, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
        ))}
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Eyebrow pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(240,214,136,0.15)', border: '1px solid rgba(240,214,136,0.35)', borderRadius: 100, padding: '7px 16px', marginBottom: 28 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: C.goldLight, animation: 'pulse 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: FONTS.sans, fontSize: '0.72rem', fontWeight: 600, color: C.goldLight, textTransform: 'uppercase', letterSpacing: '0.16em' }}>
              Free Pilot Event · Ontario, Canada
            </span>
          </div>

          <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2.6rem,5.5vw,5rem)', fontWeight: 700, lineHeight: 1.08, color: 'white', letterSpacing: '-0.02em', marginBottom: 20, maxWidth: 780 }}>
            The Her Ruby Pilot.<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>Your first look at what's coming.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem,1.4vw,1.1rem)', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', maxWidth: 540, marginBottom: 40 }}>
            A free morning for women navigating midlife in Ontario — expert keynote, hands-on platform preview, a live Ruby Circle experience, and refreshments. Space is limited.
          </p>

          {/* Event details strip */}
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginBottom: 44 }}>
            {[
              { icon: '📅', text: 'Saturday, May 16, 2026' },
              { icon: '🕙', text: '10:00 AM – 1:00 PM' },
              { icon: '📍', text: 'Brampton, Ontario' },
              { icon: '🎟', text: 'Free · Limited Spots' },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>{icon}</div>
                <span style={{ fontFamily: FONTS.sans, fontSize: '0.9rem', color: 'rgba(255,255,255,0.88)', fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#register" style={{ background: 'white', color: C.rubyDeep, borderRadius: 14, padding: '14px 32px', fontFamily: FONTS.sans, fontWeight: 600, fontSize: '0.95rem', display: 'inline-block' }}>
              Register on Eventbrite →
            </a>
            <a href="#agenda" style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.35)', color: 'white', borderRadius: 14, padding: '14px 32px', fontFamily: FONTS.sans, fontSize: '0.95rem', display: 'inline-block' }}>
              View Agenda
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL GET ── */}
      <section style={{ background: C.parchment, padding: '90px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ ...styles.label, color: C.ruby }}>Pilot Benefits</span>
            <h2 style={{ ...styles.serifHead, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', maxWidth: 560, margin: '0 auto' }}>
              What you walk away with.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
            {WHAT_YOU_GET.map((item) => (
              <div key={item.title} style={{ background: 'white', borderRadius: 22, padding: '32px 26px', borderTop: `4px solid ${C.ruby}`, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: FONTS.serif, fontSize: '1.2rem', fontWeight: 700, color: C.slate, marginBottom: 10, lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontSize: '0.87rem', color: C.muted, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENDA ── */}
      <section id="agenda" style={{ background: C.cream, padding: '90px 5%' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ ...styles.label, color: C.ruby }}>Programme</span>
            <h2 style={{ ...styles.serifHead, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>The morning, minute by minute.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
            {/* Vertical timeline line */}
            <div style={{ position: 'absolute', left: 76, top: 28, bottom: 28, width: 2, background: `linear-gradient(180deg,${C.ruby},${C.gold})`, opacity: 0.2 }} />
            {AGENDA.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', marginBottom: 32, position: 'relative' }}>
                {/* Time */}
                <div style={{ minWidth: 80, fontFamily: FONTS.sans, fontSize: '0.78rem', fontWeight: 600, color: C.muted, paddingTop: 14, textAlign: 'right', flexShrink: 0 }}>
                  {item.time}
                </div>
                {/* Dot */}
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: C.ruby, flexShrink: 0, marginTop: 16, border: '3px solid white', boxShadow: `0 0 0 2px ${C.ruby}`, zIndex: 1 }} />
                {/* Content */}
                <div style={{ background: 'white', borderRadius: 18, padding: '20px 24px', flex: 1, boxShadow: '0 2px 16px rgba(0,0,0,0.05)', border: `1px solid ${C.faint}` }}>
                  <div style={{ fontFamily: FONTS.serif, fontSize: '1.15rem', fontWeight: 700, color: C.slate, marginBottom: 6 }}>{item.title}</div>
                  <p style={{ fontSize: '0.87rem', color: C.muted, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTER ── */}
      <section id="register" style={{ background: C.rubyDeep, padding: '90px 5%', position: 'relative', overflow: 'hidden' }}>
        {[400, 700].map(sz => (
          <div key={sz} style={{ position: 'absolute', width: sz, height: sz, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
        ))}
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <span style={{ ...styles.label, color: C.goldLight }}>Register</span>
            <h2 style={{ ...styles.serifHead, fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'white', marginBottom: 16 }}>
              Claim your spot before it fills.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 32 }}>
              Registration is free and takes 60 seconds on Eventbrite. We'll send you a confirmation with the venue address and everything you need for the day.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {['60-second registration on Eventbrite', 'Confirmation email with venue address', 'Reminder 48 hours before the event', '30-day pilot access code on the day'].map((p) => (
                <div key={p} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(240,214,136,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: C.goldLight, flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', fontFamily: FONTS.sans }}>{p}</span>
                </div>
              ))}
            </div>
            <a
              href={process.env.NEXT_PUBLIC_EVENTBRITE_URL || 'https://eventbrite.ca'}
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'white', color: C.rubyDeep, borderRadius: 14, padding: '14px 32px', fontFamily: FONTS.sans, fontWeight: 600, fontSize: '0.95rem' }}
            >
              Register on Eventbrite →
            </a>
          </div>
          {/* Signup form alternative */}
          <PilotSignup />
        </div>
      </section>


      {/* ── WEALTH SECTION ── */}
      <section style={{ background: C.indigoPale, padding: '90px 5%', borderTop: `3px solid ${C.indigo}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ ...styles.label, color: C.indigo }}>Pilot Feature Spotlight</span>
            <h2 style={{ ...styles.serifHead, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', maxWidth: 600, margin: '0 auto 14px' }}>
              Wealth &amp; Financial Wellness — coming with the pilot.
            </h2>
            <p style={{ fontSize: '0.95rem', color: C.muted, lineHeight: 1.8, maxWidth: 540, margin: '0 auto', fontFamily: FONTS.sans }}>
              Midlife is peak wealth-building time. Her Ruby pilot members get first access to our Wealth pillar — financial planning, retirement readiness, and Money Circles — before public launch.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginBottom: 36 }}>
            {[
              { icon: '📈', title: 'Money Circles', desc: 'Private peer groups to discuss salary, savings, and financial goals — in a safe, verified, women-only space.' },
              { icon: '🏦', title: 'Retirement Readiness', desc: 'Expert sessions on pensions, RRSPs, CPP, and building wealth through midlife career transitions.' },
              { icon: '💡', title: 'Financial Coaching', desc: '1-on-1 sessions with vetted financial planners who understand the midlife money moment — not generic advice.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'white', borderRadius: 22, padding: '32px 26px', borderTop: `4px solid ${C.indigo}`, boxShadow: '0 4px 20px rgba(92,107,192,0.1)' }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: C.indigoPale, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: FONTS.serif, fontSize: '1.3rem', fontWeight: 700, color: C.slate, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: '0.87rem', color: C.muted, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'white', borderRadius: 22, padding: '28px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, boxShadow: '0 4px 20px rgba(92,107,192,0.08)', border: `1px solid ${C.indigo}25` }}>
            <div>
              <div style={{ fontFamily: FONTS.serif, fontSize: '1.4rem', fontWeight: 700, color: C.slate, marginBottom: 4 }}>Pilot members get early access to Wealth features.</div>
              <p style={{ fontFamily: FONTS.sans, fontSize: '0.87rem', color: C.muted }}>Register for the May 16 event to be the first cohort with Wealth pillar access.</p>
            </div>
            <a href="#register" style={{ display: 'inline-block', background: C.indigo, color: 'white', borderRadius: 12, padding: '13px 26px', fontFamily: FONTS.sans, fontWeight: 600, fontSize: '0.9rem' }}>Claim Your Spot →</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: C.parchment, padding: '90px 5%' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ ...styles.label, color: C.ruby }}>FAQ</span>
            <h2 style={{ ...styles.serifHead, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>Questions we always get.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 18, padding: '24px 28px', borderLeft: `4px solid ${C.ruby}` }}>
                <div style={{ fontFamily: FONTS.serif, fontSize: '1.1rem', fontWeight: 700, color: C.slate, marginBottom: 8 }}>{faq.q}</div>
                <p style={{ fontSize: '0.9rem', color: C.muted, lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ── */}
      <section style={{ background: C.cream, padding: '90px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ ...styles.label, color: C.ruby }}>Meet the Team</span>
            <h2 style={{ ...styles.serifHead, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>We'll be there in person.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {TEAM.map((m) => (
              <div key={m.name} style={{ background: 'white', borderRadius: 20, padding: '28px 20px', textAlign: 'center', boxShadow: '0 4px 18px rgba(0,0,0,0.06)' }}>
                <div style={{ width: 68, height: 68, borderRadius: '50%', background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', fontFamily: FONTS.serif, fontSize: '1.6rem', fontWeight: 700, color: 'white' }}>{m.initial}</div>
                <div style={{ fontFamily: FONTS.serif, fontSize: '1.1rem', fontWeight: 700, color: C.slate, marginBottom: 3 }}>{m.name}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, color: C.ruby, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: FONTS.sans }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.slate, padding: '36px 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontFamily: FONTS.serif, fontSize: '1.2rem', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: C.ruby, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: FONTS.serif, fontWeight: 700 }}>♦</div>
          Her Ruby
        </div>
        <span style={{ fontFamily: FONTS.sans, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>info@laelventures.com · © 2026 Her Ruby / Lael Ventures</span>
        <Link href="/" style={{ fontFamily: FONTS.sans, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>← Back to Home</Link>
      </footer>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @media(max-width:900px){
          div[style*="grid-template-columns: repeat(4,1fr)"]{ grid-template-columns: 1fr 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"]{ grid-template-columns: 1fr !important; }
        }
        @media(max-width:580px){
          div[style*="grid-template-columns: 1fr 1fr"]{ grid-template-columns: 1fr !important; }
        }
        a:hover{ opacity: 0.88; }
      `}</style>
    </div>
  );
}
