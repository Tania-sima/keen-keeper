import React from 'react';
import UserCard from '../components/userCard';

const UserPage = async() => {
    const res=await fetch("http://localhost:3000/user.json");
    const users=await res.json();
    
    return (
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
    );
};

export default UserPage;