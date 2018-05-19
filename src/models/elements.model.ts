import mongoose from "mongoose"

const schema = new mongoose.Schema({
  isUnique: Boolean,
  template: String,
  project_id: String
});

export const Element = mongoose.model("Element", schema);
