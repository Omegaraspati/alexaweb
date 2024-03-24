'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Dropdown } from "flowbite-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Attach the event listener
    window.addEventListener("scroll", handleScroll);
    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-colors duration-700  ${isScrolled ? " bg-blue-700 shadow-lg" : "bg-transparent"}`}>
      <div className='flex items-center'>
        <div className='logoalexa'>
          <Link href="/">
            <img src='/images/logo.png' alt='logo' className='pl-10 w-60 max-md:w-20' />
          </Link>
        </div>
        <div className ='hidden max-md:flex'>
        <Dropdown label="Menu" className='text-3xl text-white font-semibold uppercase' inline>
        <Dropdown.Item><Link href={"/About"}>About Us</Link></Dropdown.Item>
      <Dropdown.Item><Link href={"/Products"}>Products</Link></Dropdown.Item>
      <Dropdown.Item><Link href={"/Contacts"}>Contact Us</Link></Dropdown.Item>
      <Dropdown.Item><Link href={"/teams"}>Teams</Link></Dropdown.Item>
    </Dropdown>
    </div>
        <div className="container max-md:hidden flex justify-end w-full items-center">
          <ul className="nav-links text-3xl text-white font-semibold uppercase flex  gap-8 ">
            <li className=' hover:text-orange-700 hover:underline hover:text-3xl'><Link href={"/"}>Home</Link></li>
            <li className=' hover:text-orange-700 hover:underline hover:text-3xl'><Link href={"/About"}>About Us</Link></li>
            <li className=' hover:text-orange-700 hover:underline hover:text-3xl'><Link href={"/Products"}>Products</Link></li>
            <li className=' hover:text-orange-700 hover:underline hover:text-3xl'><Link href={"/Contacts"}>Contact</Link></li>
            <li className=' hover:text-orange-700 hover:underline hover:text-3xl'><Link href={"/teams"}>Teams</Link></li>
          </ul>
        </div>
        <div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar 