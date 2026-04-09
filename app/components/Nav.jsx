'use client';
import { useState, useEffect } from 'react';
import { C, FONTS } from '../../lib/ui.js';

const LINKS = [
  { href: '#solution',  label: 'Solution' },
  { href: '#how',       label: 'How It Works' },
  { href: '#gift',      label: 'Gift of Health' },
  { href: '#event', label: '✦ Pilot Event' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const logoColor = scrolled ? C.rubyDeep : 'white';
  const linkColor = scrolled ? C.muted    : 'rgba(255,255,255,0.85)';

  return (
    <>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: C.rubyDeep,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 36,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute', top: 24, right: '5%',
            background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
            fontSize: '2rem', cursor: 'pointer',
          }}>✕</button>
          {LINKS.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: FONTS.serif, fontSize: '2.4rem', fontWeight: 700, color: 'white' }}>
              {l.label}
            </a>
          ))}
          <a href="#join" onClick={() => setMenuOpen(false)}
            style={{ fontFamily: FONTS.serif, fontSize: '2.4rem', fontWeight: 700, color: C.goldLight }}>
            Join Waitlist →
          </a>
        </div>
      )}

      {/* Nav bar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 5%', height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(253,249,246,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? `0 1px 0 ${C.faint}` : 'none',
        transition: 'all 0.35s',
      }}>
        {/* Logo */}
        <a href="#top" style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: FONTS.serif, fontSize: '1.5rem', fontWeight: 700,
          color: logoColor, transition: 'color 0.35s',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: scrolled ? C.rubyDeep : C.ruby,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: FONTS.serif, fontSize: '1.1rem', color: 'white', fontWeight: 700,
            transition: 'background 0.35s',
          }}>♦</div>
          Her Ruby
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none', margin: 0 }}
          className="desktop-nav">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} style={l.highlight ? {
                fontSize: '0.85rem', fontWeight: 600,
                color: C.goldLight,
                background: 'rgba(240,214,136,0.15)',
                border: '1px solid rgba(240,214,136,0.3)',
                borderRadius: 20, padding: '6px 14px',
                transition: 'all 0.2s',
              } : { fontSize: '0.9rem', fontWeight: 500, color: linkColor, transition: 'color 0.2s' }}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#join" style={{
              background: scrolled ? C.ruby : 'white',
              color: scrolled ? 'white' : C.rubyDeep,
              borderRadius: 22, padding: '9px 22px',
              fontFamily: FONTS.sans, fontSize: '0.9rem', fontWeight: 600,
              transition: 'all 0.2s',
            }}>
              Join Waitlist →
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(true)} className="hamburger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none',
            flexDirection: 'column', gap: 5, padding: 4 }}
          aria-label="Open menu">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: scrolled ? C.slate : 'white',
              transition: 'background 0.35s',
            }}/>
          ))}
        </button>
      </nav>

      <style>{`
        @media(max-width:900px){
          .desktop-nav{display:none!important}
          .hamburger{display:flex!important}
        }
      `}</style>
    </>
  );
}
