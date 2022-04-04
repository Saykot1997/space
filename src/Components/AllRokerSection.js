import React from 'react'
import roket from '../Photos/se@2x.png'

function AllRokerSection() {
    return (
        <div className=' w-full bg-[#1E1B3A]'>
            <div className=' w-[1347px] mx-auto pt-32 pb-10'>
                {/* search start */}
                <div className=' w-full bg-[#2D2853] text-white flex justify-between items-center p-5'>
                    <div className=' w-1/2 flex'>
                        <div className=' flex '>
                            <p className=' mr-5 text-lg'>Is upcomming?</p>
                            <select name="" id="" className=' bg-transparent text-lg focus:bg-[#2D2853] focus:outline-none'>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>

                        <span className=' h-8 w-[4px] bg-gray-700 mx-5 inline-block'></span>

                        <div className=' flex '>
                            <p className=' mr-5 text-lg'>Lunch year?</p>
                            <select name="" id="" className=' bg-transparent text-lg focus:bg-[#2D2853] focus:outline-none'>
                                <option value="">2001-2005</option>
                                <option value="">2006-2010</option>
                                <option value="">2011-2015</option>
                                <option value="">2016-2020</option>
                            </select>
                        </div>
                    </div>
                    <div className=' w-1/2 flex justify-end'>
                        <div className=' flex items-center'>
                            <input type="text" placeholder='Search for rocket' className=' py-[8px] px-3 bg-transparent border-[1px] border-gray-500' />
                            <button className=' h-full px-5 bg-black border-[1px] border-gray-500'>Search</button>
                        </div>
                    </div>
                </div>
                {/* search end */}

                <div className=' w-full grid grid-cols-4 gap-5 mt-10'>
                    <div className=' w-[100%] h-[390px] bg-[#1D0C41] text-gray-300 text-center flex flex-col items-center p-5 rounded-xl'>
                        <img src={roket} alt="" className=' w-[144px] h-[125px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5 text-white'>Fancon Two</h3>
                        <p className=' my-2 text-lg font-sans leading-7'>Rocket name: FalconSat</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Lanching year: 2005</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Upcomming: False</p>
                    </div>
                    <div className=' w-[100%] h-[390px] bg-[#1D0C41] text-gray-300 text-center flex flex-col items-center p-5 rounded-xl'>
                        <img src={roket} alt="" className=' w-[144px] h-[125px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5 text-white'>Fancon Two</h3>
                        <p className=' my-2 text-lg font-sans leading-7'>Rocket name: FalconSat</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Lanching year: 2005</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Upcomming: False</p>
                    </div>
                    <div className=' w-[100%] h-[390px] bg-[#1D0C41] text-gray-300 text-center flex flex-col items-center p-5 rounded-xl'>
                        <img src={roket} alt="" className=' w-[144px] h-[125px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5 text-white'>Fancon Two</h3>
                        <p className=' my-2 text-lg font-sans leading-7'>Rocket name: FalconSat</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Lanching year: 2005</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Upcomming: False</p>
                    </div>
                    <div className=' w-[100%] h-[390px] bg-[#1D0C41] text-gray-300 text-center flex flex-col items-center p-5 rounded-xl'>
                        <img src={roket} alt="" className=' w-[144px] h-[125px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5 text-white'>Fancon Two</h3>
                        <p className=' my-2 text-lg font-sans leading-7'>Rocket name: FalconSat</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Lanching year: 2005</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Upcomming: False</p>
                    </div>
                    <div className=' w-[100%] h-[390px] bg-[#1D0C41] text-gray-300 text-center flex flex-col items-center p-5 rounded-xl'>
                        <img src={roket} alt="" className=' w-[144px] h-[125px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5 text-white'>Fancon Two</h3>
                        <p className=' my-2 text-lg font-sans leading-7'>Rocket name: FalconSat</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Lanching year: 2005</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Upcomming: False</p>
                    </div>
                    <div className=' w-[100%] h-[390px] bg-[#1D0C41] text-gray-300 text-center flex flex-col items-center p-5 rounded-xl'>
                        <img src={roket} alt="" className=' w-[144px] h-[125px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5 text-white'>Fancon Two</h3>
                        <p className=' my-2 text-lg font-sans leading-7'>Rocket name: FalconSat</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Lanching year: 2005</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Upcomming: False</p>
                    </div>
                    <div className=' w-[100%] h-[390px] bg-[#1D0C41] text-gray-300 text-center flex flex-col items-center p-5 rounded-xl'>
                        <img src={roket} alt="" className=' w-[144px] h-[125px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5 text-white'>Fancon Two</h3>
                        <p className=' my-2 text-lg font-sans leading-7'>Rocket name: FalconSat</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Lanching year: 2005</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Upcomming: False</p>
                    </div>
                    <div className=' w-[100%] h-[390px] bg-[#1D0C41] text-gray-300 text-center flex flex-col items-center p-5 rounded-xl'>
                        <img src={roket} alt="" className=' w-[144px] h-[125px]' />
                        <h3 className='russo-one text-[30px] leading-9 my-5 text-white'>Fancon Two</h3>
                        <p className=' my-2 text-lg font-sans leading-7'>Rocket name: FalconSat</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Lanching year: 2005</p>
                        <p className=' my-2 text-lg font-sans leading-7'>Upcomming: False</p>
                    </div>
                </div>
                <div className=' w-full flex justify-center items-center'>
                    <div className=' mt-10'>
                        <span className=' text-gray-300 text-lg mr-5 cursor-pointer'>1</span>
                        <span className=' text-gray-600 text-lg mr-5 cursor-pointer'>2</span>
                        <span className=' text-gray-600 text-lg mr-5 cursor-pointer'>3</span>
                        <span className=' text-gray-600 text-lg mr-5 cursor-pointer'>.</span>
                        <span className=' text-gray-600 text-lg mr-5 cursor-pointer'>.</span>
                        <span className=' text-gray-600 text-lg mr-5 cursor-pointer'>.</span>
                        <span className=' text-gray-600 text-lg mr-5 cursor-pointer'>10</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllRokerSection