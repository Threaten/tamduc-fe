// Centralized dummy data for the clinic site
// Keep text monochrome in UI; icons can be colored SVGs in /public/icons

export type Department = {
  slug: string;
  title: string;
  about: string;
  icon: string; // /icons/*.svg
  phone: string;
  email: string;
  address: string;
  hours: string;
  services: string[];
  conditions: string[];
};

export type Doctor = {
  id: string;
  name: string;
  role: string;
  bio: string;
  years: number;
  languages: string[];
  education: string[];
  schedule: { day: string; time: string }[];
};

export type Service = {
  title: string;
  desc: string;
  icon: string; // /icons/*.svg
  items: string[];
  prep?: string;
};

export const departments: Department[] = [
  {
    slug: "cardiology",
    title: "Cardiology",
    about: "Evidence-based care for heart and vascular health, from prevention to intervention.",
    icon: "/icons/heart.svg",
    phone: "+84 28 1234 5678",
    email: "cardiology@healthplus.example",
    address: "Level 3, 123 Nguyen Trai, District 1, HCMC",
    hours: "Mon–Sat 8:00–18:00",
    services: ["ECG", "Echocardiography", "Hypertension clinic", "Lipid clinic"],
    conditions: ["Coronary artery disease", "Arrhythmias", "Heart failure", "Hypertension"],
  },
  {
    slug: "pediatrics",
    title: "Pediatrics",
    about: "Holistic care for infants, children, and adolescents with a focus on prevention.",
    icon: "/icons/syringe.svg",
    phone: "+84 28 2234 5678",
    email: "pediatrics@healthplus.example",
    address: "Level 2, 123 Nguyen Trai, District 1, HCMC",
    hours: "Mon–Sat 8:00–18:00",
    services: ["Well-child visits", "Vaccinations", "Developmental screening", "Nutrition counseling"],
    conditions: ["Fever", "Cough & cold", "Asthma", "Allergies"],
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    about: "Advanced treatments for bone and joint conditions, including sports injuries.",
    icon: "/icons/bone.svg",
    phone: "+84 28 3234 5678",
    email: "orthopedics@healthplus.example",
    address: "Level 4, 123 Nguyen Trai, District 1, HCMC",
    hours: "Mon–Sat 8:00–18:00",
    services: ["Fracture care", "Sports injury clinic", "Joint pain management", "Post-op rehab"],
    conditions: ["Sprains & strains", "ACL/MCL injuries", "Arthritis", "Back pain"],
  },
  {
    slug: "dermatology",
    title: "Dermatology",
    about: "Comprehensive care for skin, hair, and nails with medical and minor cosmetic procedures.",
    icon: "/icons/lab.svg",
    phone: "+84 28 4234 5678",
    email: "dermatology@healthplus.example",
    address: "Level 5, 123 Nguyen Trai, District 1, HCMC",
    hours: "Mon–Sat 9:00–17:00",
    services: ["Acne clinic", "Mole checks", "Eczema management", "Minor procedures"],
    conditions: ["Acne", "Dermatitis", "Psoriasis", "Fungal infections"],
  },
  {
    slug: "neurology",
    title: "Neurology",
    about: "Diagnosis and treatment of brain and nervous system disorders.",
    icon: "/icons/brain.svg",
    phone: "+84 28 5234 5678",
    email: "neurology@healthplus.example",
    address: "Level 6, 123 Nguyen Trai, District 1, HCMC",
    hours: "Mon–Fri 9:00–17:00",
    services: ["Headache clinic", "Seizure management", "Memory assessment"],
    conditions: ["Migraine", "Epilepsy", "Neuropathy", "Parkinsonism"],
  },
];

