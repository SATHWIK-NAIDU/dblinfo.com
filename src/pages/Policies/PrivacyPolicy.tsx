export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-zinc-300 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Privacy Policy</h1>
      <p className="text-zinc-500 mb-12">Effective Date: [Current Date]</p>
      
      <h3 className="text-xl font-medium text-white pt-6">1. Information We Collect</h3>
      <p className="leading-relaxed">
        At Digital Business Leads (DBL), we collect information that you explicitly provide us through forms on our website (such as Name, Email, Phone Number, Company, and Project Details). We also collect non-identifiable analytics data to improve site performance.
      </p>

      <h3 className="text-xl font-medium text-white pt-6">2. How We Use Information</h3>
      <p className="leading-relaxed">
        The information collected is stringently used to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-400">
        <li>Respond to your inquiries and formulate strategy proposals.</li>
        <li>Send explicit service-related communications.</li>
        <li>Enhance and measure the impact of our digital experiences.</li>
      </ul>

      <h3 className="text-xl font-medium text-white pt-6">3. Information Sharing</h3>
      <p className="leading-relaxed">
        We do not sell, rent, or trade your personal data. We may share necessary information with our trusted backend providers (e.g., Supabase, hosting partners) solely to provide the services requested, bound by strict confidentiality.
      </p>

      <h3 className="text-xl font-medium text-white pt-6">4. Security</h3>
      <p className="leading-relaxed">
        DBL implements standard enterprise security measures to protect against the loss, misuse, or alteration of information under our control.
      </p>
      
      <h3 className="text-xl font-medium text-white pt-6">5. Contact Us</h3>
      <p className="leading-relaxed">If you have any questions regarding this Privacy Policy, contact us at <a href="mailto:hello@dblinfo.com" className="text-indigo-400 hover:text-indigo-300">hello@dblinfo.com</a>.</p>
    </div>
  );
}
