import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { Newsletter } from "@/components/sections/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Heagent | AI-Powered Healthcare Automation"
        description="Heagent automates clinical workflows, lab diagnostics, and hospital operations for healthcare providers using advanced Agentic AI. Reduce errors, save time, and focus on patient care."
      />
      <Hero />
      <HowItWorks />
      <ProductsSection />
      <TeamSection />
      <Newsletter />
    </div>
  );
};

export default Index;
