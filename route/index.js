const express = require('express');
const userRouter = require("./userRoute")
const checklistRoute = require("./checklistRoute");
const checklistItem  = require('./checklistItem');
const router = express.Router();

router.use("/auth", userRouter)
router.use("/checklist", checklistRoute )
router.use("/checklistItem", checklistItem )




module.exports = router;