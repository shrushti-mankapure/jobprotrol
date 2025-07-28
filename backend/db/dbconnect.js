import mongoose from "mongoose";

export const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.mongodb_uri || 'mongodb://localhost:27017/jobportal');
        console.log("Database connected");
    }catch(error){
        console.log(error);
    }
}
export default connectdb