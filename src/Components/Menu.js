import React from 'react'
import logo from "../Photos/Vector.png"

function Menu() {
    return (
        <div className=' w-[1325px] h-[57px] mx-auto flex justify-between'>
            <div className=' flex items-center'>
                <img src={logo} alt="" className=' w-[50px]' />
                <p className=' text-white ml-3 capitalize russo-one text-xl leading-6'>space</p>
            </div>
            <div className=' h-full flex items-center'>
                <ul className=' flex items-center'>
                    <p className=' text-white mr-10 cursor-pointer hover:text-purple-600 font-sans'>Home</p>
                    <p className=' text-white mr-10 cursor-pointer hover:text-purple-600 font-sans'>About Us</p>
                    <p className=' text-white mr-10 cursor-pointer hover:text-purple-600 font-sans'>Story</p>
                    <p className=' text-white mr-10 cursor-pointer hover:text-purple-600 font-sans'>Blog</p>
                </ul>
                <button className='gradient-btn' >Contact Us</button>
            </div>
        </div>
    )
}

export default Menu