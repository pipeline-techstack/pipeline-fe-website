import React from 'react';
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  loading: boolean;
  loadingText?: string;
  children: React.ReactNode;
  className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  loading,
  loadingText = "Submitting...",
  children,
  className = ""
}) => {
  return (
    <Button 
      type="submit" 
      disabled={loading} 
      className={`bg-gradient-purple text-white disabled:opacity-50 shadow-lg hover:shadow-xl rounded-xl w-full h-12 font-semibold disabled:cursor-not-allowed ${className}`}
    >
      {loading && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
      {loading ? loadingText : children}
    </Button>
  );
};