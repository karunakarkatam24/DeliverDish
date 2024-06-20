import mongoose from "mongoose";

 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://greatstack:24242424@cluster0.84bfyqn.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}
