"use client";
import { createMessage, createPatient, getPatient } from "@/lib/api/queries";
import { useToast } from "@/app/components/toast";
import React, { useState } from "react";

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const { push } = useToast();
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Vietnamese mobile phone regex (accepts +84 or leading 0 followed by valid carrier prefixes)
  const vnPhoneRegex =
    /^(?:\+84|0)(?:3[2-9]|5[25689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7}$/;

  const validators: Record<
    keyof ContactFormState,
    (val: string) => string | null
  > = {
    name: (v) => {
      const t = v.trim();
      if (!t) return "Tên là bắt buộc";
      if (t.length <= 5) return "Tên phải có ít nhất 6 ký tự";
      return null;
    },
    email: (v) => {
      const t = v.trim();
      if (!t) return "Email là bắt buộc";
      // Simple RFC5322-ish pattern (good enough for client-side)
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t);
      return ok ? null : "Định dạng email không hợp lệ";
    },
    phone: (v) => {
      const t = v.replace(/[\s-]/g, "");
      if (!t) return "Số điện thoại là bắt buộc";
      return vnPhoneRegex.test(t)
        ? null
        : "Số điện thoại Việt Nam không hợp lệ";
    },
    subject: (v) => {
      const t = v.trim();
      if (!t) return "Chủ đề là bắt buộc";
      return null;
    },
    message: (v) => {
      const t = v.trim();
      if (!t) return "Nội dung là bắt buộc";
      return null;
    },
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
        form.email
      ).catch((error) => {
        console.error("Error creating patient:", error);
      });

      patient = newPatient.createPatient.id;
    } else {
      patient = patientData.Patients.docs[0].id;
    }
    return patient;
  };

  const validateField = (name: keyof ContactFormState, value: string) => {
    const fn = validators[name];
    if (!fn) return;
    const error = fn(value);
    setErrors((prev) => {
      if (error) return { ...prev, [name]: error };
      // Remove cleared error key; we intentionally ignore the discarded value.
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [name]: _ignored, ...remaining } = prev;
      return remaining;
    });
  };

  const validateAll = () => {
    const newErrors: Record<string, string> = {};
    (Object.keys(form) as (keyof ContactFormState)[]).forEach((k) => {
      const err = validators[k](form[k]);
      if (err) newErrors[k] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactFormState, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    // Final validation pass
    if (!validateAll()) return;
    setSubmitting(true);
    try {
      await checkIfCustomerExisted(form.phone);
      await createMessage(patient, form.subject, form.message);
      setSubmitted(true);
      push("Gửi tin nhắn thành công", "success");
    } catch (err) {
      console.error(err);
      push("Gửi tin nhắn thất bại", "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 text-sm">
        <p className="font-medium">Cảm ơn bạn! Tin nhắn đã được gửi.</p>
        <button
          className="mt-4 btn-secondary text-xs"
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
            setErrors({});
          }}
          type="button"
        >
          Gửi tin nhắn khác
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-black/10 dark:border-white/10 p-6 space-y-4"
    >
      <div>
        <label className="block text-sm mb-1" htmlFor="contact-name">
          Họ và tên
        </label>
        <input
          id="contact-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
          placeholder="Tên của bạn"
          required
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm mb-1" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
          placeholder="ban@vidu.com"
          required
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm mb-1" htmlFor="contact-phone">
          Số điện thoại
        </label>
        <input
          id="contact-phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
          placeholder="0xx… or +84…"
          required
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.phone}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm mb-1" htmlFor="contact-subject">
          Chủ đề
        </label>
        <input
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
          placeholder="Chủ đề"
          required
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.subject}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm mb-1" htmlFor="contact-message">
          Nội dung
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
          rows={4}
          placeholder="Chúng tôi có thể giúp gì cho bạn?"
          required
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>
      <button disabled={submitting} className="btn-primary disabled:opacity-55">
        {submitting ? "Đang gửi..." : "Gửi"}
      </button>
    </form>
  );
}
