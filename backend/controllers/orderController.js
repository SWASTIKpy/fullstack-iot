const Order =
require('../models/Order');

/* CREATE ORDER */

const createOrder = async (req, res) => {

  try{

    const {

      name,

      email,

      phone,

      product,

      details

    } = req.body;

    /* SAVE ORDER */

    const order =
    await Order.create({

      name,

      email,

      phone,

      product,

      details

    });

    res.status(201).json({

      success:true,

      message:'Order Created Successfully',

      order

    });

  }
  catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

};

/* GET ORDERS */

const getOrders = async (req, res) => {

  try{

    const orders =
    await Order.find().sort({

      createdAt:-1

    });

    res.status(200).json({

      success:true,

      orders

    });

  }
  catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

};

module.exports = {

  createOrder,

  getOrders

};