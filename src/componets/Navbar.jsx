import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav data-aos="fade-down" className="flex justify-around items-center py-3 px-9 bg-gray-900 text-white sm:gap-5 sm:flex-row flex-col">
        <div className="logo md:mb-0 mb-3">
            <Link to="/">
                <span className="font-bold text-2xl text-blue-600">&lt;</span>
                <span className="font-bold text-2xl font-serif">Pass</span>
                <span className="font-bold text-2xl text-blue-600">M/&gt;</span>
            </Link>
        </div>
        <div className="flex gap-7">
            <ul className="list flex gap-7 items-center">
                <li className="cursor-pointer hover:font-bold hover:text-gray-100 hover:underline transition-all text-gray-300">
                    <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer hover:font-bold hover:text-gray-100  hover:underline transition-all text-gray-300">
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div className="github-logo flex gap-7">
                <button className="md:hover:animate-spin bg-blue-400 rounded-full  px-2 py-1 hover:bg-blue-300 ring-slate-200 ring-1">
                    <a className="flex gap-2 items-center" href="https://github.com/palchhinparihar" target="_blank">
                        <i className="devicon-github-original text-2xl colored"></i>
                    </a>
                </button>
                <button className="md:hover:animate-spin bg-blue-400 rounded-full  px-2 py-1 hover:bg-blue-300 ring-slate-200 ring-1">
                    <a className="flex gap-2 items-center" href="https://www.linkedin.com/in/palchhinparihar" target="_blank">
                        <i className="devicon-linkedin-plain text-2xl text-black"></i>
                    </a>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;