import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database  To  Mongodb database ${conn.connection.host}`.bgBlue.white)
    }
    catch (error) {
        console.log(`Error in MongoDb ${error}`.bgRed.white);
    }
};

export default connectDB;