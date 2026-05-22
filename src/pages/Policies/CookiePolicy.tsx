export default function CookiePolicy() {
  return (
    <div className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-brown/80 space-y-8">
      <div>
        <h1 className="text-5xl font-serif font-bold tracking-tight text-brown mb-3">Cookie Policy</h1>
        <p className="text-brown/50 text-sm font-medium">Effective Date: May 22, 2026</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-serif font-bold text-brown pt-4">1. What Are Cookies</h3>
        <p className="leading-relaxed text-lg">
          Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help the site remember your actions and preferences to optimize your user experience.
        </p>

        <h3 className="text-2xl font-serif font-bold text-brown pt-4">2. How DBL Uses Cookies</h3>
        <p className="leading-relaxed text-lg">We use cookies primarily for:</p>
        <ul className="list-disc pl-6 space-y-3 text-brown/75 text-lg">
          <li>
            <strong className="text-brown font-bold">Strictly Necessary Cookies:</strong> To ensure the backend forms and admin panels function securely (e.g., authentication tokens).
          </li>
          <li>
            <strong className="text-brown font-bold">Analytics Cookies:</strong> To understand how visitors interact with our site, enabling us to optimize the UX and performance.
          </li>
        </ul>

        <h3 className="text-2xl font-serif font-bold text-brown pt-4">3. Managing Cookies</h3>
        <p className="leading-relaxed text-lg">
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
        </p>
      </div>
    </div>
  );
}
