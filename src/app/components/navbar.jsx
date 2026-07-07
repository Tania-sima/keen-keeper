'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (

<div className="navbar bg-base-100 shadow-sm px-2 sm:px-10 lg:px-20">
  <div className="flex-1">
    <Image  src="/logo.png" height={120} width={120} alt='logo'/>
  </div >
  <div className="flex-none ">
    <ul className="menu menu-horizontal ml-10 text-gray-600 ">
     
      <Link  className={pathname==="/" ? "text-white bg-green-900 rounded-sm " :pathname==="/home" ? "text-white bg-green-900 rounded-sm" : " " } href="/home"> <li > <button><i className="fa-solid fa-house"></i>Home</button></li></Link>
      
       <li><button><i className="fa-regular fa-clock"></i>Timeline</button> </li>
       <li> <button><i className="fa-solid fa-chart-line"></i>Stats</button></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;