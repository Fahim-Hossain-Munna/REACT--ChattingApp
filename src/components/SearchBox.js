import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs'

const SearchBox = () => {
  return (
    <div className='w-full relative'>
        <input type='text' placeholder='search' className='w-full px-11 py-3.5  drop-shadow-lg rounded-xl outline-none' />
        <AiOutlineSearch className='absolute top-4 left-3 text-xl'/>
        <BsThreeDotsVertical className='absolute top-4 right-9 text-xl'/>

    </div>
  )
}

export default SearchBox