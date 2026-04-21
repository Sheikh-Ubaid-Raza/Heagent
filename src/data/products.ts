export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  status: "Idea" | "Building" | "Launched";
  features: string[];
  targetUsers: string[];
}

export const products: Product[] = [
  {
    id: "lab-tester-ai",
    name: "Lab Tester AI",
    description: "Flagship AI agent for automated lab diagnostics, result interpretation, and intelligent report generation",
    longDescription:
      "Lab Tester AI is Heagent's flagship product currently under active development. It automates the end-to-end lab testing workflow — from sample intake and diagnostic processing to result interpretation and report generation. Powered by advanced Agentic AI, it assists pathologists and lab technicians by flagging anomalies, cross-referencing results against medical databases, and delivering accurate, structured reports in a fraction of the time.",
    status: "Building",
    features: [
      "Automated lab result interpretation",
      "AI-powered anomaly and pathology detection",
      "Structured diagnostic report generation",
      "Cross-reference with medical databases and reference ranges",
      "Integration with LIS (Laboratory Information Systems)",
      "Real-time alerts for critical values",
      "Multi-panel test support (CBC, LFT, RFT, lipid profile, etc.)",
      "Audit trail and compliance documentation",
    ],
    targetUsers: ["Pathologists", "Lab Technicians", "Hospitals", "Diagnostic Centers"],
  },
  {
    id: "clinical-notes",
    name: "AI Clinical Notes",
    description: "Automated clinical documentation and patient note generation",
    longDescription:
      "Transform patient interactions with medical staff into comprehensive clinical notes automatically. Our AI listens, understands, and generates accurate, compliant documentation in real-time, reducing documentation time by up to 70%.",
    status: "Idea",
    features: [
      "Voice-to-text transcription",
      "Automated SOAP note generation",
      "Compliance with medical standards",
      "Integration with EHR systems",
      "Multi-language support",
    ],
    targetUsers: ["Doctors", "Nurses", "Medical Students"],
  },
  {
    id: "medication-management",
    name: "Smart Medication Tracker",
    description: "AI-powered medication scheduling and interaction monitoring",
    longDescription:
      "Intelligent medication management system that tracks patient prescriptions, monitors drug interactions, and sends automated reminders. Helps pharmacists and nurses ensure medication safety and compliance.",
    status: "Idea",
    features: [
      "Drug interaction alerts",
      "Automated refill reminders",
      "Patient adherence tracking",
      "Integration with pharmacy systems",
      "Allergy and contraindication checks",
    ],
    targetUsers: ["Pharmacists", "Nurses", "Patients"],
  },
  {
    id: "physiotherapy-planner",
    name: "AI Therapy Planner",
    description: "Personalized physiotherapy exercise plans and progress tracking",
    longDescription:
      "Create customized physiotherapy exercise programs based on patient conditions, track progress with AI-powered analysis, and adjust plans automatically based on recovery patterns.",
    status: "Idea",
    features: [
      "Personalized exercise plans",
      "Progress tracking and analytics",
      "Video demonstration library",
      "Remote monitoring capabilities",
      "Automated plan adjustments",
    ],
    targetUsers: ["Physiotherapists", "Patients", "Rehabilitation Centers"],
  },
  {
    id: "appointment-optimizer",
    name: "Smart Appointment Scheduler",
    description: "Intelligent scheduling system for healthcare facilities",
    longDescription:
      "AI-driven appointment scheduling that optimizes clinic flow, reduces wait times, and maximizes resource utilization. Automatically handles rescheduling, reminders, and capacity planning.",
    status: "Idea",
    features: [
      "Intelligent slot allocation",
      "Automated patient reminders",
      "Multi-provider coordination",
      "Emergency slot management",
      "Analytics and reporting",
    ],
    targetUsers: ["Healthcare Administrators", "Receptionists", "Clinics"],
  },
  {
    id: "diagnostic-assistant",
    name: "AI Diagnostic Assistant",
    description: "Clinical decision support for preliminary diagnosis",
    longDescription:
      "Advanced AI system that assists healthcare providers with preliminary diagnostic suggestions based on symptoms, patient history, and medical literature. Always requires professional validation.",
    status: "Idea",
    features: [
      "Symptom analysis",
      "Differential diagnosis suggestions",
      "Evidence-based recommendations",
      "Integration with medical databases",
      "Continuous learning from cases",
    ],
    targetUsers: ["Doctors", "Medical Students", "Healthcare Facilities"],
  },
  {
    id: "patient-triage",
    name: "Smart Triage System",
    description: "AI-powered patient prioritization for emergency departments",
    longDescription:
      "Intelligent triage system that assesses patient urgency based on multiple factors, ensuring critical cases receive immediate attention while optimizing emergency department workflow.",
    status: "Idea",
    features: [
      "Real-time urgency assessment",
      "Queue management",
      "Vital signs monitoring",
      "Risk factor analysis",
      "Staff allocation recommendations",
    ],
    targetUsers: ["Emergency Departments", "Nurses", "Hospital Administrators"],
  },
  {
  id: "ai-patient-monitor",
  name: "VitalGuard",
  description: "Real-time AI-powered patient vital signs monitoring and emergency alerts",
  longDescription:
    "VitalGuard connects with multiple medical devices to continuously monitor patient vitals such as heart rate, blood pressure, oxygen saturation, and temperature. The AI agent analyzes real-time data 24/7, detects early warning signs, and instantly notifies doctors and medical staff during critical events—reducing response time and improving patient safety.",
  status: "Idea",
  features: [
    "Real-time vital sign monitoring",
    "Device integrations (BP, ECG, SpO₂, Temp, HR monitors)",
    "AI-based anomaly & critical condition detection",
    "Instant emergency notifications to doctors and nurses",
    "Patient risk scoring",
    "24/7 automated surveillance",
    "Mobile and web dashboard",
    "Integration with hospital EMR/EHR systems"
  ],
  targetUsers: ["Hospitals", "Clinics", "Doctors", "Nurses", "ICU Staff"]
}
];
