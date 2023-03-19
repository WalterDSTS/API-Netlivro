import books from "../models/Book.js";

export default class BookController {
  static findAllBooks = (req, res) => {
    books
      .find()
      .populate("author")
      .exec((error, books) => {
        res.status(200).json(books);
      });
  };

  static findBookById = (req, res) => {
    const id = req.params.id;

    books
      .findById(id)
      .populate("author", "name")
      .exec((err, books) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.message} - Book id not found` });
        } else {
          res.status(200).send(books);
        }
      });
  };

  static findBookByPublisher = (req, res) => {
    const publisher = req.query.publisher;

    books.find({ publisher: publisher }, {}, (err, books) => {
      res.status(200).send(books);
    });
  };

  static registerBook = (req, res) => {
    let book = new books(req.body);

    book.save((error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - failed to register book` });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: "Successfully updated book" });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };

  static deletBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Successfully book removed" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}
