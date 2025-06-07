import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Get the data from the request body
    const { email, subject, message, department } = await req.json();

    // Validate inputs
    if (  !subject || !message || !department) {
      return new Response(
        JSON.stringify({ error: 'Subject and message are mandatory fields.' }),
        { status: 400 }
      );
    }

    // Determine the recipient email based on the department
    let recipientEmail;

    switch (department.toLowerCase()) {
      case 'otogas':
        recipientEmail = process.env.OTOGAS_EMAIL;
        break;
      case 'bulk':
        recipientEmail = process.env.BULK_EMAIL;
        break;
      case 'cylinders':
        recipientEmail = process.env.CYLINDERS_EMAIL;
        break;
      case 'contact':
        recipientEmail = process.env.CONTACT_EMAIL;
        break;
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid department specified.' }),
          { status: 400 }
        );
    }

    // Create a transporter for sending the email using Outlook's SMTP server
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // Use TLS (587) instead of SSL (465)
      auth: {
        user: process.env.EMAIL_USER, // Replace with your email (Outlook)
        pass: process.env.EMAIL_PASS, // Replace with your password (Outlook) or app-specific password
      },
    });

    // Email options
    // const mailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: recipientEmail, // Send email to the department-specific recipient
    //   subject: subject,
    //   text: `Email: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    //   html: `<p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong> ${message}</p>`,
    // };

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: subject,
      text: `Email: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>${subject}</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
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
              border-radius: 8px 8px 0 0;
            }
            .header h1 {
              color: white;
              margin: 0;
              font-size: 24px;
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
              border-radius: 0 0 8px 8px;
              color: white;
              font-size: 12px;
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
          </style>
        </head>
        <body>
          <div class="header">
            <h1>New Message from ${department} Department</h1>
          </div>
          
          <div class="content">
            <div class="info-label">From:</div>
            <div class="info-value">${email || 'Not provided'}</div>
            
            <div class="info-label">Subject:</div>
            <div class="info-value">${subject}</div>
            
            <div class="divider"></div>
            
            <div class="info-label">Message:</div>
            <div class="info-value">
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div class="divider"></div>
            
            <p>Please respond to this inquiry at your earliest convenience.</p>
            
            <center>
              <a href="mailto:${email}" class="button">Reply to Sender</a>
            </center>
          </div>
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} Proto Energy. All rights reserved.</p>
            <p>This is an automated message from protoenegy.com website - please do not reply directly to this email.</p>
          </div>
        </body>
        </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Feedback submitted successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send feedback. Please try again later.' }),
      { status: 500 }
    );
  }
}
