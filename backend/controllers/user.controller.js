import User from "../models/user.model.js";

const newUser = async (req, res, next) => {
    try {
        const { username, email, photo , uid} = req.body;
        let user = await User.findOne({ email });
        if(user){
            return res.status(200).json({
                success:true,
                message: `user already created`
            })
        }

        user = await User.create({
            username,
            email,
            photo,
            uid
        });

        return res.status(201).json({
            sucess:true,
            message:`welcome ${user.username}`,
            user
        });

    } catch (error) {
        console.log(error);
    }
}

const allUsers = async (req, res, next) =>{
    try {
        const users =  await User.find({})
        return res.status(200).json({
            success:true,
            users
        })
    } catch (error) {
        console.log(error);
    }
}
const getUser = async (req, res, next) =>{
    try {
        const id  = req.params.id
        let user = await User.findById(id);
        if(!user){
            return res.status(200).json({
                message:"User not found"
            })
        }
        return res.status(200).json({
            message: "Welcome back user",
            success:true,
            user
        })
    } catch (error) {
        console.log(error);
    }

}

export { newUser, getUser ,allUsers}