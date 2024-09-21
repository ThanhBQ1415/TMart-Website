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
import "./styles.css";
import apiUrl from "../../../systemVariable.js";

function UserList(props) {
  let navigate = useNavigate();
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  //-----------fetch API list -------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl.api}/api/product/list`,{credentials: "include"}
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
  }, [props.loginUser]
);
  //---------- API - laptop----------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl.api}/api/product/list1/laptop`,{credentials: "include"}
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData1(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [props.loginUser]
);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${apiUrl.api}/api/product/list2/smartphone`,{credentials: "include"}
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData2(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, [props.loginUser]
);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${apiUrl.api}/api/product/list3/keyboard`,{credentials: "include"}
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData3(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, [props.loginUser]
);



useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${apiUrl.api}/api/product/list4/mouse`,{credentials: "include"}
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData4(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, [props.loginUser]
);

  const handleClick1 = (index) => {
    setSelectedItemIndex(index);
    navigate(`/product/${data1[index]._id}`);
  }; 
  const handleClick2 = (index) => {
    setSelectedItemIndex(index);
    navigate(`/product/${data2[index]._id}`);
  };
  const handleClick3 = (index) => {
    setSelectedItemIndex(index);
    navigate(`/product/${data3[index]._id}`);
  };
  const handleClick4 = (index) => {
    setSelectedItemIndex(index);
    navigate(`/product/${data4[index]._id}`);
  };
    return (
      
<div>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>

  <a href="https://https://t-mart-t.vercel.app/product/66ed94d09ff7a868dcf7b1dc.vn/">
    <img 
      src="https://vmartplus.w2.exdomain.net/image/cache/catalog/vmartplus/banner/main-banner-970x400.webp"
      alt="Example" 
      style={{ width: '1000px', height: '310px', marginRight: '20px' }} 
    />
  </a>


  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <a href="https://shopee.vn/">
      <img 
        src="https://vmartplus.w2.exdomain.net/image/cache/catalog/vmartplus/banner/side-banner-1-400x150.webp"
        alt="Example" 
        style={{ width: '400px', height: '150px', marginBottom: '10px' }} 
      />
    </a>

    <a href="https://shopee.vn/">
      <img 
        src="https://vmartplus.w2.exdomain.net/image/cache/catalog/vmartplus/banner/side-banner-3-400x150.webp"
        alt="Example" 
        style={{ width: '400px', height: '150px',marginBottom: '10px' }} 
      />
    </a>
  </div>
</div>


<div style={{ display: 'flex', alignItems: 'flex-start' }}>

  <a href="https://shopee.vn/">
    <img 
      src="https://vmartplus.w2.exdomain.net/image/cache/catalog/vmartplus/banner/wide-banner-1920x150.webp"
      alt="Example" 
      style={{ width: '1420px', height: '100px', marginRight: '20px' }} 
    />
   </a>
  </div>




               {/* lap */}
  <Typography variant="h5" style={{ color: '#d11111', fontWeight: '100000',fontFamily: ' sans-serif',fontSize: '2rem',letterSpacing: '0.5px',textTransform: 'uppercase', }}>Laptop</Typography>
  <List component="nav" sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: '16px' }}>
   {data1.map((item, index) => (
    <React.Fragment key={index}>
      <ListItem 
        onClick={() => handleClick1(index)}
        sx={{
          '&:hover': { cursor: 'pointer', backgroundColor: '#aaaaaa' },
          backgroundColor: selectedItemIndex === index ? '#aaaaaa' : 'inherit',
          flexDirection: 'column',
          alignItems: 'center',
          width: '250px', // Tăng chiều rộng
          textAlign: 'center',
          padding: '20px', // Tăng padding
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ListItemText 
          primary={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src={item.file_name}
                alt="Example" 
                style={{ width: '200px', height: 'auto', marginBottom: '16px' }} 
              />
              <Typography 
                variant="subtitle1" 
                style={{ color: '#C25241', fontWeight: '600', fontSize: '16px' }}
              >
                {"Tên sản phẩm: " + item.name} <br />
                {"Giá sản phẩm: " + item.price} <br />
              </Typography>
            </div>
          }
        />
      </ListItem>
    </React.Fragment>
  ))}
</List>



          {/* dienthoai */}
<Typography variant="h5" style={{ color: '#d11111', fontWeight: '100000',fontFamily: ' sans-serif',fontSize: '2rem',letterSpacing: '0.5px',textTransform: 'uppercase', }}>Phone</Typography>
  <List component="nav" sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: '16px' }}>
   {data2.map((item, index) => (
    <React.Fragment key={index}>
      <ListItem 
        onClick={() => handleClick2(index)}
        sx={{
          '&:hover': { cursor: 'pointer', backgroundColor: '#aaaaaa' },
          backgroundColor: selectedItemIndex === index ? '#aaaaaa' : 'inherit',
          flexDirection: 'column',
          alignItems: 'center',
          width: '250px', // Tăng chiều rộng
          textAlign: 'center',
          padding: '20px', // Tăng padding
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ListItemText 
          primary={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src={item.file_name}
                alt="Example" 
                style={{ width: '200px', height: 'auto', marginBottom: '16px' }} 
              />
              <Typography 
                variant="subtitle1" 
                style={{ color: '#C25241', fontWeight: '600', fontSize: '16px' }}
              >
                {"Tên sản phẩm: " + item.name} <br />
                {"Giá sản phẩm: " + item.price} <br />
              </Typography>
            </div>
          }
        />
      </ListItem>
    </React.Fragment>
  ))}
</List>






        {/* keyboard */}
<Typography variant="h5" style={{ color: '#d11111', fontWeight: '100000',fontFamily: ' sans-serif',fontSize: '2rem',letterSpacing: '0.5px',textTransform: 'uppercase', }}>Keyboard</Typography>
  <List component="nav" sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: '16px' }}>
   {data3.map((item, index) => (
    <React.Fragment key={index}>
      <ListItem 
        onClick={() => handleClick3(index)}
        sx={{
          '&:hover': { cursor: 'pointer', backgroundColor: '#aaaaaa' },
          backgroundColor: selectedItemIndex === index ? '#aaaaaa' : 'inherit',
          flexDirection: 'column',
          alignItems: 'center',
          width: '250px', // Tăng chiều rộng
          textAlign: 'center',
          padding: '20px', // Tăng padding
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ListItemText 
          primary={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src={item.file_name}
                alt="Example" 
                style={{ width: '200px', height: 'auto', marginBottom: '16px' }} 
              />
              <Typography 
                variant="subtitle1" 
                style={{ color: '#C25241', fontWeight: '600', fontSize: '16px' }}
              >
                {"Tên sản phẩm: " + item.name} <br />
                {"Giá sản phẩm: " + item.price} <br />
              </Typography>
            </div>
          }
        />
      </ListItem>
    </React.Fragment>
  ))}
</List>



  {/* mouse*/}
  <Typography variant="h5" style={{ color: '#d11111', fontWeight: '100000',fontFamily: ' sans-serif',fontSize: '2rem',letterSpacing: '0.5px',textTransform: 'uppercase', }}>Mouse</Typography>
  <List component="nav" sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: '16px' }}>
   {data4.map((item, index) => (
    <React.Fragment key={index}>
      <ListItem 
        onClick={() => handleClick4(index)}
        sx={{
          '&:hover': { cursor: 'pointer', backgroundColor: '#aaaaaa' },
          backgroundColor: selectedItemIndex === index ? '#aaaaaa' : 'inherit',
          flexDirection: 'column',
          alignItems: 'center',
          width: '250px', // Tăng chiều rộng
          textAlign: 'center',
          padding: '20px', // Tăng padding
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ListItemText 
          primary={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src={item.file_name}
                alt="Example" 
                style={{ width: '200px', height: 'auto', marginBottom: '16px' }} 
              />
              <Typography 
                variant="subtitle1" 
                style={{ color: '#C25241', fontWeight: '600', fontSize: '16px' }}
              >
                {"Tên sản phẩm: " + item.name} <br />
                {"Giá sản phẩm: " + item.price} <br />
              </Typography>
            </div>
          }
        />
      </ListItem>
    </React.Fragment>
  ))}
</List>



    

      </div>
    );
  
  }


export default UserList;








{/* <Typography variant="h5" style={{ color: '#d11111', fontWeight: '100000',fontFamily: ' sans-serif',fontSize: '2rem',letterSpacing: '0.5px',textTransform: 'uppercase', }}>Product</Typography>
<List component="nav" sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: '16px' }}>
{data.map((item, index) => (
<React.Fragment key={index}>
<ListItem 
onClick={() => handleClick(index)}
sx={{
  '&:hover': { cursor: 'pointer', backgroundColor: '#aaaaaa' },
  backgroundColor: selectedItemIndex === index ? '#aaaaaa' : 'inherit',
  flexDirection: 'column',
  alignItems: 'center',
  width: '250px', // Tăng chiều rộng
  textAlign: 'center',
  padding: '20px', // Tăng padding
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}}
>
<ListItemText 
  primary={
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img 
        src={item.file_name}
        alt="Example" 
        style={{ width: '200px', height: 'auto', marginBottom: '16px' }} 
      />
      <Typography 
        variant="subtitle1" 
        style={{ color: '#C25241', fontWeight: '600', fontSize: '16px' }}
      >
        {"Tên sản phẩm: " + item.name} <br />
        {"Giá sản phẩm: " + item.price} <br />
      </Typography>
    </div>
  }
/>
</ListItem>
</React.Fragment>
))}
</List> */}
