"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

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
    seniority: "",
    companySize: "",
    salesTeamSize: "",
    hearAboutUs: "",
    message: "",
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
    if (!form.seniority) newErrors.seniority = "Select your seniority";
    if (!form.companySize) newErrors.companySize = "Select your company size";
    if (!form.message.trim())
      newErrors.message = "Please enter a short message";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
        seniority: "",
        companySize: "",
        salesTeamSize: "",
        hearAboutUs: "",
        message: "",
      });
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
    subtext?: string
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
          className="bg-white px-4 py-3 border-2 border-gray-200 hover:border-primary/30 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 w-full text-sm md:text-base transition-all duration-200 appearance-none cursor-pointer"
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
          <AlertCircle className="w-3 h-3" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {/* Name */}
<div className="space-y-2">
  <label
    htmlFor="name"
    className="block font-semibold text-gray-800 text-sm md:text-base"
  >
    Full name <span className="text-red-500">*</span>
  </label>
  <Input
    id="name"
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="e.g. John Doe"
    className="px-4 py-3 border-2 border-gray-200 hover:border-primary/30 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm md:text-base transition-all duration-200"
  />
  {errors.name && (
    <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm">
      <AlertCircle className="w-3 h-3" />
      {errors.name}
    </p>
  )}
</div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block font-semibold text-gray-800 text-sm md:text-base"
        >
          Work email <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What is your work email?"
          className="px-4 py-5 border-2 border-gray-200 hover:border-primary/30 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm md:text-base transition-all duration-200"
        />
        {errors.email && (
          <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm">
            <AlertCircle className="w-3 h-3" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Responsive grid for selects */}
      <div className="gap-4 md:gap-6 grid grid-cols-1">
        {renderSelect("Seniority", "seniority", seniorityOptions, true)}
        {renderSelect(
          "How big is your company?",
          "companySize",
          companySizeOptions,
          true
        )}
        {renderSelect(
          "How big is your sales team?",
          "salesTeamSize",
          salesTeamSizeOptions,
          false
        )}
        {renderSelect(
          "How did you hear about us?",
          "hearAboutUs",
          hearAboutUsOptions
        )}
      </div>

      {/* Message field */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block font-semibold text-gray-800 text-sm md:text-base"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe your needs or goals..."
          className="px-4 py-3 border-2 border-gray-200 hover:border-primary/30 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm md:text-base transition-all duration-200"
          rows={4}
        />
        {errors.message && (
          <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm">
            <AlertCircle className="w-3 h-3" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Status messages */}
      {status === "success" && (
        <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 rounded-xl">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <AlertDescription className="font-medium text-green-800">
            Demo request submitted! We&apos;ll get back to you shortly.
          </AlertDescription>
        </Alert>
      )}
      {status === "error" && (
        <Alert className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 rounded-xl">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <AlertDescription className="font-medium text-red-800">
            Something went wrong. Please try again later.
          </AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="bg-primary disabled:opacity-50 shadow-lg hover:shadow-xl rounded-xl w-full h-12 font-semibold text-white disabled:transform-none hover:scale-[1.02] transition-all duration-200 disabled:cursor-not-allowed transform"
      >
        {loading && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
        {loading ? "Sending..." : "Book Your Demo"}
      </Button>
    </form>
  );
};

export default GetDemoForm;
