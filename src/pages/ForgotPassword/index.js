import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const auth = getAuth();
    let navigate = useNavigate('');
    let [email,setEmail] = useState('');
    let [emailerror,setEmailError] = useState('');

    let handleEmail = (e)=>{
        setEmail (e.target.value);
        setEmailError('');
    }

    let handleForgotPassword = ()=>{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                toast("Reset your password!Check your E-mail.");
                setTimeout(()=>{
                    navigate('/login');
                },4000)
            }).catch((error) => {
                const errorCode = error.code;
                if(error.code.includes('auth/missing-email')){
                    setEmailError('email is missing!')
                }
                if(error.code.includes('auth/invalid-email')){
                    setEmailError('this email is not valid!')
                }
                if(error.code.includes('auth/user-not-found')){
                    setEmailError('this email user not found')
                }
                console.log(error.code);
                
              });
      
    }

  return (
    <div className='bg-primary h-screen flex justify-center items-center px-9 '>
        <ToastContainer 
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        <div className='bg-white p-9  rounded-xl'>
            <h1 className='text-primary font-bold font-nunito text-2xl'>Forgot Password</h1>
            <div className='relative xl:!mt-9 mt-9 sml:mt-8'>
                    <input className='border border-solid md:!py-6 md:!px-14 xl:!py-6 py-6 xl:!px-16 px-14 sml:py-4 sml:px-14 rounded-lg' placeholder='someone@gmail.com' type='email' onChange={handleEmail} />
                    <p className='font-nunito font-semibold text-sm absolute top-[-14px] xl:!left-[22px] left-[20px] p-1 bg-white'>Email Address</p>
                    {
                       emailerror &&
                       <p className='font-nunito font-semibold text-sm text-red-600 mt-1'>{emailerror} </p> 
                    }
            </div>

            <button type='submit' className='bg-primary text-white xl:!py-5 xl:!px-6 sml:py-3 sml:px-9 py-3.5 px-5 rounded-xl xl:!mt-12 sml:mt-8 mt-12' onClick={handleForgotPassword} >Change Password</button>
            <Link to='/login'><button type='submit' className='ml-3 bg-[#EA6C00] text-white xl:!py-5 xl:!px-6 sml:py-3 sml:px-9 py-3.5 px-5 rounded-xl xl:!mt-12 sml:mt-8 mt-12' >Cancel</button></Link>
        </div>
    </div>
  )
}

export default ForgotPassword