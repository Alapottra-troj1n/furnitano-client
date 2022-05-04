import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ResetPage = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );


    const handleSendResetPass = async(e) => {
        e.preventDefault();
        const email = e.target.resetEmail.value; 
        await sendPasswordResetEmail(email)
        e.target.reset();
        toast('Reset Email Sent ! ')


    }



    return (
        <div className="container mx-auto h-screen flex flex-col justify-center items-center">
              <div>
                    <img src="https://i.ibb.co/gWhd2XR/Reset-password-amico-1.png" className="w-96" alt="" />
                </div>
            <form className='text-center' onSubmit={handleSendResetPass}>

                <input placeholder="Enter Your Email" className="bg-gray-200 border my-3 md:my-0 mx-2 rounded-md w-full md:w-72 lg:w-96 px-2 h-12" type="email" name="resetEmail" id="" />
            
                <input type="submit" className='btn' value="Send Reset Link" />
            </form>
            
        </div>
    );
};

export default ResetPage;