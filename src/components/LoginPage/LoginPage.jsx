import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { FaGoogle } from 'react-icons/fa';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const LoginPage = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const location = useLocation();

      let from = location.state?.from?.pathname || "/";

      const navigate = useNavigate();

      const handleLogin = (e) => {
          e.preventDefault();

          const email = e.target.loginEmail.value;
          const password = e.target.loginPassword.value;

          signInWithEmailAndPassword(email, password);
      }

      const [signInWithGoogle, googleUser,  googleLoading, googleError] = useSignInWithGoogle(auth);

      if(user || googleUser){

            navigate(from, { replace: true });
      }


    return (
        <div className="my-20">
            <h2 className="text-4xl text-center font-bold">Login</h2>
            <form className="mt-10 flex justify-center flex-col items-center" onSubmit={handleLogin}>
               
                <div className="bg-slate-100 p-10 md:p-20 lg:p-40 rounded-md">
                {from !== '/' ? <p className="text-center text-red-500 text-sm mb-5">Please Login First</p> : '' }
                <div className="login-email-container">
                    <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="email" name="loginEmail" placeholder="Email" required  />
                </div>
                <div className="login-password-container mt-4">
                    <input type="password" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-sm px-2 h-10"name="loginPassword" placeholder='Password' required />
                </div>

                <div className="mt-2">
                <Link to="/forgetpassword" className="hover:underline text-sm ">Forget Password ?</Link>
                </div>
              

                <input type="submit" value="Login" disabled={loading ? 'true' : ''} className='btn mt-2' />

                <div className="my-2">
                {loading ? <p className='text-md text-gray-600'>loading...</p>: ''}
               <p className='tex-md text-red-500'>{googleError}</p> 
               <p className='tex-md text-red-500'>{error?.message}</p> 
                </div>

                <div className="mt-5 mb-2 text-center">
                <Link to="/register" className="hover:underline text-sm ">Don't Have a Account ? Register Here </Link>
                </div>
                <div className="text-center"><h2 className="text-xl font-semibold">OR</h2></div>

                <div className='mt-2 text-center'>
                    <button className='btn btn-outline px-10' onClick={()=>signInWithGoogle()} >Sign In with Google <FaGoogle className="text-xl ml-2"/> </button>

                </div>

                </div>
            
            </form>
        </div>
    );
};

export default LoginPage;