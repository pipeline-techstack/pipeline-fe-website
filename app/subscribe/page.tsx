"use client";

import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { FormField as FormFieldComponent } from "../../components/form/form-field";
import { FormField, useFormValidation } from "@/hooks/use-form-validation";
import { PhoneField } from "@/components/form/phone-field";
import { FormStatus } from "@/components/form/form-status";
import { SubmitButton } from "@/components/form/submit-button";

interface SubscribeFormData extends FormField {
  fullname: string;
  email: string;
  phone: string;
  consent: string; 
}

export default function SubscribeForm() {
  const initialFormData: SubscribeFormData = {
    fullname: "",
    email: "",
    phone: "",
    consent: "",
  };

  const validationRules = {
    fullname: { required: true },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    consent: { required: true },
  };

  const {
    form,
    errors,
    status,
    loading,
    setStatus,
    setLoading,
    setErrors,
    validate,
    handleChange,
    resetForm,
  } = useFormValidation(initialFormData, validationRules);

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
      console.log("Form submitted:", form);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      resetForm();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-xl">
        {/* Logo */}
        <div className="text-center mb-4">
          <Image
            src={logo}
            alt="Pipeline Logo"
            width={200}
            height={160}
            className="mx-auto mb-2"
          />
        </div>

        {/* Notification Text */}
        <div className="text-center mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            You will receive a notification regarding what you signed up for.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormFieldComponent
            label="Full name"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            error={errors.fullname}
            placeholder="e.g. John Doe"
            required
          />

          <FormFieldComponent
            label="Work email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="What is your work email?"
            required
          />

          <PhoneField
            label="Phone number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />

          {/* Consent Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={!!form.consent}
              onChange={(e) =>
                handleChange("consent", e.target.checked ? "yes" : "")
              }
              className="h-7 w-7 mt-0.5 bg-white border-gray-300 rounded focus:outline-none accent-primary"
            />
            <label htmlFor="consent" className="ml-2 text-gray-700 text-sm">
              I agree to receive SMS reminders and updates from Pipeline about
              my meetings and account.
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-sm">{errors.consent}</p>
          )}

          <FormStatus
            status={status}
            successMessage="Form submitted successfully! You will receive a notification shortly."
            errorMessage="Something went wrong. Please try again later."
          />

          <SubmitButton loading={loading}>Submit</SubmitButton>
        </form>
      </div>
    </div>
  );
}