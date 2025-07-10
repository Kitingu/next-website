import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { email, subject, message, department } = req.body;

    // Validate inputs
    if (!subject || !message || !department) {
      return res
        .status(400)
        .json({ error: "Subject, message, and department are required." });
    }

    // Determine recipient email based on department
    let recipientEmail;
    switch (department.toLowerCase()) {
      case "otogas":
        recipientEmail = process.env.OTOGAS_EMAIL;
        break;
      case "bulk":
        recipientEmail = process.env.BULK_EMAIL;
        break;
      case "cylinders":
        recipientEmail = process.env.CYLINDERS_EMAIL;
        break;
      case "contact":
        recipientEmail = process.env.CONTACT_EMAIL;
        break;
      default:
        return res.status(400).json({ error: "Invalid department specified." });
    }

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Construct the email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: subject,
      text: `Email: ${email || "Not provided"}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>${subject}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #12173E;
                padding: 20px;
                text-align: center;
                color: white;
                border-radius: 8px 8px 0 0;
              }
              .content {
                padding: 25px;
                background-color: #f9f9f9;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;
              }
              .footer {
                background-color: #12173E;
                padding: 15px;
                text-align: center;
                color: white;
                font-size: 12px;
                border-radius: 0 0 8px 8px;
              }
              .divider {
                border-top: 2px solid #DA4767;
                margin: 20px 0;
              }
              .info-label {
                color: #12173E;
                font-weight: bold;
                margin-bottom: 5px;
              }
              .info-value {
                margin-bottom: 15px;
              }
              .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #DA4767;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                margin-top: 15px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Message from ${department} Department</h1>
            </div>

            <div class="content">
              <div class="info-label">From:</div>
              <div class="info-value">${email || "Not provided"}</div>

              <div class="info-label">Subject:</div>
              <div class="info-value">${subject}</div>

              <div class="divider"></div>

              <div class="info-label">Message:</div>
              <div class="info-value">
                <p>${message.replace(/\n/g, "<br>")}</p>
              </div>

              <div class="divider"></div>

              <p>Please respond to this inquiry at your earliest convenience.</p>

              <center>
                <a href="mailto:${email}" class="button">Reply to Sender</a>
              </center>
            </div>

            <div class="footer">
              <p>© ${new Date().getFullYear()} Proto Energy. All rights reserved.</p>
              <p>This is an automated message from protoenergy.com — please do not reply directly to this email.</p>
            </div>
          </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({
      error: "Failed to send feedback. Please try again later.",
    });
  }
}
