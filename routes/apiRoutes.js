const express = require('express');
const router = express.Router();
const Workout = require("../models/Workout.js");



// Important: Look into using a MongoDB aggregate function to dynamically add up and return 
// the total duration for each workout. Check out the MongoDB documentation on the $addFields, 
// the MongoDB documentation on the $sum operator, and the Mongoose documentation on aggregate 
// functions to learn how it can be accomplished.


// Add exercises to the most recent workout plan by ID. PUT
router.put('/api/workouts/:id', async (req, res) => {
  try {
    const addExercise = await Workout.findByIdAndUpdate(req.params.id,
      { $push: { exercises: req.body } },
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
    console.log(req.body);
    console.log(createWorkout);
  } catch (err) {
    res.json(err);
  }
});


// View the combined weight of multiple exercises from the past seven workouts on the stats page. GET
router.get('/api/workouts', async (req, res) => {
  try {
    const getAllWorkouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercise.duration"
          }
        }
      }
    ]);
    res.json(getAllWorkouts);
  } catch (err) {
    res.status(400).json(err);
  }
});


// View the total duration of each workout from the past seven workouts on the stats page. GET ALL WORKOUT
// router.get('/api/workouts/range', async (req, res) => {
//   try {
//     const totalDuration = await Workout.aggregate([])
//   } catch (err) {
//     res.status(400).json(err);
//   }
// })

// delete workout (added for postman)
router.delete('/api/workouts/:id', async (req, res) => {
  try {
    const deleteWorkout = await Workout.findByIdAndDelete(req.params.id);
    res.json(deleteWorkout);
    console.log(deleteWorkout)
  } catch (err) {
    res.json(err);
  }
})


module.exports = router;