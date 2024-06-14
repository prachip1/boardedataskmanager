const { Resend } = require('resend');
const axios = require('axios');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      const response = await resend.emails.send({
        to: email,
        subject: subject,
        html: message,
      });

      res.status(200).json({ success: true, response });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed', allowedMethods: ['POST'] });
  }
};
