import { useParams } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Backdrop, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import fetchUser from "./fetchUser";


function UserProfile(){

       let {id} = useParams();
       const response =  useQuery(['user',id],fetchUser);
      

       if(!response.isLoading){
        const user = response.data.data;
        return (
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
       )}
       else{
        // If it is loading then show the backdrop to the user
          return (<Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <CircularProgress color="inherit" />
              </Backdrop>    
            )
       
        }
}
export default UserProfile;