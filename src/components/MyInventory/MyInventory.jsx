import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ManageCard from '../ManageCard/ManageCard';
import Spinner from '../Spinner/Spinner'

const MyInventory = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);
    const navigate = useNavigate();





    useEffect(() => {

        const fetchData = async () => {

            try{

                const settings = {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                };

                const response = await fetch(`https://furnitano-backend.onrender.com/myinventory?email=${user?.email}`, settings)

                //inbulit fetch does not detect this as a error so catch cannot catch the error.. this is the manual way of catching the error 
                if (response.status === 401 || response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                  }
                  else{
                    const data = await response.json();
                    setMyProducts(data);

                  }
            
              

            }
            catch(err){
                    console.log(err);
            }


        }

        fetchData();

    









    }, [])

    return (
        <div>
            <h2 className='text-2xl md:text-4xl text-center font-semibold my-20'>My Inventory</h2>

            <div className="_profile flex justify-center items-center flex-col">
                <img src={user?.photoURL || `https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg`} alt="" className="w-44 rounded-full " />
                <div className="indicator">
                    <span className="indicator-item badge badge-success">online</span>
                    <h2 className='text-center text-xl my-5'> <span className="font-semibold">Welcome Back,</span> <br /> {user?.displayName || user?.email}</h2>
                </div>

            </div>

            <div className="_inventory my-28">
                <h2 className="text-center text-3xl font-semibold my-16">MY FURNITURES</h2>

                <div className="_myproducts container mx-auto flex flex-col gap-5 p-5">
                    {myProducts?.map(product => <ManageCard product={product} key={product._id} />)}

                </div>


            </div>

        </div>
    );
};

export default MyInventory;