import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

function AllRokerSection() {

    const Space = useSelector(state => state.Space.Space);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(8);
    const [pageNumber, setPageNumber] = useState(1);
    const [displayPost, setDisplayPost] = useState([]);
    const [searchPostStr, setSearchPostStr] = useState("");
    const [allSearchRocket, setAllSearchRocket] = useState([]);
    const [lunchingYear, setLunchingYear] = useState("");
    const [isUpcoming, setIsUpcomming] = useState("");

    const handlePageClick = (data) => {

        setCurrentPage(data.selected + 1);
    }

    // search rocket
    const SearchRocket = () => {

        if (searchPostStr === "") {

            window.alert("Please enter a search string");

        } else {

            setLunchingYear("");
            setIsUpcomming("");

            let searchPost = Space[0].filter(post => {

                if (post.rocket.rocket_name.toLowerCase().includes(searchPostStr.toLowerCase())) {

                    return post;

                } else if (post.mission_name.toLowerCase().includes(searchPostStr.toLowerCase())) {

                    return post;
                }
            });

            setAllSearchRocket(searchPost);

            setCurrentPage(1);
        }
    }


    // set page number

    useEffect(() => {

        if (Space.length > 0) {

            if (allSearchRocket.length > 0) {

                setPageNumber(Math.ceil(allSearchRocket.length / postsPerPage));

            } else {

                setPageNumber(Math.ceil(Space[0].length / postsPerPage))
            }

        } else {

            setPageNumber(0)
        }

    }, [Space, allSearchRocket])


    // set display rocket
    useEffect(() => {

        if (Space.length > 0) {

            if (allSearchRocket.length > 0) {

                const indexOfLastPost = currentPage * postsPerPage;
                const indexOfFirstPost = indexOfLastPost - postsPerPage;
                const currentPosts = allSearchRocket.slice(indexOfFirstPost, indexOfLastPost);
                console.log({ indexOfFirstPost, indexOfLastPost, currentPosts });
                setDisplayPost(currentPosts);

            } else {

                const indexOfLastPost = currentPage * postsPerPage;
                const indexOfFirstPost = indexOfLastPost - postsPerPage;
                const currentPosts = Space[0].slice(indexOfFirstPost, indexOfLastPost);
                setDisplayPost(currentPosts);
            }
        }

    }, [Space, allSearchRocket, currentPage]);


    const filterRocketByLunchYear = (value) => {

        const startYear = value.split("-")[0]
        const endYear = value.split("-")[1]

        setLunchingYear(value)
        setIsUpcomming("");
        setSearchPostStr("");

        let FilterRocket = Space[0].filter(post => {

            if (post.launch_year >= startYear && post.launch_year <= endYear) {
                return post
            }
        });

        setAllSearchRocket(FilterRocket);
        setCurrentPage(1);
    }

    // filter by upcoming 
    const filterRocketByUpcomig = (value) => {

        setIsUpcomming(value)
        setLunchingYear("");
        setSearchPostStr("")

        let FilterRocket = []

        if (value === "yes") {

            FilterRocket = Space[0].filter(post => {

                if (post.upcoming) {
                    return post
                }
            });

        } else {

            FilterRocket = Space[0].filter(post => {

                if (!post.upcoming) {
                    return post
                }
            });
        }

        setAllSearchRocket(FilterRocket);

        setCurrentPage(1);
    }


    return (
        <div className=' w-full bg-[#1E1B3A]'>
            <div className='w-full 2xl:w-[1347px] mx-auto p-3 sm:p-10 md:p-14 lg:py-16 xl:py-20 2xl:py-32 pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-32 pb-10'>
                {/* search start */}
                <div className=' w-full bg-[#2D2853] text-white flex justify-between items-center flex-wrap p-2 sm:p-5'>
                    <div className=' w-full lg:w-1/2 flex'>
                        <div className='flex items-center'>
                            <p className=' mr-2 sm:mr-5 text-xs sm:text-lg'>Is upcomming?</p>
                            <select value={isUpcoming} onChange={(e) => { filterRocketByUpcomig(e.target.value) }} name="" id="" className=' bg-transparent text-xs sm:text-lg focus:bg-[#2D2853] focus:outline-none'>
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <span className=' hidden h-8 w-[4px] bg-gray-700 mx-5 sm:inline-block'></span>

                        <div className=' flex '>
                            <p className=' mr-2 sm:mr-5 text-xs sm:text-lg'>Lunch year?</p>
                            <select value={lunchingYear} onChange={(e) => { filterRocketByLunchYear(e.target.value) }} name="" id="" className=' bg-transparent text-xs sm:text-lg focus:bg-[#2D2853] focus:outline-none'>
                                <option value="">Select</option>
                                <option value="2006-2010">2006-2010</option>
                                <option value="2011-2015">2011-2015</option>
                                <option value="2016-2020">2016-2020</option>
                            </select>
                        </div>
                    </div>
                    <div className=' w-full lg:w-1/2 flex sm:justify-end mt-5 lg:mt-0'>
                        <div className=' flex items-center flex-col sm:flex-row w-full'>
                            <input value={searchPostStr} onChange={(e) => { setSearchPostStr(e.target.value) }} type="text" placeholder='Search for rocket' className=' w-full lg:w-auto py-2 focus:outline-none px-3 bg-transparent border-[1px] border-gray-500' />
                            <button onClick={SearchRocket} className=' h-full w-full lg:w-auto px-5 py-1 mt-2 sm:mt-0 bg-black border-[1px] border-gray-500'>Search</button>
                        </div>
                    </div>
                </div>
                {/* search end */}

                <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
                    {
                        displayPost.length > 0 && displayPost.map((i, index) => {
                            return (
                                <div key={index} className=' w-[100%] bg-[#1D0C41] text-gray-300 text-center flex flex-col items-center p-5 rounded-xl'>
                                    <img src={i.links.mission_patch} alt="" className=' w-[144px] h-[125px]' />
                                    <h3 className='russo-one text-lg xl:text-[30px] left-7 xl:leading-9 my-5 text-white'>{i.mission_name}</h3>
                                    <p className=' my-1 lg:my-2 text-base xl:text-lg font-sans leading-7'>Rocket name: {i.rocket.rocket_name}</p>
                                    <p className=' my-1 lg:my-2 text-base xl:text-lg font-sans leading-7'>Lanching year: {i.launch_year}</p>
                                    <p className=' my-1 lg:my-2 text-base xl:text-lg font-sans leading-7'>Upcoming: {i.upcoming ? "True" : "False"}</p>
                                </div>
                            )
                        })
                    }

                </div>
                <div className=' mt-10'>
                    <ReactPaginate
                        previousLabel={null}
                        nextLabel={null}
                        breakLabel="..."
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageNumber}
                        renderOnZeroPageCount={null}
                        containerClassName="w-full flex justify-center items-center"
                        pageClassName=''
                        pageLinkClassName='text-gray-600 mx-2 sm:mx-5 text-lg font-semi-bold'
                        activeClassName=""
                        activeLinkClassName='text-gray-200 mx-2 sm:mx-5 text-lg font-semi-bold'
                        breakClassName=''
                        breakLinkClassName='text-gray-600 mx-2 sm:mx-5 text-lg font-semi-bold'
                    />
                </div>

            </div>
        </div>
    )
}

export default AllRokerSection