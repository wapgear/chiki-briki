import mongoose from "mongoose"
import {merge} from "lodash"
import {project} from "./project/single.query";
import {structure} from "./project/structure.property";
import {Element} from "../models/elements.model";

export const resolvers = {
  StructureChildren: {
    children: async (object: any) => {
      object = object.children || []
      object = object.map(async (obj: any) => {
        let el = {}
        if (obj.element_id) {
          el = await Element.findById(mongoose.Types.ObjectId(obj.element_id))
        }
        return merge(obj, el)
      })
      return object
    }
  },
  Project: {
    structure
  },
  Query: {
    project
  }
};