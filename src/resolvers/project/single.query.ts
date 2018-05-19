import mongoose from "mongoose"
import {Project} from "../../models/project.model";

export const project = (_:any, args:any) => {
  return Project.findById(mongoose.Types.ObjectId(args.id))
      .then(project => {
        return project
      })
}