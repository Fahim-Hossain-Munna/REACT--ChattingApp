import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsChatLeftQuote} from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'
import {FiLogOut , FiSettings} from 'react-icons/fi'
import { Link } from 'react-router-dom'



const Slidebar = ({active}) => {
  return (
    <div className='w-full bg-primary py-9 xl:px-11 rounded-3xl my-5 xl:m-5 overflow-x-hidden flex justify-center xl:flex-col gap-x-5 fixed bottom-0 left-0 xl:static'>
        <img src='uploads/profile_img/profile_img.png' className='h-[50px] w-[50px]  xl:h-[100px] xl:w-[100px] rounded xl:mb-20'/>

        <div className='flex xl:flex-col items-center text-white gap-x-5 xl:gap-y-20 text-3xl xl:text-4xl'>
        <div className= {`${ active=='home' && 
                ' relative z-10 xl:xl:p-10 after:rounded-2xl after:absolute after:top-0 after:left-0 after:bg-white xl:after:w-[307px] after:h-full after:content-[" "] after:z-[-1] before:rounded-2xl before:absolute before:top-0 before:right-[-38px] before:bg-primary xl:before:w-[10px] before:h-full before:content-[" "] ' }`} > 
            <Link to='/'> <AiOutlineHome className={`${ active=='home' ? "text-black xl:text-primary" : "xl:text-white" }`} /> </Link>
        </div>
        <div className= {`${ active=='message' && 
                ' relative z-10 xl:p-10 after:rounded-2xl after:absolute after:top-0 after:left-0 after:bg-white xl:after:w-[307px] after:h-full after:content-[" "] after:z-[-1] before:rounded-2xl before:absolute before:top-0 before:right-[-38px] before:bg-primary xl:before:w-[10px] before:h-full before:content-[" "] ' }`} > 
            <Link to='/message'> <BsChatLeftQuote className={`${ active=='message' ? "text-black xl:text-primary" : "'xl:text-white'" }`} /> </Link>
        </div>
        <div className= {`${ active=='notification' && 
                ' relative z-10 xl:p-10 after:rounded-2xl after:absolute after:top-0 after:left-0 after:bg-white xl:after:w-[307px] after:h-full after:content-[" "] after:z-[-1] before:rounded-2xl before:absolute before:top-0 before:right-[-38px] before:bg-primary xl:before:w-[10px] before:h-full before:content-[" "] ' }`} > 
            <Link to='/notification'> <IoIosNotificationsOutline className={`${ active=='notification' ? "text-black xl:text-primary" : "'xl:text-white'" }`} /> </Link>
        </div>
        <div className= {`${ active=='settings' && 
                ' relative z-10 xl:p-10 after:rounded-2xl after:absolute after:top-0 after:left-0 after:bg-white xl:after:w-[307px] after:h-full after:content-[" "] after:z-[-1] before:rounded-2xl before:absolute before:top-0 before:right-[-38px] before:bg-primary xl:before:w-[10px] before:h-full before:content-[" "] ' }`} > 
            <Link to='/settings'> <FiSettings className={`${ active=='settings' ? "text-black xl:text-primary" : "'xl:text-white'" }`} /> </Link>
        </div>
        <FiLogOut className='xl:mt-32'/>
        </div>

    </div>
  )
}

export default Slidebar