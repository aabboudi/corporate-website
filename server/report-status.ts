import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function ReportStatus(status: number) {
  const now = new Date();

  const mailOptions = {
    from: "Actions Workflow",
    to: process.env.EMAIL_USER,
    subject: `Status Report - ${now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}`,
    html: email_template(status, now),
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    return false;
  }
}

const email_template = (status: number, now: Date) => (`
  <div style="font-family: Arial, sans-serif; margin: 20px; padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
    <h2 style="color: #333;">Gemini Service Status Report</h2>
    <p style="font-size: 16px;">The workflow has been triggered.</p>
    <p style="font-size: 16px;">Report details:</p>
    <ul>
      <li>Status: ${status.toString()}</li>
      <li>Timestamp: ${now.toISOString()}</li>
    </ul>
    <footer style="margin-top: 20px; font-size: 14px; color: #777;">
      <a href="#">Browse Website</a>
    </footer>
  </div>
`);
