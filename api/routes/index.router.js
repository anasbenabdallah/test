const express = require("express");
const router = express.Router();
// ==============================|| Imported routes ||============================== //
const authRouter = require("./auth.user.router");

const adminRouter = require("./admin.router");
const logRouter=require("./log.router.js")

const companyRouter = require("./company.router");

router.use("/auth", authRouter);

router.use("/company", companyRouter);
router.use("/log", logRouter)

router.use("/admin", adminRouter);

module.exports = router;
