import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, interest } = body

    // ── Validate required fields ──
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // ── Basic email validation ──
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // ── Configure transporter ──
    // Set these in your .env.local file:
    //   SMTP_HOST=smtp.gmail.com
    //   SMTP_PORT=587
    //   SMTP_USER=your-email@gmail.com
    //   SMTP_PASS=your-app-password          ← Gmail App Password (not your account password)
    //   CONTACT_RECIPIENT=trefoil.guildkgga@gmail.com
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   || 'smtp.gmail.com',
      port:   Number(process.env.SMTP_PORT)  || 587,
      secure: false,   // STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const recipient = process.env.CONTACT_RECIPIENT || 'trefoil.guildkgga@gmail.com'

    // ── Send email to Trefoil Guild Kenya ──
    await transporter.sendMail({
      from:    `"Grannies Project Website" <${process.env.SMTP_USER}>`,
      to:      recipient,
      replyTo: `"${name}" <${email}>`,
      subject: `[Grannies Project] ${subject || 'New Contact Form Submission'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; color: #0D1B4B; background: #f4f8fb; margin: 0; padding: 0; }
            .wrapper { max-width: 580px; margin: 24px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
            .header { background: #1B3380; padding: 28px 32px; }
            .header h1 { color: #29ABE2; font-size: 22px; margin: 0 0 4px; }
            .header p  { color: rgba(255,255,255,0.6); font-size: 13px; margin: 0; }
            .body { padding: 28px 32px; }
            .field { margin-bottom: 18px; }
            .label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #29ABE2; margin-bottom: 4px; }
            .value { font-size: 15px; color: #0D1B4B; line-height: 1.6; }
            .message-box { background: #EBF5FC; border-left: 3px solid #29ABE2; padding: 14px 16px; border-radius: 0 8px 8px 0; font-size: 15px; line-height: 1.7; color: #0D1B4B; white-space: pre-wrap; }
            .footer { background: #EBF5FC; padding: 16px 32px; font-size: 12px; color: #4E6080; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Grannies Project · Trefoil Guild Kenya</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color:#1B3380">${email}</a></div>
              </div>
              ${interest ? `
              <div class="field">
                <div class="label">Area of Interest</div>
                <div class="value">${interest}</div>
              </div>` : ''}
              ${subject ? `
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>` : ''}
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br/>')}</div>
              </div>
            </div>
            <div class="footer">
              This message was sent from the contact form at granniesproject.org.
              Reply directly to this email to respond to ${name}.
            </div>
          </div>
        </body>
        </html>
      `,
    })

    // ── Auto-reply to sender ──
    await transporter.sendMail({
      from:    `"Grannies Project · Trefoil Guild Kenya" <${process.env.SMTP_USER}>`,
      to:      email,
      subject: 'Thank you for reaching out — Grannies Project',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; color: #0D1B4B; background: #f4f8fb; margin: 0; padding: 0; }
            .wrapper { max-width: 560px; margin: 24px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
            .header { background: #1B3380; padding: 32px; text-align: center; }
            .header h1 { color: #F5A623; font-size: 24px; margin: 0 0 6px; }
            .header p  { color: rgba(255,255,255,0.65); font-size: 13px; margin: 0; }
            .body { padding: 32px; font-size: 15px; line-height: 1.75; color: #0D1B4B; }
            .highlight { background: #EBF5FC; border-radius: 8px; padding: 14px 18px; margin: 20px 0; font-size: 14px; color: #1B3380; }
            .cta { display: inline-block; background: #29ABE2; color: #fff; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 6px; text-decoration: none; margin-top: 8px; }
            .footer { background: #EBF5FC; padding: 16px 32px; font-size: 12px; color: #4E6080; text-align: center; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>Thank You, ${name}!</h1>
              <p>Grannies Project · Trefoil Guild Kenya</p>
            </div>
            <div class="body">
              <p>Thank you for reaching out to the Grannies Project. We have received your message and one of our team members will be in touch with you shortly.</p>
              <div class="highlight">
                <strong>Your message has been received.</strong><br/>
                We typically respond within 2–3 business days.
              </div>
              <p>In the meantime, you're welcome to explore our website to learn more about the work we do empowering grandmothers in Kibra, Nairobi.</p>
              <p><em>"Inspiring Generations, Building Communities."</em></p>
              <p style="margin-top:24px">
                Warm regards,<br/>
                <strong>The Trefoil Guild Kenya Team</strong><br/>
                Kenya Girl Guides Association
              </p>
            </div>
            <div class="footer">
              Kenya Girl Guides Association · Arboretum Road, Off State House Rd, Nairobi<br/>
              trefoil.guildkgga@gmail.com
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}