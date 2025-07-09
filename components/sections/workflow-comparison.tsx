import React from "react";
import Image from "next/image";
import fragmentedImage from "../../assets/fragmented-icons.png";
import unifiedImage from "../../assets/unified-icons.png";

const WorkflowComparison = () => {
  return (
    <div className="px-4 py-16 bg-[#F9FAFF]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
        {/* Fragmented Workflow */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E7EB]">
          <div className="mb-3">
            <span className="text-[10px] font-medium text-[#4F46E5] bg-[#EEF2FF] border border-[#E0E7FF] px-3 py-[3px] rounded-full tracking-wide">
              DETACHED
            </span>
          </div>
          <h3 className="text-[20px] font-bold text-[#111827] leading-tight mb-2">
            Fragmented <span className="font-normal text-[#4B5563]">workflow</span>
          </h3>
          <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
            Manual research, scattered data, and constant app-switching drag down productivity.
          </p>
          <div className="w-full">
            <Image
              src={fragmentedImage}
              alt="Fragmented Workflow"
              className="mx-auto"
            />
          </div>
        </div>

        {/* Unified by Pipeline */}
        <div className="bg-[#4741A6] rounded-2xl p-6 md:p-8 text-white shadow-sm">
          <div className="mb-3">
            <span className="text-[10px] font-medium text-[#4F46E5] bg-[#E0E7FF] border border-[#C7D2FE] px-3 py-[3px] rounded-full tracking-wide">
              ATTACHED
            </span>
          </div>
          <h3 className="text-[20px] font-bold leading-tight mb-2">
            Unified by <span className="text-[#D6D4FF] font-bold">Pipeline</span>
          </h3>
          <p className="text-sm text-[#E4E2FF] leading-relaxed mb-6">
            Automate research, validate contacts, and deliver personalized outreach — all in one streamlined platform.
          </p>
          <div className="w-full">
            <Image
              src={unifiedImage}
              alt="Unified Workflow"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowComparison;
