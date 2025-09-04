const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../config/upload.js");

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUser);
router.post("/users", upload.single("perfil_photo"), userController.createUser);
router.put("/users/:id", userController.updateUser);

module.exports = router;