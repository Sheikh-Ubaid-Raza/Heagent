import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  FlaskConical,
  FileText,
  AlertTriangle,
  Loader2,
  CheckCircle,
} from "lucide-react";

const SUBSCRIBE_API_URL = "/api/subscribe";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

const LabTesterAI = () => {
  const { toast } = useToast();
  const [joined, setJoined] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      const res = await fetch(SUBSCRIBE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, source: "Lab Tester AI Waitlist" }),
      });
      if (res.ok) {
        setJoined(true);
        reset();
        toast({
          title: "You're on the list!",
          description: "We'll notify you when Lab Tester AI is ready for early access.",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  const features = [
    {
      icon: FlaskConical,
      title: "Automated Diagnostics",
      description:
        "AI reads lab samples and generates preliminary analysis, assisting pathologists with faster and more consistent results.",
    },
    {
      icon: AlertTriangle,
      title: "Result Interpretation",
      description:
        "Intelligent flagging of abnormal values with clinical context, cross-referencing against medical databases and reference ranges.",
    },
    {
      icon: FileText,
      title: "Report Generation",
      description:
        "Structured, professional diagnostic reports generated in seconds — complete with annotations and clinical recommendations.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Lab Tester AI | Heagent"
        description="Lab Tester AI is Heagent's flagship AI agent for automated lab diagnostics, result interpretation, and intelligent report generation. Join the early access waitlist."
        canonical="/products/lab-tester-ai"
      />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                Building
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Lab Tester AI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Flagship AI agent for automated lab diagnostics, result interpretation,
              and intelligent report generation
            </p>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Built for:</span>
            {["Pathologists", "Lab Technicians", "Hospitals", "Diagnostic Centers"].map(
              (user) => (
                <span
                  key={user}
                  className="text-sm bg-accent/10 text-accent px-4 py-1.5 rounded-full font-medium"
                >
                  {user}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What It Does</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three core capabilities that transform the lab diagnostics workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border hover:border-accent/50 group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status & Waitlist */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 text-sm px-4 py-1">
              In Development
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Currently in Development
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Lab Tester AI is being actively built. Join our early access list to be
              the first to know when it's ready.
            </p>

            {joined ? (
              <div className="bg-card rounded-2xl p-8 shadow-card border border-accent/30 animate-fade-in">
                <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                <p className="text-muted-foreground">
                  We'll notify you as soon as Lab Tester AI is ready for early access.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="max-w-md mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      aria-label="Email for waitlist"
                      aria-invalid={!!errors.email}
                      className="h-12"
                      {...register("email")}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-accent hover:opacity-90 active:scale-95 transition-all h-12 px-6 font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining…
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-destructive text-left" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </form>
            )}

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                Interested in a demo or want to discuss a partnership?
              </p>
              <Button asChild variant="outline" className="hover:border-accent hover:text-accent">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabTesterAI;
