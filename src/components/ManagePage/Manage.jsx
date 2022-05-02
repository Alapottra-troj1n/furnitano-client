import React from 'react';
import useProducts from "../../Hooks/useProducts";
import ManageCard from '../ManageCard/ManageCard'

const Manage = () => {
    const [products] = useProducts();



    return (

        <div className="container mx-auto flex flex-col  justify-center ">




            <div className="_card-container flex flex-col gap-5 mt-40 mb-20">

                {products.map(product => <ManageCard product={product} />)}
          

            </div>


         
         

           
        
            
        </div>
    );
};

export default Manage;