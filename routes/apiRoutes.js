const express = require('express');
const router = express.Router();
const Workout = require("../models/Workout.js");



// Important: Look into using a MongoDB aggregate function to dynamically add up and return 
// the total duration for each workout. Check out the MongoDB documentation on the $addFields, 
// the MongoDB documentation on the $sum operator, and the Mongoose documentation on aggregate 
// functions to learn how it can be accomplished.


router.get('/api/workouts', async (req, res) => {
  try {
    const getAll = await Workout.find();
    res.json(getAll);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Add exercises to the most recent workout plan by ID. PUT
router.put('/api/workouts/:id', async (req, res) => {
  try {
    const addExercise = await Workout.findByIdAndUpdate(req.params.id,
      {
        $push: {
          exercises: req.body
        }
      },
      { new: true }
    )
    console.log(addExercise);
    res.json(addExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});


// Add new exercises to a new workout plan. POST
router.post("/api/workouts", async (req, res) => {
  try {
    const createWorkout = await Workout.create(req.body);
    res.json(createWorkout);
    console.log("i am req.body", req.body);
    console.log("i am workout", createWorkout);
  } catch (err) {
    res.json(err);
  }
});


// View the combined weight of multiple exercises from the past seven workouts on the stats page. GET
router.get('/api/workouts/range', async (req, res) => {
  try {
    const totalWeight = await Workout.aggregate([
      {
        $addFields: {
          totalWeight: { $sum: "$exercises.weight" }
        }
      },
    ]).limit(7)
      res.json(totalWeight);
    console.log(totalWeight)
  } catch (err) {
    res.status(400).json(err);
  }
});


// View the total duration of each workout from the past seven workouts on the stats page. GET ALL WORKOUT
router.get('/api/workouts/range', async (req, res) => {
  try {
    const totalDuration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration"}
        }
      }
    ]).limit(7)
    res.json(totalDuration);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
})



module.exports = router;