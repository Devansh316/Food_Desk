import mongoose from "mongoose";

export const connectDB = async() => {
//  await mongoose.connect('mongodb+srv://devanshpandey316:devanshpandey316@cluster0.swznp.mongodb.net/food-del')
  await mongoose.connect('mongodb+srv://devanshpandey316:De%40%251001@cluster0.swznp.mongodb.net/food-del')
    .then(()=>console.log("MongoDB Connected"))
}

