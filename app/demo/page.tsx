import DemoPage from "./demo-page-component";

export default function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = searchParams.page ?? "outbound";
  // console.log("page ", page);
  const data =
    page === "revenue"
      ? {
          cta: "Revenue Intelligence Platform",
          headline:
            "Understand what's driving the number, and where to focus next",
          page: page,
        }
      : {
          cta: "Outbound Intelligence Platform",
          headline:
            "LinkedIn Outreach That Delivers High-Intent B2B Conversations",
          page: page,
        };

  return <DemoPage {...data} />;
}