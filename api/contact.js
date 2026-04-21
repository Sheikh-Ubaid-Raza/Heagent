import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, organization, inquiryType, message, _gotcha } = req.body;

  // Honeypot spam check — bots fill hidden fields
  if (_gotcha) {
    return res.status(200).json({ success: true });
  }

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Required fields missing: name, email, and message are required.' });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const inquiryLabel = inquiryType || 'General';
  const orgLabel = organization || 'Not provided';

  try {
    // Send notification email to Heagent team
    await resend.emails.send({
      from: 'Heagent Website <noreply@heagent.site>',
      to: 'contact@heagent.site',
      subject: `[${inquiryLabel}] New inquiry from ${name} — ${orgLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f766e;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #1f2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Organization</td>
              <td style="padding: 8px 0; color: #1f2937;">${orgLabel}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Inquiry Type</td>
              <td style="padding: 8px 0; color: #1f2937;">${inquiryLabel}</td>
            </tr>
          </table>
          <hr style="border: 1px solid #e5e7eb; margin: 16px 0;" />
          <h3 style="color: #374151;">Message</h3>
          <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    // Send auto-reply to the user
    await resend.emails.send({
      from: 'Heagent <contact@heagent.site>',
      to: email,
      subject: 'We received your message — Heagent',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <p style="color: #1f2937; font-size: 16px;">Hi ${name},</p>
          <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to Heagent. We have received your message
            and will get back to you within <strong>1 business day</strong>.
          </p>
          <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to explore our products at
            <a href="https://www.heagent.site/products" style="color: #0f766e;">heagent.site/products</a>.
          </p>
          <br />
          <p style="color: #1f2937; font-size: 16px;">
            Best regards,<br />
            <strong>Ubaid Raza</strong><br />
            Co-Founder, Heagent
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend API error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
