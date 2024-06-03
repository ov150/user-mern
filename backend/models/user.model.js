import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: [true, "Please enter the username"]
    },
    email: {
        type:String,
        unique: [true, "Email already exists"],
        required: [true, "Please enter the username"]
    },
    photo: {
        type: String,
        required: [true, "Please add Photo"],
    },
    uid:{
        type:String,
        required:[true, "Please add uid"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
},{timestamps:true})

const User = mongoose.model("User", userSchema);

export default User;