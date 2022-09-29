const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

// send order data and phone
const sendMessage = (phone) => {
  console.log('phone', phone);
  client.messages
    .create({
      body: `Your Order: #${phone} has been received, We will update you with a pickup time shortly! 🕛`,
      from: "+12495043092",
      to: `+17788396088`,//phone goes here <--
    })
    .then((userMessage) => {
      console.log(userMessage.sid);

    })
    .catch((err) => {
      console.log(err.message);
    });
};

const sendAlertOwner = (phone) => {
  client.messages
    .create({
      body: `Order# ${phone} sent from ${phone}. Process the order by opening your dashboard: localhost:`,
      from: "+12495043092",
      to: `+17788396088`,//phone goes here <--
    })
    .then((userMessage) => {
      console.log(userMessage.sid);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { sendMessage, sendAlertOwner };
