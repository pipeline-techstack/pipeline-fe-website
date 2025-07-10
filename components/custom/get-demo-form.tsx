"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const freeEmailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com", "me.com", "live.com", "msn.com", "ymail.com"];

const validators = {
  name: (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return "Full name is required";
    if (trimmed.length < 2 || trimmed.length > 100) return "Name must be 2–100 characters";
    if (!/^[a-zA-Z\s\-'À-ÿ]+$/.test(trimmed)) return "Only letters, spaces, hyphens, apostrophes allowed";
    if (!/[a-zA-Z]/.test(trimmed)) return "Must contain at least one letter";
    if (trimmed.includes("  ") || /[-']{2,}/.test(trimmed)) return "No consecutive symbols/spaces";
    if (trimmed.split(/\s+/).length < 2) return "Please enter full name";
    return;
  },
  email: (email: string) => {
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return "Email is required";
    if (trimmed.length > 320) return "Too long";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) return "Invalid email format";
    const [local, domain] = trimmed.split("@");
    if (local.length > 64 || domain.length > 255) return "Too long";
    if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) return "Invalid local part";
    if (domain.startsWith("-") || domain.endsWith("-") || domain.includes("..")) return "Invalid domain";
    if (freeEmailDomains.includes(domain)) return "Use business email address";
    return;
  },
  message: (msg: string) => {
    const m = msg.trim();
    if (!m) return "Message required";
    if (m.length < 10) return "Minimum 10 characters";
    if (m.length > 2000) return "Too long";
    if (m.length < 20) return "Please provide more context";
    if ([/^(.)\1{4,}/, /test{2,}/i, /lorem ipsum/i, /asdf/i, /qwerty/i, /^[^a-zA-Z]*$/].some(r => r.test(m)))
      return "Avoid test/spam content";
    if (m.split(/\s+/).filter(w => w.length > 2).length < 5)
      return "Add more business context";
    return;
  }
};

const GetDemoForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const getInputClasses = (fieldName: string) => {
    const value = form[fieldName as keyof typeof form];
    const error = errors[fieldName];
    const isTouched = touched[fieldName];
    
    // Only show validation states after the field has been touched and has content
    if (!isTouched || !value.trim()) {
      return "border-gray-300 focus:border-blue-500 focus:ring-blue-200";
    }
    
    // Show error state if there's an error
    if (error) {
      return "focus:border-red-500 focus:ring-red-200";
    }
    
    // Show success state only if field is valid and has substantial content
    return "focus:border-green-500 focus:ring-green-200";
  };

  const validateAll = () => {
    const errs: typeof errors = {
      name: validators.name(form.name),
      email: validators.email(form.email),
      message: validators.message(form.message),
    };
    setErrors(errs);
    // Mark all fields as touched when validating
    setTouched({ name: true, email: true, message: true });
    return !Object.values(errs).some(Boolean);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Mark field as touched on blur
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    // Validate on blur only if field has content
    if (value.trim()) {
      const error = validators[name as keyof typeof validators](value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/send-slack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          message: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
      setTimeout(() => onSuccess?.(), 1500);
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const renderField = (
    label: string,
    name: keyof typeof form,
    type: "text" | "email" | "textarea",
    placeholder: string,
    maxLength: number
  ) => {
    const value = form[name];
    const error = errors[name];
    const isTouched = touched[name];
    
    const commonProps = {
      id: name,
      name,
      value,
      onChange: handleChange,
      onBlur: handleBlur,
      placeholder,
      maxLength,
      className: `${type === "textarea" ? "text-base p-4 resize-none min-h-[150px] rounded-lg" : "h-11"} ${getInputClasses(name)}`,
    };

    return (
      <div className="space-y-2">
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label} *
        </label>
        {type === "textarea" ? (
          <Textarea {...commonProps} rows={6} />
        ) : (
          <Input type={type} {...commonProps} />
        )}
        <div className="flex justify-between items-center">
          {error && isTouched && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {error}
            </p>
          )}
          {name === "message" && (
            <span className={`text-xs ml-auto ${value.length > 1800 ? 'text-orange-600' : 'text-gray-500'}`}>
              {value.length}/{maxLength} characters
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {renderField("Full Name", "name", "text", "Enter your full name", 100)}
      {renderField("Email Address", "email", "email", "Enter your business email", 320)}
      {renderField("Tell us about your company", "message", "textarea", "Company, use-case, team size, etc.", 2000)}

      {status === "success" && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Demo request sent successfully! We&apos;ll contact you within 24 hours.
          </AlertDescription>
        </Alert>
      )}
      {status === "error" && (
        <Alert className="border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            Something went wrong. Please try again later.
          </AlertDescription>
        </Alert>
      )}

      <Button type="submit" disabled={loading} className="w-full h-11">
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? "Sending Request..." : "Request Demo"}
      </Button>
    </form>
  );
};

export default GetDemoForm;