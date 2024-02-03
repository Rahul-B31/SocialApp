import Input from "./Input/Input";
import MainContainer from "./MainContainer/MainContainer";
import Navbar from "./Navbar/Navbar";
import PostContext from '../Provider/PostContextProvider';
import { useEffect, useState } from "react";
import axios from "axios";
import { Backdrop, CircularProgress } from "@mui/material";
function SocialApp(){

 const [posts,setPosts] = useState([]);
 const [isLoading,setIsLoading] = useState(true)


 useEffect(()=>{
     axios.get("https://dummyapi.io/data/v1/post",{headers:{'app-id':import.meta.env.VITE_APP_ID}})
    .then((response)=>{
         let resobject = response.data;
         setPosts([...resobject.data]);   
         setIsLoading(false)  
  })
},[])

return (
    (!isLoading) ?

    <PostContext.Provider value={{posts,setPosts}}>
        <Input/>
        <MainContainer/>
    </PostContext.Provider>
    :
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
     >
     <CircularProgress color="inherit" />
     </Backdrop>


    
);

}
export default SocialApp;