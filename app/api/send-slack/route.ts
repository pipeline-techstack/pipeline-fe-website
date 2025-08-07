import { NextResponse } from "next/server";

interface DemoRequestBody {
  name: string;
  email: string;
  seniority: string;
  companySize: string;
  salesTeamSize?: string;
  hearAboutUs?: string;
  message: string;
}

interface SlackPayload {
  text: string;
}

export async function POST(req: Request) {
  try {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!slackWebhookUrl) {
      console.error("SLACK_WEBHOOK_URL is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body: DemoRequestBody = await req.json();
    const { name, email, seniority, companySize, salesTeamSize, hearAboutUs, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !seniority || !companySize || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, seniority, companySize, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.trim().length > 2000) {
      return NextResponse.json(
        { error: "Message must be under 2000 characters" },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizeName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();

    // Construct Slack payload
    const payload: SlackPayload = {
      text:
        `🚀 *New Demo Request Received!*\n\n` +
        `👤 *Name:* ${sanitizeName}\n` +
        `📧 *Email:* ${sanitizedEmail}\n` +
        `🧑‍💼 *Seniority:* ${seniority}\n` +
        `🏢 *Company Size:* ${companySize}\n` +
        (salesTeamSize ? `👥 *Sales Team Size:* ${salesTeamSize}\n` : "") +
        (hearAboutUs ? `📣 *Heard About Us Via:* ${hearAboutUs}\n` : "") +
        `💬 *Message:* ${sanitizedMessage}\n` +
        `⏰ *Time:* ${new Date().toISOString()}\n` +
        `🌐 *Source:* Website Demo Form`
    };

    // Send to Slack
    const slackResponse = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Pipeline-Demo-Bot"
      },
      body: JSON.stringify(payload)
    });

    if (!slackResponse.ok) {
      const errorText = await slackResponse.text();
      console.error("Slack webhook error:", slackResponse.status, errorText);
      return NextResponse.json(
        { error: "Slack notification failed" },
        { status: 500 }
      );
    }

    console.log("Demo request sent to Slack:", {
      email: sanitizedEmail,
      seniority,
      companySize,
      salesTeamSize,
      hearAboutUs
    });

    return NextResponse.json(
      { success: true, message: "Demo request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Demo request error:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
