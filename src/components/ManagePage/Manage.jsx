import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useProducts from "../../Hooks/useProducts";
import ManageCard from '../ManageCard/ManageCard'

const Manage = () => {

    const [products] = useProducts();




    return (

        <div className="container mx-auto flex flex-col  justify-center ">

            <h2 className="text-center text-4xl font-semibold mt-20">Manage Inventory</h2>

            <div className="flex justify-start mt-14">
                   <Link to='/addfurniture'><button className="btn">Add a New Furniture</button></Link> 
            </div>


            <div className="_card-container flex flex-col gap-5 mt-5 mb-20">

                {products.map(product => <ManageCard product={product} />)}
          

            </div>


         
         

           
        
            
        </div>
    );
};

export default Manage;