"use client";

import React from "react";
import { FormField as FormFieldComponent } from "../../components/form/form-field";
import { FormField, useFormValidation } from "@/hooks/use-form-validation";
import { PhoneField } from "@/components/form/phone-field";
import { FormStatus } from "@/components/form/form-status";
import { SubmitButton } from "@/components/form/submit-button";
import Logo from "@/components/common/logo";

interface SubscribeFormData extends FormField {
  fullname: string;
  email: string;
  phone: string;
  consent: string; 
  marketingConsent: string;
}

export default function SubscribeForm() {
  const initialFormData: SubscribeFormData = {
    fullname: "",
    email: "",
    phone: "",
    consent: "",
    marketingConsent: "",
  };

  const validationRules = {
    fullname: { required: true },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    consent: { required: true },
    marketingConsent: { required: true },
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
    <div className="flex justify-center items-center bg-gray-100 p-6 min-h-screen">
      <div className="bg-white shadow-lg p-10 rounded-xl w-full max-w-xl">
        {/* Logo */}
       <Logo />

        {/* Notification Text */}
        <div className="mb-8 text-center">
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
            <h3 className="font-medium text-gray-900 text-base">
              Communication Preferences
            </h3>

            {/* Account Updates Consent */}
            <div className="p-4 border border-gray-200 rounded-lg min-h-[80px]">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="accountConsent"
                  name="accountConsent"
                  checked={!!form.consent}
                  onChange={(e) =>
                    handleChange("consent", e.target.checked ? "yes" : "")
                  }
                  className="flex-shrink-0 bg-white mt-0.5 border-gray-300 rounded focus:outline-none w-5 h-5 accent-primary"
                />
                <div className="flex-1 ml-3">
                  <label
                    htmlFor="accountConsent"
                    className="font-medium text-gray-900 text-sm cursor-pointer"
                  >
                    I consent to receive account updates via SMS{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <details className="mt-2">
                    <summary className="text-primary text-sm hover:underline cursor-pointer list-none">
                      <span className="inline-flex items-center">
                        <svg className="inline mr-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        View details
                      </span>
                    </summary>
                    <p className="mt-3 pl-4 border-gray-200 border-l-2 text-gray-600 text-xs leading-relaxed">
                      By providing a telephone number, clicking this button, and submitting the form, you are consenting to be contacted by
                      SMS text message from Signal House, LLC regarding account issues and outages (customer care), (our message frequency
                      may vary). Message & data rates apply. Reply STOP to unsubscribe from further messaging. Reply HELP for more information. See our{" "}
                      <a
                        href="https://addpipeline.ai/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary/80 hover:text-primary/100 underline"
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
            <div className="p-4 border border-gray-200 rounded-lg min-h-[80px]">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  name="marketingConsent"
                  checked={!!form.marketingConsent}
                  onChange={(e) =>
                    handleChange("marketingConsent", e.target.checked ? "yes" : "")
                  }
                  className="flex-shrink-0 bg-white mt-0.5 border-gray-300 rounded focus:outline-none w-5 h-5 accent-primary"
                />
                <div className="flex-1 ml-3">
                  <label
                    htmlFor="marketingConsent"
                    className="font-medium text-gray-900 text-sm cursor-pointer"
                  >
                    I consent to receive marketing offers via SMS{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <details className="mt-2">
                    <summary className="text-primary text-sm hover:underline cursor-pointer list-none">
                      <span className="inline-flex items-center">
                        <svg className="inline mr-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        View details
                      </span>
                    </summary>
                    <p className="mt-3 pl-4 border-gray-200 border-l-2 text-gray-600 text-xs leading-relaxed">
                      By providing a telephone number, clicking this button, and submitting the form, you are consenting to be contacted by
                      SMS text message from Signal House, LLC regarding new offers (marketing), (our message frequency may vary). Message &
                      data rates apply. Reply STOP to unsubscribe from further messaging. Reply HELP for more information. See our{" "}
                      <a
                        href="https://addpipeline.ai/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary/80 hover:text-primary/100 underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      (containing our SMS Terms) for more information.
                    </p>

                  </details>
                </div>
              </div>
            </div>

            {errors.marketingConsent && (
              <p className="mt-2 text-red-500 text-xs">{errors.marketingConsent}</p>
            )}
            {errors.consent && (
              <p className="mt-2 text-red-500 text-sm">{errors.consent}</p>
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