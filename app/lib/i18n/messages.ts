// Centralized Vietnamese (vi) UI messages & validation/toast strings.
// Extendable later for multi-language support (e.g., en, vi).

export type Locale = 'vi';

export const messages = {
  vi: {
    common: {
      bookNow: 'Đặt lịch',
      reserve: 'Đặt lịch',
      send: 'Gửi',
      loading: 'Đang tải...',
      retry: 'Thử lại',
      close: 'Đóng',
      next: 'Sau',
      prev: 'Trước',
      viewProfile: 'Xem hồ sơ',
    },
    reservation: {
      title: 'Đặt lịch',
      submitSuccess: 'Đặt lịch thành công',
      submitError: 'Đặt lịch thất bại',
    },
    contact: {
      submitSuccess: 'Gửi tin nhắn thành công',
      submitError: 'Gửi tin nhắn thất bại',
      another: 'Gửi tin nhắn khác',
    },
    validation: {
      required: 'Thông tin bắt buộc',
      invalidEmail: 'Email không hợp lệ',
      invalidPhone: 'Số điện thoại không hợp lệ',
      futureDate: 'Ngày/giờ phải ở tương lai',
      leadTime: 'Vui lòng chọn thời gian cách hiện tại đủ thời gian chuẩn bị',
      horizon: 'Không thể đặt quá xa so với hiện tại',
      genderRequired: 'Vui lòng chọn giới tính',
      departmentRequired: 'Vui lòng chọn chuyên khoa',
    },
    toast: {
      networkError: 'Lỗi mạng. Vui lòng thử lại.',
      unknownError: 'Đã xảy ra lỗi không xác định.',
    },
  },
};

export type Messages = typeof messages.vi;

interface NestedMessages {
  [key: string]: string | NestedMessages;
}

export function t(path: string, locale: Locale = 'vi'): string {
  const parts = path.split('.');
  let cur: string | NestedMessages | undefined = messages[locale] as NestedMessages;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in cur) {
      cur = (cur as NestedMessages)[p] as string | NestedMessages;
    } else {
      return path; // fallback to key when missing
    }
  }
  return typeof cur === 'string' ? cur : path;
}
