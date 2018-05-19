import mongoose from "mongoose"

const properties = new mongoose.Schema({
  custom: String,
  size: Number,
  content: String,
  type: String,
  __typename: String
})

const schema = new mongoose.Schema({
  isUnique: Boolean,
  template: String,
  project_id: String,
  properties: properties
});

export const Element = mongoose.model("Element", schema);
