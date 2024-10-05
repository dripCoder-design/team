import { Grid, IconButton,Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { pink } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { useWorkoutContext } from '../hook/useWorkoutContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hook/useAuthContext';
import { motion } from 'framer-motion';

const WorkoutDetails = ({ workout }) => {
  const {dispatch} = useWorkoutContext()
  const { user } = useAuthContext()
    const colo = pink[500];
    const handleclick = async () => {
      if(!user) {
        return
      }

const response = await fetch('https://team-i9x4.onrender.com/api/workouts/' + workout._id, {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${user.token}`
  }
})
const json = await response.json()
dispatch({type:'DELETE_WORKOUT',payload: json})
    }
  return (
    <div>
       
          <Paper sx={{bgcolor: 'primary.light',p:2,m:2}} component={motion.div} initial={{ opacity:0}}animate= {{opacity:1}} transition={{duration:1}}>
         <Stack direction="row" spacing={5}>
         <Stack>
          <Typography variant='h6'> {workout.title}</Typography> 
           <Typography variant='subtitle1'> <strong>Load (kg): </strong>  {workout.load}</Typography> 
           <Typography variant='subtitle1'> <strong>Reps: </strong>  {workout.reps}</Typography> 
           <Typography variant='subtitle1'>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix: true})}  </Typography> 
          </Stack>
          <Stack sx={{textAlign: 'center'}} >
          <IconButton aria-label="delete" size="large" onClick={handleclick}>
        <DeleteIcon />
      </IconButton>
      
          </Stack>
         </Stack>
          
          </Paper>
     
    </div>
  )
}

export default WorkoutDetails
