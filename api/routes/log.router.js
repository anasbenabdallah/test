const express = require("express");
const logRouter = express.Router();
const { addLog } = require("../controllers/log.controller");

//imported controllers
const { editLog } =  require("../controllers/log.controller");
const { getLogsById } =  require("../controllers/log.controller");
const { getLogs } =  require("../controllers/log.controller");
//imported MiddleWare
const {
  authenticateToken,
} = require("../middlewares/authenticateToken.middleware");

logRouter.post("/add", authenticateToken, addLog);
logRouter.get("/getall", authenticateToken, getLogs);
logRouter.put("/:id/", authenticateToken, editLog);
logRouter.get("/get/:id/", authenticateToken, getLogsById);

module.exports = logRouter;
