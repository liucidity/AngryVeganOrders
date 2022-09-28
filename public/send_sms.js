const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendMessage = (phone) => {
  client.messages
    .create({
      body: "Hey is this working?",
      from: "+12495043092", //phone goes here <--
      to: "+17788396088",
    })
    .then((message) => console.log(message.sid));
};

module.exports = { sendMessage };
