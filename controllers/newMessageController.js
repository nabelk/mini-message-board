const messages = require("../models/messages");
const validator = require("validator");

const showForm = (req, res) => {
  res.render("form");
};

const sendForm = (req, res) => {
  const [sanitizedAuthor, sanitizedMessage] = [
    validator.escape(req.body.author.trim()),
    validator.escape(req.body.message.trim()),
  ];

  messages.unshift({
    text: sanitizedMessage,
    user: sanitizedAuthor,
    added: new Date(),
  });
  console.table(messages);
  res.redirect("/");
};

module.exports = { showForm, sendForm };
