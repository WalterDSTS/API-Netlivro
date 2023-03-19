import express from "express";
import AuthorController from "../controllers/authorController.js";

const router = express.Router();

router
  .get("/authors", AuthorController.findAllAuthors)
  .get("/authors/:id", AuthorController.findAuthorById)
  .post("/authors", AuthorController.registerAuthor)
  .put("/authors/:id", AuthorController.updateAuthor)
  .delete("/authors/:id", AuthorController.deletAuthor)

export default router;
