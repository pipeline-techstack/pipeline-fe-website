import DemoPage from "./demo-page-component";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await searchParams;

  const page = resolvedParams?.page ?? "outbound";

  // console.log("page:", page);

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