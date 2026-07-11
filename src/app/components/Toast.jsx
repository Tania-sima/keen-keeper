'use client';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Toast = () => {
       const handleAddCall=()=> {
        toast('cantact with call');
}
       const handleAddText=()=> {
        toast('cantact with text');
}
       const handleAddVideo=()=> {
        toast('cantact with video');
}

    return (
        <div className="card  bg-base-100 card-lg shadow-sm p-4 mt-2  ">
    <p className='text-emerald-900  mb-2'>Quick Check-In</p>
     <div className='flex flex-row  mt-2  bg-white gap-3 '>
     <button onClick={handleAddCall}  className=" shadow-sm bg-gray-100 w-1/3 rounded-sm ">
      <div  className="card-body items-center text-center">
      <i className="fa-solid fa-phone-volume"></i> 
      
      <h2 >Call</h2>
      </div>
      </button>

    

<button onClick={handleAddText} className=" shadow-sm bg-gray-100 w-1/3 rounded-sm ">
<div className=" card card-body items-center text-center ">
<i className="fa-regular fa-message"></i>
<h2>Text</h2>
</div>
</button>

   <button onClick={handleAddVideo} className=" shadow-sm bg-gray-100 w-1/3 rounded-sm ">
   <div className="card-body items-center text-center">
    <i className="fa-solid fa-video"></i>
    <h2>video</h2>
   </div>
   </button>
<ToastContainer />
    </div> 

</div> 
    );
};

export default Toast;