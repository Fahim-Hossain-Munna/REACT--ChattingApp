import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsChatLeftQuote} from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'
import {FiLogOut , FiSettings} from 'react-icons/fi'
import { Link } from 'react-router-dom'



const Slidebar = ({active}) => {
  return (
    <div className='w-full bg-primary py-9 px-11 rounded-3xl m-5 overflow-x-hidden'>
        <img src='uploads/profile_img/profile_img.png' className='h-[100px] w-[100px] rounded mb-20'/>

        <div className='flex flex-col items-center text-white gap-y-20 text-4xl'>
        <div className= {`${ active=='home' && 
                ' relative z-10 p-10 after:rounded-2xl after:absolute after:top-0 after:left-0 after:bg-white after:w-[307px] after:h-full after:content-[" "] after:z-[-1] before:rounded-2xl before:absolute before:top-0 before:right-[-38px] before:bg-primary before:w-[10px] before:h-full before:content-[" "] ' }`} > 
            <Link to='/'> <AiOutlineHome className={`${ active=='home' ? "text-primary" : "'text-white'" }`} /> </Link>
        </div>
        <div className= {`${ active=='message' && 
                ' relative z-10 p-10 after:rounded-2xl after:absolute after:top-0 after:left-0 after:bg-white after:w-[307px] after:h-full after:content-[" "] after:z-[-1] before:rounded-2xl before:absolute before:top-0 before:right-[-38px] before:bg-primary before:w-[10px] before:h-full before:content-[" "] ' }`} > 
            <Link to='/message'> <BsChatLeftQuote className={`${ active=='message' ? "text-primary" : "'text-white'" }`} /> </Link>
        </div>
        <div className= {`${ active=='notification' && 
                ' relative z-10 p-10 after:rounded-2xl after:absolute after:top-0 after:left-0 after:bg-white after:w-[307px] after:h-full after:content-[" "] after:z-[-1] before:rounded-2xl before:absolute before:top-0 before:right-[-38px] before:bg-primary before:w-[10px] before:h-full before:content-[" "] ' }`} > 
            <Link to='/notification'> <IoIosNotificationsOutline className={`${ active=='notification' ? "text-primary" : "'text-white'" }`} /> </Link>
        </div>
        <div className= {`${ active=='settings' && 
                ' relative z-10 p-10 after:rounded-2xl after:absolute after:top-0 after:left-0 after:bg-white after:w-[307px] after:h-full after:content-[" "] after:z-[-1] before:rounded-2xl before:absolute before:top-0 before:right-[-38px] before:bg-primary before:w-[10px] before:h-full before:content-[" "] ' }`} > 
            <Link to='/settings'> <FiSettings className={`${ active=='settings' ? "text-primary" : "'text-white'" }`} /> </Link>
        </div>
        <FiLogOut className='mt-32'/>
        </div>

    </div>
  )
}

export default Slidebar