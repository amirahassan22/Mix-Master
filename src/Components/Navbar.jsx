import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// import Wrapper from '../assets/wrappers/navbarStyles'

export default function Navbar() {
  const[isClicked,setIsClicked] = useState(false)
  return (
    

<nav className="bg-red-950 border-gray-200 dark:bg-gray-900 sticky z-40">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center text-white">
        <span className="logo-text self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Mix Master</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={()=> setIsClicked(!isClicked)}>
        <span className="sr-only">Open main menu</span>
        <svg className={`w-5 h-5 ${isClicked?"rotate-90":"rotate-0"} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={`${!isClicked?"hidden h-0" : "block h-48"} transition-all ease-in-out w-full md:h-auto md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <NavLink to='/' className="block py-2 px-3 text-green-950 md:text-white rounded hover:bg-gray-100 hover:text-red-950 hover:text-xl md:hover:text-base md:hover:bg-transparent md:border-0 md:hover:text-green-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</NavLink>
        </li>
        <li>
          <NavLink to="about" className="block py-2 px-3 text-green-950 md:text-white  rounded hover:bg-gray-100 hover:text-red-950 hover:text-xl md:hover:text-base md:hover:bg-transparent md:border-0 md:hover:text-green-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
        </li>
        <li>
          <NavLink to="newsLetter" className="block py-2 px-3 text-green-950 md:text-white rounded hover:bg-gray-100 hover:text-red-950 hover:text-xl md:hover:text-base md:hover:bg-transparent md:border-0 md:hover:text-green-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">NewsLetter</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
