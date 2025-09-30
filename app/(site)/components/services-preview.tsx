import Image from "next/image";
import { getServices } from "@/lib/api/queries";
import Link from "next/link";

type ServiceIItem = {
  id: string;
  title: string;
  desc: string;
  prep?: string;
  icon: { url: string };
  items: { value: string }[];
};

export default async function ServicesPreview() {
  const loadedData = (await getServices()) as {
    Services: { docs: ServiceIItem[] };
  };
  // Removed debug log

  const services: ServiceIItem[] = loadedData.Services.docs;
  const items = services.slice(0, 3);
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Dịch vụ
          </h2>
          <Link
            href="/services"
            className="text-sm underline underline-offset-4"
          >
            Xem tất cả
          </Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-black/10 dark:border-white/10 p-5"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={`${process.env.ADMIN_API_ENDPOINT}/${s.icon.url}`}
                  alt=""
                  width={50}
                  height={50}
                />
                <h3 className="font-medium">{s.title}</h3>
              </div>
              <p className="text-sm mt-1 opacity-80">{s.desc}</p>
              <ul className="mt-3 text-sm opacity-80 list-disc pl-5 space-y-1">
                {s.items.map((i) => (
                  <li key={i.value}>{i.value}</li>
                ))}
              </ul>
              {s.prep ? (
                <p className="text-xs mt-3 opacity-70">Chuẩn bị: {s.prep}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
