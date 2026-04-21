import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyHeagent } from "@/components/sections/WhyHeagent";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { Newsletter } from "@/components/sections/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Heagent | AI-Powered Healthcare Automation"
        description="Heagent builds AI agents that automate clinical workflows, lab diagnostics, and healthcare data management. Built by medical professionals."
        canonical="/"
      />
      <Hero />
      <HowItWorks />
      <WhyHeagent />
      <ProductsSection />
      <Newsletter />
    </div>
  );
};

export default Index;
