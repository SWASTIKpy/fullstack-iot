const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {

  let token;

  /* CHECK TOKEN */

  if(

    req.headers.authorization &&

    req.headers.authorization.startsWith('Bearer')

  ){

    try{

      /* GET TOKEN */

      token =
      req.headers.authorization.split(' ')[1];

      /* VERIFY TOKEN */

      const decoded =
      jwt.verify(token, 'secretkey');

      /* SAVE USER */

      req.user = decoded;

      next();

    }
    catch(error){

      return res.status(401).json({

        success:false,

        message:'Not authorized'

      });

    }

  }

  /* NO TOKEN */

  if(!token){

    return res.status(401).json({

      success:false,

      message:'No token found'

    });

  }

};

module.exports = {
  protect
};