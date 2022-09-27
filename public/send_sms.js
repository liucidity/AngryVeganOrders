const accountSid = "ACf295d65529703e2ef37bc60e7e10323d";
const authToken = "27059aabe354a896ee0dced8f3938308";
const client = require("twilio")(accountSid, authToken);

const sendMessage = (phone) => {
  client.messages
    .create({
      body: "this is a twilio test",
      from: "+12495043092", //phone goes here <--
      to: "+15875664191",
    })
    .then((message) => console.log(message.sid));
};

module.exports = { sendMessage };
