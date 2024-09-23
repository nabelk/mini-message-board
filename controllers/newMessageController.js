const messages = require("../models/messages");

const showForm = (req, res) => {
  res.render("form");
};

const sendForm = (req, res) => {
  messages.unshift({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = { showForm, sendForm };
