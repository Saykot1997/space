import React from 'react'
import asrtonat from "../Photos/Asset 1@8x-8 1.png"
import R82 from "../Photos/r8 2.png"
import R72 from "../Photos/r7 2.png"
import Asset21 from "../Photos/2 1.png"

function HeroComponent() {
    return (
        <div className=' w-full h-[1080px] flex justify-between items-center relative'>
            <div className=' w-[35%]'>
                <div className=' w-[467px]'>
                    <div className='flex items-center mb-10'>
                        <img src={R82} alt="" className=' w-[71px] mr-5' />
                        <p className='gradient-text'>Welcome to Stella</p>
                    </div>
                    <div className=' w-full'>
                        <p className=' text-white uppercase russo-one text-[82px] font-normal leading-[100px]'>space for</p>
                        <p className=' text-white uppercase russo-one text-[82px] font-normal leading-[100px]'>everyone</p>
                    </div>
                    <div className=' mt-5'>
                        <p className=' text-white text-[22px] font-sans leading-8'>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                    </div>
                    <button className='gradiant-button '>Get Start</button>
                </div>
            </div>
            <div className=' w-[65%] flex justify-center relative animate-updown'>
                <img src={asrtonat} alt="" className=' w-[630px]' />
                <img src={R72} alt="" className=' absolute w-[185px] h-[100px] right-10 bottom-[320px] ' />
            </div>
            <img src={Asset21} alt="" className=" absolute right-20 bottom-10 w-[136px] animate-customSpin" />
        </div>
    )
}

export default HeroComponent