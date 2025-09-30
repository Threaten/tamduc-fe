import Link from "next/link";
import { FOOTER_DEPARTMENT_LINKS, FOOTER_RESOURCE_LINKS } from "./navigation";

type GeneralInfo = {
  name?: string | null;
  address?: string | null;
  operatingHours?: string | null;
  hotline1?: string | null;
  hotline2?: string | null;
  emergencyHotline?: string | null;
  email?: string | null;
  socials?: { name: string; url: string }[] | null;
};

interface FooterProps {
  general?: GeneralInfo;
}

export default function Footer({ general }: FooterProps) {
  return (
    <footer className="border-t border-black/30 dark:border-white/40 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-lg">{general?.name}</h4>
          <p className="mt-2 opacity-80">Địa chỉ: {general?.address}</p>
          {/* <p className="opacity-80">
            Operating Hours: {general?.general?.operatingHours}
          </p> */}
          <p className="opacity-80">
            Điện thoại: {general?.hotline1}
            {general?.hotline2 ? ` - ${general.hotline2}` : ""}
          </p>
          <p className="opacity-80">Khẩn cấp: {general?.emergencyHotline}</p>
          <p className="opacity-80">Email: {general?.email}</p>
          {general?.socials && general.socials.length > 0 && (
            <div className="mt-4 space-x-4">
              {general.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 opacity-80"
                ></a>
              ))}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium">Chuyên khoa</h4>
          <ul className="mt-2 space-y-1 opacity-80">
            {FOOTER_DEPARTMENT_LINKS.map((l) => (
              <li key={l.href}>
                <Link className="underline underline-offset-4" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Tài nguyên</h4>
          <ul className="mt-2 space-y-1 opacity-80">
            {FOOTER_RESOURCE_LINKS.map((l) => (
              <li key={l.href}>
                <Link className="underline underline-offset-4" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Giờ làm việc</h4>
          <p className="mt-2 opacity-80">{general?.operatingHours}</p>
          <p className="mt-4 opacity-70">
            Bản quyền © {general?.name}. {new Date().getFullYear()} Bảo lưu mọi
            quyền.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
