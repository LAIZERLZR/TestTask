const { Router } = require("express");
const { contactController } = require("../controllers/contact.controller");
const authMiddlewares = require("../middlewares/auth.middlewares");
const router = Router();

router.post("/contact", contactController.createContact);
router.get("/contact", authMiddlewares, contactController.getContact);

module.exports = router;
