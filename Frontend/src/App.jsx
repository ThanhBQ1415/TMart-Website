import './App.css';

import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";
import Register from "./components/Register";
import apiUrl from "../systemVariable";
import Login from "./components/Login";
import ProductSearch from "./components/productSearch";
const App = (props) => {
  const [uploadedPhoto, setUploadedPhoto] = useState(false); 
  const [loginUser, setLoginUser] = useState(null);
  const [searchname, setsearchname] = useState(null);
//get cookie
  const userIdCookie = document.cookie
  .split('; ')
  .find(row => row.startsWith('user_id='))
  ?.split('=')[1];
//fetch user
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl.api}/api/user/${userIdCookie}`, {credentials: "include", withCredentials: true}
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setLoginUser(result[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching the data.");
      }
    };
    fetchData();
  }, [userIdCookie]);

  const handleLoginUserChange = user => {
    setLoginUser(user);
  };  
  const handleSearchname= name=>{
    setsearchname(name);
  }
 

  return (
      <Router>
        <div className='roott'>
          <Grid container>
            <Grid item xs={12} className="topbar-sticky" >
              <TopBar 
                onLoginUserChange={handleLoginUserChange}          
                loginUser={loginUser}     
                searchname={searchname}
                onSearchname={handleSearchname}     
              />
            </Grid>
           
            <Grid item sm={!!loginUser ? 10 : 12} >
              <div className="main-grid-item ">
                  <Routes>
                    <Route
                        path={"/login"}
                        element = {<Login onLoginUserChange={handleLoginUserChange} loginUser={loginUser}/>}
                    /> 
                    <Route
                        path={"/register"}
                        element = {<Register onLoginUserChange={handleLoginUserChange} loginUser={loginUser}/>}
                    /> 
                    <Route
                        path={"/product/:productId"}
                        element = {<UserDetail 
                          loginUser={loginUser} 
                        />}
                    />
                    <Route
                        path={"/productSearch/:name"}
                        element = {<ProductSearch 
                          loginUser={loginUser} 
                        />}
                    />
                    <Route
                        path="/photos/:userId"
                        element = {<UserPhotos 
                          loginUser={loginUser}
                          photoIsUploaded={uploadedPhoto}/>}
                    />
                    <Route path="/product" element={<UserList loginUser={loginUser}  searchname={searchname}
                onSearchname={handleSearchname}  />} />
                    <Route path="/*" element = {<UserList onLoginUserChange={handleLoginUserChange} loginUser={loginUser} searchname={searchname}
                onSearchname={handleSearchname} />} />
                  </Routes>            
              </div>
            </Grid>
          </Grid>
        </div>
      </Router>
  );
}

export default App;
