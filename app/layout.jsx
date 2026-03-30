import './globals.css';

export const metadata = {
  title: 'Her Ruby — Midlife Vitality Platform',
  description: 'The vitality and life experience platform for women navigating midlife. Programmes, community, and personalized intelligence for women 40+.',
  openGraph: {
    title: 'Her Ruby — Midlife Vitality Platform',
    description: 'Sustain your energy, confidence and performance through midlife. Built for women 40+ in Canada.',
    type: 'website',
    url: 'https://herruby.ca',
  },
  themeColor: '#7D1A1D',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}
