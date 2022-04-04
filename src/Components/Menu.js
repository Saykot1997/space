import React from 'react'
import logo from "../Photos/Vector.png"

function Menu() {
    return (
        <div className=' absolute top-0 left-1/2 -translate-x-1/2 z-50 w-[1347px] flex justify-between items-center py-5'>
            <div className=' flex items-center cursor-pointer'>
                <img src={logo} alt="" className=' w-[50px]' />
                <p className=' text-white ml-3 capitalize russo-one text-xl leading-6'>space</p>
            </div>
            <div className='flex items-center'>
                <div className=' flex items-center'>
                    <p className=' mr-10 text-purple-600 cursor-pointer '>Home</p>
                    <p className=' mr-10 text-white hover:text-purple-600 cursor-pointer'>Contact Us</p>
                    <p className=' mr-10 text-white hover:text-purple-600 cursor-pointer'>Home</p>
                    <p className=' mr-10 text-white hover:text-purple-600 cursor-pointer'>Home</p>
                    <p className=' mr-10 text-white hover:text-purple-600 cursor-pointer'>Home</p>
                </div>
                <button className='gradient-btn' >Contact Us</button>
            </div>
        </div>
    )
}

export default Menu