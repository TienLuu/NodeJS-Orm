const express = require("express");
const likeController = require("../../controller/like.controller");
const likeRouter = express.Router();

likeRouter.get("/", likeController.getLikes());
likeRouter.post("/", likeController.createLike());
likeRouter.delete("/:id", likeController.deleteLike());

module.exports = likeRouter;
