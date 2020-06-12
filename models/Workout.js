const { Schema, model } = require('mongoose')

module.exports = model("Workout", new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Workout Type Required"
      },
      name: {
        type: String,
        trim: true,
        required: "Workout Name Required"
      },
      duration: {
        type: Number
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
})
)
