import mongoose from "mongoose"

const connection = async () =>{
    try {
        mongoose.connect(process.env.DB_URI)
        console.log('database connection succesfully');
    } catch (error) {
        console.log(`database connection failed ${error}`);
    }
}

export default connection;

