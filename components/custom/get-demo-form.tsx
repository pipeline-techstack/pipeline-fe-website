"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const seniorityOptions = ["Founder", "C-Suite", "VP", "Director", "Manager", "IC"];
const companySizeOptions = ["1-10", "11-50", "51-200", "201-1000", "1001+"];
const salesTeamSizeOptions = ["Just me", "2-5", "6-20", "21-100", "100+"];
const hearAboutUsOptions = ["LinkedIn", "Twitter", "Referral", "Google", "Other"];

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
    if (!form.message.trim()) newErrors.message = "Please enter a short message";
    if (!form.consent) newErrors.consent = "Please consent to receive account updates";
    if (!form.marketingConsent) newErrors.marketingConsent = "Please consent to receive marketing offers";

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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

  const renderSelect = (label: string, name: keyof typeof form, options: string[], required = false, subtext?: string) => (
    <div className="space-y-2">
      <label htmlFor={name} className="block font-semibold text-gray-800 text-sm md:text-base">
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
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="right-0 absolute inset-y-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {/* Name */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800 text-sm md:text-base">Full name <span className="text-red-500">*</span></label>
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. John Doe"
          className="px-4 py-3 border-2 border-gray-200 hover:border-primary/30 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm md:text-base transition-all duration-200"
        />
        {errors.name && <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800 text-sm md:text-base">Work email <span className="text-red-500">*</span></label>
        <Input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What is your work email?"
          className="px-4 py-3 border-2 border-gray-200 hover:border-primary/30 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm md:text-base transition-all duration-200"
        />
        {errors.email && <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800 text-sm md:text-base">Phone number <span className="text-red-500">*</span></label>
        <PhoneInput
          country="us"
          value={form.phone}
          onChange={handlePhoneChange}
          inputProps={{
            name: "phone",
            required: true,
            placeholder: "Enter phone number",
          }}
          containerStyle={{ width: "100%" }}
          inputStyle={{
            width: "100%",
            height: "48px",
            fontSize: "14px",
            fontFamily: "inherit",
            border: "2px solid #e5e7eb",
            borderRadius: "12px",
            transition: "all 0.2s",
          }}
          buttonStyle={{
            border: "2px solid #e5e7eb",
            borderRadius: "12px 0 0 12px",
            backgroundColor: "white",
            borderRight: "none",
          }}
          dropdownStyle={{
            borderRadius: "12px",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
            maxHeight: "320px",
            minHeight: "300px",
          }}
            searchStyle={{
              width: "95%",
              height: "36px",
              fontSize: "14px",
              borderRadius: "8px", 
              border: "1px solid #d1d5db",
              padding: "0 8px",
            }}
          enableSearch={true}
          searchPlaceholder="Search countries..."
          specialLabel=""
        />
        {errors.phone && <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
      </div>

      {/* Selects */}
      <div className="gap-4 md:gap-6 grid grid-cols-1">
        {renderSelect("Seniority", "seniority", seniorityOptions, true)}
        {renderSelect("Company Size", "companySize", companySizeOptions, true)}
        {renderSelect("Sales Team Size", "salesTeamSize", salesTeamSizeOptions)}
        {renderSelect("How did you hear about us?", "hearAboutUs", hearAboutUsOptions)}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="block font-semibold text-gray-800 text-sm md:text-base">Message <span className="text-red-500">*</span></label>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe your needs or goals..."
          className="px-4 py-3 border-2 border-gray-200 hover:border-primary/30 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm md:text-base transition-all duration-200"
          rows={4}
        />
        {errors.message && <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
      </div>

      {/* Communication Preferences */}
      <div className="space-y-4">
        <h3 className="text-gray-900 font-medium text-base md:text-lg">
          Communication Preferences
        </h3>

        {/* Account Updates Consent */}
        <div className="border border-gray-200 rounded-lg p-4 min-h-[80px]">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="accountConsent"
              name="accountConsent"
              checked={!!form.consent}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, consent: e.target.checked ? "yes" : "" }));
                if (errors.consent) setErrors((prev) => ({ ...prev, consent: "" }));
              }}
              className="h-5 w-5 mt-0.5 bg-white border-gray-300 rounded focus:outline-none accent-primary flex-shrink-0"
            />
            <div className="ml-3 flex-1">
              <label
                htmlFor="accountConsent"
                className="text-gray-900 text-sm font-medium cursor-pointer"
              >
                I consent to receive account updates via SMS{" "}
                <span className="text-red-500">*</span>
              </label>
              <details className="mt-2">
                <summary className="text-primary text-sm cursor-pointer hover:underline list-none">
                  <span className="inline-flex items-center">
                    <svg className="w-3 h-3 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    View details
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-xs leading-relaxed pl-4 border-l-2 border-gray-200">
                  By providing a telephone number, clicking this button, and submitting the form, you are consenting to be contacted by
                  SMS text message from Signal House, LLC regarding account issues and outages (customer care), (our message frequency
                  may vary). Message & data rates apply. Reply STOP to unsubscribe from further messaging. Reply HELP for more information. See our{" "}
                  <a
                    href="https://addpipeline.ai/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary/80 hover:text-primary/100"
                  >
                    Privacy Policy
                  </a>{" "}
                  (containing our SMS Terms) for more information.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Marketing Offers Consent */}
        <div className="border border-gray-200 rounded-lg p-4 min-h-[80px]">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="marketingConsent"
              name="marketingConsent"
              checked={!!form.marketingConsent}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, marketingConsent: e.target.checked ? "yes" : "" }));
                if (errors.marketingConsent) setErrors((prev) => ({ ...prev, marketingConsent: "" }));
              }}
              className="h-5 w-5 mt-0.5 bg-white border-gray-300 rounded focus:outline-none accent-primary flex-shrink-0"
            />
            <div className="ml-3 flex-1">
              <label
                htmlFor="marketingConsent"
                className="text-gray-900 text-sm font-medium cursor-pointer"
              >
                I consent to receive marketing offers via SMS{" "}
                <span className="text-red-500">*</span>
              </label>
              <details className="mt-2">
                <summary className="text-primary text-sm cursor-pointer hover:underline list-none">
                  <span className="inline-flex items-center">
                    <svg className="w-3 h-3 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    View details
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-xs leading-relaxed pl-4 border-l-2 border-gray-200">
                  By providing a telephone number, clicking this button, and submitting the form, you are consenting to be contacted by
                  SMS text message from Signal House, LLC regarding new offers (marketing), (our message frequency may vary). Message &
                  data rates apply. Reply STOP to unsubscribe from further messaging. Reply HELP for more information. See our{" "}
                  <a
                    href="https://addpipeline.ai/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary/80 hover:text-primary/100"
                  >
                    Privacy Policy
                  </a>{" "}
                  (containing our SMS Terms) for more information.
                </p>
              </details>
            </div>
          </div>
        </div>

        {errors.consent && (
          <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm">
            <AlertCircle className="w-3 h-3" /> {errors.consent}
          </p>
        )}
        {errors.marketingConsent && (
          <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm">
            <AlertCircle className="w-3 h-3" /> {errors.marketingConsent}
          </p>
        )}
      </div>

      {/* Status */}
      {status === "success" && <Alert className="bg-green-50 border-green-200 rounded-xl"><CheckCircle className="w-5 h-5 text-green-600" /><AlertDescription className="font-medium text-green-800">Demo request submitted! We&apos;ll get back to you shortly.</AlertDescription></Alert>}
      {status === "error" && <Alert className="bg-red-50 border-red-200 rounded-xl"><AlertCircle className="w-5 h-5 text-red-600" /><AlertDescription className="font-medium text-red-800">Something went wrong. Please try again later.</AlertDescription></Alert>}

      <Button type="submit" disabled={loading} className="bg-primary disabled:opacity-50 shadow-lg hover:shadow-xl rounded-xl w-full h-12 font-semibold text-white disabled:cursor-not-allowed">
        {loading && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
        {loading ? "Sending..." : "Book Your Demo"}
      </Button>
    </form>
  );
};

export default GetDemoForm;