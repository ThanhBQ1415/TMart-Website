import React, { useState, useEffect } from "react";
import { AppBar,Toolbar,InputAdornment, Grid,  Typography, IconButton, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import "./styles.css";
import { ExitToApp, CloseRounded } from '@material-ui/icons';
import { Snackbar } from '@material-ui/core';
import axios from "axios";
import apiUrl from "../../../systemVariable.js";
import SearchIcon from '@mui/icons-material/Search';

function TopBar(props) {
  let navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [logoutPrompt, setlogoutPrompt] = useState(null);  
  const [name, setname] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // props.onSearchname(name);
    navigate(`/productSearch/${name}`);
  };
  //Logout
  const handleLogoutPromptClick = () => {   
    axios  
      .post(`${apiUrl.api}/api/user/logout`, {},{credentials: "include", withCredentials: true})
      .then(response => {
        if (response.status === 200) {
          props.onLoginUserChange(null);
          return navigate(`/login`);
        }
      })
      .catch(err => console.log("Error: logout error in posting", err.message));
    setlogoutPrompt(true); 
  };
  //end logout

  // dialog logout alert
  const handleLogoutPromptClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setlogoutPrompt(false);
  };
  //end dialog logout alert

  const handleCloseDialog = () => {
    setOpen(false);
  };

  // end dialog upload photo 

  //set file image
  const handleImageUpload = event => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setOpen(true);  
  };
  // end set file image


  // submit upload photo
  const handleSubmit = (event) => {
    event.preventDefault();
    if(selectedImage.size > 0){
      const form = new FormData();
      form.append("photo", selectedImage);
      form.append("postContent", postContent);
      form.append("user_id", props.loginUser._id) 
      setSelectedImage(null);
      setPostContent('')
      axios
      .post(`${apiUrl.api}/api/photo/new`, form,{credentials: "include", withCredentials: true})
      .then(response => {
          props.onPhotoUpload();
          console.log("photo successfully uploaded");
      })
      .catch(err => console.log("Error: photo uploaded error ", err));
    }
    handleCloseDialog();
  };

  // end submit upload photo 
  if (props.loginUser) {
    return (
      <AppBar position="static">
      <Toolbar  className="topbar-appBar">
        <Grid container justifyContent="space-between">
        <Button
              type="submit"
              variant="text"
              onClick={() => navigate(`/*`)}
              color="primary"
              style={{ background: "#d11111", padding: "8px 16px",color: "#FFFFFF",fontSize: "25px" }}
            >
                TMART
            </Button>
            <form onSubmit={handleSearchSubmit}>
  <Grid 
    container 
    item 
    xs={12} 
    style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}
  >
    <Grid item xs={12} sm={8} md={6} style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small" 
        value={name}
        onChange={(e) => setname(e.target.value)}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { height: '40px' } 
        }}
        style={{ 
          width: '5000px',   // Điều chỉnh độ dài theo ý muốn
          maxWidth: '600px', // Đặt maxWidth để giới hạn chiều rộng tối đa
          background: "#FFFFFF", 
          height: '40px', 
          marginRight: '10px'
        }} 
      />
      <Button
        type="submit"
        variant="contained" 
        color="primary"
        style={{ 
          padding: "8px 16px", 
          background: "#D81127", 
          color: "#FFFFFF", 
          
          height: '40px' ,
          border: '0.000000000001px solid white',
        }}
      >
        Search
      </Button>
    </Grid>
  </Grid>
</form>
          <Grid item style={{display: "flex", alignContent:"center", justifyContent:"center"}}>
            <Typography variant="h6" color="inherit">
              {props.loginUser.first_name}
            </Typography>
            <IconButton title="Log out your account" onClick={handleLogoutPromptClick} variant="contained" >
              <ExitToApp style={{ color: "#ffffff", marginBottom:"8px" }} fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>


    );
  } else {
    return (
<AppBar position="static">
  <Toolbar className="topbar-appBar" style={{ padding: "0px 80px" }}>
    <Grid container alignItems="center" justifyContent="space-between">
      {/* TMART Button */}
      <Button
        type="submit"
        variant="text"
        onClick={() => navigate(`/*`)}
        color="primary"
        style={{ background: "#d11111", padding: "8px 16px", color: "#FFFFFF", fontSize: "27px" }}
      >
        TMART
      </Button>
      
      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small" 
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { height: '40px' } 
          }}
          style={{ 
            width: '500px',   // Điều chỉnh độ dài theo ý muốn
            maxWidth: '1000px', // Đặt maxWidth để giới hạn chiều rộng tối đa
            background: "#FFFFFF", 
            height: '40px', 
            marginRight: '10px'
          }} 
        />
        <Button
          type="submit"
          variant="outlined" 
          color="primary"
          style={{ 
            padding: "8px 16px", 
            background: "#d11111", 
            color: "#FFFFFF", 
            height: '40px',
            borderColor: "#FFFFFF",
            display: 'flex', // Đảm bảo Button sử dụng Flexbox để căn chỉnh nội dung
            alignItems: 'center'
          }}
        >
          Search
        </Button>
      </form>

      {/* Login and Register Buttons */}
      <Grid item>
        <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
          <Grid item>
            <Button
              type="submit"
              variant="outlined"
              onClick={() => navigate(`/login`)}
              color="primary"
              style={{borderColor: "#FFFFFF", background: "#d11111", padding: "8px 16px", color: "#FFFFFF" }}
            >
              Đăng Nhập
            </Button>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="outlined"
              onClick={() => navigate(`/register`)}
              color="primary"
              style={{borderColor: "#FFFFFF", background: "#d11111", padding: "8px 16px", color: "#FFFFFF" }}
            >
              Đăng Ký
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Toolbar>
</AppBar>


    
    );
  }
}

export default TopBar;


    // <AppBar position="static">
    //     <Toolbar style={{ background: "#C25241"}}>
    //       <Grid container justifyContent="space-between">
    //         <Grid item> 
    //           <Typography variant="h5" color="inherit">
    //             Đăng nhập 
    //           </Typography>
    //         </Grid>
    //         <Snackbar
    //           open={logoutPrompt}
    //           onClose={handleLogoutPromptClose}
    //           autoHideDuration={5000}
    //           message="Bạn đã đăng xuất tài khoản"
    //           action={(
    //           <IconButton color="secondary" onClick={handleLogoutPromptClose}>
    //             <CloseRounded />
    //           </IconButton>
    //         )}
    //       />
    //       </Grid>
    //     </Toolbar>
    //   </AppBar>