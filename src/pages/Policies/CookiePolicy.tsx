export default function CookiePolicy() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-zinc-300 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Cookie Policy</h1>
      <p className="text-zinc-500 mb-12">Effective Date: [Current Date]</p>

      <h3 className="text-xl font-medium text-white pt-6">1. What Are Cookies</h3>
      <p className="leading-relaxed">
        Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help the site remember your actions and preferences to optimize your user experience.
      </p>

      <h3 className="text-xl font-medium text-white pt-6">2. How DBL Uses Cookies</h3>
      <p className="leading-relaxed">We use cookies primarily for:</p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-400">
        <li><strong className="text-zinc-300 font-medium">Strictly Necessary Cookies:</strong> To ensure the backend forms and admin panels function securely (e.g., authentication tokens).</li>
        <li><strong className="text-zinc-300 font-medium">Analytics Cookies:</strong> To understand how visitors interact with our site, enabling us to optimize the UX and performance.</li>
      </ul>

      <h3 className="text-xl font-medium text-white pt-6">3. Managing Cookies</h3>
      <p className="leading-relaxed">
        You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
      </p>
    </div>
  );
}
