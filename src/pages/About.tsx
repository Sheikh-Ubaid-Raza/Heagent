import { SEO } from "@/components/SEO";
import { teamMembers, mentors } from "@/data/team";
import { User, Heart, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="About Heagent | Healthcare AI Company"
        description="Meet the team behind Heagent — medical professionals and AI engineers building intelligent automation tools for hospitals, clinics, and diagnostic labs. Discover our mission and medical network."
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Heagent
            </h1>
            <p className="text-xl text-white/90">
              Medical professionals building AI solutions for healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Medical professionals combining healthcare knowledge with AI expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border"
              >
                {member.image ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-accent/20">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="h-12 w-12 text-white" />
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
                <p className="text-accent font-medium mb-4 text-center">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What drives us to build AI solutions for healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To automate repetitive healthcare tasks, allowing medical professionals to focus on
                what matters most: patient care.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Healthcare First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our medical background ensures we understand the challenges and build solutions that
                truly help healthcare professionals.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We leverage cutting-edge agentic AI technology to create intelligent, adaptive
                solutions for complex healthcare workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Medical Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're guided by experienced medical professionals who help us understand real-world
              healthcare challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mentors.map((mentor) => (
              <div
                key={mentor.role}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-accent/50 transition-all"
              >
                <h3 className="text-lg font-bold mb-3 text-accent">{mentor.role}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {mentor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
