import infoModel from "../models/Info.js"
import UserModel from "../models/user.js"

const infoController={
    createInfo:async (req,res) => {
        const {userId,birthDate,birthPlace,nationality,educationLv,skills,projects,exp}=req.body

        try {
            const checkUser=await UserModel.findOne({userId})
            if(!checkUser) throw new Error("user dont exist");

            const newInfo=await infoModel.create({userId,birthDate,birthPlace,nationality,educationLv,skills,projects,exp})
            
            res.status(204).send({message:"info created",data:newInfo})
        } catch (error) {
            res.status(403).send({message:error.message})
        }
    },updateInfo:async (req,res) => {
        const {userId,birthDate,birthPlace,nationality,educationLv,skills,projects,exp}=req.body
            try {
            const checkUser=await UserModel.findOne({userId})
            if(!checkUser) throw new Error("user dont exist");

            const updInfo=await infoModel.findOneAndUpdate({userId},{birthDate,birthPlace,nationality,educationLv,skills,projects,exp})
            if(!updInfo) throw new Error("info dont exist");

            res.status(204).send({message:"info updated",data:updInfo})
            } catch (error) {
                res.status(403).send({message:error.message})
            }
    },getInfo:async (req,res) => {
        const {userId}=req.body
        try {
            const checkUser=await UserModel.findOne({userId})
            if(!checkUser) throw new Error("user dont exist");

            const checkInfo=await infoModel.findOne({userId})
            if(!checkInfo) throw new Error("info dont exist");

            res.status(204).send({message:"info got",data:checkInfo})
            
        } catch (error) {
            res.status(403).send({message:error.message})
        }
    },deleteInfo:async (req,res) => {
        const {userId}=req.body
        try {
            const checkUser=await UserModel.findOnea({userId})
            if(!checkUser) throw new Error("user dont exist");

            const updInfo=await infoModel.findOneAndDelete({userId},{birthDate,birthPlace,nationality,educationLv,skills,projects,exp})
            if(!updInfo) throw new Error("info dont exist");

            res.status(204).send({message:"info updated",data:updInfo})
         
        } catch (error) {
            res.status(403).send({message:error.message})
        }
    }
}

export default infoController