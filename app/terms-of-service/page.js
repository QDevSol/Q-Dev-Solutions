import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Terms of Service — Q-Dev Solutions',
  description: 'Terms of Service for Q-Dev Solutions. Please read these terms carefully before using our services.',
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
            Terms of Service
          </h1>
          
          <div className="space-y-8 text-slate-300 leading-relaxed">
            <p className="text-sm text-slate-400">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-display font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Q-Dev Solutions (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of the <a href="https://qdevsolutions.com" className="text-violet-400 hover:text-violet-300">qdevsolutions.com</a> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
              </p>
              <p className="mt-4">
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-white mb-4">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-white mb-4">3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You are not a minor in the jurisdiction in which you reside.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-white mb-4">4. Prohibited Activities</h2>
              <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-white mb-4">5. Site Management</h2>
              <p>
                We reserve the right, but not the obligation, to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Monitor the Site for violations of these Terms of Service.</li>
                <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service.</li>
                <li>Refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof.</li>
                <li>Remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems.</li>
                <li>Otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-white mb-4">6. Modifications and Interruptions</h2>
              <p>
                We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
              </p>
              <p className="mt-4">
                We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-white mb-4">7. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws of your jurisdiction. Q-Dev Solutions and yourself irrevocably consent that the courts of your jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-white mb-4">8. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-semibold text-white">Q-Dev Solutions</p>
                <a href="mailto:info@qdevsolutions.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                  info@qdevsolutions.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
