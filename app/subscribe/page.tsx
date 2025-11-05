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

          {/* Communication Preferences */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-medium text-base">
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
                  onChange={(e) =>
                    handleChange("consent", e.target.checked ? "yes" : "")
                  }
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
                      By providing a telephone number, clicking this button, and
                      submitting the form, you are consenting to be contacted by
                      SMS text message from Signal House, LLC regarding account
                      issues and outages (customer care), (our message frequency
                      may vary). Message & data rates apply. Reply STOP to
                      unsubscribe from further messaging. Reply HELP for more
                      information. See our Privacy Policy (containing our SMS
                      Terms) at the bottom of the page for more information.
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
                  className="h-5 w-5 mt-0.5 bg-white border-gray-300 rounded focus:outline-none accent-primary flex-shrink-0"
                />
                <div className="ml-3 flex-1">
                  <label
                    htmlFor="marketingConsent"
                    className="text-gray-900 text-sm font-medium cursor-pointer"
                  >
                    I consent to receive marketing offers via SMS
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
                      By providing a telephone number, clicking this button, and
                      submitting the form, you are consenting to be contacted by
                      SMS text message from Signal House, LLC regarding new
                      offers (marketing), (our message frequency may vary).
                      Message & data rates apply. Reply STOP to unsubscribe from
                      further messaging. Reply HELP for more information. See our
                      Privacy Policy (containing our SMS Terms) at the bottom of
                      the page for more information.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {errors.consent && (
              <p className="text-red-500 text-sm mt-2">{errors.consent}</p>
            )}
          </div>

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