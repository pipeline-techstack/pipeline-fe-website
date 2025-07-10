import { NextResponse } from "next/server";

interface DemoRequestBody {
  name: string;
  email: string;
  message: string;
}

interface SlackPayload {
  text: string;
}

export async function POST(req: Request) {
  try {
    // Validate environment variables
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!slackWebhookUrl) {
      console.error("SLACK_WEBHOOK_URL environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Parse and validate request body
    const body: DemoRequestBody = await req.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Sanitize input data
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();

    // Create professional Slack payload
    const payload: SlackPayload = {
      text: `🚀 *New Demo Request*\n\n` +
            `👤 *Name:* ${sanitizedName}\n` +
            `📧 *Email:* ${sanitizedEmail}\n` +
            `📝 *Message:* ${sanitizedMessage}\n` +
            `⏰ *Timestamp:* ${new Date().toISOString()}\n` +
            `🌐 *Source:* Website Demo Form`
    };

    // Send to Slack with proper error handling
    const slackResponse = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "User-Agent": "Demo-Request-Bot/1.0"
      },
      body: JSON.stringify(payload),
    });

    if (!slackResponse.ok) {
      const errorText = await slackResponse.text();
      console.error("Slack webhook failed:", {
        status: slackResponse.status,
        statusText: slackResponse.statusText,
        error: errorText
      });
      
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 }
      );
    }

    // Log successful request (without sensitive data)
    console.log("Demo request processed successfully:", {
      name: sanitizedName,
      email: sanitizedEmail,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Demo request sent successfully" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing demo request:", error);
    
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON format in request body" },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}