
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import SocialApp from './Components/SocialApp';
import CustomRoutes from './routes/CustomRoutes';
import Navbar from './Components/Navbar/Navbar';
import {QueryClient, QueryClientProvider} from 'react-query'
function App() {

  const queryClient =  new QueryClient({
      defaultOptions:{
          queries:{
               staleTime:50000,
               cacheTime:600000
          },
      },
  });  
 return (
      <>
       <QueryClientProvider client={queryClient}>
          <BrowserRouter basename="/">
               <Navbar/> 
               <CustomRoutes/>
          </BrowserRouter>
       </QueryClientProvider>
      </>
    
 )
}


export default App;
