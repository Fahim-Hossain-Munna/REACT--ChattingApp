import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth} from "firebase/auth";
const UserList = () => {
  const auth = getAuth();
  const db = getDatabase();
  let [userarr, setUserArr] = useState([]);

  useEffect (()=>{
     
      const userRef = ref(db, 'users/');
        onValue(userRef, (snapshot) => {
          let arr = [];
          snapshot.forEach((item)=>{
            if(item.key !== auth.currentUser.uid){
              arr.push(item.val());
            }
          })
          setUserArr(arr);
      });

  },[])

  return (
    <div className='w-full p-2 my-5 shadow-lg shadow-[#D4D4D4] rounded-2xl h-[500p] overflow-y-scroll'>
    <h3 className='font-pops text-xl font-semibold pt-1.5'>User List</h3>

    {userarr.map(item=>(

    <div className='flex my-2.5 pb-2.5 px-3.5 justify-between items-center my-5 border-b border-solid border-black last:border-0'>
        <img src={item.profile_picture} className='w-[50px] h-[50px] rounded-full'/>
        <div>
        <h3 className='font-pops text-base font-semibold'>{ item.username }</h3>
        <p className='font-pops text-xs font-medium'>{ item.email }</p>
        </div>
        <button className='bg-primary px-2 py-1 text-white rounded-lg'>Request</button>
    </div>
    ))}
    


</div>
  )
}

export default UserList