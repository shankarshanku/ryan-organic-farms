// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    first = "",
    last = "",
    email = "",
    phone = "",
    message = "",
  } = req.body || {};
  const name = `${first} ${last}`.trim();

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Please provide name, email and message." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  // SMTP env vars (set these in .env.local)
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT
    ? parseInt(process.env.SMTP_PORT, 10)
    : undefined;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const FROM_EMAIL = process.env.FROM_EMAIL || SMTP_USER;
  const TO_EMAIL = process.env.TO_EMAIL || "praveenpatala79@gmail.com";

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return res
      .status(500)
      .json({ error: "SMTP not configured. Check environment variables." });
  }

  const subject = `Website message from ${name || "Anonymous"}`;
  const htmlBody = `
    <h3>New message from Ryan Organic Farms website</h3>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(message).replace(
      /\n/g,
      "<br/>"
    )}</p>
  `;
  const textBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

  try {
    // create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // send email
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      text: textBody,
      html: htmlBody,
      replyTo: email,
    });

    // Optional: send SMS via Twilio (only runs if env vars provided)
    if (
      process.env.TWILIO_SID &&
      process.env.TWILIO_TOKEN &&
      process.env.TWILIO_FROM &&
      process.env.TO_SMS
    ) {
      try {
        const twilio = (await import("twilio")).default;
        const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
        const smsMsg = `New message from ${name}. Email: ${email}. Phone: ${phone}.`;
        await client.messages.create({
          body: smsMsg,
          from: process.env.TWILIO_FROM,
          to: process.env.TO_SMS,
        });
      } catch (smsErr) {
        console.error("Twilio error (non-fatal):", smsErr);
      }
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({
      error: "Failed to send message",
      details: String(err.message || err),
    });
  }
}

// small safe escape
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
