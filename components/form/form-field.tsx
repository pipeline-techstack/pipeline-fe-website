import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  required = false,
  rows = 4,
  className = ""
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(name, e.target.value);
  };

  const inputClassName = `px-4 py-3 border-2 border-gray-200 hover:border-primary/30 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm md:text-base transition-all duration-200 ${className}`;

  return (
    <div className="space-y-2">
      <label className="block font-semibold text-gray-800 text-sm md:text-base">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === "textarea" ? (
        <Textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={inputClassName}
          rows={rows}
        />
      ) : (
        <Input
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={inputClassName}
        />
      )}
      
      {error && (
        <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
};
