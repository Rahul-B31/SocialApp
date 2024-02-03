import axios from "axios";

  const fetchUser = async({queryKey}) => {

 
    const id = queryKey[1];
    let response = await axios.get(`https://dummyapi.io/data/v1/user/${id}`,
        {
            headers:
            {
                'app-id':import.meta.env.VITE_APP_ID
            }
        })


        console.log(response)
        return response;
    
     
}
export default fetchUser;