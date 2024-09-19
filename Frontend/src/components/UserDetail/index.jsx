import React, { useState, useEffect } from "react";
import { Typography, Paper, Button } from "@mui/material";
import "./styles.css";
import { useNavigate , useParams } from 'react-router-dom';

import apiUrl from "../../../systemVariable.js";

function UserDetail(props) {
  // const userid =props.loginUser._id;  
  const userid = useParams().productId; // lay userID cua url hien tai
  let navigate = useNavigate();
  //-----------fetch API-------------------
  const [data, setData] = useState([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl.api}/api/product/${userid}`, {credentials: "include", withCredentials: true}
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [userid]);

  //-----------end fetch API-------------------
  const user = data[0];

  const buyproduct = (event) => {
    event.preventDefault();
    if(props.loginUser){ 
      
    }
    else{
     return navigate(`/login`);
    }

  };
  //----------end fetch API----------------
  if (user) {
    return (

      <>
      
        <Paper elevation={3} style={{ padding: 20, margin: 20 }}>   
          <Typography variant="h6" style={{ color:'#C25241', fontWeight: '600' }}>Thông tin sản phẩm</Typography>
          <img 
          src= {user.file_name}
          alt="Example" 
          style={{ width: '100px', height: 'auto', marginRight: '16px' }} 
         />
          <div style={{ marginLeft:'10px' }}>
            <Typography variant="body1" style={{ color:'#444444' }}><b>Tên</b>: {user.name}</Typography>
            <Typography variant="body1" style={{ color:'#444444' }}><b>Gia</b>: {user.price}</Typography>
            <Typography variant="body1" style={{ color:'#444444' }}>
            <b>Mô tả</b>: {user.description}
            </Typography>
          </div>
          <form onSubmit={ buyproduct }>
          <Button 
                type="submit"
              variant="contained"
              id="btn"
           
              style={{ backgroundColor: '#C25241' }}
            >
              Mua Hàng
            </Button>
            </form>
        </Paper>
   
      </>

    );
  }
}

export default UserDetail;
