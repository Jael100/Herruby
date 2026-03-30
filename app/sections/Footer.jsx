'use client';
import { useState } from 'react';
import { C, FONTS } from '../../lib/ui.js';

function ContactForm() {
  const [f, setF] = useState({ name:'', email:'', msg:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const up = k => e => setF(x=>({...x,[k]:e.target.value}));
  async function submit(e) {
    e.preventDefault(); setLoading(true);
    await new Promise(r=>setTimeout(r,800));
    setSent(true); setLoading(false);
  }
  const inputStyle = { display:'block', width:'100%', padding:'10px 14px', background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:10, fontFamily:FONTS.sans, fontSize:'0.85rem', color:'white', outline:'none', marginBottom:10 };
  if (sent) return <p style={{fontFamily:FONTS.sans,fontSize:'0.85rem',color:C.goldLight,marginTop:8}}>✦ Message received — we'll be in touch!</p>;
  return (
    <form onSubmit={submit} style={{marginTop:12}}>
      <input required placeholder="Your name" value={f.name} onChange={up('name')} style={inputStyle}/>
      <input required type="email" placeholder="Email address" value={f.email} onChange={up('email')} style={inputStyle}/>
      <textarea required placeholder="Your message" value={f.msg} onChange={up('msg')} style={{...inputStyle,minHeight:72,resize:'vertical'}}/>
      <button type="submit" disabled={loading} style={{background:C.ruby,color:'white',border:'none',borderRadius:10,padding:'10px 20px',fontFamily:FONTS.sans,fontSize:'0.85rem',fontWeight:600,cursor:'pointer',opacity:loading?0.7:1}}>
        {loading?'Sending…':'Send →'}
      </button>
    </form>
  );
}

const APP_DOWNLOAD_URL = '#join'; // Replace with real store URLs when live

export default function Footer() {
  return (
    <footer style={{ background: C.slate, padding: '72px 5% 40px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 32 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: C.ruby, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.serif, fontSize: '1.1rem', color: 'white', fontWeight: 700 }}>♦</div>
              <span style={{ fontFamily: FONTS.serif, fontSize: '1.4rem', fontWeight: 700, color: 'white' }}>Her Ruby</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontFamily: FONTS.sans, marginBottom: 16 }}>
              The vitality and life experience platform for women navigating midlife. Ontario, Canada.
            </p>
            {/* App download buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href={APP_DOWNLOAD_URL} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 10, padding: '9px 14px', textDecoration: 'none', transition: 'background 0.18s' }}>
                <span style={{ fontSize: '1.2rem' }}>🍎</span>
                <div>
                  <div style={{ fontFamily: FONTS.sans, fontSize: '0.6rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>Download on the</div>
                  <div style={{ fontFamily: FONTS.sans, fontSize: '0.82rem', fontWeight: 600, color: 'white' }}>App Store</div>
                </div>
              </a>
              <a href={APP_DOWNLOAD_URL} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 10, padding: '9px 14px', textDecoration: 'none', transition: 'background 0.18s' }}>
                <span style={{ fontSize: '1.2rem' }}>▶</span>
                <div>
                  <div style={{ fontFamily: FONTS.sans, fontSize: '0.6rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>Get it on</div>
                  <div style={{ fontFamily: FONTS.sans, fontSize: '0.82rem', fontWeight: 600, color: 'white' }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Platform — all link to app download */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16, fontFamily: FONTS.sans }}>Platform</h4>
            {['My Body','Programmes','Ruby Circle','Wellness Wallet','Knowledge Hub','Event'].map(label => (
              <a key={label} href={label === 'Event' ? '/flyer' : APP_DOWNLOAD_URL} style={{ display: 'block', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', marginBottom: 10, fontFamily: FONTS.sans, textDecoration: 'none', transition: 'color 0.18s' }}>
                {label} {label !== 'Event' && '↗'}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16, fontFamily: FONTS.sans }}>Company</h4>
            {[
              ['#team',  'About & Team'],
              ['#gift',  'For Employers'],
              ['#gift',  'Gift of Health'],
              ['#solution', 'Our Solution'],
              ['#join',  'Join Waitlist'],
            ].map(([href, label]) => (
              <a key={label} href={href} style={{ display: 'block', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', marginBottom: 10, fontFamily: FONTS.sans, textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 6, fontFamily: FONTS.sans }}>Contact Us</h4>
            <p style={{ fontFamily: FONTS.sans, fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', marginBottom: 4, lineHeight: 1.5 }}>info@laelventures.com</p>
            <ContactForm />
          </div>
        </div>

        {/* Legal row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
          {[['#','Privacy Policy'],['#','Terms of Service'],['#','ID Verification Policy'],['#','PIPEDA Statement']].map(([href,label])=>(
            <a key={label} href={href} style={{fontFamily:FONTS.sans,fontSize:'0.78rem',color:'rgba(255,255,255,0.3)',textDecoration:'none'}}>{label}</a>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', fontFamily: FONTS.sans }}>© 2026 Her Ruby / Lael Ventures. All rights reserved.</span>
          <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', fontFamily: FONTS.sans }}>🇨🇦 Built in Canada. Stored in Canada.</span>
        </div>
      </div>
      <style>{`
        @media(max-width:1000px){ .footer-grid{ grid-template-columns:1fr 1fr!important; gap:36px!important; } }
        @media(max-width:580px){ .footer-grid{ grid-template-columns:1fr!important; } }
        .footer-grid a:hover{ color:rgba(255,255,255,0.85)!important; }
      `}</style>
    </footer>
  );
}
