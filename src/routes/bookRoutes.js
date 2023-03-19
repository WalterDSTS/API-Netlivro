import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router
  .get("/books", BookController.findAllBooks)
  .get("/books/find", BookController.findBookByPublisher)
  .get("/books/:id", BookController.findBookById)
  .post("/books", BookController.registerBook)
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deletBook)

export default router;
