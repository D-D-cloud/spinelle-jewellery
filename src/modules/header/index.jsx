import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-screen flex flex-row items-center p-1 justify-between shadow-xs">
            <div className="ml-8 text-lg text-gray-700 hidden md:flex">LOGO</div>
            <span className="w-[20px] md:w-1/3 h-10 bg-[#FFE6D8] cursor-pointer border border-gray-300 text-sm rounded-full flex">
                <i className="fas fa-search m-3 mt-2 mr-1 text-lg text-gray-700 h-4" />
                <input type="search" name="serch" placeholder="Search here"
                    className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none" />
            </span>
            <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
                <i className="fas fa-bars"></i>
            </div >
            <div className="flex flex-row items-center mr-8 md:flex cursor-pointer">


                <div className="text-gray-700 text-center px-4 py-2 m-2">
                    <NavLink to="/dashboard">Home</NavLink>
                </div>
                <div className="text-gray-700 text-center px-4 py-2 m-2">
                    <NavLink to="/">Services</NavLink>
                </div>
                <div className="text-gray-700 text-center px-4 py-2 m-2">
                    <NavLink to="/edit-profile">Contact Us</NavLink>
                </div>
                <div className="text-gray-700 text-center px-4 py-2 m-2">
                    <NavLink to="/profile">My Profile</NavLink>
                </div>
                <div className="text-gray-700 text-center px-4 py-2 m-2"> <i className="fas fa-phone" /> +91 123456789</div>
                <div className="text-gray-700 text-center px-4 py-2 m-2">
                    <NavLink to="/notifications"><i className="fas fa-bell"></i></NavLink>
                
                </div>
            </div>
        </div>
    )
}

export default Header