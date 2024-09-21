import React, { useState, useEffect } from "react";
import { useNavigate , useParams } from 'react-router-dom';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Avatar }from "@material-ui/core";
import apiUrl from "../../../systemVariable.js";

function productSearch(props) {
  let navigate = useNavigate();
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [data, setData] = useState([]);
  const nameproduct = useParams().name; 
  //-----------fetch API-------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl.api}/api/product/search/${nameproduct}`,{credentials: "include"}
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
  }, 
);
  //----------end fetch API----------------

  const handleClick = (index) => {
    setSelectedItemIndex(index);
    navigate(`/product/${data[index]._id}`);
  };


    return (
      <div>
        <Typography variant="h5" style={{ color: '#d11111', fontWeight: '600' }}>Product</Typography>
        <List component="nav">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem 
                onClick={() => handleClick(index)}
                sx={{
                  '&:hover': { cursor: 'pointer', backgroundColor: '#aaaaaa' },
                    backgroundColor: selectedItemIndex == index ? '#aaaaaa' : 'inherit',
                }}
              >
                 <ListItemText 
    primary={
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src= {item.file_name}
          alt="Example" 
          style={{ width: '100px', height: 'auto', marginRight: '16px' }} 
        />
        <Typography 
          variant="subtitle1" 
          style={{ color: '#C25241', fontWeight: '600', fontSize: '16px' }}
        >
          {"Tên sản phẩm: " + item.name} <br />
          {"Giá sản phẩm: " + item.price} <br />
          {"Mô tả: " + item.description}
        </Typography>
      </div>
    }
  />
              </ListItem>
              {index < data.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  
  }


export default productSearch;
