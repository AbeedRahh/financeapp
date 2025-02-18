import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var[inputs,setInputs]=useState({Username:"",email:"",Password:""})

    const inputHandler=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})
    console.log(inputs)
  }
  return (
    <div style={{textAlign:'center'}}>
      <br /><br /><br />
      <TextField variant='outlined' label='Username'
       onChange={inputHandler}
       name="Username"
       value={inputs.Username}
      /><br /><br />
      <TextField variant='outlined' label='email'
       onChange={inputHandler}
       name="email"
       value={inputs.email}
      /><br /><br />
      <TextField variant='outlined' label='Password'
       onChange={inputHandler}
       name="Password"
       value={inputs.Password}
      /><br/><br></br>
      <Button variant='contained' color="success">Submit</Button>
  
    </div>
  )
}

export default Signup

