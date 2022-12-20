const express = require("express");
const rateController = require("../../controller/rate.controller");
const rateRouter = express.Router();

rateRouter.get("/", rateController.getRates());
rateRouter.post("/", rateController.createRate());

module.exports = rateRouter;
