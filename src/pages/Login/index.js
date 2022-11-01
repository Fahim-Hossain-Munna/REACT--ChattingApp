import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { RiEyeCloseLine } from 'react-icons/ri';
import { AiOutlineEye } from 'react-icons/ai';
import { getAuth, signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup  } from "firebase/auth";
import { Triangle } from  'react-loader-spinner';



const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    let navigate = useNavigate('');
    let [email,setEmail] = useState('');
    let [emailerror,setEmailError] = useState('');
    
    let [password,setPassword] = useState('');
    let [passworderror,setPasswordError] = useState('');
    let [show,setPasswordShow] = useState(false);
    let [firebaseloginerror,setFirebaseLoginError] = useState("");
    let [loginsuccess,setLoginSuccess] = useState("");
    let [waitloadder,setWaitLoad] = useState(false);
    
    let handleEmail = (e)=>{
        setEmail (e.target.value);
        setEmailError('')
        setWaitLoad(false);
        setFirebaseLoginError('')
    }
    let handlePassword = (e)=>{
        setPassword (e.target.value);
        setPasswordError('')
        setWaitLoad(false);
        setFirebaseLoginError('')
    }
    let handleShow = ()=>{
        setPasswordShow(!show);
    }
    let handleGoogleLogin = ()=>{

        signInWithPopup(auth, provider).then(()=>{
            navigate('/');
        })
    }
    
    let handleSubmit = ()=>{
        if(!email){
            setEmailError('Email is required!')
        }else if((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))){
            setEmailError('Email is not valid!')
        }
        if(!password){
            setPasswordError('Password is required!')
        }else{
            if((!/^(?=.*[a-z])/.test(password))){
                setPasswordError('Password must contain at least one lowercase!')
            }else if((!/^(?=.*[A-Z])/.test(password))){
                setPasswordError('Password must contain at least one uppercase!')
            }else if((!/^(?=.*[0-9])/.test(password))){
                setPasswordError('Password must contain at least one numeric!')
            }else if((!/^(?=.{8,})/.test(password))){
                setPasswordError('Password must contain at least eight characters or longer!')
            }
        }

        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/){
            setWaitLoad(true);
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                    setLoginSuccess('Login Successfully Complete. please wait a secound to redirect you in home page');
                setTimeout(()=>{
                    navigate('/');
                    setWaitLoad(false);
                },4000)
            })
            .catch((error) => {
              const errorCode = error.code;
            //   const errorMessage = error.message;
                if(error.code.includes('auth/user-not-found')){
                    setFirebaseLoginError('This Email Address is Incorrect!')
                }
                if(error.code.includes('auth/wrong-password')){
                    setFirebaseLoginError('This Password is Incorrect!')
                }
            });
        }
    }

  return (
    <div className='flex'>
        <div className='md:w-1/2 xl:!w-1/2 lg:!w-1/2 flex flex-col items-end'>
            <div className='xl:w-[530px] xl:mr-28 xl:mt-40 md:mt-14 md:mr-9 xl:m-0 m-6 lg:!mr-28'>      
                <h2 className='self-start xl:!text-4xl text-4xl sml:text-xl font-nunito font-bold text-[#11175D]'>Login to your account!</h2>
                {firebaseloginerror &&
                    <p className='font-nunito font-semibold text-sm mt-5 text-red-600'>{ firebaseloginerror }</p>
                }
                {loginsuccess &&
                    <p className='font-nunito font-semibold text-sm mt-5 text-green-600'>{ loginsuccess }</p>
                }
                <div className='relative xl:mt-9 ' onClick={handleGoogleLogin}>
                <div className='absolute  xl:top-[29px] top-[34px] sml:top-[29px] left-[23px]' ><FcGoogle/></div>
                <p className='mt-3.5 font-nunito font-semibold text-xs text-[#11175D] border border-solid  sml:py-3.5 px-11 py-5 inline-block rounded-lg' > Login with Google </p>
                </div>
                <div className='relative xl:!mt-9 mt-9 sml:mt-8'>
                    <input className='border-b md:!py-6 md:!px-5 xl:!py-6 py-6 xl:!px-6 px-6 sml:py-3 sml:px-3.5 outline-none w-[300px] lg:!px-5' placeholder='someone@gmail.com' type='email' onChange={handleEmail}/>
                    <p className='font-nunito font-semibold text-sm absolute top-[-14px] xl:!left-[5px] left-[5px] sml:left-[0px]  p-1 bg-white'>Email Address</p>
                    {emailerror &&
                    <p className='font-nunito font-semibold text-sm mt-1 text-red-600'>{ emailerror }</p>
                    }
                </div>
               
                <div className='relative xl:!mt-9 mt-9 sml:mt-8'>
                    <input className='border-b md:!py-6 md:!px-5  xl:!py-6 py-6 xl:!px-6 px-6 sml:py-3 sml:px-3.5 outline-none w-[300px] lg:!px-5' placeholder='!@#12FG*_*' type={show?"text":"password"}  onChange={handlePassword}/>
                    <p className='font-nunito font-semibold text-sm absolute top-[-14px] xl:!left-[5px] left-[5px] sml:left-[0px] p-1 bg-white'>Password</p>
                    {show?
                    <AiOutlineEye className='absolute xl:!top-7 xl:!right-60 sml:top-[18px] sml:right-[22px] top-7 right-16 md:!top-[29px] md:!right-[29px]  ' onClick={handleShow}/>
                    :
                    < RiEyeCloseLine className='absolute xl:!top-7 xl:!right-60 sml:top-[18px] sml:right-[22px] top-7 right-16 md:!top-[29px] md:!right-[29px]  ' onClick={handleShow} />
                    }
                    {passworderror &&
                    <p className='font-nunito font-semibold text-sm mt-1 text-red-600'>{ passworderror }</p>
                    }
                </div>
                {waitloadder ? 
                <div className='flex mt-5 ml-[120px] '>
                <Triangle
                    height="80"
                    width="80"
                    color="#5f35f5"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    
                /> 
                </div> :
                 <button type='submit' className='bg-primary text-white xl:!py-6 xl:!px-28 sml:py-3 sml:px-14 py-6 px-28 rounded-lg xl:!mt-12 sml:mt-8 mt-12' onClick={handleSubmit}>Login to Continue</button>
                }
               
                <p className='font-nunito text-lg sml:text-xs mt-9'>Already  have an account ? <Link to='/registration'><span className='font-nunito font-sm text-[#EA6C00]'>Sign up</span></Link> </p>
                <p className='font-nunito text-lg sml:text-xs mt-9'><Link to='/forgotpassword'><span className='font-nunito font-sm text-[#EA6C00]'>Forgot Password ?</span></Link> </p>
            </div>
        </div>
        <div className='md:w-1/2 xl:!w-1/2 hidden xl:block sml:block'>
        <picture>
            <img className='w-full object-cover xl:!h-screen sml:h-auto' src='uploads/login_page/img-1.webp' loading='lazy' alt='no image found'/>
        </picture> 
        </div>
    </div>
  )
}

export default Login