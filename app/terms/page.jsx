import { C, FONTS } from '../../lib/tokens.js';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — Her Ruby',
  description: 'Her Ruby terms of service. The rules and conditions for using our platform.',
};

export default function TermsOfService() {
  return (
    <div style={{ background: C.cream, minHeight: '100vh' }}>
      <header style={{ background: C.slate, padding: '28px 5%' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: C.ruby, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.serif, fontSize: '1rem', color: 'white', fontWeight: 700 }}>&#9830;</div>
            <span style={{ fontFamily: FONTS.serif, fontSize: '1.2rem', fontWeight: 700, color: 'white' }}>Her Ruby</span>
          </Link>
          <Link href="/" style={{ fontFamily: FONTS.sans, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Back to Home</Link>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '64px 5% 120px' }}>
        <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: C.slate, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ fontFamily: FONTS.sans, fontSize: '0.88rem', color: C.muted, marginBottom: 48 }}>Last updated: April 2026</p>

        <div style={{ fontFamily: FONTS.sans, fontSize: '0.95rem', color: C.slate, lineHeight: 1.85 }}>
          <Section title="1. Acceptance of Terms">
            <p>By accessing or using the Her Ruby platform, website, and mobile applications (the &ldquo;Service&rdquo;), operated by Lael Ventures (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.</p>
          </Section>

          <Section title="2. Eligibility">
            <p>The Service is intended for individuals aged 18 and older. Certain features, including the Ruby Circle community, require identity verification to ensure a safe and trusted environment.</p>
          </Section>

          <Section title="3. Account Registration">
            <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.</p>
          </Section>

          <Section title="4. Wellness Credits and Payments">
            <ul>
              <li>Wellness credits can be purchased directly or received as gifts</li>
              <li>1 credit equals $20 CAD of wellness value</li>
              <li>Credits never expire</li>
              <li>Credits are non-refundable once redeemed</li>
              <li>Unused, unredeemed gift credits may be refunded within 30 days of purchase</li>
              <li>All payments are processed securely via Stripe</li>
            </ul>
          </Section>

          <Section title="5. Use of the Service">
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the Service in any way that violates applicable laws or regulations</li>
              <li>Impersonate any person or misrepresent your identity</li>
              <li>Share your account or verification credentials with others</li>
              <li>Engage in harassment, abuse, or harmful behaviour within community spaces</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
            </ul>
          </Section>

          <Section title="6. Health Disclaimer">
            <p>The Service provides wellness information, community support, and guided programmes. It is <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. Always consult a qualified healthcare provider with any questions regarding a medical condition.</p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>All content, branding, and technology within the Service are the property of Lael Ventures or its licensors. You may not reproduce, distribute, or create derivative works without our written consent.</p>
          </Section>

          <Section title="8. Privacy">
            <p>Your use of the Service is also governed by our <a href="/privacy" style={{ color: '#B8292F', textDecoration: 'underline' }}>Privacy Policy</a>, which describes how we collect, use, and protect your personal information in compliance with PIPEDA.</p>
          </Section>

          <Section title="9. Termination">
            <p>We may suspend or terminate your access to the Service at our discretion if you violate these Terms. You may deactivate your account at any time by contacting us.</p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>To the fullest extent permitted by law, Lael Ventures shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.</p>
          </Section>

          <Section title="11. Governing Law">
            <p>These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein.</p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes your acceptance of the revised Terms.</p>
          </Section>

          <Section title="13. Contact Us">
            <p>If you have questions about these Terms, contact us at:</p>
            <p><strong>Email:</strong> info@herruby.com<br /><strong>Location:</strong> Ontario, Canada</p>
          </Section>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: '#2A2A35', marginBottom: 12 }}>{title}</h2>
      {children}
    </div>
  );
}
