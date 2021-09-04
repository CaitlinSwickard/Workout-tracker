
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// new user schema
const workoutSchema = new Schema({

  day: {
    type: Date,
    default: () => new Date(),
  },

  exercises: [{

    type: {
      type: String,
      required: [true, "Please enter type of workout:"], 
    },
    name: {
      type: String,
      required: [true, "Please enter name of workout:"],
    },
    duration: {
      type: Number,
      required: [true, "Please enter the length of time for workout:"],
    },
    weight: Number,
    sets: Number,
    reps: Number,
    // if cardio track distance traveled
    distance: Number,
  }]
});


const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;