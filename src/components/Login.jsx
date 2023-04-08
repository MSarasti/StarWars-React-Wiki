import * as React from 'react'
import { Grid, Paper, Avatar, TextField, Box, Button, Typography, Link} from '@mui/material'
import { styled } from '@mui/material/styles';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#EFBC01', color: '#000000'}

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#EFBC01"),
        backgroundColor: "#EFBC01",
        '&:hover': {
          backgroundColor: "#EFBC01",
        },
      }));

  return (
    <Grid >
        <Paper elevation={10} style={paperStyle}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Avatar style={avatarStyle} sx={{ width: 55, height: 55 }}><LockTwoToneIcon sx={{ fontSize: 40 }}/></Avatar>
                <h2>Sign In</h2>
            </Grid>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '90%' },}} noValidate autoComplete="off">
            <TextField id="userName" label="Username" variant="filled" placeholder='Enter your username' type='text' fullWidth/>
            <TextField id="password" label="Password" variant="filled" placeholder='Enter your password' type='password' fullWidth/>
            <ColorButton variant="contained" endIcon={<LoginTwoToneIcon/>} sx={{ width: '50%', marginTop: '60px' }}>Sign in</ColorButton>
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