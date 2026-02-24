"use client";

import { useSearchParams } from "next/navigation";
import DemoPage from "./demo-page-component";
import { useEffect, useState } from "react";

function Page() {
  const params = useSearchParams().get("page") !;
  const [data, setData] = useState({
    cta: "",
    headline: "",
    page: "",
  });

  // console.log(params);
  useEffect(() => {
    if (params === "revenue") {
      setData({
        cta: "Revenue Intelligence Platform",
        headline:
          "Understand what's driving the number, and where to focus next",
        page: params,
      });
    } else {
      setData({
        cta: "Outbound Intelligence Platform",
        headline:
          "LinkedIn Outreach That Delivers High-Intent B2B Conversations",
        page: params,
      });
    }
  }, []);

  return (
    <>
      <DemoPage {...data} />
    </>
  );
}

export default Page;
