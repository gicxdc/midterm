import { Router } from "express";
import infoController from "../controllers/infoController.js";
import auth from "./auth.js";


const userRouter = Router();

userRouter.post('',auth.token,auth.logged,auth.user,infoController.createInfo)
userRouter.put('',auth.token,auth.logged,auth.user,infoController.updateInfo)
userRouter.get('',auth.token,auth.logged,infoController.getInfo)
userRouter.delete('',auth.token,auth.logged,auth.user,infoController.deleteInfo)

export default userRouter;