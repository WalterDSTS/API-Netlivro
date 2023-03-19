import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:admin@netlivro.a3eikwf.mongodb.net/netlivro"
);

let db = mongoose.connection;

export default db;
