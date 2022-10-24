import React from 'react'

const FriendRequest = () => {
  return (
    <div className='w-full p-2 my-5 shadow-lg shadow-[#D4D4D4] rounded-2xl h-[500p] overflow-y-scroll'>
    <h3 className='font-pops text-xl font-semibold pt-1.5'>Friend Request</h3>
    <div className='flex my-2.5 pb-2.5 px-3.5 justify-between items-center my-5 border-b border-solid border-black'>
        <img src='uploads/profile_img/profile_img.png' className='w-[50px] h-[50px] rounded'/>
        <div>
        <h3 className='font-pops text-base font-semibold'>Friends Reunion</h3>
        <p className='font-pops text-xs font-medium'>Hi Guys, Wassup!</p>
        </div>
        <button className='bg-primary px-2 py-1 text-white'>Join</button>
    </div>
    <div className='flex my-2.5 pb-2.5 px-3.5 justify-between items-center my-5 border-b border-solid border-black'>
        <img src='uploads/profile_img/profile_img.png' className='w-[50px] h-[50px] rounded'/>
        <div>
        <h3 className='font-pops text-base font-semibold'>Friends Reunion</h3>
        <p className='font-pops text-xs font-medium'>Hi Guys, Wassup!</p>
        </div>
        <button className='bg-primary px-2 py-1 text-white'>Join</button>
    </div>
    <div className='flex my-2.5 pb-2.5 px-3.5 justify-between items-center my-5 border-b border-solid border-black last:border-0'>
        <img src='uploads/profile_img/profile_img.png' className='w-[50px] h-[50px] rounded'/>
        <div>
        <h3 className='font-pops text-base font-semibold'>Friends Reunion</h3>
        <p className='font-pops text-xs font-medium'>Hi Guys, Wassup!</p>
        </div>
        <button className='bg-primary px-2 py-1 text-white'>Join</button>
    </div>
</div>
  )
}

export default FriendRequest