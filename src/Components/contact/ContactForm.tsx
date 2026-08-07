import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CONTACT_PAGE } from "../../constants/site";

/**
 * ContactForm — "Send us a message" card (Figma frame "Contact", node 62:161).
 *
 * Submissions POST to Web3Forms (https://web3forms.com). It supports CORS and
 * returns JSON, so we can `fetch()` directly and confirm real success/failure
 * (no hidden-iframe guessing). The access key is a public, publishable key.
 * Delivery target (recipient email) is configured in the Web3Forms dashboard.
 */

// Public Web3Forms access key — safe to ship in client code.
const WEB3FORMS_ACCESS_KEY = "2b262290-5014-4456-b27c-2ab76df46beb";

interface Fields {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const EMPTY: Fields = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  interest: CONTACT_PAGE.form.interests[0],
  message: "",
};

export default function ContactForm() {
  const cfg = CONTACT_PAGE.form;
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const set = (key: keyof Fields, value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatus("idle");

    // Capture the form now — React nullifies e.currentTarget after the await.
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `New enquiry — ${fields.fullName || "Voltra website"}`);
      formData.append("from_name", "Voltra Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        setFields(EMPTY);
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact-form" className="w-full scroll-mt-24 pb-16 lg:pb-24">
      <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[960px] rounded-[20px] bg-white p-6 shadow-card sm:p-8 lg:p-10">
          <h2 className="text-2xl font-medium tracking-tight text-navy lg:text-[28px]">
            {cfg.title}
          </h2>
          <p className="mt-2 text-sm text-navy/60">{cfg.subtitle}</p>

          {status !== "idle" && (
            <div
              role="status"
              className={`mt-6 rounded-[10px] px-4 py-3 text-sm ${
                status === "sent"
                  ? "bg-brand/10 text-brand-strong"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {status === "sent" ? cfg.successMessage : cfg.errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-7">
            {/* Web3Forms honeypot — bots fill this; humans never see it. */}
            <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden />

            <div className="grid gap-7 sm:grid-cols-2">
              <Field
                label="Full Name"
                name="name"
                required
                value={fields.fullName}
                onChange={(v) => set("fullName", v)}
                autoComplete="name"
              />
              <Field
                label="Company"
                name="company"
                value={fields.company}
                onChange={(v) => set("company", v)}
                autoComplete="organization"
              />
              <Field
                label="Email"
                name="email"
                required
                type="email"
                value={fields.email}
                onChange={(v) => set("email", v)}
                autoComplete="email"
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                value={fields.phone}
                onChange={(v) => set("phone", v)}
                autoComplete="tel"
              />
            </div>

            {/* Interest */}
            <label className="flex flex-col gap-2">
              <span className="text-sm text-navy/60">Interest</span>
              <span className="relative">
                <select
                  name="interest"
                  value={fields.interest}
                  onChange={(e) => set("interest", e.target.value)}
                  className="w-full appearance-none border-b border-navy/20 bg-transparent pb-2 pr-8 text-base text-navy outline-none transition-colors duration-200 focus:border-brand"
                >
                  {cfg.interests.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  aria-hidden
                  className="pointer-events-none absolute right-1 top-1 text-navy/40"
                />
              </span>
            </label>

            {/* Message */}
            <label className="flex flex-col gap-2">
              <span className="text-sm text-navy/60">Message</span>
              <textarea
                name="message"
                rows={3}
                value={fields.message}
                onChange={(e) => set("message", e.target.value)}
                className="resize-y border-b border-navy/20 bg-transparent pb-2 text-base text-navy outline-none transition-colors duration-200 focus:border-brand"
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="mt-1 h-14 w-full rounded-pill bg-brand text-base font-medium text-white transition-colors duration-200 enabled:hover:bg-brand-bright disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? cfg.sendingLabel : cfg.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/** Underline-style text field, matching the Figma form treatment. */
function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-navy/60">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="border-b border-navy/20 bg-transparent pb-2 text-base text-navy outline-none transition-colors duration-200 focus:border-brand"
      />
    </label>
  );
}
