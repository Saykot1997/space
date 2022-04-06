import React from 'react'
import asrtonat from "../Photos/Asset 1@8x-8 1.png"
import R82 from "../Photos/r8 2.png"
import R72 from "../Photos/r7 2.png"
import Asset21 from "../Photos/2 1.png"

function HeroComponent() {
    return (
        <div className=' w-full h-[768px] md:h-[920px] sm:h-[768px] lg:h-[1080px] lg:px-16 xl:px-24 2xl:px-0 flex justify-between items-center flex-wrap relative'>
            <div className=' w-full lg:w-[35%] lg:order-1 order-2 p-5 sm:px-10 lg:p-0'>
                <div className=' w-full'>
                    <div className='flex items-center mb-10'>
                        <img src={R82} alt="" className='w-[60px] md:w-[71px]  mr-5' />
                        <p className='gradient-text'>Welcome to Stella</p>
                    </div>
                    <div className=' w-full'>
                        <p className=' text-white uppercase russo-one text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[60px] 2xl:text-[82px] font-normal sm:leading-[40px] md:leading-[50px] lg:leading-[70px] xl:leading-[90px] 2xl:leading-[100px]'>space for</p>
                        <p className=' text-white uppercase russo-one text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[60px] 2xl:text-[82px] font-normal sm:leading-[40px] md:leading-[50px] lg:leading-[70px] xl:leading-[90px] 2xl:leading-[100px]'>everyone</p>
                    </div>
                    <div className=' mt-5'>
                        <p className=' text-white sm:text-lg lg:text-[22px] font-sans leading-8'>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                    </div>
                    <button className='gradiant-button '>Get Start</button>
                </div>
            </div>
            <div className=' w-full order-1 lg:order-2 lg:w-[65%] flex justify-center relative animate-updown'>
                <img src={asrtonat} alt="" className=' w-[280px] sm:w-[360px] md:w-[420px] lg:w-[560px] xl:w-[630px]' />
                <img src={R72} alt="" className=' absolute w-[48px] sm:w-[60px] md:w-[80px] lg:w-[120px] xl:w-[185px] sm:h-[48px] md:h-[68px] lg:h-[76px] xl:h-[100px] right-10 sm:right-44 md:right-36 lg:right-5 xl:right-10 bottom-[150px] sm:bottom-[180px] md:bottom-[200px] lg:bottom-[280px] xl:bottom-[320px] ' />
            </div>
            <img src={Asset21} alt="" className=" absolute right-20 bottom-10 w-0 lg:w-[136px] animate-customSpin" />
        </div>
    )
}

export default HeroComponent