import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  CheckCircle,
  Loader2,
  Calendar,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/heagent-site/15-min-meeting";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  inquiryType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy to proceed",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { privacyConsent: false },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          organization: data.organization ?? "",
          inquiryType: data.inquiryType ?? "",
          message: data.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
        toast({
          title: "Message sent!",
          description: "We'll be in touch within 1 business day.",
        });
      } else {
        toast({
          title: "Something went wrong",
          description:
            "Please email us directly at contact@heagent.site",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description:
          "Something went wrong. Please email us directly at contact@heagent.site",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <SEO
          title="Contact Heagent | Request a Demo"
          description="Get in touch with Heagent to request a demo or learn about our AI healthcare solutions."
          canonical="/contact"
        />
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Message sent! We'll be in touch within 1 business day.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-accent hover:opacity-90 active:scale-95 transition-all"
              aria-label="Send another message"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Contact Heagent | Request a Demo"
        description="Get in touch with Heagent to request a demo or learn about our AI healthcare solutions."
        canonical="/contact"
      />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-white/90">
              Interested in our products or have questions? We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                  {/* Honeypot — hidden from real users, bots fill it */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Name */}
                  <div>
                    <Label htmlFor="name">
                      Name <span className="text-destructive" aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="mt-2"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-destructive" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-destructive" aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="mt-2"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-destructive" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Your hospital or organization (optional)"
                      className="mt-2"
                      {...register("organization")}
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <select
                      id="inquiryType"
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...register("inquiryType")}
                    >
                      <option value="">Select inquiry type</option>
                      <option value="demo">Request a Demo</option>
                      <option value="partnership">Partnership</option>
                      <option value="investment">Investment / Media</option>
                      <option value="general">General Question</option>
                      <option value="career">Career Opportunity</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">
                      Message <span className="text-destructive" aria-hidden="true">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your interest or questions..."
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="mt-2"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-destructive" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Consent */}
                  <div className="rounded-lg border border-border bg-muted/30 p-4">
                    <Controller
                      name="privacyConsent"
                      control={control}
                      render={({ field }) => (
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="privacyConsent"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-describedby={
                              errors.privacyConsent ? "consent-error" : undefined
                            }
                            className="mt-0.5"
                          />
                          <Label
                            htmlFor="privacyConsent"
                            className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                          >
                            I agree to the{" "}
                            <Link
                              to="/privacy-policy"
                              className="text-accent underline hover:text-accent/80"
                            >
                              Privacy Policy
                            </Link>{" "}
                            and acknowledge that my data is handled securely in compliance with
                            applicable healthcare data regulations (HIPAA / GDPR).{" "}
                            <span className="text-destructive" aria-hidden="true">*</span>
                          </Label>
                        </div>
                      )}
                    />
                    {errors.privacyConsent && (
                      <p
                        id="consent-error"
                        className="mt-2 text-sm text-destructive"
                        role="alert"
                      >
                        {errors.privacyConsent.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-accent hover:opacity-90 active:scale-95 transition-all"
                    size="lg"
                    aria-label={isSubmitting ? "Sending your message, please wait" : "Send message"}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 1 business day
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of these channels. We're here to help and answer any
                  questions you might have.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:contact@heagent.site"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-all group"
                  aria-label="Send us an email at contact@heagent.site"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm">contact@heagent.site</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/company/heagent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-all group"
                  aria-label="Connect with Heagent on LinkedIn (opens in new tab)"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <p className="text-muted-foreground text-sm">Connect with us professionally</p>
                  </div>
                </a>

                <a
                  href="https://github.com/heagent-site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-all group"
                  aria-label="Visit Heagent on GitHub (opens in new tab)"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Github className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GitHub</h3>
                    <p className="text-muted-foreground text-sm">View our open-source projects</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      Remote-first company
                      <br />
                      Building for global healthcare
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule a Demo CTA */}
              <div className="bg-gradient-accent rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Ready to automate?</h3>
                <p className="text-white/90 mb-4">
                  Schedule a demo to see how our AI solutions can transform your healthcare
                  workflows
                </p>
                <Button
                  asChild
                  className="bg-white text-accent hover:bg-white/90 active:scale-95 font-semibold transition-all"
                >
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Schedule a demo call with Heagent on Calendly (opens in new tab)"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
