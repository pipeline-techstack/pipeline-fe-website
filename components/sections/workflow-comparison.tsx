import React from "react";
import Image from "next/image";
import fragmentedImage from "../../assets/fragmented-icons.png";
import unifiedImage from "../../assets/unified-icons.png";
import { GitBranchPlus, GitBranch } from "lucide-react";

const WorkflowComparison = () => {
  return (
    <div className="px-4 py-16 bg-[#F9FAFF]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
        {/* Fragmented Workflow */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] h-full flex flex-col">
          <div className="mb-4">
            <span className="text-[10px] font-medium text-[#6B7280] bg-[#F3F4F6] border border-[#E5E7EB] px-3 py-1 rounded-full tracking-wide">
              <GitBranch className="inline-block mr-2 w-4 h-4" />
              DETACHED
            </span>
          </div>
          <h3 className="text-3xl font-bold text-blue-600 leading-tight mb-3">
            Fragmented <span className="font-bold text-[#4c4d4e]">workflow</span>
          </h3>
          <p className="text-sm text-[#6B7280] leading-relaxed mb-8">
            Manual research, scattered data, and constant app-switching drag down productivity.
          </p>
          <div className="w-full flex-1 flex items-center justify-center">
            <Image
              src={fragmentedImage}
              alt="Fragmented Workflow"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>

        {/* Unified by Pipeline */}
        <div className="bg-[#4741A6] rounded-2xl p-8 text-white shadow-sm h-full flex flex-col">
          <div className="mb-4">
            <span className="text-[10px] font-medium text-[#4741A6] bg-white border border-[#E0E7FF] px-3 py-1 rounded-full tracking-wide">
              <GitBranchPlus className="inline-block mr-2 w-4 h-4 text-[#4741A6]" />
              ATTACHED
            </span>
          </div>
          <h3 className="text-3xl font-bold leading-tight mb-3">
            Unified by <span className="text-[#D6D4FF] font-bold">Pipeline</span>
          </h3>
          <p className="text-sm text-[#E4E2FF] leading-relaxed mb-8">
            Automate research, validate contacts, and deliver personalized outreach — all in one streamlined platform.
          </p>
          <div className="w-full flex-1 flex items-center justify-center">
            <Image
              src={unifiedImage}
              alt="Unified Workflow"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowComparison;