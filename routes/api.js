const express = require('express');
const router = express.Router();
const Workout = require("../models/Workout.js");



// Important: Look into using a MongoDB aggregate function to dynamically add up and return 
// the total duration for each workout. Check out the MongoDB documentation on the $addFields, 
// the MongoDB documentation on the $sum operator, and the Mongoose documentation on aggregate 
// functions to learn how it can be accomplished.

router.get("/api/workouts", async (req, res) => {
//  Workout.find().then((workouts) => {
//    res.json(workouts);
//  }).catch((err) => {
//    res.json(err);
//  })
  try {
    console.log(Workout);
    const getAllWorkouts = await Workout.find({});
    console.log(getAllWorkouts)
    res.json(getAllWorkouts);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }


});

// router.put

// router.post



module.exports = router;