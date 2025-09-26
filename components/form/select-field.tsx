import React from 'react';
import { AlertCircle } from "lucide-react";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options: string[];
  error?: string;
  required?: boolean;
  subtext?: string;
  placeholder?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
  subtext,
  placeholder = "Please select"
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block font-semibold text-gray-800 text-sm md:text-base">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {subtext && <p className="text-gray-500 text-xs md:text-sm">{subtext}</p>}
      
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className="bg-white px-4 py-3 border-2 border-gray-200 hover:border-primary/30 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 w-full text-sm md:text-base transition-all duration-200 appearance-none cursor-pointer"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        
        <div className="right-0 absolute inset-y-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {error && (
        <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
};