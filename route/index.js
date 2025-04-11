const express = require('express');
const userRouter = require("./userRoute")
const checklistRoute = require("./checklistRoute")
const router = express.Router();

router.use("/auth", userRouter)
router.use("/checklist", checklistRoute )



module.exports = router;