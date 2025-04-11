
const express = require('express');
const router = express.Router();
// const {verifySignUp} = require("../middleware");
const indexCtrl = require("../controller/index");


router.post("/register", indexCtrl.usersCtrl.register);
router.post("/signin", indexCtrl.usersCtrl.login);



module.exports = router