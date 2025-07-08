import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User, Search, MessageSquare, Navigation } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <User className="w-8 h-8 text-blue-600" />,
      title: "Contact enrichment",
      description:
        "We use a 15-provider waterfall to surface the most accurate contact information—emails and phone numbers—for your target buyers. That means fewer bounces, more connects, and better results than static databases like ZoomInfo.",
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Deep research & scoring",
      description:
        "Pipeline scrapes job boards, LinkedIn, and company sites to uncover live buying signals—hiring activity, tech stack usage, budget shifts, go-to-market changes—and scores every account and contact based on fit and intent. You get a prioritized list with AI-generated insight summaries that would take hours to compile manually. ",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "Personalized messaging",
      description:
        "Pipeline auto-generates outreach tailored to the contact’s live context—tech stack, team changes, job postings—and pushes it directly into your existing engagement platforms like Outreach, Gong Engage, or Salesforce. Reps stay focused, and outreach stays relevant.",
    },
  ];

  return (
    <div className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <Card className="bg-white p-8 border-primary/20">
          <CardContent className="p-0">
            {/* Header */}
            <div className="mb-12">
              <Badge
                variant="outline"
                className="bg-white mb-6 px-4 py-2 border-primary/20 rounded-full text-primary uppercase"
              >
                <Navigation className="mr-1 size-4" />
                <span> ACCELERATE</span>
              </Badge>
              <h2 className="mb-2 font-bold text-4xl">
                <span className="text-primary">Solutions</span>{" "}
                <span className="text-gray-900">we provide</span>
              </h2>
              <p className="max-w-3xl text-gray-600 text-lg">
                The product automates research, qualification, and personalized
                outreach so sales teams can focus on closing deals — not busy
                work.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="gap-8 grid md:grid-cols-3">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="space-y-4 bg-secondary/40 p-4 rounded-lg"
                >
                  {/* Icon */}
                  <div className="flex justify-center items-center size-8">
                    {solution.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 text-xl">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Solutions;
