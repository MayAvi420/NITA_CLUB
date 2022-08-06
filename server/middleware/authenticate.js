const jwt = require('jsonwebtoken');
const User = require('../model/userSchema')

const Authenticate=async(req,res,next)=>{
        try {
            const token = req.cookies.jwtoken;
            const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
            console.log(verifyToken);

            const user = await User.findOne({_id:verifyToken._id,"tokens:token":token});
            console.log(user);

            if (!user) { throw new Error ('User Not Found')}

            req.token = token;
            req.user = user;
            req.userID = user._id;

            next();
            
        } catch (err) {
            res.status(401).send('Unauthorized:No Token Provided')
            console.log(err)
        }
}


module.exports = Authenticate;