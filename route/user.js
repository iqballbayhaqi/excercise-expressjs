const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.route("/user").get(userController.index).post(userController.store);

router.put("/user/:userId", userController.update);

router.delete("/user/:userId", userController.delete);

module.exports = router;
