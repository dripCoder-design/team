import { Alert, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useWorkoutContext } from '../hook/useWorkoutContext'
import { useAuthContext } from '../hook/useAuthContext'
import { motion } from 'framer-motion'
const Workoutform =()=> {
    const {dispatch} = useWorkoutContext()
    const { user } = useAuthContext()

    const[title,setTitle] = useState('')
    const[load,setLoad] = useState('')
    const[reps,setReps] = useState('')
    const[error,setError] = useState('')
    const[emptyFields,setEmptyFields] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!user) {
            setError('You must be logged in')
            return
        }

        const workout = {title, load, reps}

        const response = await fetch('https://team-i9x4.onrender.com/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){

            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added', json)
            dispatch ({type: 'CREATE_WORKOUT', payload: json})
        }

    }
  return (
   <form onSubmit={handleSubmit}>
    <Stack direction="column" spacing={2} sx={{p:2}} component={motion.div} initial={{ opacity:0}}animate= {{opacity:1}} transition={{duration:1}}>
    <Typography variant='h4'>Add a new Workout</Typography>
        <TextField
         type="text" onChange = {(e)=> setTitle(e.target.value)} value={title}
          label="Title" variant="outlined"
          
         error={ emptyFields.includes('title')?'error':''}
         component={motion.div}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }} whileTap={{ scale: 0.9 }} />
                 <TextField
         type="number" onChange = {(e)=> setLoad(e.target.value)} value={load}
         label="Load" variant="outlined" 
         error={emptyFields.includes('load')?'error':''}
         component={motion.div}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }} whileTap={{ scale: 0.9 }}/>
                 <TextField
         type="number" onChange = {(e)=> setReps(e.target.value)} value={reps}
          label="Reps" variant="outlined" 
          error={emptyFields.includes('reps')?'error':''} component={motion.div}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }} whileTap={{ scale: 0.9 }}/>
         <Button type="submit" variant='contained'>submit</Button>
         {error && <Alert severity="error">{error}</Alert>}
    </Stack>

   </form>
  )
}

export default Workoutform
