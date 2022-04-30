import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
    return (
        <div className="my-20">
            <h2 className="text-4xl text-center font-bold">Login</h2>
            <form className="mt-10 flex justify-center flex-col items-center">
                <div className="bg-slate-100 p-10 md:p-20 lg:p-40 rounded-md">
                <div className="login-email-container">
                    <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="text" name="email" placeholder="Email" required id="" />
                </div>
                <div className="login-password-container mt-4">
                    <input type="password" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-sm px-2 h-10"name="password" placeholder='Password' required id="" />
                </div>

                <div className="mt-2">
                <Link to="/forgetpassword" className="hover:underline text-sm ">Forget Password ?</Link>
                </div>
              

                <input type="submit" value="Login" className='btn mt-2' />

                <div className="mt-5 mb-2 text-center">
                <Link to="/register" className="hover:underline text-sm ">Don't Have a Account ? Register Here </Link>
                </div>
                <div className="text-center"><h2 className="text-xl font-semibold">OR</h2></div>

                <div className='mt-2 text-center'>
                    <button className='btn btn-outline px-10'>Sign In with Google <FaGoogle className="text-xl ml-2"/> </button>

                </div>

                </div>
            
            </form>
        </div>
    );
};

export default LoginPage;