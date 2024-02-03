import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';



 function PostCard({image,content,firstName,lastName,likes}) {

  let [isLiked,setIsLiked] = useState(false);

  return (
    <Card sx={{ width: 380,
        
        margin: "0 auto",
        padding: "0.1em", }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           {firstName.substring(0,1)}
          </Avatar>
        }
       
        title={firstName + ' '+lastName}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>{
               setIsLiked(!isLiked)
         }} >
          {/* If the is like is true then we render the FavoriteBorderIcon */}

           { (isLiked) ? <FavoriteIcon sx={{color:red[500]}}  />:<FavoriteBorderIcon /> } 
           {/* {likes} */}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    
    </Card>
  );
}

export default  React.memo(PostCard);