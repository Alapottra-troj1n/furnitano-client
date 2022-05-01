import React from 'react';

const ManageCard = () => {
    return (
        <div>
            <div className="flex items-center border p-4">

                <div className="flex items-center justify-between ">
                    <img src="https://i.ibb.co/GPdTz46/5.webp" className="w-32 rounded-full" alt="" />

                    <div className="ml-4">
                        <h2 className="font-semibold text-xl whitespace-nowrap">Morr Sofa</h2>
                        <p className="text-gray-600 text-lg">120$</p>
                    </div>

                </div>

                <div className="ml-2 w-full flex justify-center">
                    <h2 className="font-normal text-sm w-1/2 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dolores ipsum ratione adipisci, in voluptatum quisquam alias modi consectetur culpa?</h2>

                </div>

                <div className="ml-2">
                    <h2 className="font-normal text-lg ">Quantity</h2>
                    <p className="font-normal text-sm ">50</p>

                </div>

                <div className="ml-2 flex">
                    <button className="btn mx-3">Delete</button>
                    <button className="btn mr-3">Manage</button>
                </div>


            </div>

        </div>
    );
};

export default ManageCard;