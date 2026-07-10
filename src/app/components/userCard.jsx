import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const UserCard = ({user}) => {
   const {picture,name,days_since_contact, tags,status}=user;
    return (
      <div>
     <Link href={`http://localhost:3000/user/${user.id}`}> 
    <div className="card bg-base-100 w-50  shadow-sm ">
    
  <div className="card-body items-center text-center ">
     <div className=" avatar">
    <div className="w-10 rounded-full">
      <Image
        alt='avatarUrl'
        src={picture} height={40} width={40} 
      />
    </div>
  </div>
    <h2 className="card-titl font-bold">{name}</h2>
    <p className='text-gray-600 text-xs'>{days_since_contact}d ago</p> 
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
</Link>
</div>
    );
    
};

export default UserCard;