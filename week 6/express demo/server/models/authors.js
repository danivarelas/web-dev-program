import mongoose from "./db";

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: String,
    country: String,
    age: Number,
    books: Array
  },
  { strict: true }
);

export default mongoose.model("authors", authorSchema);