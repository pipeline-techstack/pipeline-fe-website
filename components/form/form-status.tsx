import React from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";

interface FormStatusProps {
  status: "idle" | "success" | "error";
  successMessage?: string;
  errorMessage?: string;
}

export const FormStatus: React.FC<FormStatusProps> = ({
  status,
  successMessage = "Form submitted successfully!",
  errorMessage = "Something went wrong. Please try again later."
}) => {
  if (status === "idle") return null;

  return (
    <>
      {status === "success" && (
        <Alert className="bg-green-50 border-green-200 rounded-xl">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <AlertDescription className="font-medium text-green-800">
            {successMessage}
          </AlertDescription>
        </Alert>
      )}
      
      {status === "error" && (
        <Alert className="bg-red-50 border-red-200 rounded-xl">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <AlertDescription className="font-medium text-red-800">
            {errorMessage}
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};
