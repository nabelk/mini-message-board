// const messages = require("../models/messages");
const db = require("../db/queries");

const formatDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${formattedDate} ${formattedTime}`;
};

const showMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  const formattedMessages = messages.map((message) => {
    return { ...message, added: formatDate(message.added) };
  });

  res.render("index", { messages: formattedMessages });
};

module.exports = showMessages;
