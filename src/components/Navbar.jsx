"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

Link
const Navbar = () => {
    const [show,setShow]=useState(false)
    const [nav, setNav] = useState(false);
    const links = [
      {
        id: 1,
        link: "hero",
      },
      {
        id: 2,
        link: "get",
      },
      {
        id: 3,
        link: "support",
      },
      {
        id: 4,
        link: "choose",
      },
      {
        id: 5,
        link: "faqs",
      },
    ];
  return (
    /* <section className=' w-full shadow-md'>
    <navbar className=" container m-auto flex flex-row justify-between items-center py-5 ">
        <a href="/"> <img  className='h-12 w-17 ' src="./logo.png" alt="" /></a>
          <nav className='w-[70%] mx-20    '>
              <ul className='flex justify-start   flex-row gap-10 font-bold '>
                  <li onClick={()=>setShow(!show)} className='hover:text-[#785a28] ' ><Link className='flex flex-row items-center' href="">Products <FaAngleDown className='ml-2  size-4'/></Link></li>
                  <ul onClick={()=>setShow(!show)} className={`absolute  bg-white px-7 py-4  rounded-lg mt-14 ml-[-40px] z-10 shadow-2xl font-medium ${show === false ? "hidden" :"block"} `}>
                    <li className='mb-3 hover:text-[#785a28]'><Link href="#">V.connct Meet</Link></li>
                    <li className='mb-3 hover:text-[#785a28]'><Link href="#">V.connct SuperApp</Link></li>
                    <li className='mb-3 hover:text-[#785a28]'><Link href="#">V.connct EnterPrise</Link></li>
                    <li className='hover:text-[#785a28]' ><Link href="/webiner">V.connct Webinar</Link></li>
                  </ul>
                  <li className='hover:text-[#785a28]'><a className='flex flex-row items-center' href="#">Solutions<FaAngleDown className='ml-2' /></a></li>
                  <li className='hover:text-[#785a28]'><a className='flex flex-row items-center' href="#">Resources<FaAngleDown className='ml-2' /></a></li>
                  <li className='hover:text-[#785a28]'><a href="#"> Plans & Pricing</a></li>

              </ul>

          </nav>
          <div class=" w-[25%] flex gap-5   ">
              <button class="bg-transparent text-[#785a28] py-5 px-9 rounded-lg  font-[600]   border  border-[#785a28] hover:bg-[#F8B517] hover:border-white hover:text-black">Login</button>
              <button class="bg-[#F8B517] py-5 px-9 rounded-lg  font-[600]">Sign up Free</button>
          </div>
      </navbar>

    </section>*/
    <div className="flex justify-between items-center w-full h-20 px-20 pt-10 text-white bg-white fixed top-0 nav max-sm:px-5 ">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <img className=' w-48 max-sm:w-36'  src="./logo.png" alt="" />
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-[#F8B517] duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-4xl text-black md:hidden "
      >
        {nav ? <HiXMark size={30} /> : <IoMdMenu size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 text-black hover:text-[#F8B517] cursor-pointer capitalize py-6 text-3xl "
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
          
        </ul>
      
      )}
        <div class="  flex gap-5  max-lg:hidden max-sm:hidden  ">
              <button class="bg-transparent text-[#785a28] py-5 px-9 rounded-lg  font-[600]   border  border-[#785a28] hover:bg-[#F8B517] hover:border-white hover:text-black">Login</button>
              <button class="bg-[#F8B517] py-5 px-9 rounded-lg  font-[600]">Sign up Free</button>
         </div>
    </div>
  );
}

export default Navbar