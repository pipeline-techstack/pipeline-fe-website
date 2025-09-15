import { NextResponse } from "next/server";

interface DemoRequestBody {
  name: string;
  email: string;
  phone: string;
  seniority: string;
  companySize: string;
  salesTeamSize?: string;
  hearAboutUs?: string;
  message: string;
}

interface SlackPayload {
  text: string;
}

function validatePhoneNumber(phone: string) {
  if (!phone || !phone.trim()) return { isValid: false, error: "Phone number is required" };

  let cleanPhone = phone.replace(/[^\d+]/g, "");
  if (!cleanPhone.startsWith("+")) cleanPhone = "+" + cleanPhone;

  const digitsOnly = cleanPhone.substring(1);
  if (!/^\d+$/.test(digitsOnly)) return { isValid: false, error: "Phone number contains invalid characters" };
  if (digitsOnly.length < 7) return { isValid: false, error: "Phone number is too short" };
  if (digitsOnly.length > 15) return { isValid: false, error: "Phone number is too long" };
  if (digitsOnly.startsWith("0")) return { isValid: false, error: "Phone number cannot start with 0 after country code" };

  return { isValid: true, cleaned: cleanPhone };
}

export async function POST(req: Request) {
  try {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!slackWebhookUrl) return NextResponse.json({ error: "Server config error" }, { status: 500 });

    const body: DemoRequestBody = await req.json();
    const { name, email, phone, seniority, companySize, salesTeamSize, hearAboutUs, message } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !seniority || !companySize || !message?.trim())
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

    // Phone validation
    const phoneValidation = validatePhoneNumber(phone);
    if (!phoneValidation.isValid) return NextResponse.json({ error: phoneValidation.error }, { status: 400 });

    // Format for display
    const formattedPhone = phoneValidation.cleaned;

    // Slack payload
    const payload: SlackPayload = {
      text:
        `🚀 *New Demo Request Received!*\n` +
        `👤 *Name:* ${name.trim()}\n` +
        `📧 *Email:* ${email.trim().toLowerCase()}\n` +
        `📱 *Phone:* ${formattedPhone}\n` +
        `🧑‍💼 *Seniority:* ${seniority}\n` +
        `🏢 *Company Size:* ${companySize}\n` +
        (salesTeamSize ? `👥 *Sales Team Size:* ${salesTeamSize}\n` : "") +
        (hearAboutUs ? `📣 *Heard About Us Via:* ${hearAboutUs}\n` : "") +
        `💬 *Message:* ${message.trim()}\n` +
        `⏰ *Time:* ${new Date().toISOString()}`,
    };

    await fetch(slackWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ success: true, message: "Demo request submitted successfully" }, { status: 200 });
  } catch (err) {
    console.error("Demo request error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
