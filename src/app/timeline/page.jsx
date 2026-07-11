import React from 'react';

const TimeLineage = () => {
    return (
        


<div className="card bg-gray-100 py-10 px-46 border-2 shadow-sm">
 
  <div className='card-body' >
    <h1 className="card-title text-4xl font-bold">Timeline</h1>
    <ul className="menu menu-xs bg-white rounded-box max-w-xs w-full">
  <li className='font-sans text-gray-600'>
    <details open>
     <summary>
        Filter timeline
       </summary>
       <ul>
         <li><a>
           Filter by date
           </a>
        </li>
        <li>
           <a>
             Filter by call
          </a>
        </li>
         <li>
           <a>
            Filter by Text
           </a>
          </li>
         <li>
          <a>
             Filter by video
           </a>
         </li>
       </ul>
     </details>
   </li>
 </ul>
   
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    
  </div>
</div>
    );
};

export default TimeLineage;