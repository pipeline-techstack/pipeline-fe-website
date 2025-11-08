import { NextResponse } from "next/server";
import { parsePhoneNumber } from "libphonenumber-js";

interface DemoRequestBody {
  name: string;
  email: string;
  phone: string;
  seniority: string;
  companySize: string;
  salesTeamSize?: string;
  hearAboutUs?: string;
  message: string;
  consent: string;
  marketingConsent: string;
}

interface SlackPayload {
  text: string;
}

function formatPhoneForDisplay(phone: string): string {
  try {
    const phoneNumber = parsePhoneNumber(phone);

    if (!phoneNumber || !phoneNumber.isValid()) {
      return phone; // fallback
    }

    const countryCallingCode = phoneNumber.countryCallingCode;

    // Format with spaces
    const formatted = phoneNumber.formatInternational();
    const nationalPart = formatted.replace(`+${countryCallingCode} `, "");

    return `(+${countryCallingCode}) ${nationalPart}`;
  } catch (err) {
    console.error("Phone formatting error:", err);
    return phone;
  }
}

function validatePhoneNumber(phone: string) {
  if (!phone || !phone.trim()) {
    return { isValid: false, error: "Phone number is required" };
  }

  try {
    const phoneNumber = parsePhoneNumber(phone);

    if (!phoneNumber) {
      return { isValid: false, error: "Invalid phone number format" };
    }

    if (!phoneNumber.isValid()) {
      return { isValid: false, error: "Phone number is not valid" };
    }

    return {
      isValid: true,
      cleaned: phoneNumber.number,
      formatted: formatPhoneForDisplay(phone),
    };
  } catch {
    return { isValid: false, error: "Invalid phone number format" };
  }
}

export async function POST(req: Request) {
  try {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!slackWebhookUrl) {
      console.error("SLACK_WEBHOOK_URL not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body: DemoRequestBody = await req.json();
    const {
      name,
      email,
      phone,
      seniority,
      companySize,
      salesTeamSize,
      hearAboutUs,
      message,
      consent,
      marketingConsent,
    } = body;

    // Input validation
    const missingFields = [];
    if (!name?.trim()) missingFields.push("name");
    if (!email?.trim()) missingFields.push("email");
    if (!phone?.trim()) missingFields.push("phone");
    if (!seniority) missingFields.push("seniority");
    if (!companySize) missingFields.push("companySize");
    if (!message?.trim()) missingFields.push("message");
    if (!consent) missingFields.push("consent");
    if (!marketingConsent) missingFields.push("marketingConsent");

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          fields: missingFields,
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Phone validation
    const phoneValidation = validatePhoneNumber(phone);
    if (!phoneValidation.isValid) {
      return NextResponse.json(
        { error: phoneValidation.error },
        { status: 400 }
      );
    }

    // Slack payload
    const payload: SlackPayload = {
      text: [
        `🚀 *New Demo Request Received!*`,
        `👤 *Name:* ${name.trim()}`,
        `📧 *Email:* ${email.trim().toLowerCase()}`,
        `📱 *Phone:* ${phoneValidation.formatted}`,
        `🧑‍💼 *Seniority:* ${seniority}`,
        `🏢 *Company Size:* ${companySize}`,
        salesTeamSize ? `👥 *Sales Team Size:* ${salesTeamSize}` : null,
        hearAboutUs ? `📣 *Heard About Us Via:* ${hearAboutUs}` : null,
        `💬 *Message:* ${message.trim()}`,
        ``,
        `📋 *Communication Preferences:*`,
        `✅ *Account Updates Consent:* ${consent === "yes" ? "Yes" : "No"}`,
        `✅ *Marketing Consent:* ${marketingConsent === "yes" ? "Yes" : "No"}`,
        ``,
        `⏰ *Submitted:* ${new Date().toLocaleString("en-US", {
          timeZone: "UTC",
          dateStyle: "medium",
          timeStyle: "short",
        })} UTC`,
      ]
        .filter(Boolean)
        .join("\n"),
    };

    // Send to Slack
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(slackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Slack API error: ${response.status}`);
      }
    } catch (fetchError) {
      console.error("Slack webhook error:", fetchError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Demo request submitted successfully",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Demo request processing error:", err);

    let errorMessage = "Internal server error";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    return NextResponse.json(
      {
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}