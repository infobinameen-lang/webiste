// Email service configuration for future implementation
// This file sets up the structure for proper email integration

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  organization?: string
  service?: string
  message: string
}

export interface EmailConfig {
  to: string
  from: string
  subject: string
  html: string
  text: string
}

export function createContactEmail(data: ContactFormData): EmailConfig {
  const { name, email, phone, organization, service, message } = data

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">BIN-AMEEN CONSULTING Website</p>
      </div>
      
      <div style="padding: 30px; background: #f8fafc;">
        <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #1e293b;">${email}</td>
            </tr>
            ${
              phone
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 8px 0; color: #1e293b;">${phone}</td>
            </tr>
            `
                : ""
            }
            ${
              organization
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Organization:</td>
              <td style="padding: 8px 0; color: #1e293b;">${organization}</td>
            </tr>
            `
                : ""
            }
            ${
              service
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
              <td style="padding: 8px 0; color: #1e293b;">${service}</td>
            </tr>
            `
                : ""
            }
          </table>
          
          <h3 style="color: #1e293b; margin-top: 25px; margin-bottom: 10px;">Message</h3>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #0891b2;">
            <p style="margin: 0; color: #334155; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 14px;">
          <p>This message was sent from the contact form on binameenconsulting.com.ng</p>
          <p>Reply directly to this email to respond to ${name}</p>
        </div>
      </div>
    </div>
  `

  const textContent = `
New Contact Form Submission - BIN-AMEEN CONSULTING

Contact Details:
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${organization ? `Organization: ${organization}` : ""}
${service ? `Service of Interest: ${service}` : ""}

Message:
${message}

---
This message was sent from the contact form on binameenconsulting.com.ng
Reply directly to this email to respond to ${name}
  `.trim()

  return {
    to: "info.binameen@gmail.com",
    from: "noreply@binameenconsulting.com.ng",
    subject: `New Contact Form Submission from ${name}`,
    html: htmlContent,
    text: textContent,
  }
}

// Future implementation notes:
// To enable actual email sending, install and configure one of these services:
//
// 1. Nodemailer with SMTP:
//    npm install nodemailer @types/nodemailer
//    Configure with Gmail SMTP or other email provider
//
// 2. Resend (recommended):
//    npm install resend
//    Add RESEND_API_KEY to environment variables
//
// 3. SendGrid:
//    npm install @sendgrid/mail
//    Add SENDGRID_API_KEY to environment variables
//
// 4. AWS SES:
//    npm install @aws-sdk/client-ses
//    Configure AWS credentials
