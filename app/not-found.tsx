import Link from "next/link";
import StaticBreadcrumb from "./components/StaticBreadcrumb";

export const metadata = {
  title: "Không tìm thấy trang",
};

// Global 404 page (App Router convention)
export default function NotFound() {
  return (
    <div>
      <StaticBreadcrumb
        items={[
          { href: "/", label: "Trang chủ" },
          { href: "/404", label: "Không tìm thấy" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <p className="text-sm uppercase tracking-wide opacity-60 mb-4">Lỗi 404</p>
        <h1 className="text-3xl font-semibold tracking-tight">Trang không tồn tại</h1>
        <p className="mt-4 opacity-80 max-w-xl mx-auto">
          Đường dẫn bạn truy cập có thể đã bị thay đổi, bị xóa hoặc chưa từng tồn tại.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="rounded-full px-6 py-3 text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            Về trang chủ
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-6 py-3 text-sm font-medium bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            Liên hệ hỗ trợ
          </Link>
        </div>
        <div className="mt-10 text-xs opacity-60">
          Nếu bạn nghĩ đây là lỗi hệ thống, vui lòng gửi phản hồi qua trang Liên hệ.
        </div>
      </div>
    </div>
  );
}
