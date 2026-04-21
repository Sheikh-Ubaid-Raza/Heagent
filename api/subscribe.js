import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source, _gotcha } = req.body;

  // Honeypot spam check
  if (_gotcha) {
    return res.status(200).json({ success: true });
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const sourceLabel = source || 'Newsletter';

  try {
    // Notify the team about the new subscriber
    await resend.emails.send({
      from: 'Heagent Website <noreply@heagent.site>',
      to: 'contact@heagent.site',
      subject: `[${sourceLabel}] New subscriber: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f766e;">New ${sourceLabel} Subscriber</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <p style="color: #1f2937; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="color: #1f2937; font-size: 16px;"><strong>Source:</strong> ${sourceLabel}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend API error:', error);
    return res.status(500).json({ error: 'Failed to subscribe. Please try again later.' });
  }
}
