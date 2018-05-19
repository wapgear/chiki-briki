import mongoose from "mongoose"
import {merge} from "lodash"
import {project} from "./project/single.query";
import {structure} from "./project/structure.property";
import {Element} from "../models/elements.model";
import {updateElement} from "../mutations/elements/updateElement.mutation";
import {element} from "./elements/single.query";

export const resolvers = {
  StructureChildren: {
    children: async (object: any) => {
      object = object.children || []
      object = object.map(async (obj: any) => {
        let el:any = {}
        if (obj.element_id) {
          el = await Element.findById(mongoose.Types.ObjectId(obj.element_id))
        }
        return await merge(obj, el)
      })
      return object
    }
  },
  Project: {
    structure
  },
  Query: {
    project,
    element
  },
  Mutation: {
    updateElement
  }
};