// packages/ui/src/index.js
// Shared primitive components used across web and flyer apps
'use client';
import React from 'react';
import { C, F, FONTS } from './tokens.js';

export { C, F, FONTS } from './tokens.js';
export { CREDIT_PACKS, CSS_VARS } from './tokens.js';

export function Serif({ as: T = 'span', style, ...props }) {
  return <T style={{ fontFamily: FONTS.serif, ...style }} {...props} />;
}

export function Sans({ as: T = 'span', style, ...props }) {
  return <T style={{ fontFamily: FONTS.sans, ...style }} {...props} />;
}

export function Chip({ children, color = C.ruby, bg = C.blush, style }) {
  return (
    <span style={{
      display: 'inline-block', borderRadius: 20, padding: '5px 14px',
      background: bg, color, fontSize: F.sm,
      fontFamily: FONTS.sans, fontWeight: 500, ...style,
    }}>
      {children}
    </span>
  );
}

export function Btn({ children, onClick, href, variant = 'primary', style, disabled, type = 'button' }) {
  const variants = {
    primary: { background: C.ruby,    color: '#fff', border: 'none' },
    gold:    { background: C.gold,    color: '#fff', border: 'none' },
    ghost:   { background: 'transparent', color: C.ruby, border: `2px solid ${C.ruby}` },
    white:   { background: 'white',   color: C.rubyDeep, border: 'none' },
    outline: { background: 'rgba(255,255,255,0.1)', color: 'white', border: '1.5px solid rgba(255,255,255,0.4)' },
    sage:    { background: C.sage,    color: '#fff', border: 'none' },
  };
  const base = {
    borderRadius: 14, cursor: disabled ? 'default' : 'pointer',
    fontFamily: FONTS.sans, fontWeight: 600, padding: '15px 26px',
    fontSize: F.md, transition: 'all 0.18s',
    opacity: disabled ? 0.45 : 1, display: 'inline-block',
    textDecoration: 'none', ...variants[variant], ...style,
  };
  if (href) return <a href={href} style={base}>{children}</a>;
  return <button type={type} onClick={onClick} disabled={disabled} style={base}>{children}</button>;
}

export function SectionLabel({ children, style }) {
  return (
    <span style={{
      fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: C.ruby, display: 'block',
      marginBottom: 16, fontFamily: FONTS.sans, ...style,
    }}>
      {children}
    </span>
  );
}

export function SectionHeading({ children, style }) {
  return (
    <h2 style={{
      fontFamily: FONTS.serif,
      fontSize: 'clamp(2rem,4vw,3.4rem)',
      fontWeight: 700, lineHeight: 1.2,
      color: C.slate, marginBottom: 16, ...style,
    }}>
      {children}
    </h2>
  );
}

export function SectionHeader({ label, heading, sub, style }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 72, ...style }}>
      {label && <SectionLabel>{label}</SectionLabel>}
      {heading && <SectionHeading style={{ maxWidth: 640, margin: '0 auto 16px' }}>{heading}</SectionHeading>}
      {sub && (
        <p style={{
          fontSize: '1rem', color: C.muted, lineHeight: 1.8,
          maxWidth: 520, margin: '0 auto', fontFamily: FONTS.sans,
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}
