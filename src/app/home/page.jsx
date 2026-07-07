import React from 'react';
import UserPage from '../user/page';
const HomePage = () => {
    return (
        
            <div className="card bg-gray-100 py-5  ">
  
    
  <div className="card-body items-center text-center">
    <h2 className="card-title ">Friends to keep close in your life</h2>
    <p className='text-gray-600'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
    <div className="card-actions">
      <button className="btn btn-primary bg-green-900 text-white">+ Add a Friend</button>
    </div>
  </div>
  {/* ==================== */}

  
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mb-5'>
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




  <UserPage></UserPage>

</div>
       
    );
};

export default HomePage;