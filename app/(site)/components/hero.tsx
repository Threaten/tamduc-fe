import Link from "next/link";
import HeroImage from "@/app/components/hero-image";
import { HERO_REMOTE_CANDIDATES } from "@/lib/remote-images";

type HeroProps = {
  homeHero: string;
  homeDescription: string;
  homeSlogan: string;
};

export default function Hero({
  homeHero,
  homeDescription,
  homeSlogan,
}: HeroProps) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {homeSlogan}
          </h1>
          <p className="mt-4 text-base opacity-80">{homeDescription}</p>
          <div className="mt-8 flex gap-3">
            <Link href="/reservation" className="btn-primary px-6 py-3 text-sm">
              Đặt lịch khám
            </Link>
            <Link
              href="/departments"
              className="btn-secondary px-6 py-3 text-sm"
            >
              Xem chuyên khoa
            </Link>
          </div>
          {/* <div className="mt-10 grid grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Image
                src={`${process.env.ADMIN_API_ENDPOINT}/${homeHero}`}
                alt="Clinicians"
                width={24}
                height={24}
              />
              <div>
                <p className="font-medium">35+</p>
                <p className="opacity-80">Clinicians</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/heart.svg"
                alt="Patients"
                width={24}
                height={24}
              />
              <div>
                <p className="font-medium">12k+</p>
                <p className="opacity-80">Patients / year</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/lab.svg"
                alt="Diagnostics"
                width={24}
                height={24}
              />
              <div>
                <p className="font-medium">Same-day</p>
                <p className="opacity-80">Diagnostics</p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 aspect-video relative">
          <HeroImage
            src={`${process.env.ADMIN_API_ENDPOINT}/${homeHero}`}
            fallbackRemotes={HERO_REMOTE_CANDIDATES.home.slice(1)}
            fallbackSrc="/heroes/home.svg"
            alt="Tòa nhà phòng khám"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
