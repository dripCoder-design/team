import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { UseLogin } from '../hook/useLogin'
import { motion } from 'framer-motion'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = UseLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email,password)
    }

    return (
        <Grid container spacing={2} sx= {{m:3}}  >
            <Grid item xs={4} md={4} lg={4}></Grid>
            <Grid item xs={4} md={4} lg={4} component={motion.div} initial={{ opacity:0}}animate= {{opacity:1}} transition={{delay:0.3,duration:2}}>
                <Paper elevation={3}>
                <form onSubmit={handleSubmit}>
                    <Stack direction="column" sx={{p:2}}   
      alignItems="center" spacing={3}>
                     
                       <Typography variant='h3' color='secondary'> Login</Typography>
                        <TextField id="filled-basic" type="email" label="Email" color='secondary' variant="filled"
                            onChange={(e) => setEmail(e.target.value)} value={email} component={motion.div}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }} whileTap={{ scale: 0.9 }}  />
                        <TextField id="filled-bas" type="password" label="Password" color='secondary' variant="filled"
                            onChange={(e) => setPassword(e.target.value)} value={password} component={motion.div}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }} whileTap={{ scale: 0.9 }}/>
                        <Button  type="submit" disabled={isLoading} variant='outlined' color="warning">Login</Button>
                        {error && <div className='error'> {error}</div> }
                       
                    </Stack>
                    </form>
                </Paper>

            </Grid>
            <Grid item xs={4} md={4} lg={4}></Grid>


        </Grid>


    )
}

export default Login