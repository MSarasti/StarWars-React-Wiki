import React, {useEffect, useState} from 'react'
import { Grid, Paper, Avatar, TextField, Box, Button, Typography, Link} from '@mui/material'
import { styled } from '@mui/material/styles';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../util/firebase';

const Login = () => {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const avatarStyle = { backgroundColor: '#EFBC01', color: '#000000'}
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#EFBC01"),
    backgroundColor: "#EFBC01",
    '&:hover': {
      backgroundColor: "#EFBC01",
    },
  }));

  const handleLogin = (e) =>{
    console.log(email)
    console.log(password)
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return (
    <Grid >
        <Paper elevation={10} style={paperStyle}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Avatar style={avatarStyle} sx={{ width: 55, height: 55 }}>
                  <LockTwoToneIcon sx={{ fontSize: 40 }}/>
                  </Avatar>
                <h2>Sign In</h2>
            </Grid>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '90%' },}} noValidate  autoComplete="of">
            <TextField id="email" label="Email" variant="filled" placeholder='Enter your email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required/>
            <TextField id="password" label="Password" variant="filled" placeholder='Enter your password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required/>
            <ColorButton variant="contained" endIcon={<LoginTwoToneIcon/>} onClick={handleLogin} sx={{ width: '50%', marginTop: '60px' }}>Sign in</ColorButton>
            <Typography sx={{marginTop:'10px'}}>
                Don't have a account?
                <Link href='#'> Sign Up</Link>
            </Typography>
            </Box>
        </Paper>
    </Grid>
  )
}

export default Login