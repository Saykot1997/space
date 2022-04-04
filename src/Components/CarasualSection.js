import React from 'react'
import roket from '../Photos/t@2x.png'
import roket2 from '../Photos/j@2x.png'
import roket3 from '../Photos/se@2x.png'

function CarasualSection() {
    return (
        <div className=' bg-[#18163B] w-full'>
            <div className=' w-[1347px] mx-auto py-32'>
                <h2 className='russo-one capitalize text-white text-[50px] text-center'>Discover Univerce</h2>
                <div className=' flex justify-between w-full mt-10'>
                    <div className=' bg-[#231E44] hover:bg-gradient-to-r from-[#2317FA] to-[#D529E4] flex flex-col items-center justify-center text-center text-white w-[31%] h-[458px} p-10 transition-all duration-500 ease-in '>
                        <img src={roket} alt="" className=' w-[144px] h-[128px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5'>Mission Bangon</h3>
                        <p className=' font-sans text-lg leading-7'>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                    </div>
                    <div className=' bg-[#231E44] hover:bg-gradient-to-r from-[#2317FA] to-[#D529E4] flex flex-col items-center justify-center text-center text-white w-[31%] h-[458px} p-10 transition-all duration-500 ease-in '>
                        <img src={roket2} alt="" className=' w-[144px] h-[128px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5'>Mission BD</h3>
                        <p className=' font-sans text-lg leading-7'>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                    </div>
                    <div className=' bg-[#231E44] hover:bg-gradient-to-r from-[#2317FA] to-[#D529E4] flex flex-col items-center justify-center text-center text-white w-[31%] h-[458px} p-10 transition-all duration-500 ease-in '>
                        <img src={roket3} alt="" className=' w-[144px] h-[128px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5'>Mission 11</h3>
                        <p className=' font-sans text-lg leading-7'>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarasualSection