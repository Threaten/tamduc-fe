export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "Giới thiệu" },
  { href: "/teams", label: "Đội ngũ" },
  { href: "/departments", label: "Chuyên khoa" },
  { href: "/services", label: "Dịch vụ" },
  { href: "/gallery", label: "Thư viện" },
  { href: "/blogs", label: "Bài viết" },
  { href: "/contact", label: "Liên hệ" },
  // { href: "/reservation", label: "Đặt lịch" },
];

export const FOOTER_DEPARTMENT_LINKS: NavLink[] = [
  { href: "/departments/cardiology", label: "Tim mạch" },
  { href: "/departments/pediatrics", label: "Nhi" },
  { href: "/departments/orthopedics", label: "Chấn thương chỉnh hình" },
  { href: "/departments/dermatology", label: "Da liễu" },
  { href: "/departments/neurology", label: "Thần kinh" },
];

export const FOOTER_RESOURCE_LINKS: NavLink[] = [
  { href: "/blogs", label: "Bài viết" },
  { href: "/faq", label: "Hỏi đáp" },
  { href: "/emergency", label: "Cấp cứu" },
  { href: "/reservation", label: "Đặt lịch" },
];
