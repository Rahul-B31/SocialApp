import axios from "axios";
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Backdrop, CircularProgress } from "@mui/material";


function UserProfile(){

    let {id} = useParams();

    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get(`https://dummyapi.io/data/v1/user/${id}`,
        {
            headers:
            {
                'app-id':import.meta.env.VITE_APP_ID
            }
        })
        .then((response)=>{
              setUser(response.data);
              setIsLoading(false)
        })

     },[])
    
    return (
        (!isLoading)?
            <Box sx={{display:'flex',justifyContent:'center',mt:'2rem'}}>
            <Card sx={{ display: 'flex',width:'500px', height:'200px',justifyContent:'space-around',alignItems:'center'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                   <h3>{user.firstName+" "+user.lastName}</h3>
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                   {user.email}
                </Typography>
              </CardContent>
             
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={user.picture}
              alt={user.firstName}
            />
          </Card>
            </Box>
        // If it is loading then show the backdrop to the user
       :<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
         >
          <CircularProgress color="inherit" />
        </Backdrop>
        
    );
       
}
export default UserProfile;