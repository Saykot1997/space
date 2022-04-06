import React from 'react'
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CarasualSection() {

    const Space = useSelector(state => state.Space.Space);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className=' bg-[#18163B] w-full'>
            <div className='w-full 2xl:w-[1347px] mx-auto py-5 sm:py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-32'>
                <h2 className='russo-one capitalize text-white text-2xl md:text-[50px] text-center'>Discover Univerce</h2>
                <div className=' mt-10'>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        showDots={false}
                        arrows={false}
                        containerClass='mx-5'
                    >
                        {
                            Space.length > 0 && Space[0].map((i, index) => {
                                return (
                                    <div className=' bg-[#231E44] hover:bg-gradient-to-r from-[#2317FA] to-[#D529E4] flex flex-col items-center justify-center text-center text-white w-[100%] sm:w-[95%] md:w-[92%] sm:h-[458px] py-8 px-5 transition-all duration-500 ease-in '>
                                        <div className=' w-[100px] sm:w-[144px] h-[80px] sm:h-[128px]'>
                                            <img src={i.links.mission_patch_small} alt="" className=' w-full h-full object-cover' />
                                        </div>
                                        <h3 className='russo-one text-2xl sm:text-[30px] leading-9 my-5'>{i.mission_name}</h3>
                                        <p className=' font-sans text-base sm:text-lg leading-6 sm:leading-7 text-limit'>{i.details}</p>
                                    </div>

                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default CarasualSection