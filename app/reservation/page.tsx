import { HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";
import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import StaticBreadcrumb from "../components/StaticBreadcrumb";
import { ReservationForm } from "./components/reservation-form";
import { getDepartments, getHeroes } from "@/lib/api/queries";

export const metadata: Metadata = {
  title: "Đặt lịch khám",
  description:
    "Đặt lịch hẹn với thông tin liên hệ xác thực và thời gian mong muốn.",
  openGraph: { images: [{ url: "/og-default.png", width: 1200, height: 630 }] },
};

export default async function ReservationPage() {
  type DepartmentItem = {
    slug: string;
    title: string;
    id: string;
  };

  const loadedHeroes = (await getHeroes()) as { SectionHero: Heroes };
  const hero = loadedHeroes.SectionHero;
  type Heroes = {
    reservationHero: { url: string | null };
    reservationSlogan: string;
    reservationDescription: string;
  };

  const loadedData = (await getDepartments()) as {
    Departments: { docs: DepartmentItem[] };
  };
  const departments = loadedData.Departments.docs;

  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/reservation", label: "Đặt lịch" },
        ]}
      />
      <PageHero
        title={hero?.reservationSlogan || "Đặt lịch"}
        subtitle={
          hero?.reservationDescription ||
          "Gửi thời gian hẹn mong muốn — chúng tôi sẽ xác nhận qua email/SMS."
        }
        imageSrc={`${process.env.ADMIN_API_ENDPOINT}/${hero.reservationHero.url}`}
        imageFallbackRemotes={HERO_REMOTE_CANDIDATES.reservation.slice(1)}
        imageFallbackSrc="/heroes/reservation.svg"
        imageAlt="Đặt lịch"
      />
      <div className="mx-auto max-w-2xl px-4 py-12">
        <ReservationForm departmentsProp={departments} />
      </div>
    </div>
  );
}
