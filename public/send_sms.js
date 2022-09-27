const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendMessage = (phone) => {
  client.messages
    .create({
      body: "this is a twilio test",
      from: `${phone}`, //phone goes here <--
      to: "+15875664191",
    })
    .then((message) => console.log(message.sid));
};

module.exports = { sendMessage };
