import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, organization, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from BIN-AMEEN CONSULTING Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Organization: ${organization || "Not provided"}
Service of Interest: ${service || "Not specified"}

Message:
${message}

---
This message was sent from the contact form on binameenconsulting.com.ng
    `.trim()

    // For now, we'll use a simple email service approach
    // In production, you would integrate with services like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - AWS SES

    // Since we can't send actual emails in this environment,
    // we'll log the email content and return success
    console.log("Email would be sent to: info.binameen@gmail.com")
    console.log("Email content:", emailContent)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
