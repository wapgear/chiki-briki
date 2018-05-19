import mongoose from "mongoose"
import {merge} from "lodash"
import {project} from "./project/single.query";
import {structure} from "./project/structure.property";
import {Element} from "../models/elements.model";

export const resolvers = {
  StructureChildren: {
    children: async (object: any) => {
      console.log("########")
      console.log("########")
      console.log("########")
      console.log("########")
      console.log("########")
      console.log("########")
      console.log("####OBJECT#####")
      console.log(JSON.stringify(object, null, 2))
      let element = {}
      // if (object.element_id) {
      //   element = await Element.findById(mongoose.Types.ObjectId(object.element_id))
      // }
      let data = await merge(object, element)
      return [data]
    }
  },
  Project: {
    structure
  },
  Query: {
    project
  }
};