import mongoose from "mongoose"
import {Element} from "../../models/elements.model"

export const updateElement = async (obj:any, args:any) => {
  if (args.key === "size") {
    args.value = Number(args.value)
  }
  
  const El:any = await Element.findById(mongoose.Types.ObjectId(args.element_id))
  El.properties[args.key] = args.value
  await El.save()
  console.log(El)
  return El
}