import mongoose from "mongoose"
import {Structure} from "../../models/structure.model"
import {Element} from "../../models/elements.model";


export const structure = async (object:any, another: any, a: any) => {
  let structure:any = await Structure.findOne({project_id: object._id.toString()})
  return structure.structure
}
