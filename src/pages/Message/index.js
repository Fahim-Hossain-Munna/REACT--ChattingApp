import React from 'react'
import Slidebar from '../../components/Slidebar'

const Message = () => {
  return (
    <div className='flex'>
    <div className='max-w-[186px]'>
        <Slidebar active="message"/>
    </div>
    <div className='max-w-[427px]'></div>
    <div className='max-w-[344px]'></div>
    <div className='max-w-[344px]'></div>
    </div>
  )
}

export default Message