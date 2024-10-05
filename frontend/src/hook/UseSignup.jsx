import { useState } from "react"
import { useAuthContext } from './useAuthContext'
export const UseSignup = () => {
const [error,setError] = useState(null)
const [isLoading, setIsLoading] = useState(null)
const { dispatch } = useAuthContext()

const signUp = async(email,password) => {
    setIsLoading(true)
    setError(null)
    const response = await fetch('https://team-i9x4.onrender.com/api/user/signup/',{
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify({email, password})
        
        
    })
 const json = await response.json()
 if(!response.ok){
    setIsLoading(false)
    setError(json.error)
 }
 if(response.ok){
    //save user to local storage
    localStorage.setItem('user', JSON.stringify(json))

    //update authcontext
    dispatch ({type: 'LOGIN', payload: json})
    setIsLoading(false)
 }
}

return {signUp, isLoading,error}
}
