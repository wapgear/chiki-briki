import mongoose from "mongoose"

const schema = new mongoose.Schema({
  name: String
});

export const Project = mongoose.model("Project", schema);
