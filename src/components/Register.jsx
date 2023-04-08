import * as React from 'react'
import { Avatar, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';

const Register = () => {

  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#EFBC01', color: '#000000' }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#EFBC01"),
    backgroundColor: "#EFBC01",
    '&:hover': {
      backgroundColor: "#EFCB01",
    },
  }));

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
          <TextField sx={{ paddingTop: '10px' }} id="name" label="Name" variant="filled" placeholder='Enter your name' type='text' fullWidth required />
          <FormControl sx={{marginTop: '10px'}}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <TextField sx={{ paddingTop: '10px' }} id="userName" label="Username" variant="filled" placeholder='Enter an username' type='text' fullWidth required />
          <TextField sx={{ paddingTop: '10px' }} id="password" label="Password" variant="filled" placeholder='Enter a password' type='password' fullWidth required />
        </form>
        <ColorButton variant='contained' endIcon={<LoginTwoToneIcon/>} sx={{width: '50%', marginTop: '25px'}}>Sign Up</ColorButton>
      </Paper>
    </Grid>
  )
}

export default Register