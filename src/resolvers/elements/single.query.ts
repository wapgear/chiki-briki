import mongoose from "mongoose"
import {Element} from "../../models/elements.model";

export const element = (_:any, args:any) => {
  return Element.findById(mongoose.Types.ObjectId(args.id))
            .then(el => el)
}