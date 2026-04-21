import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Privacy Policy | Heagent"
        description="Learn how Heagent collects, uses, and protects your information. We are committed to healthcare data compliance and your privacy."
        canonical="/privacy-policy"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-white/80">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert">

            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border space-y-10">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us through our contact form, including
                  your name, email address, and organization name. We do not collect any patient health
                  information (PHI) through this website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Contact form submissions are used solely to respond to your inquiry. We do not sell
                  your information to third parties. We may use your email to send newsletter updates
                  if you have subscribed.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">3. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable measures to protect your information. Our website uses HTTPS
                  encryption. Contact form data is transmitted securely.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">4. Healthcare Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Heagent's AI products are designed with healthcare data compliance in mind. This
                  website does not process, store, or transmit any protected health information (PHI).
                  Our products maintain compliance with applicable healthcare data regulations.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">5. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For privacy-related questions, contact us at:{" "}
                  <a href="mailto:contact@heagent.site" className="text-accent hover:underline">
                    contact@heagent.site
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/"
                className="text-accent hover:underline text-sm font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
