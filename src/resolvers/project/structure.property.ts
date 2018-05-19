import mongoose from "mongoose"
import {merge} from "lodash"
import {Structure} from "../../models/structure.model"
import {Element} from "../../models/elements.model";


export const structure = async (object:any, another: any, a: any) => {
  let structure:any = await Structure.findOne({project_id: object._id.toString()})
  structure = structure.structure
  structure = structure.map(async (obj: any) => {
    let el = {}
    if (obj.element_id) {
      el = await Element.findById(mongoose.Types.ObjectId(obj.element_id))
    }
    return merge(obj, el)
  })
  return structure
}
