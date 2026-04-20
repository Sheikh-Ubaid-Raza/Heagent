import { teamMembers, mentors } from "@/data/team";
import { User } from "lucide-react";

export const TeamSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Medical professionals with expertise in AI and healthcare automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border hover:border-accent/50 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-accent font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Our Medical Network
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're connected with experienced medical professionals who mentor us and help identify
            real-world problems to solve
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {mentors.map((mentor, index) => (
            <div
              key={mentor.role}
              className="bg-card rounded-xl p-6 text-center shadow-card border border-border hover:border-accent/50 transition-all animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <p className="font-semibold text-foreground">{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
