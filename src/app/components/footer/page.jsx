import React from 'react';
import Image from 'next/image';
const FooterPage = () => {
    return (
        

 <footer className="footer footer-horizontal footer-center bg-emerald-900  p-10 ">
  <aside>
    <p className='font-bold text-5xl text-gray-100'>KeenKeeper</p>
    <p className='text-gray-300'>
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
     </p>
  </aside>
  <nav >
    <p className='font-semibold text-gray-200'>Social Links</p>
    <div className="grid grid-flow-col gap-4">
     <a className=" bg-white text-black border-2 border-white rounded-full px-1">
        <i className="fa-brands fa-square-instagram"></i>
       </a>
       <a className=" bg-white text-black border-2 border-white rounded-full px-1">
        <i className="fa-brands fa-square-facebook"></i>
       </a>
      <a className=" bg-white text-black border-2 border-white rounded-full px-1">
         <i className="fa-brands fa-x-twitter"></i>
      </a>
    </div>
  </nav>


  <footer className="footer sm:footer-horizontal  text-gray-300 items-center p-4 text-gray-400 pt-3 border-t-2 border-gray-500">
  <aside className="grid-flow-col md:mr-9 lg:mr-34 lg:text-left pr-9">
    
    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
  </aside>
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end  lg:mr-16  ">
    <a>
     <p>Privacy Policy</p>
    </a>
    <a>
     <p>Terms of Service</p>
    </a>
    <a>
    <p>Cookies</p>
    </a>
  </div>
</footer>
</footer> 


      
    );
};

export default FooterPage;