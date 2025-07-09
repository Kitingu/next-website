import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Proto Energy</title>
      </Head>

      <Header />
      <div className="pt-32 px-2 pb-20 bg-cover bg-center bg-no-repeat text-gray-800 space-y-20">
        <div className="bg-white text-gray-800 font-sans">
          <div className="bg-protoblue text-white py-6 px-4 shadow-md">
            <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
            <p className="text-center mt-1 text-sm">Effective Date: 1st Jan 2025</p>
          </div>

          <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
            <p>
              At <strong>Proto Energy Limited</strong> (“Proto Energy”, “we”, “our”, or “us”), your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information across our websites, mobile applications, and digital services.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">1. Scope</h2>
              <p>
                This policy applies to all digital platforms operated by Proto Energy, including websites (
                <a href="https://www.protoenergy.com" target="_blank" rel="noreferrer" className="text-protopink underline">
                  www.protoenergy.com
                </a>,{" "}
                <a href="https://www.pro.co.ke" target="_blank" rel="noreferrer" className="text-protopink underline">
                  www.pro.co.ke
                </a>,{" "}
                <a href="https://www.otogas.protoenergy.com" target="_blank" rel="noreferrer" className="text-protopink underline">
                  www.otogas.protoenergy.com
                </a>
                ), mobile apps, and related online tools or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">2. Information We Collect</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Personal Information:</strong> Name, phone number, email, address, etc.</li>
                <li><strong>Account Data:</strong> Login credentials, account preferences, profile details.</li>
                <li><strong>Usage Data:</strong> Browser type, device information, pages visited, app activity.</li>
                <li><strong>Transaction Information:</strong> Purchases, wallet top-ups, orders, fuel usage (if applicable).</li>
                <li><strong>Location Data:</strong> Only with explicit permission from the user.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To provide and improve our services and customer experience</li>
                <li>To manage accounts, subscriptions, and transactions</li>
                <li>To send service updates, notifications, or marketing messages</li>
                <li>To comply with legal obligations and protect platform integrity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">4. Sharing and Disclosure</h2>
              <p>
                Proto Energy does <strong>not sell</strong> your personal information. We may share your data:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>With trusted third-party providers (e.g., payment processors, hosting partners)</li>
                <li>With regulatory bodies or law enforcement when legally required</li>
                <li>With subsidiaries or affiliates for business operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">5. Data Security</h2>
              <p>
                We implement industry-standard technical and organizational measures such as HTTPS encryption, secure data storage, and role-based access control to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">6. Cookies and Tracking</h2>
              <p>
                Our websites may use cookies and similar technologies to improve functionality and analyze user behavior. You may choose to disable cookies in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">7. Your Rights</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access or update your personal information</li>
                <li>Request data deletion (subject to retention requirements) or use click on this link to{" "}
                  <a href="/delete-account" target="_blank" rel="noreferrer" className="text-protopink underline">Deactivate Account</a>
                </li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="mt-2">
                To make a request, contact us at{" "}
                Email: <a href="mailto:info@protoenergy.com" className="text-protopink underline">info@protoenergy.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">8. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary to fulfill our service obligations, legal requirements, or internal business operations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">9. Children's Privacy</h2>
              <p>
                Our platforms are not intended for individuals under the age of 18. We do not knowingly collect data from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-protoblue">11. Contact Us</h2>
              <p>
                If you have any questions about this policy or how your data is handled, please contact us:
                <br />
                <strong>Proto Energy Limited</strong>
                <br />
                Email: <a href="mailto:info@protoenergy.com" className="text-protopink underline">info@protoenergy.com</a>
                <br />
                Phone: <a href="tel:0800723666" className="text-protopink underline">0800 723 666</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
