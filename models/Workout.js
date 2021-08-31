// const { model, Schema } = require('mongoose');
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
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    // if cardio track distance traveled
    distance: {
      type: Number,
    },
  }]
});

// module.exports = model('Workout', workoutSchema);
const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;