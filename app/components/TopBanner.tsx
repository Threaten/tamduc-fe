import Link from "next/link";

interface TopBannerProps {
  general?: {
    emergencyHotline?: string | null;
  };
}

export default function TopBanner({ general }: TopBannerProps) {
  return (
    <div className="bg-black text-white dark:bg-white dark:text-black">
      <div className="mx-auto max-w-6xl px-4 py-2 text-xs flex items-center justify-between gap-4">
        <div className="min-w-0">
          Trường hợp khẩn cấp? Gọi 115 (Cấp cứu). Liên hệ khẩn tại phòng khám:{" "}
          {general?.emergencyHotline || "(đang cập nhật)"}
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/emergency"
            className="underline underline-offset-4"
            aria-label="Thông tin cấp cứu"
          >
            Thông tin cấp cứu
          </Link>
        </div>
      </div>
    </div>
  );
}
