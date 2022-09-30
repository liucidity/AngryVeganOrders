const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

// send order data and phone
const sendMessage = (orderTextData) => {
  // console.log("orderTextData", orderTextData);
  client.messages
    .create({
      body: `Your Order: #${orderTextData.id} has been received, We will update you with a pickup time shortly! 🕛`,
      from: "+12495043092",
      to: orderTextData.phone, //phone goes here <--
    })
    .then((userMessage) => {
      // console.log(userMessage.sid);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const sendAlertOwner = (orderTextData) => {
  client.messages
    .create({
      body: `Order# ${orderTextData.id} sent from ${orderTextData.phone}. Process the order by opening your dashboard: http://localhost:8080/restaurant`,
      from: "+12495043092",
      to: `+17788396088`, //phone goes here <--
    })
    .then((userMessage) => {
      // console.log(userMessage.sid);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
const sendUpdate = (updateData) => {
  // console.log("updateData", updateData);
  client.messages
    .create({
      body: `Your Order #${updateData.id} is being cooked deliciously 👨🏻‍🍳, it'll be ready for Pickup in ${updateData.pickup_time} seconds`,
      from: "+12495043092",
      to: updateData.phone, //phone goes here <--
    })
    .then((userMessage) => {
      // console.log(userMessage.sid);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { sendMessage, sendAlertOwner, sendUpdate };
