import React, { useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Grid, Paper, Typography, TextField, Button, Snackbar, IconButton } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import apiUrl from "../../../systemVariable.js";
import "./styles.css";

function LoginAndRegister(props) {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginFalse, setLoginFalse] = useState(false);

  

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${apiUrl.api}/api/user/login`, {
        username: loginUsername,
        password: loginPassword
      },{
        credentials: 'include',
        withCredentials: true
      })
      .then((response) => {
        props.onLoginUserChange(response.data);
        if(response.status === 400){
          setLoginFalse(true);
        }
      })
      .catch(() => {
        setLoginFalse(true);
      });
  };

 
  
  if (props.loginUser) {
    return <Navigate to={`/*`} state={{ from: "/Login" }} replace />;
  }

  return (
    <Grid container spacing={2} justifyContent="center" >
      <Grid item xs={6}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h6" gutterBottom>
                Đăng Nhập
          </Typography>
          <form onSubmit={ handleLoginSubmit }>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Tên đăng nhập"
              value={ loginUsername }
              onChange={(e) => setLoginUsername(e.target.value) }
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Mật khẩu"
              type="password"
              value={ loginPassword }
              onChange={(e) => setLoginPassword(e.target.value) }
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ background: "#C25241"}}
            >
              Đăng Nhập
            </Button>
          </form>
   
        </Paper>
        <Snackbar
          open={loginFalse}
          onClose={() => setLoginFalse(false)}
          autoHideDuration={5000}
          message="Tên đăng nhập hoặc mật khẩu không đúng"
          action={(
            <IconButton color="secondary" onClick={() => setLoginFalse(false)}>
              <CloseRounded />
            </IconButton>
          )}
        />
      
               </Grid>
             </Grid>
           );
         }
         
         export default LoginAndRegister;
         
