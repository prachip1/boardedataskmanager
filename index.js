const express = require('express');
const { Resend } = require('resend');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const resend = new Resend("process.env.RESEND_API_KEY");

app.use(bodyParser.json());
app.use(cors()); // Allows all origins, consider configuring for specific origins in production

app.post('/sendingEmail', async (req, res) => {
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
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
