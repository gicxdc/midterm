import jwt from "jsonwebtoken"
const auth={
    token: async (req,res,next) => {
        try {
            const authHeader = req.headers['authorization'];
            console.log(authHeader)
            if(!authHeader) throw new Error("no token found");

            const token = authHeader.split(' ')[1];

            jwt.verify(token,"Beetle", (err, decoded) => {
                if (err) {
                  throw new Error("token is invalid")
                } else {
                  req.user = decoded; 
                  next();
                }
              });
        } catch (error) {
            res.status(403).send({message:error.message})
        }
    },logged:async (req,res,next) => {
        const user=req.user
        if (!user) {
          res.status(403).send({message:"haven't log in yet"})
        }
        next()
    },user:async (req,res,next) => {
      const {checkUser}=req.user
      const{userId}=req.body

      if(String(userId)!=String(checkUser._id))
        res.status(403).send({message:"unauthorize"})

      next()
    }
}

export default auth