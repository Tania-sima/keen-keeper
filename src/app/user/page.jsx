import React from 'react';
import UserCard from '../components/userCard';
import Link from 'next/link';

const UserPage = async() => {
    const res=await fetch("http://localhost:3000/user.json");
    const users=await res.json();
    
    return (

      <div className="card bg-gray-100 py-5 ">
  
    
  <div className="card-body items-center text-center">
    <h2 className="card-title ">Friends to keep close in your life</h2>
    <p className='text-gray-600'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
    <div className="card-actions">
      <button className="btn btn-primary bg-green-900 text-white">+ Add a Friend</button>
    </div>
  </div>
  

  
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mb-5 '>
    <div className="card bg-base-100 w-50  shadow-sm ">
  <div className="card-body items-center text-center ">
    <h2 className="card-title text-green-900">10</h2>
    <p className='text-gray-600'>Total Friends</p>  
  </div>
</div>
<div className="card bg-base-100 w-50 shadow-sm">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-green-900">3</h2>
    <p className='text-gray-600'>On Track</p>  
  </div>
</div>
<div className="card bg-base-100 w-50 shadow-sm">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-green-900">6</h2>
    <p className='text-gray-600'>Need Attention</p>  
  </div>
</div>
<div className="card bg-base-100 w-50 shadow-sm">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-green-900">12</h2>
    <p className='text-gray-600'>Interactions This Month</p>  
  </div>
</div>

</div>


        <div className="card bg-gray-100 py-5 ">
        <div className='mx-auto'>
            <hr className='text-gray-200 mt-5'></hr> 
          <h2 className='mt-10 font-bold text-xl'> Your Friends</h2> 
          <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  mx-auto my-6'>
          {
            users.map(user=>
                <UserCard key={user.id} user={user}>
                    
                 </UserCard>
                
            )
          } 
          </div>

    


</div>
        </div>
        </div>
    );
};

export default UserPage;