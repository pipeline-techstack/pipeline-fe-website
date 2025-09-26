import React from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AlertCircle } from "lucide-react";

interface PhoneFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  defaultCountry?: string;
}

export const PhoneField: React.FC<PhoneFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  placeholder = "Enter phone number",
  defaultCountry = "us"
}) => {
  const handlePhoneChange = (phoneValue: string) => {
    const formattedValue = phoneValue.startsWith("+") ? phoneValue : `+${phoneValue}`;
    onChange(name, formattedValue);
  };

  return (
    <div className="space-y-2">
      <label className="block font-semibold text-gray-800 text-sm md:text-base">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <PhoneInput
        country={defaultCountry}
        value={value}
        onChange={handlePhoneChange}
        inputProps={{
          name: name,
          required: required,
          placeholder: placeholder,
        }}
        containerStyle={{ width: "100%", position: "relative" }}
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
          position: "absolute",
          bottom: "100%",
          left: 0,         
          marginBottom: "8px", 
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
      
      {error && (
        <p className="flex items-center gap-1 text-red-500 text-xs md:text-sm">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
};