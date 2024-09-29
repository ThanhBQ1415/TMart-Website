import React, { useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Grid, Paper, Typography, TextField, Button, Snackbar, IconButton } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import apiUrl from "../../../systemVariable.js";
import "./styles.css";
import { useNavigate , useParams } from 'react-router-dom';

function LoginAndRegister(props) {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const [Register, setRegister] = useState(false);



  

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (registerPassword !== confirmPassword) {
      alert("Mật khẩu và mật khẩu xác nhận không khớp!");
      return;
    }
  
    axios
      .post(`${apiUrl.api}/api/user/register`, {
        username: registerUsername,
        password: registerPassword,
        first_name: firstName,
      },{
        withCredentials: true,
        credentials: "include"
      })
      .then((response) => { 
        setRegister(true);
      })
      .catch(() => {
        setLoginFalse(true);
      });
  };
  if (Register) {
    return <Navigate to={`/login`} state={{ from: "/register" }} replace />;
  }

  return (
    <Grid container spacing={2} justifyContent="center" >
      <Grid item xs={6}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h6" gutterBottom>
           Đăng kí
          </Typography>
          <form onSubmit={handleRegisterSubmit}>
           
              <>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Tên"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                  
              </>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Tên đăng nhập"
              value={ registerUsername}
              onChange={(e) =>setRegisterUsername(e.target.value)}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Mật khẩu"
              type="password"
              value={ registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />
           
              <>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Xác nhận mật khẩu"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
               
                
              </>
        
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ background: "#d11111"}}
            >
              Đăng ký
            </Button>
          </form>
        </Paper>
  
        <Snackbar
        open={Register}
        onClose={() => setRegister(false)}
        autoHideDuration={5000}
        message="Đăng ký thành công"
        action={(
          <IconButton color="secondary" onClick={() => setRegister(false)}>
            <CloseRounded />
          </IconButton>
               )}
               />
               </Grid>
             </Grid>
           );
         }
         
         export default LoginAndRegister;
         
