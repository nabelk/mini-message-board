const express = require("express");
const router = express.Router();
const newMessageController = require("../controllers/newMessageController");

router.get("/", newMessageController.showForm);
router.post("/", newMessageController.sendForm);

module.exports = router;
