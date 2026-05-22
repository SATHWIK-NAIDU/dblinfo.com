export default function PrivacyPolicy() {
  return (
    <div className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-brown/80 space-y-8">
      <div>
        <h1 className="text-5xl font-serif font-bold tracking-tight text-brown mb-3">Privacy Policy</h1>
        <p className="text-brown/50 text-sm font-medium">Effective Date: May 22, 2026</p>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-serif font-bold text-brown pt-4">1. Information We Collect</h3>
        <p className="leading-relaxed text-lg">
          At Digital Business Leads (DBL), we collect information that you explicitly provide us through forms on our website (such as Name, Email, Phone Number, Company, and Project Details). We also collect non-identifiable analytics data to improve site performance.
        </p>

        <h3 className="text-2xl font-serif font-bold text-brown pt-4">2. How We Use Information</h3>
        <p className="leading-relaxed text-lg">
          The information collected is stringently used to:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-brown/75 text-lg">
          <li>Respond to your inquiries and formulate strategy proposals.</li>
          <li>Send explicit service-related communications.</li>
          <li>Enhance and measure the impact of our digital experiences.</li>
        </ul>

        <h3 className="text-2xl font-serif font-bold text-brown pt-4">3. Information Sharing</h3>
        <p className="leading-relaxed text-lg">
          We do not sell, rent, or trade your personal data. We may share necessary information with our trusted backend providers (e.g., Supabase, hosting partners) solely to provide the services requested, bound by strict confidentiality.
        </p>

        <h3 className="text-2xl font-serif font-bold text-brown pt-4">4. Security</h3>
        <p className="leading-relaxed text-lg">
          DBL implements standard enterprise security measures to protect against the loss, misuse, or alteration of information under our control.
        </p>
        
        <h3 className="text-2xl font-serif font-bold text-brown pt-4">5. Contact Us</h3>
        <p className="leading-relaxed text-lg">
          If you have any questions regarding this Privacy Policy, contact us at{' '}
          <a 
            href="mailto:hello@dblinfo.com" 
            className="text-orange hover:text-orange-dk font-semibold transition-colors border-b border-orange/20 hover:border-orange-dk pb-0.5"
          >
            hello@dblinfo.com
          </a>.
        </p>
      </div>
    </div>
  );
}
