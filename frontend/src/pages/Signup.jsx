import { Alert, Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { UseSignup } from '../hook/UseSignup'
import { motion } from 'framer-motion'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const{signUp, error, isLoading} = UseSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(email,password)
        await signUp(email, password)
    }

    return (
        <Grid container spacing={2}  >
            <Grid item xs={4} md={4} lg={4}></Grid>
            <Grid item xs={4} md={4} lg={4} component={motion.div} initial={{ opacity:0}}animate= {{opacity:1}} transition={{delay:0.3,duration:2}}>
                <Paper elevation={3}>
                <form onSubmit={handleSubmit}>
                    <Stack direction="column" sx={{p:2}}   
      alignItems="center" spacing={3}>
                     
                       <Typography variant='h3' color='secondary'> Sign up</Typography>
                        <TextField id="filled-basi" type="email" label="Email" color='secondary' variant="filled"
                            onChange={(e) => setEmail(e.target.value)} value={email} component={motion.div}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }} whileTap={{ scale: 0.9 }}/>
                        <TextField id="filled-basic" type="password" label="Password" color='secondary' variant="filled"
                            onChange={(e) => setPassword(e.target.value)} value={password} component={motion.div}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }} whileTap={{ scale: 0.9 }}/>
                        <Button  disabled={isLoading} type="submit" variant='outlined' color="warning">Sign Up</Button>
                       {error && <Alert severity="error">{error}</Alert>}
                    </Stack>
                    </form>
                </Paper>

            </Grid>
            <Grid item xs={4} md={4} lg={4}></Grid>


        </Grid>


    )
}

export default Signup