import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-screen flex flex-row items-center p-1 justify-center shadow-xs">
            <div className="ml-8 text-lg text-gray-700 hidden md:flex">LOGO</div>
            <span className="w-[20px] md:w-1/3 h-10 bg-[#FFE6D8] cursor-pointer border border-gray-300 text-sm rounded-full flex">
                <i className="fas fa-search m-3 mt-2 mr-1 text-lg text-gray-700 h-4" />
                <input type="search" name="serch" placeholder="Search here"
                    className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none" />
            </span>
            <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    )
}

export default Header