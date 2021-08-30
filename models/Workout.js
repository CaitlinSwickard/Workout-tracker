const { model, Schema } = require('mongoose');

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

module.exports = model('Workout', workoutSchema);