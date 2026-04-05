import { C, FONTS } from '../../lib/tokens.js';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Her Ruby',
  description: 'Her Ruby privacy policy. How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
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
        <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: C.slate, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontFamily: FONTS.sans, fontSize: '0.88rem', color: C.muted, marginBottom: 48 }}>Last updated: April 2026</p>

        <div style={{ fontFamily: FONTS.sans, fontSize: '0.95rem', color: C.slate, lineHeight: 1.85 }}>
          <Section title="1. Introduction">
            <p>Her Ruby, operated by Lael Ventures (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, and mobile applications (collectively, the &ldquo;Service&rdquo;).</p>
            <p>We comply with the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> and all applicable Canadian privacy legislation.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p><strong>Information you provide:</strong></p>
            <ul>
              <li>Account registration details (name, email address)</li>
              <li>Health and wellness data entered through daily check-ins and symptom tracking</li>
              <li>Payment information (processed securely via Stripe; we never store card details)</li>
              <li>Identity verification data for Ruby Circle community access</li>
              <li>Communications you send to us</li>
            </ul>
            <p><strong>Information collected automatically:</strong></p>
            <ul>
              <li>Device information and browser type</li>
              <li>Usage data and analytics</li>
              <li>IP address and approximate location</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul>
              <li>To provide and maintain the Service</li>
              <li>To personalize your wellness experience and AI-driven insights</li>
              <li>To process transactions and send related information</li>
              <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>To provide aggregate, anonymized employer wellness dashboards (individual data is never shared)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. Data Storage and Security">
            <p>All personal data is stored on servers located in <strong>Canada</strong>. We use end-to-end encryption and industry-standard security measures to protect your information. Your wellness data is yours &mdash; always.</p>
          </Section>

          <Section title="5. Sharing of Information">
            <p>We do not sell your personal information. We may share data with:</p>
            <ul>
              <li>Service providers who assist in operating the platform (e.g., payment processing via Stripe)</li>
              <li>Employers only in aggregate, anonymized form through HR dashboards</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </Section>

          <Section title="6. Your Rights">
            <p>Under PIPEDA, you have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent for the collection, use, or disclosure of your information</li>
              <li>Request deletion of your data</li>
            </ul>
          </Section>

          <Section title="7. Cookies">
            <p>We use essential cookies to operate the Service and analytics cookies to improve your experience. You can manage cookie preferences through your browser settings.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website.</p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have questions about this Privacy Policy or your personal data, contact us at:</p>
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
