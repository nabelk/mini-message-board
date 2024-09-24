const messages = require("../models/messages");

const showMessagePage = (req, res) => {
  res.render("message", { message: messages[req.params.id] });
};

module.exports = showMessagePage;
