import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import { Grid } from '@mui/material'
import Workoutform from '../components/Workoutform'
import { useWorkoutContext } from '../hook/useWorkoutContext'
import { useAuthContext } from '../hook/useAuthContext'

const Home =() => {
const {workouts, dispatch} = useWorkoutContext()
const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
     const response = await fetch('http://localhost:3000/api/workouts',{
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
     }) 
     const json = await response.json()

     if (response.ok){
      dispatch({type: 'SET_WORKOUTS', payload: json})
     }
    }

    if (user) {
      fetchWorkouts()
    }

  },[dispatch, user])
  return (
    <div>

<Grid container spacing={2}  >
        <Grid item xs={8} md={8} lg={8}>
        {workouts && workouts.map((workout) => (
        <WorkoutDetails key={workout._id} workout={workout} />
      ))}
        </Grid>
        <Grid item xs={4} md={4} lg={4} >
        <Workoutform />
        </Grid>
        
        </Grid>
   
    </div>
  )
}

export default Home