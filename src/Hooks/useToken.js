import { useEffect, useState } from "react";


const useToken = (user) => {

    
 const [token, setToken] = useState('');

 const email = user?.user?.email;
 const userEmail = { userEmail: email };
 



useEffect(()=>{

    const getJWT = async() =>{

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userEmail),
        };



        

                const response = await fetch(`http://localhost:5000/getToken`,settings)
                const data = await response.json();
                console.log(data.jwtToken);
                setToken(data.jwtToken);
                
                localStorage.setItem('accessToken', data.jwtToken);
            


        }

        //only executes the function if email is vaild

        if(email) {
            getJWT();

        }

       

        

    

   




},[user])

return [token]

};

export default useToken;