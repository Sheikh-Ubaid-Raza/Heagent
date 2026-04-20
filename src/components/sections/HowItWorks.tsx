import { Brain, Zap, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Brain,
      title: "Identify Repetitive Tasks",
      description:
        "We analyze healthcare workflows to identify time-consuming repetitive tasks that can be automated with AI.",
    },
    {
      icon: Zap,
      title: "Build AI Agents",
      description:
        "Our agentic AI systems learn and adapt to automate these tasks intelligently, maintaining accuracy and compliance.",
    },
    {
      icon: CheckCircle,
      title: "Save Time & Resources",
      description:
        "Healthcare professionals focus on patient care while our AI handles documentation, scheduling, and administrative work.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our three-step process to transform healthcare workflows with agentic AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 h-full border border-border group-hover:border-accent/50">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
