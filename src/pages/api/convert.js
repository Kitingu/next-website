import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullName, phone, email, carDetails, location, comments } = req.body;

    if (!fullName || !phone || !carDetails || !location) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Configure transporter for Outlook SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OTOGAS_EMAIL,
      subject: "🔥 New LPG Conversion Request",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2c5282; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { padding: 25px; background-color: #f7fafc; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
            .detail-box { background: white; border-radius: 6px; padding: 15px; margin-bottom: 15px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .detail-title { font-weight: 600; color: #2c5282; margin-bottom: 5px; font-size: 16px; }
            .detail-value { font-size: 15px; color: #4a5568; }
            .footer { margin-top: 25px; text-align: center; font-size: 14px; color: #718096; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>New LPG Conversion Request</h1>
          </div>
          <div class="content">
            <div class="detail-box">
              <div class="detail-title">👤 Customer Information</div>
              <div class="detail-value">${fullName}</div>
              <div class="detail-value">📞 ${phone}</div>
              ${email ? `<div class="detail-value">✉️ <a href="mailto:${email}">${email}</a></div>` : ''}
            </div>
            <div class="detail-box">
              <div class="detail-title">🚗 Vehicle Details</div>
              <div class="detail-value">${carDetails}</div>
            </div>
            <div class="detail-box">
              <div class="detail-title">📍 Preferred Location</div>
              <div class="detail-value">${location}</div>
            </div>
            ${comments ? `
              <div class="detail-box">
                <div class="detail-title">💬 Additional Comments</div>
                <div class="detail-value">${comments.replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
            <div class="footer">
              <p>This request was submitted through the website. Please respond within 24 hours.</p>
              <p>© ${new Date().getFullYear()} Proto Energy. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);

    if (error.code === "EAUTH") {
      return res.status(500).json({ error: "Email authentication failed. Check credentials." });
    }

    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}
