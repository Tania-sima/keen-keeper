import React from 'react';
import Image from 'next/image';
const UserCard = ({user}) => {
   const {avatarUrl,name,lastActive, tags,status}=user;
    return (
      <div>
    <div className="card bg-base-100 w-50  shadow-sm ">
  <div className="card-body items-center text-center ">
     <div className=" avatar">
    <div className="w-10 rounded-full">
      <Image
        alt='avatarUrl'
        src={avatarUrl} height={40} width={40} 
      />
    </div>
  </div>
    <h2 className="card-titl font-bold">{name}</h2>
    <p className='text-gray-600 text-xs'>{lastActive}</p> 
    <div className='flex items-center justify-center'>
    {
      tags.map((tag,index)=>
        
       <li key={index}   className='text-green-900 badge badge-sm bg-emerald-200 text-xs rounded-full'>{tag}</li>
        )
    }
    </div> 
     
    <p className={status==="Almost Due" ? "text-white badge badge-sm bg-amber-500 text-xs rounded-full" :status==="Overdue" ? "text-white badge badge-sm bg-red-500 text-xs rounded-full": "text-white badge badge-sm bg-green-900 text-xs  rounded-full" } >{status}</p>  
  </div>
</div>
</div>
    );
    
};

export default UserCard;