import { Backdrop, Button, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import axios from 'axios';
import PostContext from '../../Provider/PostContextProvider';
import isValid from '../../CheckVaildURL/isValidURL';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import isValidURL from '../../CheckVaildURL/isValidURL';
function Input(){

    let [postText,setPostText] = useState('');
    let [imageUrl,setImageUrl] = useState('');
    let [isLoading,setIsLoading] = useState(false);

    let {posts,setPosts}  = useContext(PostContext);



    
    function createPost(){

        if(postText==''){
             toast.error("Please enter the post information..!");
             return;
        }
        else if(!isValidURL(imageUrl)){
            toast.error("Please enter the vaild image URL!");
            return;
        }
        setIsLoading(true);
        axios.post("https://dummyapi.io/data/v1/post/create",
        {
             owner: "60d0fe4f5311236168a109ca",
             image:imageUrl,
             text: postText,
             likes:0,
             publishDate: new Date()

        },    
        {
           headers:{'app-id':import.meta.env.VITE_APP_ID}
        }
        ).then((response) => {
             setIsLoading(false)
             let resobject = response.data;
             setPosts([resobject,...posts])
             setPostText('')
             setImageUrl('')
        })
          
    }



   return(

  <>

       {(isLoading) ?(<div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                <CircularProgress color="inherit" />
                </Backdrop>
            </div>) :
         (<Box sx={{mt:'1rem',ml:'1rem'}}>
            <ToastContainer position='top-center'/>
            <TextField 
                fullWidth id="outlined-basic" 
                label="Your Next Post " 
                variant="outlined"
                value={postText}
                onChange={(e)=>{setPostText(e.target.value)}}
            />

            <TextField 
                sx={{mt:'1rem',mb:'1rem'}} 
                fullWidth id="outlined-basic" 
                label="Image Url of the post" 
                variant="outlined"
                value={imageUrl} 
                onChange={(e)=>{setImageUrl(e.target.value)}}
            />

            <Button variant="contained" endIcon={<SendIcon />} onClick={createPost}>Post</Button>
         </Box>)
            }

        </>
   )

}
   export default Input;