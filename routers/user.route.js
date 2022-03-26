const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const router = Router();

router.post("/signup", userController.registration);
router.post("/signin", userController.authorization);

module.exports = router;
