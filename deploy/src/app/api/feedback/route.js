import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message, rating } = await req.json();

    // Validate the inputs
    if (!rating) {
      return new Response(
        JSON.stringify({ error: "Rating is required." }),
        { status: 400 }
      );
    }

    // Set up the email transporter using Outlook's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // Use TLS (587) instead of SSL (465)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use app-specific password if using 2FA
      },
    });

    // Mail options
    // const mailOptions = {
    //   from: process.env.EMAIL_USER, // Sender's address
    //   to: process.env.FEEDBACK_RECEIVER_EMAIL, // Receiver's email
    //   subject: 'New Feedback Submission',
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nRating: ${rating}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p><p><strong>Rating:</strong> ${rating}</p>`,
    // };
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.FEEDBACK_RECEIVER_EMAIL,
      subject: `New Feedback Submission - Rating: ${rating}/5`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nRating: ${rating}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Feedback Submission</title>
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
              padding: 25px;
              text-align: center;
              border-radius: 8px 8px 0 0;
              color: white;
            }
            .header h1 {
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
            .rating {
              display: inline-block;
              padding: 5px 15px;
              background-color: #DA4767;
              color: white;
              border-radius: 20px;
              font-weight: bold;
              margin: 10px 0;
            }
            .divider {
              border-top: 2px solid #DA4767;
              margin: 20px 0;
              opacity: 0.5;
            }
            .info-label {
              color: #12173E;
              font-weight: bold;
              margin-bottom: 5px;
              font-size: 14px;
            }
            .info-value {
              margin-bottom: 20px;
              padding: 10px;
              background-color: white;
              border-radius: 4px;
              border-left: 3px solid #DA4767;
            }
            .message-box {
              background-color: white;
              padding: 15px;
              border-radius: 4px;
              border: 1px solid #eee;
            }
            .reply-btn {
              display: inline-block;
              padding: 10px 25px;
              background-color: #DA4767;
              color: white;
              text-decoration: none;
              border-radius: 4px;
              margin-top: 15px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>New Customer Feedback</h1>
            <div class="rating">${rating}/5 ★</div>
          </div>
          
          <div class="content">
            <div class="info-label">From:</div>
            <div class="info-value">
              ${name || 'Anonymous'}<br>
              ${email ? `<a href="mailto:${email}">${email}</a>` : 'No email provided'}
            </div>
            
            <div class="divider"></div>
            
            <div class="info-label">Message:</div>
            <div class="message-box">
              ${message ? message.replace(/\n/g, '<br>') : 'No message provided'}
            </div>
            
            <div class="divider"></div>
            
            <center>
              ${email ? `<a href="mailto:${email}" class="reply-btn">Reply to Customer</a>` : ''}
            </center>
          </div>
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} Otogas. All rights reserved.</p>
            <p>This feedback was submitted through our website.</p>
          </div>
        </body>
        </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Feedback submitted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send feedback. Please try again later." }),
      { status: 500 }
    );
  }
}
