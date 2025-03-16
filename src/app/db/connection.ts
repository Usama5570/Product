
import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0.gala2.mongodb.net/Product"),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tls: true,
            tlsAllowInvalidHostnames: true,
            tlsAllowInvalidCertificates: true,
            serverSelectionTimeoutMS: 5000,
            ssl: true,

          
        }

        console.log("Database connected")
    }
    catch (error) {
        console.error("connection failed",error)

    }

}
export default connection;