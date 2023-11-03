import mongoose from "mongoose";
require('dotenv').config();

const dbUrl: string = process.env.DATABASE_URL || '';

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data: any) => {
            console.log(`Datebase connected with ${data.connection.host} ${data.connection.port} ${data.connection.name}`)
        })
    } catch (error: any) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
}

export default connectDB;