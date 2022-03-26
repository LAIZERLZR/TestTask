const { Router } = require("express");
const router = Router();
const User = require("./user.route");
const Contact = require("./contact.route");

router.use(User);
router.use(Contact);

module.exports = router;
