const messages = require("../models/messages");

const showMessagePage = (req, res) => {
  if (messages[req.params.id])
    res.render("message", { message: messages[req.params.id] });

  res.render("error");
};

module.exports = showMessagePage;
