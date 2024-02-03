import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';



export default function MainContainer() {
  return (
    <Box  sx={{ width: '100%',mt:'3rem'} }>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid display={'flex'} justifyContent={'end'} item xs={5}>
            <UserList/>
        </Grid>
        <Grid item xs={7} container gap={2} justifyContent={'center'} direction={'column'} alignItems={'center'} >
          <PostCardList/>
        </Grid>
     

      </Grid>
    </Box>
  );
}