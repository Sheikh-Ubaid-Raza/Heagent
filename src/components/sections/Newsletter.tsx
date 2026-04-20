import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_URL = "https://formspree.io/f/your_endpoint_here";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const Newsletter = () => {
  const { toast } = useToast();
  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubscribed(true);
        reset();
        toast({
          title: "You're subscribed!",
          description: "We'll keep you updated on our latest products and news.",
        });
      } else {
        toast({
          title: "Subscription failed",
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

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gradient-accent rounded-3xl p-8 md:p-12 text-center shadow-elegant animate-fade-in">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            {subscribed ? (
              <CheckCircle className="h-8 w-8 text-white" />
            ) : (
              <Mail className="h-8 w-8 text-white" />
            )}
          </div>

          {subscribed ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">You're In!</h2>
              <p className="text-white/90 text-lg">
                Thanks for subscribing. We'll keep you updated on healthcare AI insights and
                product launches.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-white/90 text-lg mb-8">
                Subscribe to our newsletter for product updates, healthcare AI insights, and
                exclusive early access
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="max-w-md mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      aria-label="Email address for newsletter subscription"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "newsletter-email-error" : undefined}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                      {...register("email")}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? "Subscribing, please wait" : "Subscribe to newsletter"}
                    className="bg-white text-accent hover:bg-white/90 active:scale-95 font-semibold transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Subscribing…
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>

                {errors.email && (
                  <p
                    id="newsletter-email-error"
                    className="mt-2 text-sm text-red-200 text-left"
                    role="alert"
                  >
                    {errors.email.message}
                  </p>
                )}
              </form>

              <p className="text-white/70 text-sm mt-4">No spam. Unsubscribe anytime.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
