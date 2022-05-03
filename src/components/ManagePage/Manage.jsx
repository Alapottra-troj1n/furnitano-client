import React, { useEffect } from 'react';
import useProducts from "../../Hooks/useProducts";
import ManageCard from '../ManageCard/ManageCard'

const Manage = () => {

    const [products] = useProducts();




    return (

        <div className="container mx-auto flex flex-col  justify-center ">

            <h2 className="text-center text-4xl font-semibold mt-20">Manage Inventory</h2>


            <div className="_card-container flex flex-col gap-5 mt-20 mb-20">

                {products.map(product => <ManageCard product={product} />)}
          

            </div>


         
         

           
        
            
        </div>
    );
};

export default Manage;