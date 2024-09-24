const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get("/:id", messageController);

module.exports = router;
