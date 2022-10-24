import React from 'react'
import GroupRequest from '../../components/GroupRequest'
import SearchBox from '../../components/SearchBox'
import Slidebar from '../../components/Slidebar'
import FriendRequest from '../../components/FriendRequest'
import Friend from '../../components/Friends'
import MyGroup from '../../components/MyGroup'
import UserList from '../../components/UserList'
import UserBlockList from '../../components/UserBlockList'

const Home = () => {
  return (
    <div className='flex justify-around'>
    <div className='max-w-[186px]'>
        <Slidebar active="home"/>
    </div>
    <div className='w-[600px] m-10'>
    <SearchBox/>
    <GroupRequest/>
    <FriendRequest/>
    </div>
    <div className='w-[600px] m-10'>
      <Friend/>
      <MyGroup/>
    </div>
    <div className='w-[600px] m-10'>
    <UserList/>
    <UserBlockList/>
    </div>
    </div>
  )
}

export default Home