export const doctorsByDepartment: Record<string, Doctor[]> = {
  cardiology: [
    {
      id: "linh-nguyen",
      name: "Dr. Linh Nguyen",
      role: "Interventional Cardiologist",
      bio: "Specializes in coronary interventions and preventive cardiology.",
      years: 12,
      languages: ["Vietnamese", "English"],
      education: ["MD, University of Medicine Pham Ngoc Thach", "Fellowship in Interventional Cardiology"],
      schedule: [
        { day: "Mon", time: "09:00–12:00" },
        { day: "Wed", time: "14:00–18:00" },
        { day: "Sat", time: "09:00–12:00" },
      ],
    },
    {
      id: "minh-le",
      name: "Dr. Minh Le",
      role: "Cardiac Electrophysiologist",
      bio: "Expert in arrhythmia management and ablation procedures.",
      years: 10,
      languages: ["Vietnamese", "English"],
      education: ["MD, Hue University of Medicine", "Electrophysiology Fellowship"],
      schedule: [
        { day: "Tue", time: "09:00–12:00" },
        { day: "Thu", time: "14:00–18:00" },
      ],
    },
  ],
  pediatrics: [
    {
      id: "thu-tran",
      name: "Dr. Thu Tran",
      role: "Pediatrician",
      bio: "Focus on growth, development, and preventive care.",
      years: 8,
      languages: ["Vietnamese", "English"],
      education: ["MD, University of Medicine HCMC", "Pediatrics Residency"],
      schedule: [
        { day: "Mon", time: "14:00–18:00" },
        { day: "Wed", time: "09:00–12:00" },
        { day: "Sat", time: "08:00–12:00" },
      ],
    },
  ],
  orthopedics: [
    {
      id: "quang-phan",
      name: "Dr. Quang Phan",
      role: "Orthopedic Surgeon",
      bio: "Sports injury and joint replacement specialist.",
      years: 11,
      languages: ["Vietnamese", "English"],
      education: ["MD, Hanoi Medical University", "Orthopedics Residency"],
      schedule: [
        { day: "Tue", time: "09:00–12:00" },
        { day: "Fri", time: "14:00–18:00" },
      ],
    },
  ],
  dermatology: [
    {
      id: "ly-hoang",
      name: "Dr. Ly Hoang",
      role: "Dermatologist",
      bio: "Medical and cosmetic dermatology.",
      years: 9,
      languages: ["Vietnamese", "English"],
      education: ["MD, Can Tho University of Medicine", "Dermatology Fellowship"],
      schedule: [
        { day: "Mon", time: "09:00–12:00" },
        { day: "Thu", time: "14:00–18:00" },
      ],
    },
  ],
  neurology: [
    {
      id: "an-vo",
      name: "Dr. An Vo",
      role: "Neurologist",
      bio: "Headache, epilepsy, and neurodegenerative disorders.",
      years: 13,
      languages: ["Vietnamese", "English"],
      education: ["MD, Yersin University", "Neurology Residency"],
      schedule: [
        { day: "Wed", time: "09:00–12:00" },
        { day: "Fri", time: "14:00–18:00" },
      ],
    },
  ],
};

export const services: Service[] = [
  { title: "General Check-ups", desc: "Annual physicals and preventive care.", icon: "/icons/stethoscope.svg", items: ["Vitals & BMI", "ECG", "Counseling"], prep: "Fast 8 hours for blood tests when advised." },
  { title: "Imaging", desc: "Ultrasound, X-ray, and MRI (partner).", icon: "/icons/bone.svg", items: ["Ultrasound", "Plain X-ray", "MRI (partner)"] },
  { title: "Laboratory", desc: "Comprehensive blood and diagnostics.", icon: "/icons/lab.svg", items: ["CBC", "Lipid profile", "HbA1c"], prep: "Hydrate well; morning collection preferred." },
  { title: "Telemedicine", desc: "Virtual visits with our doctors.", icon: "/icons/heart.svg", items: ["Follow-ups", "e-Prescriptions", "Results review"] },
  { title: "Vaccinations", desc: "Adult and pediatric immunizations.", icon: "/icons/syringe.svg", items: ["Influenza", "COVID-19", "Child schedule"], prep: "Bring vaccine history if available." },
  { title: "Physiotherapy", desc: "Rehabilitation and mobility programs.", icon: "/icons/bone.svg", items: ["Post-op rehab", "Sports injuries", "Back pain"] },
  { title: "Dermatology procedures", desc: "In-office minor procedures.", icon: "/icons/lab.svg", items: ["Cryotherapy", "Biopsy", "Comedone extraction"] },
];
