"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; 
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const seniorityOptions = ["Founder", "C-Suite", "VP", "Director", "Manager", "IC"];
const companySizeOptions = ["1-10", "11-50", "51-200", "201-1000", "1001+"];
const salesTeamSizeOptions = ["Just me", "2-5", "6-20", "21-100", "100+"];
const hearAboutUsOptions = ["LinkedIn", "Twitter", "Referral", "Google", "Other"];

const GetDemoForm = () => {
  const [form, setForm] = useState({
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
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.seniority) newErrors.seniority = "Select your seniority";
    if (!form.companySize) newErrors.companySize = "Select your company size";
    if (!form.message.trim()) newErrors.message = "Please enter a short message";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      <label htmlFor={name} className="block text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {subtext && <p className="text-xs text-gray-500">{subtext}</p>}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={form[name]}
          onChange={handleChange}
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200 appearance-none cursor-pointer hover:border-purple-300"
        >
          <option value="">Please select</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {errors[name] && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
          Work email <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What is your work email?"
          className="border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200 hover:border-purple-300"
        />
        {errors.email && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.email}
          </p>
        )}
      </div>

      {renderSelect("Seniority", "seniority", seniorityOptions, true)}
      {renderSelect("How big is your company?", "companySize", companySizeOptions, true)}
      {renderSelect("How big is your sales team?", "salesTeamSize", salesTeamSizeOptions, false, "AE/SDR/AM/CSM etc.")}
      {renderSelect("How did you hear about us?", "hearAboutUs", hearAboutUsOptions)}

      {/* Message field */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-800">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe your needs or goals..."
          className="border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200 hover:border-purple-300"
          rows={4}
        />
        {errors.message && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Status messages */}
      {status === "success" && (
        <Alert className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-800 font-medium">
            Demo request submitted! We&apos;ll get back to you shortly.
          </AlertDescription>
        </Alert>
      )}
      {status === "error" && (
        <Alert className="border-red-200 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-red-800 font-medium">
            Something went wrong. Please try again later.
          </AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 hover:from-blue-800 hover:via-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? "Sending..." : "Book Your Demo"}
      </Button>
    </form>
  );
};

export default GetDemoForm;
