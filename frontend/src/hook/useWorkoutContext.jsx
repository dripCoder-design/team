import React, { useContext } from 'react'
import { WorkoutContext } from '../contexts/WorkoutContext'

export const useWorkoutContext = () => {
  const context =useContext(WorkoutContext)
  
  if (!context) {
    throw Error('useWorkoutContext must be used inside an workout Context provider')
    
  }
  return context
}