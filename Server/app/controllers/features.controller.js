const axios = require('axios');

exports.sendOTP = (req, res) => {

  // Replace with your Infobip API key and the specific SMS details
  const infobipApiKey = '7f707663ec85d0fff6ae002dba4fc96b-15c47355-40c2-4f07-8e50-2a53e6df58da';
  const sender = 'Vishnu';
  const recipient = '+919842266134';
  const message = 'Hi from Solver Hands';
  
  // API endpoint for sending SMS
  const apiUrl = 'https://y3pny9.api.infobip.com';
  
  // SMS data
  const smsData = {
      from: sender,
      to: recipient,
      text: message,
  };
  
  // Send SMS using Infobip API
  axios.post(apiUrl, smsData, {
      headers: {
          'Authorization': `App ${infobipApiKey}`,
          'Content-Type': 'application/json',
      },
  })
  .then(response => {
      console.log('SMS sent successfully');
      console.log(response.data);
  })
  .catch(error => {
      console.error('Failed to send SMS');
      console.error(error);
  });
  
};

