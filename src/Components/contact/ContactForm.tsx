import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CONTACT_PAGE } from "../../constants/site";

/**
 * ContactForm — "Send us a message" card (Figma frame "Contact", node 62:161).
 *
 * ── Submission contract ──────────────────────────────────────────────────────
 * This posts to the SAME Google Apps Script endpoint the previous contact form
 * used, via the SAME hidden-iframe technique. That is deliberate, not legacy
 * cruft: Apps Script `/exec` does not return CORS headers, so a `fetch()` from
 * the browser is blocked. A form POST targeting a hidden iframe sidesteps CORS
 * entirely — at the cost of not being able to read the response, which is why
 * success is assumed after a short delay.
 *
 * The script reads four parameters: name, contact, email, query. The richer
 * field set in the design is mapped onto those so existing sheet columns keep
 * filling, and the new fields are ALSO sent under their own names so the script
 * can start reading them later without a frontend change.
 *
 *   Full Name -> name       Phone -> contact       Email -> email
 *   Company + Interest + Message -> query (composed, so nothing is lost)
 * ─────────────────────────────────────────────────────────────────────────────
 */

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

/** Flatten the extra fields into the single `query` column the script reads. */
function composeQuery(f: Fields) {
  return [
    f.interest && `Interest: ${f.interest}`,
    f.company && `Company: ${f.company}`,
    f.message && `\n${f.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function ContactForm() {
  const cfg = CONTACT_PAGE.form;
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const set = (key: keyof Fields, value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus("idle");

    try {
      // Reuse one hidden iframe across submissions.
      const frameId = "voltra-contact-sink";
      let frame = document.getElementById(frameId) as HTMLIFrameElement | null;
      if (!frame) {
        frame = document.createElement("iframe");
        frame.id = frameId;
        frame.name = frameId;
        frame.style.display = "none";
        document.body.appendChild(frame);
      }

      const payload: Record<string, string> = {
        // The four the Apps Script already reads — do not rename.
        name: fields.fullName,
        contact: fields.phone,
        email: fields.email,
        query: composeQuery(fields),
        // Sent alongside so the script can adopt them without a frontend change.
        company: fields.company,
        phone: fields.phone,
        interest: fields.interest,
        message: fields.message,
      };

      const form = document.createElement("form");
      form.method = "POST";
      form.action = cfg.endpoint;
      form.target = frameId;
      Object.entries(payload).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // The iframe response is opaque (cross-origin), so we cannot confirm
      // receipt — assume success after the request has had time to land.
      window.setTimeout(() => {
        setStatus("sent");
        setFields(EMPTY);
        setSending(false);
      }, 1500);
    } catch {
      setStatus("error");
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
            <div className="grid gap-7 sm:grid-cols-2">
              <Field
                label="Full Name"
                required
                value={fields.fullName}
                onChange={(v) => set("fullName", v)}
                autoComplete="name"
              />
              <Field
                label="Company"
                value={fields.company}
                onChange={(v) => set("company", v)}
                autoComplete="organization"
              />
              <Field
                label="Email"
                required
                type="email"
                value={fields.email}
                onChange={(v) => set("email", v)}
                autoComplete="email"
              />
              <Field
                label="Phone"
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
  value,
  onChange,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
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
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="border-b border-navy/20 bg-transparent pb-2 text-base text-navy outline-none transition-colors duration-200 focus:border-brand"
      />
    </label>
  );
}
