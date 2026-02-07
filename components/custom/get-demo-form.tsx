"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const seniorityOptions = [
  "Founder",
  "C-Suite",
  "VP",
  "Director",
  "Manager",
  "IC",
];
const companySizeOptions = ["1-10", "11-50", "51-200", "201-1000", "1001+"];
const salesTeamSizeOptions = ["Just me", "2-5", "6-20", "21-100", "100+"];
const hearAboutUsOptions = [
  "LinkedIn",
  "Twitter",
  "Referral",
  "Google",
  "Other",
];

const GetDemoForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    seniority: "",
    companySize: "",
    salesTeamSize: "",
    hearAboutUs: "",
    message: "",
    consent: "",
    marketingConsent: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email";

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+\d{7,15}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number format";
    }

    if (!form.seniority) newErrors.seniority = "Select your seniority";
    if (!form.companySize) newErrors.companySize = "Select your company size";
    if (!form.message.trim())
      newErrors.message = "Please enter a short message";
    if (!form.consent)
      newErrors.consent = "Please consent to receive account updates";
    if (!form.marketingConsent)
      newErrors.marketingConsent = "Please consent to receive marketing offers";

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneChange = (value: string) => {
    // Always store phone with '+'
    const formattedValue = value.startsWith("+") ? value : `+${value}`;
    setForm((prev) => ({ ...prev, phone: formattedValue }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/send-slack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        seniority: "",
        companySize: "",
        salesTeamSize: "",
        hearAboutUs: "",
        message: "",
        consent: "",
        marketingConsent: "",
      });
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const renderSelect = (
    label: string,
    name: keyof typeof form,
    options: string[],
    required = false,
    subtext?: string,
  ) => (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block font-semibold text-gray-800 text-sm md:text-base"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {subtext && <p className="text-gray-500 text-xs md:text-sm">{subtext}</p>}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={form[name]}
          onChange={handleChange}
          className="bg-white px-4 py-3 border-2 border-gray-200 rounded-xl w-full text-sm md:text-base transition-all duration-200 appearance-none cursor-pointer focus-border-gradient-purple"
        >
          <option value="">Please select</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="right-0 absolute inset-y-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {errors[name] && (
        <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm">
          <AlertCircle className="w-3 h-3" /> {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      {/* Fields */}
      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="text-sm text-gray-600">Full name</label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John"
            className="h-11 rounded-md text-sm border-gray-200 border "
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Work Email</label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="h-11 rounded-md border-gray-200 border text-sm"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm text-gray-600">Phone Number</label>

          <PhoneInput
            country="us"
            value={form.phone}
            onChange={handlePhoneChange}
            inputProps={{ name: "phone" }}
            containerStyle={{ width: "100%" }}
            inputStyle={{
              width: "100%",
              height: "44px",
              fontSize: "14px",
              borderRadius: "6px",
              border: "1px solid #e5e7eb",
            }}
            buttonStyle={{
              border: "1px solid #e5e7eb",
              borderRadius: "6px 0 0 6px",
              background: "#fff",
            }}
          />

          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Seniority */}
        {renderSelect("Seniority", "seniority", seniorityOptions, true)}

        {/* Company Size */}
        {renderSelect("Company size", "companySize", companySizeOptions, true)}

        {/* Sales Team Size */}
        {renderSelect("Sales team size", "salesTeamSize", salesTeamSizeOptions)}

        {/* Hear About Us */}
        {renderSelect(
          "How did you hear about us?",
          "hearAboutUs",
          hearAboutUsOptions,
        )}

        {/* Message */}
        <div>
          <label className="text-sm text-gray-600">Message</label>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Briefly describe your needs..."
            rows={3}
            className="rounded-md border border-gray-200 focus-border-gradient-purple text-sm"
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-3 text-sm text-gray-700">
          <label className="flex gap-2 items-start">
            <input
              type="checkbox"
              checked={!!form.consent}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  consent: e.target.checked ? "yes" : "",
                }))
              }
              className="mt-1 accent-primary"
            />
            I consent to receive account updates via SMS
          </label>

          <label className="flex gap-2 items-start">
            <input
              type="checkbox"
              checked={!!form.marketingConsent}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  marketingConsent: e.target.checked ? "yes" : "",
                }))
              }
              className="mt-1 accent-primary"
            />
            I consent to receive marketing offers via SMS
          </label>

          {errors.consent && (
            <p className="text-xs text-red-500">{errors.consent}</p>
          )}

          {errors.marketingConsent && (
            <p className="text-xs text-red-500">{errors.marketingConsent}</p>
          )}
        </div>
      </div>

      {/* Status */}
      {status === "success" && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <AlertDescription className="text-sm text-green-800">
            Demo request submitted!
          </AlertDescription>
        </Alert>
      )}

      {status === "error" && (
        <Alert className="bg-red-50 border-red-200">
          <AlertCircle className="w-4 h-4 text-red-600" />
          <AlertDescription className="text-sm text-red-800">
            Something went wrong.
          </AlertDescription>
        </Alert>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="h-11 w-full bg-gradient-purple rounded-md hover:bg-gradient-purple/90 text-white text-sm font-medium cursor-pointer"
      >
        {loading && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
        {loading ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

export default GetDemoForm;
