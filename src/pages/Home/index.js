import React, { useEffect, useState } from 'react'
import GroupRequest from '../../components/GroupRequest'
import SearchBox from '../../components/SearchBox'
import Slidebar from '../../components/Slidebar'
import FriendRequest from '../../components/FriendRequest'
import Friend from '../../components/Friends'
import MyGroup from '../../components/MyGroup'
import UserList from '../../components/UserList'
import UserBlockList from '../../components/UserBlockList'
import { getAuth} from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const auth = getAuth();
  let navigate = useNavigate('');
  let [verify,setVerify] = useState(false);

  useEffect( ()=>{
      if(!auth.currentUser){
        setVerify(false);
        navigate('/login');
      }else{
        if(auth.currentUser.emailVerified){
          setVerify(true);
        }
      }
  },[])

  let handleBack = ()=>{
      navigate('/login');
  }

  return (
    <>
    {verify ? 
      <div className='xl:flex justify-between p-2.5 xl:p-0'>
      <div className='xl:max-w-[186px]'>
          <Slidebar active="home"/>
      </div>
      <div className='xl:w-[600px] xl:m-10'>
      <SearchBox/>
      <GroupRequest/>
      <FriendRequest/>
      </div>
      <div className='xl:w-[600px] xl:m-10'>
        <Friend/>
        <MyGroup/>
      </div>
      <div className='xl:w-[600px] xl:m-10'>
      <UserList/>
      <UserBlockList/>
      </div>
      </div> :
        <>
        <div className='flex justify-center items-center h-screen p-9 relative'>
        <h1 className='text-primary font-bold text-5xl font-nunito'>You Don't have verify you mail! <span className='text-[#EA6C00]'>please verify your mail first.</span></h1>
        <div className='flex justify-end items-end p-9 absolute top-0 right-0' onClick={handleBack}>
        <h1 className='text-primary font-bold text-5xl font-nunito'><span className='text-[#EA6C00]'>X</span></h1>
      </div>
      </div>
  
        </>
    }
    </>
  )
}

export default Home