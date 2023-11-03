const { Vonage } = require('@vonage/server-sdk')


exports.sendOTP = (req, res) => {

    const vonage = new Vonage({
        apiKey: "11111",
        apiSecret: "1111111111111"
    });
    const from = "Vonage APIs"
    const to = "919842266134"
    const text = 'A text message sent using the Vonage SMS API'

    async function sendSMS() {
        await vonage.sms.send({ to, from, text })
            .then(resp => { 
                console.log('Message sent successfully');
                 console.log(resp); 
                res.send("OTP sent Successfully")
            })
            .catch(err => {
                 console.log('There was an error sending the messages.'); 
                 console.error(err);
                 res.send("OTP sent Failed")
            });
    }

    sendSMS();

};

