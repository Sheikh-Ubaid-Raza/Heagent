export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ubaid Raza",
    role: "Co-Founder & CEO",
    bio: "Medical professional with pre-medical background and expertise in web development, AI, and agentic systems. Passionate about leveraging technology to solve healthcare challenges.",
    image: "/images/ubaid.png",
  },
  {
    name: "Canon Yousuf",
    role: "Co-Founder & COO",
    bio: "Pre-medical with advanced skills in computer science and agentic AI. Computer Instructor at a Nursing Institute, focused on building innovative solutions for medical and healthcare workflows.",
    image: "/images/canon.png",
  },
];

export interface Mentor {
  role: string;
  description: string;
}

export const mentors: Mentor[] = [
  {
    role: "Doctors",
    description: "Experienced physicians providing insights into clinical workflows and diagnostic processes",
  },
  {
    role: "Nurses",
    description: "Healthcare professionals guiding us on patient care automation and documentation needs",
  },
  {
    role: "Pharmacists",
    description: "Medication experts helping us understand drug management and patient safety requirements",
  },
  {
    role: "Physiotherapists",
    description: "Rehabilitation specialists advising on therapy planning and patient progress tracking",
  },
  {
    role: "Healthcare Educators",
    description: "Medical instructors helping us understand educational workflows and training requirements",
  },
  {
    role: "General Physicians",
    description: "Primary care doctors providing insights into patient management and preventive care",
  },
  {
    role: "Researchers",
    description: "Medical researchers guiding us on data analysis and evidence-based practice automation",
  },
  {
    role: "Surgeons",
    description: "Surgical specialists advising on operating room workflows and surgical planning systems",
  },
];
