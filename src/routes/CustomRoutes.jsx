import { Route, Routes, useParams } from "react-router-dom";
import SocialApp from "../Components/SocialApp";
import UserProfile from "../Components/UserProfile/UserProfile";

export default function CustomRoutes(){

  return (  
        <Routes>
            <Route path="/" element={<SocialApp/>}/>
            <Route path="/user/:id" element={<UserProfile/>}/>
        </Routes>
  )


}