// api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { firstName, lastName, email, subject, message } = req.body;

  try {
    // 1. Send to Google Sheets (Via Google Apps Script Web App URL)
    await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, subject, message }),
    });

    // 2. Send Email (Example using Resend)
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['darshanawishwajith494@gmail.com'],
        subject: `New Form: ${subject}`,
        text: `From: ${firstName} ${lastName} (${email})\n\n${message}`,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}