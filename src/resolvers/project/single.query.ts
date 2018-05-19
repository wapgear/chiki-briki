import mongoose from "mongoose"
import {Project} from "../../models/project.model";

export const project = async (_:any, args:any) => {
  try {
    let project = await Project.findById(mongoose.Types.ObjectId(args.id))
    return project
  } catch (err) {
  
  }
}