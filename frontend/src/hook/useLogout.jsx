import { useAuthContext } from "./useAuthContext"
import { useWorkoutContext } from "./useWorkoutContext"

export const useLogout = () => {
    const { dispatch }= useAuthContext()
    const { dispatch: workoutDispatch } = useWorkoutContext()

    const logout = () => {
        //remove userFrom storage
        localStorage.removeItem('user')
        //dispatch log out action
        dispatch({type: 'LOGOUT'})
        workoutDispatch({type: 'SET_WORKOUTS', payload: null})
    }
    return {logout}
}