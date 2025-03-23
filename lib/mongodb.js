import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conneted to mongoDb");
        
    } catch (error) {
        console.log(error);
        console.log(process.env.MONGODB_URI);
        
        console.log("mongoose not connected");
        
        
    }
};

export default connectMongoDB;