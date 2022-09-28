const express = require("express");
const router = express.Router();
const { MessagingResponse } = require("twilio").twiml;

router.post("/restaurant", (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message("The Robots are coming! Head for the hills!");

  res.type("text/xml").send(twiml.toString());
});

module.exports = router;
