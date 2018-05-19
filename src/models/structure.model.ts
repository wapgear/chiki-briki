import mongoose from "mongoose"

const childrenSchema = new mongoose.Schema({
  element_id: String,
  children: this
})

const schema = new mongoose.Schema({
  project_id: String,
  structure: [
    childrenSchema
  ]
});

export const Structure = mongoose.model("Structure", schema);
