import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';

export default function UserList() {
    
    let [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

     useEffect(()=>{
        axios.get("https://dummyapi.io/data/v1/user",{headers:{'app-id':import.meta.env.VITE_APP_ID}})
        .then((response)=>{
               let resobject = response.data;
               setUsers([...resobject.data]); 
               setIsLoading(false)    
        })

     },[])
    
  return (
    (!isLoading) ?
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
          <ListItem
            key={user.id}
          >
            <Link className='link' to={`/user/${user.id}`}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={user.firstName}
                  src={user.picture}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.firstName + ' '+user.lastName } />
            </ListItemButton>
            </Link>
          </ListItem>
          );
          })}
    </List>
    :
    // If the components are loading then we show the backdrop to the user
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
    <CircularProgress color="inherit" />
    </Backdrop>
  );
}