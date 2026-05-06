const Review =
require('../models/Review');

/* ADD REVIEW */

const addReview = async (req, res) => {

  try{

    const {
      name,
      rating,
      comment
    } = req.body;

    /* CREATE REVIEW */

    const review =
    await Review.create({

      name,

      rating,

      comment

    });

    res.status(201).json({

      success:true,

      message:'Review Added Successfully',

      review

    });

  }
  catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

};

/* GET REVIEWS */

const getReviews = async (req, res) => {

  try{

    const reviews =
    await Review.find().sort({

      createdAt:-1

    });

    res.status(200).json({

      success:true,

      reviews

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

  addReview,

  getReviews

};