
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import SocialApp from './Components/SocialApp';
import CustomRoutes from './routes/CustomRoutes';
import Navbar from './Components/Navbar/Navbar';

function App() {
 return (
      <>
     <BrowserRouter basename="/">
         <Navbar/> 
        <CustomRoutes/>
     </BrowserRouter>
      </>
    
 )
}


export default App;
