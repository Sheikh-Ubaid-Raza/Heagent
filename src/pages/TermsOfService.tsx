import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Terms of Service | Heagent"
        description="Terms of Service for the Heagent website. Understand the terms governing your use of our healthcare AI platform and services."
        canonical="/terms-of-service"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
                <h2 className="text-xl font-semibold mb-3 text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing heagent.vercel.app (the "Website"), you agree to these Terms of
                  Service. If you do not agree, do not use this Website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">2. Website Use</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Website is for informational purposes about Heagent's AI healthcare products.
                  The content does not constitute medical advice. No clinical decisions should be made
                  based solely on information from this Website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">3. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this Website, including text, graphics, logos, and product
                  descriptions, is the property of Heagent and protected by copyright.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">4. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Heagent provides this Website "as is." We make no warranties regarding accuracy or
                  completeness of content. Heagent is not liable for any damages arising from use of
                  this Website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">5. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about these Terms:{" "}
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

export default TermsOfService;
