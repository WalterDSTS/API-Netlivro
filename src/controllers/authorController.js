import authors from "../models/Author.js";

export default class AuthorController {
  static findAllAuthors = (req, res) => {
    authors.find((error, authors) => {
      res.status(200).json(authors);
    });
  };

  static findAuthorById = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Author id not found` });
      } else {
        res.status(200).send(authors);
      }
    });
  };

  static registerAuthor = (req, res) => {
    let author = new authors(req.body);

    author.save((error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - failed to register Author` });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: "Successfully updated Author" });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };

  static deletAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Successfully Author removed" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}
