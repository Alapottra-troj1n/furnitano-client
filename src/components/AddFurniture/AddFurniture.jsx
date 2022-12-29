import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddFurniture = () => {
    const [user, loading, error] = useAuthState(auth);
   



    const handleAdd = async(e) => {

        e.preventDefault();
        const productName = e.target.addProductName.value;
        const productEmail = user.email;
        const productPrice = e.target.addPrice.value;
        const productImageUrl = e.target.addImage.value;
        const productDescription = e.target.addDes.value;
        const productSupplier = e.target.addSupplier.value;
        const productQuantity = e.target.addQuantity.value;

        const addedProduct = {
            productName,
            productEmail,
            productPrice,
            productImageUrl,
            productDescription,
            productSupplier,
            productQuantity
        }
     
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addedProduct)
            };
     

                const response = await fetch(`https://furnitano-backend.onrender.com/manage/add`,settings)
                const data = await response.json();
                console.log(data);

                if(data.acknowledged === true) {
                    toast.success('Product has been added successfully');
                 
                }
                e.target.reset();

        

        

    }

    return (
        <div>
            <h2 className="text-4xl font-semibold text-center mt-28">Add a New Furniture Product</h2>


            <div className="mt-16 mb-16">
                <form onSubmit={handleAdd} className="flex flex-col justify-center gap-5 items-center p-5">
                    <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="text" name="addProductName" placeholder="Product Name" required />
                    <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="number" name="addPrice" placeholder="Product Price" required />
                    <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="text" name="addImage" placeholder="Add Image Url" required />
                    <textarea className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-36" type="text" name="addDes" placeholder="Product Description" required />
                    <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="text" name="addSupplier" placeholder="Supplier Name" required />
                    <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="number" name="addQuantity" placeholder="Initial Product Quantity" required />
                    <input type="submit" className="btn"value="Add Product" />

                </form>

            </div>



        </div>
    );
};

export default AddFurniture;