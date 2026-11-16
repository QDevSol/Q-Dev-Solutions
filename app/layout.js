import './globals.css';

export const metadata = {
  title: 'Q-Dev Solutions â€” Web Development, Mobile Apps & AI Integrations',
  description:
    'Q-Dev Solutions specializes in web development, mobile app development, software development, UX/UI design, AI integrations, and QA testing. Empowering your digital presence.',
  keywords: [
    'web development',
    'mobile app development',
    'software development',
    'AI integrations',
    'UX UI design',
    'QA testing',
    'Q-Dev Solutions',
  ],
  authors: [{ name: 'Q-Dev Solutions' }],
  creator: 'Q-Dev Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.qdevsol.site',
    siteName: 'Q-Dev Solutions',
    title: 'Q-Dev Solutions â€” Web Development, Mobile Apps & AI Integrations',
    description:
      'Q-Dev Solutions specializes in web development, mobile app development, software development, UX/UI design, AI integrations, and QA testing.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Q-Dev Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Q-Dev Solutions â€” Web Development, Mobile Apps & AI Integrations',
    description:
      'Q-Dev Solutions specializes in web development, mobile app development, software development, UX/UI design, AI integrations, and QA testing.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-slate-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
