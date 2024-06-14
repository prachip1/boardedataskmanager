
const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

const apiUrl = 'http://localhost:3000/api/sendEmail'; // Adjust port if necessary

async function sendEmail() {
  try {
    const response = await axios.post(apiUrl, {
      email: 'prachip1908@gmail.com',
      subject: 'Test Email',
      message: 'This is a test email from local testing.'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
}

sendEmail();
