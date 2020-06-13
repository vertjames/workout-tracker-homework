const router = require('express').Router()
const { Workout } = require('../models')

router.get("/workouts", (req, res) => {
  Workout
    .find({})
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.status(400).json(err))
})

router.get("/workouts/range", (req, res) => {
  Workout
    .find({})
    .sort({ day: -1 })
    .limit(7)
    .then(dbWorkouts => res.json(dbWorkouts))
    .catch(err => res.status(400).json(err))
})

router.post("/workouts", ({ body }, res) => {
  Workout
    .create(body)
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.status(400).json(err))
})

router.put("/workouts/:id", ({ body, params }, res) => {
  Workout
    .findByIdAndUpdate(
      { _id: params.id },
      { $push: { exercises: body } }
    )
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.status(400).json(err))
})

module.exports = router
