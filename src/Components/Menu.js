import React, { useState } from 'react'
import logo from "../Photos/Vector.png"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Menu() {

    const [isshowingMenu, setIsShowingMenu] = useState(false);

    const ShowMenu = () => {
        setIsShowingMenu(!isshowingMenu);
    }

    return (
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 z-50 w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-60 flex ${isshowingMenu ? " justify-end" : " justify-between"} items-center py-5`}>
            <div className={`${isshowingMenu ? " hidden" : "flex items-center cursor-pointer"}`}>
                <img src={logo} alt="" className='w-[36px] md:w-[42px] lg:w-[50px]' />
                <p className=' text-white ml-3 capitalize russo-one text-sm sm:text-base md:text-lg lg:text-xl leading-6'>space</p>
            </div>
            <div className='sm:flex items-center hidden'>
                <div className=' flex items-center'>
                    <p className=' mr-5 sm:mr-6 md:mr-8 lg:mr-14 text-sm sm:text-base md:text-lg lg:text-xl text-purple-600 cursor-pointer '>Home</p>
                    <p className=' mr-5 sm:mr-6 md:mr-8 lg:mr-14 text-sm sm:text-base md:text-lg lg:text-xl text-white hover:text-purple-600 cursor-pointer'>About Us</p>
                    <p className=' mr-5 sm:mr-6 md:mr-8 lg:mr-14 text-sm sm:text-base md:text-lg lg:text-xl text-white hover:text-purple-600 cursor-pointer'>Story</p>
                    <p className=' mr-5 sm:mr-6 md:mr-8 lg:mr-14 text-sm sm:text-base md:text-lg lg:text-xl text-white hover:text-purple-600 cursor-pointer'>Blog</p>
                </div>
                <button className='gradient-btn text-sm sm:text-base md:text-lg lg:text-xl' >Contact Us</button>
            </div>
            {
                isshowingMenu &&

                <div className=' w-screen h-screen bg-[#18163B] absolute top-0 left-0'>
                    <div className=' flex items-center flex-col'>
                        <p className=' mt-16 mb-5 text-purple-600 cursor-pointer '>Home</p>
                        <p className=' my-5 text-white hover:text-purple-600 cursor-pointer'>About Us</p>
                        <p className=' my-5 text-white hover:text-purple-600 cursor-pointer'>Story</p>
                        <p className=' my-5 text-white hover:text-purple-600 cursor-pointer'>Blog</p>
                        <p className=' my-5 text-white hover:text-purple-600 cursor-pointer'>Contact Us</p>
                    </div>
                </div>
            }
            <div onClick={ShowMenu} className={`sm:hidden visible text-white cursor-pointer z-[100]`}>
                {
                    isshowingMenu ?
                        <AiOutlineClose className=' text-xl' />
                        :
                        <AiOutlineMenu className=' text-xl ' />
                }
            </div>

        </div>
    )
}

export default Menu