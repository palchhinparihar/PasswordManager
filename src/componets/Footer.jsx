import React from 'react'

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="w-full bg-gray-800 text-white flex flex-col gap-1 justify-center items-center pb-1">
      <div className="logo">
          <span className="font-bold text-xl text-blue-500">&lt;</span>
          <span className="font-bold text-xl font-serif">Pass</span>
          <span className="font-bold text-xl text-blue-500">M/&gt;</span>
      </div>
      <div>
        <div className="flex">
          <span>Create with</span>
          <i class="fa-solid fa-heart mx-2 mt-[5px]" style={{color: "red"}}></i>
          <span>by Palchhin</span>  
        </div>
      </div>
    </footer>
  )
}

export default Footer