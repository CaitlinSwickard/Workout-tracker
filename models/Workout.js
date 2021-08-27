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
      required: [true, "Please enter the amount of weight used:"],
    },
    sets: {
      type: Number,
      required: [true, "Please enter the amount of sets completed:"],
    },
    reps: {
      type: Number,
      required: [true, "Please enter the amount of reps per set:"],
    },
    // if cardio track distance traveled
    distance: {
      type: Number,
      default: [0, "Please enter distance traveled for cardio workout: "],
    },
  }]
});

module.exports = model('Workout', workoutSchema);