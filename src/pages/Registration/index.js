import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiEyeCloseLine } from 'react-icons/ri'
import { AiOutlineEye } from 'react-icons/ai'
import { getAuth, createUserWithEmailAndPassword , updateProfile , sendEmailVerification  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Triangle } from  'react-loader-spinner'
import { getDatabase, ref, set } from "firebase/database";
 
const Registration = () => {
    const auth = getAuth();
    const db = getDatabase();
    let navigate = useNavigate('')
    let [email,setEmail] = useState('');
    let [emailerror,setEmailError] = useState('');
    let [fullname,setFullName] = useState('');
    let [fullnameerror,setFullNameError] = useState('');
    let [password,setPassword] = useState('');
    let [passworderror,setPasswordError] = useState('');
    let [passwordshow,setPasswordShow] = useState(false);
    let [firebaseerror,setFireBaseError] = useState('');
    let [registrationsuccess,setRegistrationSuccess] = useState('');
    let [undefineerror,setUndefineError] = useState('');
    let [waitloader,setWaitLoad] = useState(false);

    
    let handleShow = ()=>{
        setPasswordShow (!passwordshow);
    }
   let handleEmail = (e)=>{
        setEmail (e.target.value);
        setEmailError('');
    }
    let handleFullName = (e)=>{
        setFullName (e.target.value);
        setFullNameError('');
    }
    let handlePassword = (e)=>{
        setPassword (e.target.value);
        setPasswordError('');
    }
    
    let handleSubmit = ()=>{
        if(!email){
            setEmailError('Email is required!')
        }else if((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))){
            setEmailError('Email is not valid!')
        }
        if(!fullname){
            setFullNameError('Name is required!')
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

        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) && fullname && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/){
            setWaitLoad(true);
            createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                updateProfile(auth.currentUser, {
                    displayName: fullname , 
                    photoURL: "uploads/profile_img/avater.png"
                  }).then(() => {
                    sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setWaitLoad(false);
                        setRegistrationSuccess('Registration Successfully Complete, please varify your mail.');
                    });
                  }).then(()=>{
                        set(ref(db, 'users/' + user.user.uid), {
                            username: user.user.displayName,
                            email: user.user.email,
                            profile_picture : user.user.photoURL
                          });  
                  }).then(()=>{
                    setTimeout(()=>{
                        navigate('/login');
                    },4000)
                  })
                  .catch((error) => {
                    setUndefineError(error);
                  });
            })
            .catch((error) => {
              const errorCode = error.code;
            //   const errorMessage = error.message;
              if(error.code.includes('auth/email-already-in-use')){
                setFireBaseError('Email already have been submited!');
              }

            });
        }
    }

  return (
    <div className='flex'>
        <div className='md:w-1/2 xl:!w-1/2 flex lg:!w-1/2 flex-col items-end'>
            <div className='xl:w-[530px] xl:mr-28 xl:mt-40 md:mt-14 md:mr-9 xl:m-0 m-6 lg:!mr-28'>      
                <h2 className='self-start xl:!text-4xl text-4xl sml:text-xl font-nunito font-bold text-[#11175D]'>Get started with easily register</h2>
                <p className='xl:!mt-3.5 mt-3.5 sml:mt-2 xl:!text-lg text-lg sml:text-sm font-nunito font-regular text-[#d2d4e1]'>Free register and you can enjoy it</p>
                {
                 registrationsuccess &&
                 <p className='font-nunito font-semibold text-sm text-green-600 mt-4'>{registrationsuccess} </p> 
                }
                <div className='relative xl:!mt-9 mt-9 sml:mt-8'>
                    <input className='border border-solid md:!py-6 md:!px-14 xl:!py-6 py-6 xl:!px-16 px-14 sml:py-3 sml:px-3.5 rounded-lg' placeholder='someone@gmail.com' type='email' onChange={handleEmail} />
                    <p className='font-nunito font-semibold text-sm absolute top-[-14px] xl:!left-[22px] left-[20px] p-1 bg-white'>Email Address</p>
                    {
                       emailerror &&
                       <p className='font-nunito font-semibold text-sm text-red-600 mt-1'>{emailerror} </p> 
                    }
                </div>
                <div className='relative xl:!mt-9 mt-9 sml:mt-8'> 
                    <input className='border border-solid md:!py-6 md:!px-14  xl:!py-6 py-6 xl:!px-16 px-14 sml:py-3 sml:px-3.5 rounded-lg ' placeholder='John Duo' type='text' onChange={handleFullName} />
                    <p className='font-nunito font-semibold text-sm absolute top-[-14px] xl:!left-[22px] left-[20px] p-1 bg-white'>Full Name</p>
                    {
                       fullnameerror &&
                       <p className='font-nunito font-semibold text-sm text-red-600 mt-1'>{fullnameerror} </p> 
                    }
                </div>
                <div className='relative xl:!mt-9 mt-9 sml:mt-8'>
                    <input className='border border-solid md:!py-6 md:!px-14  xl:!py-6 py-6 xl:!px-16 px-14 sml:py-3 sml:px-3.5 rounded-lg' placeholder='!@#12FG*_*' type={passwordshow?"text":"password"}
                    onChange={handlePassword} />
                    <p className='font-nunito font-semibold text-sm absolute top-[-14px] xl:!left-[22px] left-[20px] p-1 bg-white'>Password</p>
                    {
                     passwordshow ?
                        <AiOutlineEye className='absolute xl:!top-7 xl:!right-60 sml:top-[18px] sml:right-[22px] top-7 right-16 md:!top-[29px] md:!right-[29px]  ' onClick={handleShow}/>
                     :
                     < RiEyeCloseLine className='absolute xl:!top-7 xl:!right-60 sml:top-[18px] sml:right-[22px] top-7 right-16 md:!top-[29px] md:!right-[29px]  ' onClick={handleShow} />
                    }
                    {
                       passworderror &&
                       <p className='font-nunito font-semibold text-sm text-red-600 mt-1'>{passworderror} </p> 
                    }
                </div>
                {waitloader ? 
                <div className='flex mt-5 ml-[120px] sml:ml-[63px]'>
                <Triangle
                    height="80"
                    width="80"
                    color="#5f35f5"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    
                /> 
                </div>:
                <button type='submit' className='bg-primary text-white xl:!py-6 xl:!px-28 sml:py-3 sml:px-14 py-6 px-28 rounded-[50px] xl:!mt-12 sml:mt-8 mt-12' onClick={handleSubmit}>Sign up</button>
                }

                {
                   firebaseerror &&
                    <p className='font-nunito font-semibold text-sm text-red-600 mt-4'>{firebaseerror} </p> 
                }
                {
                   undefineerror &&
                    <p className='font-nunito font-semibold text-sm text-red-600 mt-4'>{undefineerror} </p> 
                }
                <p className='font-nunito text-lg sml:text-xs mt-9'>Already  have an account ? <Link to='/login'><span className='font-nunito font-sm text-[#EA6C00]'>Sign In</span></Link> </p>
            </div>
        </div>
        <div className='md:w-1/2 xl:!w-1/2 hidden xl:block sml:block'>
        <picture>
            <img className='w-full object-cover xl:!h-screen sml:h-auto' src='uploads/registration_page/img-1.webp' loading='lazy' alt='no image found'/>
        </picture> 
        </div>
    </div>
  )
}

export default Registration