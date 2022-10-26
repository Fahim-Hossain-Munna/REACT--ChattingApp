import React from 'react'
import Slidebar from '../../components/Slidebar'

const Message = () => {
  return (
    <div className='flex'>
    <div className='xl:max-w-[186px]'>
        <Slidebar active="message"/>
    </div>
    <div className='xl:w-[600px] xl:m-10'></div>
    <div className='xl:w-[600px] xl:m-10'></div>
    <div className='xl:w-[600px] xl:m-10'></div>
    </div>
  )
}

export default Message