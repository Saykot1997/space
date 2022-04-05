import React from 'react'
import logo from "../Photos/Vector.png"
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

function FooterSection() {
    return (
        <div className='w-full bg-[#18163B]'>
            <div className='w-[1347px] mx-auto p-5'>
                <div className=' flex flex-col items-center justify-center py-28'>
                    <h1 className=' text-white text-[60px] leading-[72px] russo-one'>Newsletter</h1>
                    <div className=' flex items-center mt-10 w-[640px]'>
                        <input type="text" placeholder='Email address' className=' w-full bg-transparent placeholder:text-white border-l-2 border-t-2 border-b-2 border-gray-500 py-[13px] focus:outline-none px-5 focus:text-white' />
                        <button className=' text-white py-3 px-5 gradient-btn'>Subscribe</button>
                    </div>
                </div>
                <div className=' flex justify-between'>
                    <div>
                        <div className=' flex items-center cursor-pointer'>
                            <img src={logo} alt="" className=' w-[51px] h-[45px] mr-4' />
                            <p className=' text-white russo-one text-lg '>SPACE</p>
                        </div>
                    </div>
                    <div>
                        <p className=' text-lg text-gray-400'>Space 2020, All right reserved.</p>
                    </div>
                    <div className=' flex items-center'>
                        <BsTwitter className=' text-[#5B5B5B] text-2xl mr-10 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:text-blue-600' />
                        <FaFacebookF className=' text-[#5B5B5B] text-2xl mr-10 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:text-blue-600' />
                        <FaLinkedinIn className=' text-[#5B5B5B] text-2xl mr-10 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:text-blue-600' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection