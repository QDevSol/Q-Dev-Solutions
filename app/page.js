import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import KeyBenefits from '../components/KeyBenefits';
import Clients from '../components/Clients';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Q-Dev Solutions Ã¢â‚¬â€ Empowering Your Digital Presence',
  description:
    'Q-Dev Solutions delivers world-class web development, mobile apps, AI integrations, and software solutions tailored to your business goals.',
  alternates: {
    canonical: 'https://www.qdevsol.site',
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Q-Dev Solutions',
  url: 'https://www.qdevsol.site',
  description:
    'Q-Dev Solutions specializes in web development, mobile app development, software development, UX/UI design, AI integrations, and QA testing.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'support@qdevsol.site',
  },
  sameAs: [],
  offers: [
    { '@type': 'Offer', name: 'Mobile App Development' },
    { '@type': 'Offer', name: 'Website Development' },
    { '@type': 'Offer', name: 'Software Development' },
    { '@type': 'Offer', name: 'UX/UI Design' },
    { '@type': 'Offer', name: 'AI Integrations' },
    { '@type': 'Offer', name: 'QA and Testing' },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <KeyBenefits />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
