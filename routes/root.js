import { Router } from "express";
import userRouter from "./userRouter.js";
import userController from "../controllers/userController.js";
import auth from "./auth.js";


const rootRouter = Router();

rootRouter.use("/user", userRouter);


rootRouter.get("/login",userController.login)
rootRouter.get("/create",userController.createUser)
rootRouter.get("/logout",auth.token,userController.logout)

rootRouter.get("",(req,res)=>{
    res.send({message:"running"})
})

export default rootRouter;