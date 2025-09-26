import { useState } from 'react';

export interface ValidationRule {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  minLength?: number;
}

export interface FormField {
  [key: string]: string;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export const useFormValidation = <T extends FormField>(
  initialState: T,
  validationRules: ValidationRules
) => {
  const [form, setForm] = useState<T>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    Object.keys(validationRules).forEach(fieldName => {
      const rules = validationRules[fieldName];
      const value = form[fieldName];

      if (rules.required && !value?.trim()) {
        newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      } else if (value?.trim()) {
        if (rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[fieldName] = "Invalid email format";
        }
        if (rules.phone && !/^\+\d{7,15}$/.test(value.replace(/\s/g, ""))) {
          newErrors[fieldName] = "Invalid phone number format";
        }
        if (rules.minLength && value.length < rules.minLength) {
          newErrors[fieldName] = `Minimum ${rules.minLength} characters required`;
        }
      }
    });

    return newErrors;
  };

  const handleChange = (name: string, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const resetForm = () => {
    setForm(initialState);
    setErrors({});
    setStatus("idle");
  };

  return {
    form,
    errors,
    status,
    loading,
    setStatus,
    setLoading,
    setErrors,
    validate,
    handleChange,
    resetForm
  };
};
