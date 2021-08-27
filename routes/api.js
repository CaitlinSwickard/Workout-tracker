const router = require("express").Router();
const Workout = require("../models/Workout.js");


router.get("/api/workouts", async (req, res) => {
  
  try {
    const getAllWorkouts = await Workout.find();
    res.json(getAllWorkouts);
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;