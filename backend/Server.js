require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/User')
const cors = require("cors")
// express app
const app = express()

app.use(cors())
//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



//route handler
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


//connect to Db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to DB &listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


