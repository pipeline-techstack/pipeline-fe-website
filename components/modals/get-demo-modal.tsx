"use client";

import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import GetDemoForm from "../custom/get-demo-form";

const GetDemoModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div onClick={() => setOpen(true)}>{children}</div>
      </DialogTrigger>

      <DialogContent className="w-full max-w-md sm:max-w-lg p-0 gap-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-semibold">Request a Demo</DialogTitle>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <GetDemoForm onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetDemoModal;