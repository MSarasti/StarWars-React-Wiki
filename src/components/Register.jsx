import React, {useEffect, useState} from 'react'
import { Grid, Paper, Avatar, TextField, Box, Button, Typography, Link} from '@mui/material'
import { styled } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../util/firebase';

const Register = () => {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#EFBC01', color: '#000000' }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#EFBC01"),
    backgroundColor: "#EFBC01",
    '&:hover': {
      backgroundColor: "#EFCB01",
    },
  }));

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     // Signed in
      const user = userCredential.user;
      // ...
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }


  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Avatar style={avatarStyle} sx={{ width: 55, height: 55 }}>
            <AddCircleIcon sx={{ fontSize: 40 }}/>
          </Avatar>
          <h2 sx={{ margin: 0 }}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <form>
          <TextField sx={{ paddingTop: '10px' }} id="email" label="Email" variant="filled" placeholder='Enter an email' type='text' value={email} onChange={(e) => setEmail(e.target.value)}fullWidth required />
          <TextField sx={{ paddingTop: '10px' }} id="password" label="Password" variant="filled" placeholder='Enter a password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required />
        </form>
        <ColorButton variant='contained' endIcon={<LoginTwoToneIcon/>} onClick={handleSignUp} sx={{width: '50%', marginTop: '60px'}}>Sign Up</ColorButton>
        <Typography sx={{marginTop:'10px'}}>
                Do you have a account?
                <Link href='/login'> Sign In</Link>
            </Typography>
      </Paper>
    </Grid>
  )
}

export default Register