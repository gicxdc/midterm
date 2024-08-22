import UserModel from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userController={
    createUser:async (req,res) => {
        const {userName,password}=req.body
        try {
            if(!userName||!password) throw new Error("no password or userName");

            const checkUser=await UserModel.findOne({userName})

            if(checkUser)throw new Error("User already exist");
            
            const newUser=await UserModel.create({userName,password:bcrypt.hashSync(password,10)})
            
            res.status(201).send({message:"user created",data:newUser})

        } catch (error) {
            res.status(403).send({message:error.message})
        }
    },login:async (req,res) => {
        const{userName,password}=req.body
        try {
            if(!userName||!password) throw new Error("no password or userName");

            const checkUser=await UserModel.findOne({userName})

            if(!checkUser)throw new Error("User doesn't exist");
            console.log(checkUser.password)
            console.log(password)
            console.log(bcrypt.compareSync(password,checkUser.password))
            if(!bcrypt.compareSync(password,checkUser.password))
                throw new Error("wrong password");
             
            const token=jwt.sign({checkUser},'Beetle',{expiresIn:1000*60*5})
            
            res.status(201).send({message:"user login",data:token})
        } catch (error) {
             res.status(403).send({message:error.message})
        }
    },logout:(req,res) => {
        req.user=null
        req.headers['authorization']=null

        res.status(203).send({message:"log out"})
    }
}

export default userController