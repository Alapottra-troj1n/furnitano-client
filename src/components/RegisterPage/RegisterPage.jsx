import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {


    return (
        <div className="my-20">
        <h2 className="text-4xl text-center font-bold">Register</h2>
        <form className="mt-10 flex justify-center flex-col items-center">
            <div className="bg-slate-100 p-10 md:p-20 lg:p-40 rounded-md">

            <div className="register-email-container ">
                <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="email" name="register-email" placeholder="Email" required id="" />
            </div>
            <div className="register-username-container mt-4">
                <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="text" name="register-username" placeholder="Username" required id="" />
            </div>

            <div className="register-password-container mt-4">
                <input type="password" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-sm px-2 h-10"name="register-password" placeholder='Password' required id="" />
            </div>

            <div className="register-confirm-password-container mt-4">
                <input type="password" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-sm px-2 h-10"name="register-confirm-password" placeholder='Confirm Password' required id="" />
            </div>

          

            <input type="submit" value="Register" className='btn mt-4' />

            <div className="mt-5 mb-2 text-center">
            <Link to="/login" className="hover:underline text-sm ">Already Have a Account ? Login </Link>
            </div>


            </div>
        
        </form>
    </div>
    );
};

export default RegisterPage;