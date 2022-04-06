import React from 'react'
import logo from "../Photos/Vector.png"
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

function FooterSection() {

    return (
        <div className='w-full bg-[#18163B]'>
            <div className='w-full 2xl:w-[1347px] mx-auto px-3 sm:px-10 lg:px-16 xl:px-20 pb-5 sm:pb-10 lg:pb-16'>
                <div className=' flex flex-col items-center justify-center py-10 sm:py-20 md:py-28'>
                    <h1 className=' text-white sm:text-[40px] md:text-[60px] leading-[72px] russo-one'>Newsletter</h1>
                    <div className=' flex items-center mt-3 sm:mt-10 sm:w-full md:w-[640px]'>
                        <input type="text" placeholder='Email address' className=' w-full bg-transparent placeholder:text-white border-l-2 border-t-2 border-b-2 border-gray-500 py-[5px] sm:py-[6px] md:py-[10px] lg:py-[13px] focus:outline-none px-5 focus:text-white' />
                        <button className=' text-white py-3 px-5 gradient-btn'>Subscribe</button>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className=' hidden sm:flex items-center cursor-pointer'>
                        <img src={logo} alt="" className=' w-[36px] sm:w-[51px] h-[36px] sm:h-[45px] mr-2 sm:mr-4' />
                        <p className=' text-white russo-one text-sm sm:text-lg '>SPACE</p>
                    </div>
                    <div>
                        <p className=' text-xs sm:text-lg text-gray-400'>Space 2020, All right reserved.</p>
                    </div>
                    <div className=' flex items-center'>
                        <BsTwitter className=' text-[#5B5B5B] text-base sm:text-2xl mr-2 sm:mr-10 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:text-blue-600' />
                        <FaFacebookF className=' text-[#5B5B5B] ext-base sm:text-2xl mr-2 sm:mr-10 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:text-blue-600' />
                        <FaLinkedinIn className=' text-[#5B5B5B] ext-base sm:text-2xl mr-2 sm:mr-10 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:text-blue-600' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection