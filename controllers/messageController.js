const messages = require("../models/messages");
const db = require("../db/queries");

const showMessagePage = async (req, res) => {
  const getMessage = await db.findMessage(req.params.id);
  if (getMessage) res.render("message", { message: getMessage[0] });

  res.render("error");
};

module.exports = showMessagePage;
