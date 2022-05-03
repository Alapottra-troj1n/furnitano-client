import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageCard = ({product}) => {

    const handleDelete = () => {
      
        let confirmation = window.confirm('Are you sure you want to delete this product ?');

        const settings = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        };

        if(confirmation){
            

            const deleteProduct = async() =>{

                const response = await fetch(`https://still-cove-59195.herokuapp.com/delete/${product._id}`,settings);
                const data = await response.json();
                if(data.acknowledged === true){
                    toast.success('Product has been successfully deleted');
                }

            }
            deleteProduct();

            
        }

    }

    return (
        <div>
            <div className="flex items-center border p-4 justify-between">

                <div className="flex items-center justify-between ">
                    <img src={product.image} className="w-20 lg:w-32 rounded-full" alt="" />

                    <div className="ml-4 md:ml-7">
                        <h2 className="font-semibold text-md lg:text-xl w-24 md:w-44 xl:w-56">{product.name}</h2>
                        <p className="text-gray-600 text-sm lg:text-xl">{product.price}$</p>
                    </div>

                </div>

                <div className=" sm:flex justify-end md:justify-center hidden">
                    <h2 className="font-normal text-xs lg:text-sm w-24 md:w-48 ">{product.description.slice(0,100)}...</h2>

                </div>

                <div className="mx-4">
                    <h2 className="font-semibold text-sm lg:text-lg text-right">Quantity</h2>
                    <p className="font-normal text-xs md:text-sm text-center ">{product.quantity}</p>

                </div>

                <div className="ml-2 flex flex-col lg:flex-row">
                    <button className="mx-3 mb-2 lg:mb-0" onClick={handleDelete}><FaTrashAlt className="lg:text-lg text-red-500 hover:text-red-600"/></button>
                   <Link to={`/product/${product._id}`}><button className="btn btn-sm lg:btn mr-3 mt-2 lg:mt-0 ">Manage</button> </Link>
                </div>


            </div>

        </div>
    );
};

export default ManageCard;