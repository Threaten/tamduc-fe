// Centralized remote hospital-related images (Unsplash direct photo URLs).
// You can swap these URLs anytime; fallbacks remain local SVGs.

export const HERO_REMOTE = {
  home: "https://images.unsplash.com/photo-1586773860414-9c5edc1f4a3f?auto=format&fit=crop&w=1600&q=80",
  about: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
  services: "https://images.unsplash.com/photo-1584982753584-7d2c42b02968?auto=format&fit=crop&w=1600&q=80",
  departments: "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
  doctor: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
  blogs: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
  gallery: "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80",
  contact: "https://images.unsplash.com/photo-1582719478250-95b89f3a9f3b?auto=format&fit=crop&w=1600&q=80",
  reservation: "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1600&q=80",
  emergency: "https://images.unsplash.com/photo-1576765978241-33ea48064440?auto=format&fit=crop&w=1600&q=80",
  faq: "https://images.unsplash.com/photo-1580281657527-47e2d6fd1f3b?auto=format&fit=crop&w=1600&q=80",
} as const;

export const HERO_REMOTE_CANDIDATES: Record<keyof typeof HERO_REMOTE, string[]> = {
  home: [
    "https://images.unsplash.com/photo-1586773860414-9c5edc1f4a3f?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
  ],
  about: [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1600&q=80",
  ],
  services: [
    "https://images.unsplash.com/photo-1584982753584-7d2c42b02968?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1582719735998-2a636e7bf48e?auto=format&fit=crop&w=1600&q=80",
  ],
  departments: [
    "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1584982753584-7d2c42b02968?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80",
  ],
  doctor: [
    "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1200&q=80",
  ],
  blogs: [
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1600&q=80",
  ],
  contact: [
    "https://images.unsplash.com/photo-1582719478250-95b89f3a9f3b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
  ],
  reservation: [
    "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1582719735998-2a636e7bf48e?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1600&q=80",
  ],
  emergency: [
    "https://images.unsplash.com/photo-1576765978241-33ea48064440?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1586773860414-9c5edc1f4a3f?auto=format&fit=crop&w=1600&q=80",
  ],
  faq: [
    "https://images.unsplash.com/photo-1580281657527-47e2d6fd1f3b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
  ],
};

export const DEPARTMENT_REMOTE: Record<string, string> = {
  cardiology: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1600&q=80", // ECG/monitor
  pediatrics: "https://images.unsplash.com/photo-1609204766980-0796d6a0e8b2?auto=format&fit=crop&w=1600&q=80", // child patient
  orthopedics: "https://images.unsplash.com/photo-1582719478289-5e4a7f54c9a9?auto=format&fit=crop&w=1600&q=80", // x-ray
  dermatology: "https://images.unsplash.com/photo-1582560475093-1f9f3f9137e9?auto=format&fit=crop&w=1600&q=80", // skin consult
  neurology: "https://images.unsplash.com/photo-1581091012184-7c4c8b40a1d1?auto=format&fit=crop&w=1600&q=80", // brain scan
};

export const DEPARTMENT_REMOTE_CANDIDATES: Record<string, string[]> = {
  cardiology: [
    "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
  ],
  pediatrics: [
    "https://images.unsplash.com/photo-1609204766980-0796d6a0e8b2?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1600&q=80",
  ],
  orthopedics: [
    "https://images.unsplash.com/photo-1582719478289-5e4a7f54c9a9?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1582719735998-2a636e7bf48e?auto=format&fit=crop&w=1600&q=80",
  ],
  dermatology: [
    "https://images.unsplash.com/photo-1582560475093-1f9f3f9137e9?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1580281657527-47e2d6fd1f3b?auto=format&fit=crop&w=1600&q=80",
  ],
  neurology: [
    "https://images.unsplash.com/photo-1581091012184-7c4c8b40a1d1?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80",
  ],
};

export const BLOG_REMOTE: Record<string, string> = {
  "healthy-heart-tips": "https://images.unsplash.com/photo-1510022079733-8b58aca7c4a8?auto=format&fit=crop&w=1600&q=80",
  "child-vaccination-guide": "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1600&q=80",
  "managing-chronic-pain": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
  "understanding-high-cholesterol": "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
  "flu-season-prep": "https://images.unsplash.com/photo-1584467735871-ec3abf7f1a8b?auto=format&fit=crop&w=1600&q=80",
  "when-to-see-a-dermatologist": "https://images.unsplash.com/photo-1582560475093-1f9f3f9137e9?auto=format&fit=crop&w=1600&q=80",
};

export const BLOG_REMOTE_CANDIDATES: Record<string, string[]> = Object.fromEntries(
  Object.entries(BLOG_REMOTE).map(([k, v]) => [k, [v, HERO_REMOTE.blogs, HERO_REMOTE.about]])
) as Record<string, string[]>;

export const DOCTOR_REMOTE: Record<string, string> = {
  "linh-nguyen": "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
  "minh-le": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  "thu-tran": "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1200&q=80",
  "quang-phan": "https://images.unsplash.com/photo-1582719478250-95b89f3a9f3b?auto=format&fit=crop&w=1200&q=80",
  "ly-hoang": "https://images.unsplash.com/photo-1584982753584-7d2c42b02968?auto=format&fit=crop&w=1200&q=80",
  "an-vo": "https://images.unsplash.com/photo-1581091012184-7c4c8b40a1d1?auto=format&fit=crop&w=1200&q=80",
};

export const DOCTOR_REMOTE_CANDIDATES: Record<string, string[]> = Object.fromEntries(
  Object.entries(DOCTOR_REMOTE).map(([k, v]) => [k, [v, HERO_REMOTE.doctor, HERO_REMOTE.home]])
) as Record<string, string[]>;

export const GALLERY_REMOTE: string[] = [
  "https://images.unsplash.com/photo-1586773860414-9c5edc1f4a3f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1582719735998-2a636e7bf48e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1584982753584-7d2c42b02968?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1584467735871-ec3abf7f1a8b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1584985235176-5f0f7d9f4d18?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1582550884961-8ec8c9ac6b5b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1580281657579-47e2d6fd1f3b?auto=format&fit=crop&w=1200&q=80",
];
