import { Stethoscope, Shield, Brain, Network } from "lucide-react";

const cards = [
  {
    icon: Stethoscope,
    title: "Built by Medical Professionals",
    text: "Our founders have pre-medical backgrounds. We understand clinical workflows from the inside.",
  },
  {
    icon: Shield,
    title: "Compliance-First Design",
    text: "Every product is built with healthcare data regulations in mind from day one.",
  },
  {
    icon: Brain,
    title: "Agentic, Not Just Chatbots",
    text: "Our AI agents take actions, not just answer questions — automating complete workflows.",
  },
  {
    icon: Network,
    title: "Guided by Real Clinicians",
    text: "Our Medical Network of doctors, nurses, and specialists validates every solution we build.",
  },
];

export const WhyHeagent = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Heagent?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Healthcare AI built differently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 h-full border border-border group-hover:border-accent/50 text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
