import mongoose from "mongoose";
import { projectEntrypointsSubscribe } from "next/dist/build/swc/generated-native";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Conneted to mongoDb");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectMongoDB;