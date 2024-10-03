// const messages = require("../models/messages");
const db = require("../db/queries");
const validator = require("validator");

const showForm = (req, res) => {
  res.render("form");
};

const sendForm = async (req, res) => {
  const [sanitizedAuthor, sanitizedMessage] = [
    validator.escape(req.body.author.trim()),
    validator.escape(req.body.message.trim()),
  ];

  const addNewMessage = await db.insertMessages(
    sanitizedMessage,
    sanitizedAuthor,
    new Date()
  );

  res.redirect("/");
};

module.exports = { showForm, sendForm };
