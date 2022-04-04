import React from 'react'
import HeroComponent from './HeroComponent'
import planet from "../Photos/r8 1.png"
import Asset5 from "../Photos/Asset 5@2x-8.png"
import Asset31 from "../Photos/3 1.png"
import Ellipse from "../Photos/Ellipse 1.png"

function HeroSection() {
    return (
        <div className=' w-full'>
            <img src={planet} alt="" className=" absolute right-0 top-0" />
            <img src={Asset5} alt="" className=" absolute right-[500px] top-10 animate-zoomInOut" />
            <img src={Asset31} alt="" className=" absolute left-[90px] top-[164px] w-[122px] animate-customSpin" />
            <img src={Ellipse} alt="" className=" absolute left-[-30px] top-[340px] w-[310px] animate-zoomInOut" />
            <div className='w-[1347px] mx-auto'>
                <HeroComponent />
            </div>
        </div>
    )
}

export default HeroSection