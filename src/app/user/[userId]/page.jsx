
import React from 'react'; 
import UserCard from '@/app/components/userCard';
import Image from 'next/image';
import Link from 'next/link';
import Toast from '@/app/components/Toast';

const users= [
  {
    "id": 1,
    "name": "David Kim",
    "picture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "email": "david.kim@example.com",
    "days_since_contact": 62,
    "status": "Almost Due",
    "tags": ["WORK"],
    "bio": "Colleague from design department. Great strategist.",
    "goal": 30,
    "next_due_date": "july 15, 2026"
   
  },
  {
    "id": 2,
    "name": "Emma Wilson",
    "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "email": "emma.wilson@example.com",
    "days_since_contact": 62,
    "status": "Overdue",
    "tags": ["FAMILY"],
    "bio": "Cousin on my mother's side. Enjoys family gatherings.",
    "goal": 14,
    "next_due_date": "May 10, 2026"
  },
  {
    "id": 3,
    "name": "Lisa Nakamura",
    "picture": "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "email": "lisa.n@example.com",
    "days_since_contact": 62,
    "status": "Overdue",
    "tags": ["WORK"],
    "bio": "Project management lead. Teaches web development frameworks.",
    "goal": 30,
    "next_due_date": "May 12, 2026"
  },
  {
    "id": 4,
    "name": "James Wright",
    "picture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "email": "james.w@example.com",
    "days_since_contact": 62,
    "status": "Overdue",
    "tags": ["HOBBY", "TRAVEL"],
    "bio": "Travel partner. Met during hiking exploration trips.",
    "goal": 45,
    "next_due_date": "May 14, 2026"
  },
  {
    "id": 5,
    "name": "David Kim",
    "picture": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "email": "dkim.creative@example.com",
    "days_since_contact": 62,
    "status": "Overdue",
    "tags": ["WORK"],
    "bio": "Frontend consultant teammate. Expert in Tailwind CSS components.",
    "goal": 30,
    "next_due_date": "May 18, 2026"
  },
  {
    "id": 6,
    "name": "Emma Wilson",
    "picture": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    "email": "emma.w2@example.com",
    "days_since_contact": 62,
    "status": "On-Track",
    "tags": ["FAMILY"],
    "bio": "Sister-in-law. Loves baking creative celebration birthday cakes.",
    "goal": 60,
    "next_due_date": "Aug 25, 2026"
  },
  {
    "id": 7,
    "name": "Lisa Nakamura",
    "picture": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "email": "lisa.nakamura@example.com",
    "days_since_contact": 62,
    "status": "On-Track",
    "tags": ["WORK"],
    "bio": "Software engineer acquaintance. Collaborates on web layouts.",
    "goal": 30,
    "next_due_date": "Aug 01, 2026"
  },
  {
    "id": 8,
    "name": "James Wright",
    "picture": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    "email": "wright.j@example.com",
    "days_since_contact": 62,
    "status": "Almost Due",
    "tags": ["HOBBY", "TRAVEL"],
    "bio": "Photography group member. Explores nature landscapes.",
    "goal": 45,
    "next_due_date": "Jul 12, 2026"
  },
  {
    "id": 9,
    "name": "David Kim",
    "picture": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    "email": "david.k99@example.com",
    "days_since_contact": 62,
    "status": "Almost Due",
    "tags": ["WORK"],
    "bio": "UI/UX group study peer. Reviews design tracking layouts.",
    "goal": 30,
    "next_due_date": "Jul 10, 2026"
  },
  {
    "id": 10,
    "name": "Emma Wilson",
    "picture": "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    "email": "wilson.emma@example.com",
    "days_since_contact": 62,
    "status": "Overdue",
    "tags": ["FAMILY"],
    "bio": "Extended family connection. Helps organizing events.",
    "goal": 60,
    "next_due_date": "May 02, 2026"
  },
  {
    "id": 11,
    "name": "Lisa Nakamura",
    "picture": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    "email": "nakamura11@example.com",
    "days_since_contact": 62,
    "status": "Overdue",
    "tags": ["WORK"],
    "bio": "Tech workspace colleague. Passionate about optimization.",
    "goal": 30,
    "next_due_date": "May 20, 2026"
  },
  {
    "id": 12,
    "name": "James Wright",
    "picture": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    "email": "james.wright@example.com",
    "days_since_contact": 62,
    "status": "On-Track",
    "tags": ["HOBBY", "TRAVEL"],
    "bio": "Enthusiastic explorer. Loves documenting city structures.",
    "goal": 45,
    "next_due_date": "Aug 30, 2026"
  }
];
const UserDetailsPage = async({params}) => {
 const{userId}=await params;
  const user=users.find(user=>
    user.id===parseInt(userId)
  );








  
 const {picture,name,days_since_contact, tags,status,bio,goal,next_due_date}=user;
 
    return (
        <div>
           
            {user&&  
           <div className="card lg:card-side  gap-4 lg:px-52 py-16  shadow-sm bg-gray-100">

<div className="card  w-96 md:w-80  lg:w-74 mx-auto   ">
  <div className="card-body items-center text-center card bg-base-100  shadow-sm">
     <div className=" avatar">
    <div className="w-16 rounded-full">
      <Image
        alt='avatarUrl'
        src={picture} height={40} width={40} 
      />
    </div>
  </div>
    <h2 className="card-title font-bold">{name}</h2>
    <p className={status==="Almost Due" ? "text-white badge badge-sm bg-amber-500 text-xs rounded-full" :status==="Overdue" ? "text-white badge badge-sm bg-red-500 text-xs rounded-full": "text-white badge badge-sm bg-green-900 text-xs  rounded-full" } >{status}</p> 
     <div className='flex items-center justify-center'>
    {
      tags.map((tag,index)=>
        
       <li key={index}   className='text-green-900 badge badge-sm bg-emerald-200  text-xs rounded-full'>{tag}</li>
        )
    }
    </div> 
    <p className='text-gray-600 '>"{bio}"</p>
    <p className='text-gray-400 text-xs'>Preferred: email</p>

         
        
</div>
<div className='grid grid-rows-3 gap-2 mt-2 '>
<button className="btn btn-block font-normal bg-white"><i className="fa-regular fa-bell"></i>Snooze 2 weeks</button>
<button className="btn btn-block font-normal bg-white"><i className="fa-solid fa-box-archive"></i>Archive</button>
<button className="btn btn-block font-normal text-red-600 bg-white"><i className="fa-regular fa-trash-can "></i>Delete</button>
</div>
</div>




<div className="px-2 md:px-2 lg:px-0  ">
<div className="card card-sm  grid grid-cols-3 gap-4 mb-2">
 <div className="card bg-base-100  shadow-sm">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-emerald-900 text-2xl">{days_since_contact}</h2>
    <p className='text-gray-600'>Days Since Contact</p>
  </div>
</div>
<div className="card bg-base-100  shadow-sm">  
  <div className="card-body items-center text-center">
    <h2 className="card-title text-emerald-900 text-2xl">{goal}</h2>
   <p className='text-gray-600'>Goal (Days)</p> 
   
  </div>
</div>
<div className="card bg-base-100 shadow-sm">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-emerald-900 text-2xl">{next_due_date}</h2>
    <p className='text-gray-600'>Next Due</p> 
  </div>
</div>
</div>
 <div className="card bg-base-100 card-xs shadow-sm p-2">

  <div className=' flex flex-row justify-between '>
   <p className='text-emerald-900 py-2 px-2 '>Relationship Goal</p>
  <button className='btn font-normal'>Edit</button>
  </div>

  <p className='text-gray-600 px-2'>Connect every <span className='text-black font-bold'>{goal} days</span></p> 
</div>
 
<Toast></Toast>

</div>


 
  </div>


            }
        
        </div>
    );
};

export default UserDetailsPage;