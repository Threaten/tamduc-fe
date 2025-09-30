"use client";

import {
  createPatient,
  createReservation,
  getPatient,
} from "@/lib/api/queries";
import { useToast } from "@/app/components/toast";
import { useMemo, useState } from "react";

const genders = [
  { value: "", label: "Chọn giới tính (không bắt buộc)" },
  { value: "Male", label: "Nam" },
  { value: "Female", label: "Nữ" },
  { value: "Other", label: "Khác" },
];

const VN_PHONE = /^(?:\+?84|0)(3|5|7|8|9)\d{8}$/;

type Form = {
  name: string;
  phone: string;
  email: string;
  dob: string; // YYYY-MM-DD
  gender: string;
  date: string;
  time: string;
  symptoms: string;
  department: string;
};

/**
 * Combine separate form date (YYYY-MM-DD) and time (HH:MM) strings
 * into a single Date object using the user's local timezone.
 * Also returns a "local" ISO-like string without converting to UTC
 * (so 2025-09-26 09:30 local stays 2025-09-26T09:30:00 for persistence if needed).
 */
function combineDateAndTime(
  dateStr: string,
  timeStr: string
): { date: Date; isoLocal: string } | null {
  if (!dateStr || !timeStr) return null;
  const dateParts = dateStr.split("-").map(Number);
  const timeParts = timeStr.split(":").map(Number);
  if (dateParts.length !== 3 || timeParts.length < 2) return null;
  const [y, m, d] = dateParts;
  const [hh, mm] = timeParts;
  if (
    [y, m, d, hh, mm].some((n) => Number.isNaN(n)) ||
    m < 1 ||
    m > 12 ||
    d < 1 ||
    d > 31 ||
    hh < 0 ||
    hh > 23 ||
    mm < 0 ||
    mm > 59
  ) {
    return null;
  }
  const localDate = new Date(y, m - 1, d, hh, mm, 0, 0);
  // Build a local ISO-like string without timezone shifting to UTC
  const pad = (n: number) => n.toString().padStart(2, "0");
  const isoLocal = `${y}-${pad(m)}-${pad(d)}T${pad(hh)}:${pad(mm)}:00`;
  return { date: localDate, isoLocal };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ReservationForm(departmentsProp: any) {
  const departments = departmentsProp.departmentsProp;
  const [form, setForm] = useState<Form>({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    date: "",
    time: "",
    symptoms: "",
    department: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  // Local (non-UTC-shifted) YYYY-MM-DD for comparisons & input constraints
  const todayStr = useMemo(() => {
    const d = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }, []);

  // Maximum booking horizon (e.g., 90 days from today)
  const horizonStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 90);
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }, []);

  const LEAD_MINUTES = 30; // Minimum lead time buffer

  const { push } = useToast();
  // Validation logic aligned with contact form style
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const validators: Record<
    keyof Form,
    (val: string, full?: Form) => string | null
  > = {
    name: (v) => {
      const t = v.trim();
      if (!t) return "Họ và tên là bắt buộc";
      if (t.length < 2) return "Tên phải có ít nhất 2 ký tự";
      return null;
    },
    phone: (v) => {
      const t = v.trim();
      if (!t) return "Số điện thoại là bắt buộc";
      return VN_PHONE.test(t) ? null : "Số điện thoại Việt Nam không hợp lệ";
    },
    email: (v) => {
      const t = v.trim();
      if (!t) return ""; // optional
      return emailRegex.test(t) ? null : "Email không hợp lệ";
    },
    dob: (v) => {
      if (!v) return "Ngày sinh là bắt buộc";
      if (v >= todayStr) return "Ngày sinh phải trước hôm nay";
      return null;
    },
    gender: () => null, // optional
    date: (v) => {
      if (!v) return "Ngày khám là bắt buộc";
      if (v < todayStr) return "Ngày phải từ hôm nay trở đi";
      if (v > horizonStr) return "Ngày không được quá 90 ngày";
      return null;
    },
    time: (v) => {
      if (!v) return "Giờ là bắt buộc";
      return null; // combined datetime validation handled separately once both date & time exist
    },
    symptoms: (v) => (v.trim() ? null : "Triệu chứng là bắt buộc"),
    department: (v) => (v ? null : "Chuyên khoa là bắt buộc"),
  };

  const validateField = (name: keyof Form, value: string, full: Form) => {
    const fn = validators[name];
    if (!fn) return;
    const err = fn(value, full);
    setErrors((prev) => {
      if (err) return { ...prev, [name]: err };
      const clone = { ...prev };
      delete clone[name];
      return clone;
    });
  };

  const validateAll = (f: Form) => {
    const newErr: Record<string, string> = {};
    (Object.keys(f) as (keyof Form)[]).forEach((k) => {
      const msg = validators[k](f[k], f);
      if (msg) newErr[k] = msg;
    });
    // Combined date+time future & lead-time validation
    if (!newErr.date && !newErr.time && f.date && f.time) {
      const combined = combineDateAndTime(f.date, f.time);
      if (!combined) {
        newErr.time = "Ngày/giờ không hợp lệ";
      } else {
        const now = new Date();
        const lead = new Date(now.getTime() + LEAD_MINUTES * 60 * 1000);
        if (combined.date.getTime() <= lead.getTime()) {
          newErr.time = `Lịch hẹn phải cách hiện tại ít nhất ${LEAD_MINUTES} phút`;
        }
        // Horizon already enforced by date, but extra guard if user manipulated inputs
        const horizonDate = combineDateAndTime(horizonStr, "23:59");
        if (
          horizonDate &&
          combined.date.getTime() > horizonDate.date.getTime()
        ) {
          newErr.date = "Lịch hẹn vượt quá giới hạn cho phép";
        }
      }
    }
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  let patient: string;

  type Patient = {
    id: string;
    fullName: string;
    phone: string;
    email?: string;
  };

  const checkIfCustomerExisted = async (phone: string) => {
    // Placeholder: integrate API call here.
    const patientData = (await getPatient(`${phone}`)) as {
      Patients: {
        docs: Patient[];
      };
    };

    if (!patientData.Patients.docs.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newPatient: any = await createPatient(
        form.name,
        form.phone,
        form.email,
        form.gender,
        form.dob
      ).catch((error) => {
        console.error("Error creating patient:", error);
      });

      patient = newPatient.createPatient.id;
    } else {
      patient = patientData.Patients.docs[0].id;
    }
    return patient;
  };

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (submitting) return;
    // Final validation pass
    if (!validateAll(form)) return;
    const combined = combineDateAndTime(form.date, form.time);
    // Debug log removed

    if (!combined) {
      setErrors((prev) => ({
        ...prev,
        time: prev.time || "Ngày/giờ không hợp lệ",
      }));
      return;
    }
    // Send combined.isoLocal as datetime to backend createReservation
    setSubmitting(true);
    await checkIfCustomerExisted(form.phone);
    // Debug log removed

    try {
      await createReservation(
        patient,
        combined.isoLocal,
        form.symptoms,
        form.department
      );
      setSubmitted(true);
      push("Đặt lịch thành công", "success");
    } catch (err) {
      console.error(err);
      push("Đặt lịch thất bại", "error");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 p-6">
        <p className="text-sm">
          Cảm ơn bạn, chúng tôi đã nhận được yêu cầu đặt lịch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 p-6 space-y-4"
    >
      <div>
        <label className="block text-sm mb-1">Họ và tên</label>
        <input
          className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
          value={form.name}
          onChange={(e) => {
            const value = e.target.value;
            setForm((prev) => ({ ...prev, name: value }));
            validateField("name", value, { ...form, name: value });
          }}
          placeholder="Nguyen Van A"
          required
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm mb-1">Số điện thoại</label>
        <input
          className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
          value={form.phone}
          onChange={(e) => {
            const value = e.target.value;
            setForm((prev) => ({ ...prev, phone: value }));
            validateField("phone", value, { ...form, phone: value });
          }}
          placeholder="0xxxxxxxxx or +84xxxxxxxxx"
          required
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
          value={form.email}
          onChange={(e) => {
            const value = e.target.value;
            setForm((prev) => ({ ...prev, email: value }));
            validateField("email", value, { ...form, email: value });
          }}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Ngày sinh</label>
          <input
            type="date"
            max={todayStr} /* DOB capped at today */
            className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
            value={form.dob}
            onChange={(e) => {
              const value = e.target.value;
              setForm((prev) => ({ ...prev, dob: value }));
              validateField("dob", value, { ...form, dob: value });
            }}
            required
            aria-invalid={!!errors.dob}
          />
          {errors.dob && (
            <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
          )}
        </div>
        <div>
          <label className="block text-sm mb-1">Giới tính</label>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-md border border-black/10 dark:border-white/10 bg-transparent backdrop-blur px-3 py-2 pr-8 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-colors"
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
            >
              {genders.map((g) => (
                <option
                  key={g.value}
                  value={g.value}
                  className="bg-white dark:bg-black text-inherit"
                >
                  {g.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-xs opacity-60">
              ▾
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Ngày</label>
          <input
            type="date"
            min={todayStr}
            max={horizonStr}
            className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
            value={form.date}
            onChange={(e) => {
              const value = e.target.value;
              setForm((prev) => ({ ...prev, date: value }));
              validateField("date", value, { ...form, date: value });
              // If time already selected, re-run combined validation
              if (form.time) validateAll({ ...form, date: value });
            }}
            required
            aria-invalid={!!errors.date}
          />
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date}</p>
          )}
        </div>
        <div>
          <label className="block text-sm mb-1">Giờ</label>
          <input
            type="time"
            className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
            value={form.time}
            onChange={(e) => {
              const value = e.target.value;
              setForm((prev) => ({ ...prev, time: value }));
              validateField("time", value, { ...form, time: value });
              if (form.date) validateAll({ ...form, time: value });
            }}
            required
            aria-invalid={!!errors.time}
          />
          {errors.time && (
            <p className="text-red-500 text-xs mt-1">{errors.time}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Triệu chứng</label>
        <textarea
          rows={3}
          className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
          value={form.symptoms}
          onChange={(e) => {
            const value = e.target.value;
            setForm((prev) => ({ ...prev, symptoms: value }));
            validateField("symptoms", value, { ...form, symptoms: value });
          }}
          placeholder="Mô tả triệu chứng của bạn"
          required
          aria-invalid={!!errors.symptoms}
        />
        {errors.symptoms && (
          <p className="text-red-500 text-xs mt-1">{errors.symptoms}</p>
        )}
      </div>

      <div>
        <label className="block text-sm mb-1">Chuyên khoa</label>
        <div className="relative">
          <select
            className="w-full appearance-none rounded-md border border-black/10 dark:border-white/10 bg-transparent backdrop-blur px-3 py-2 pr-8 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-colors"
            value={form.department}
            onChange={(e) => {
              const value = e.target.value;
              setForm((prev) => ({ ...prev, department: value }));
              validateField("department", value, {
                ...form,
                department: value,
              });
            }}
            required
            aria-invalid={!!errors.department}
          >
            <option value="" disabled key="default">
              Chọn một chuyên khoa
            </option>

            {departments.map(
              (d: { id: string; title: string; slug: string }) => (
                <option
                  key={d.slug}
                  value={d.id}
                  className="bg-white dark:bg-black text-inherit"
                >
                  {d.title}
                </option>
              )
            )}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-xs opacity-60">
            ▾
          </span>
        </div>
        {errors.department && (
          <p className="text-red-500 text-xs mt-1">{errors.department}</p>
        )}
      </div>

      <div className="pt-2">
        <button
          disabled={submitting}
          className="btn-primary disabled:opacity-50"
        >
          {submitting ? "Đang gửi..." : "Đặt lịch"}
        </button>
      </div>
    </form>
  );
}
