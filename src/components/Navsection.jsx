import React, { useState } from 'react'
import { Discord, Insta, Twitter } from './Icons';

const Navsection = () => {
        const [first, setfirst] = useState(false);
        function MobileView() {
                setfirst(!first);
                if (first === false) {
                        document.body.classList.add("overflow-hidden");
                } else {
                        document.body.classList.remove("overflow-hidden");
                }
        }

        { first ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden") }
        return (
                <div>
                        <div className=' max-w-[1132px] mx-auto px-3 w-full pt-7'>
                                <div className=' bg-white rounded-[61px] border-b-4 pt-2 pb-1 pl-6 pr-[7px] border-black'>
                                        <div className=' flex items-center justify-between relative'>
                                                <h2 className=' cursor-pointer drop-shadow-[0px_1.337px_0px_#000] font-dino text-[39.13px] font-normal leading-[37.13px] text-[#FBA11D]'>D<span className=' text-[#23AAAC]'>i</span><span className=' text-[#D45B07]'>n</span><span className='text-[#8EC627]'>o</span><span className='text-[#FCCA2B]'>L</span><span className='text-[#8F78D2]'>F</span><span className=' text-[#8EC627]'>G</span></h2>
                                                <ul className={` ${first ? "left-0" : "left-[-100%]"} flex items-center gap-[28px] duration-300 mobileview2  max-lg:justify-center max-lg:flex-col max-lg:text-black max-lg:w-full max-lg:h-full  max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:bg-white`}>
                                                        <li onClick={() => setfirst(false)} className=' cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-black font-Chewy font-normal text-[18px] leading-[23.52px]'><a className='' href="#about">About</a></li>
                                                        <li onClick={() => setfirst(false)} className='cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-[1px] after:rounded-xl after:h-[2px] after:bg-black font-Chewy font-normal text-[18px] leading-[23.52px]'><a className='' href="#tokenomic">Tokenomic</a></li>
                                                        <li onClick={() => setfirst(false)} className='cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-[1px] after:rounded-xl after:h-[2px] after:bg-black font-Chewy font-normal text-[18px] leading-[23.52px]'><a className='' href="#roadmap">Roadmap</a></li>
                                                        <li onClick={() => setfirst(false)} className='cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-[1px] after:rounded-xl after:h-[2px] after:bg-black font-Chewy font-normal text-[18px] leading-[23.52px]'><a className='' href="#faq">FAQ</a></li>
                                                        <li className=' block md:hidden'><span className='  flex flex-col items-center'>
                                                                <span className=' flex items-center gap-2'>
                                                                        <span className=' hover:-translate-y-1 duration-300  hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)] cursor-pointer border border-black w-[37px] h-[37px] rounded-full flex items-center justify-center'>
                                                                                <Twitter />
                                                                        </span>
                                                                        <span className='hover:-translate-y-1 duration-300  hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)] cursor-pointer border border-black w-[37px] h-[37px] rounded-full flex items-center justify-center'>
                                                                                <Discord />
                                                                        </span>
                                                                        <span className='hover:-translate-y-1 duration-300  hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)] cursor-pointer border border-black w-[37px] h-[37px] rounded-full flex items-center justify-center mr-[13px]'>
                                                                                <Insta />
                                                                        </span>
                                                                </span>
                                                                <span className='bg-[url(./assets//webps/nav-btn-bg.webp)] bg-no-repeat bg-cover bg-center w-[138px] h-[54.57px] flex items-center justify-center cursor-pointer group mt-7 '>
                                                                        <h2 className=' font-Chewy pb-[10px] text-[18px] font-normal leading-[23px] group-hover:text-white duration-300 '>Join Now</h2>
                                                                </span>
                                                        </span></li>
                                                </ul>
                                                <div className=' hidden md:block'>
                                                        <div className=' flex items-center'>
                                                                <div className=' flex items-center gap-2'>
                                                                        <span className=' hover:-translate-y-1 duration-300  hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)] cursor-pointer border border-black w-[37px] h-[37px] rounded-full flex items-center justify-center'>
                                                                                <Twitter />
                                                                        </span>
                                                                        <span className=' hover:-translate-y-1 duration-300  hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)] cursor-pointer border border-black w-[37px] h-[37px] rounded-full flex items-center justify-center'>
                                                                                <Discord />
                                                                        </span>
                                                                        <span className=' hover:-translate-y-1 duration-300  hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)] cursor-pointer border border-black w-[37px] h-[37px] rounded-full flex items-center justify-center mr-[13px]'>
                                                                                <Insta />
                                                                        </span>
                                                                </div>
                                                                <div className='bg-[url(./assets//webps/nav-btn-bg.webp)] bg-no-repeat bg-cover bg-center w-[138px] h-[54.57px] flex items-center justify-center cursor-pointer group '>
                                                                        <h2 className=' font-Chewy pb-[10px] text-[18px] font-normal leading-[23px] group-hover:text-white duration-300 '>Join Now</h2>
                                                                </div>
                                                        </div>
                                                </div>
                                                <label className=" lg:hidden" onClick={MobileView}>
                                                        {first ? (
                                                                <div className="z-20 relative pr-4">
                                                                        <span className="flex bg-black absolute -left-7 duration-300 rounded-lg top-1 rotate-45 h-[3px] w-6"></span>
                                                                        <span className="flex bg-black absolute -left-7 duration-300 rounded-lg -rotate-45 h-[3px] w-6 mt-1"></span>
                                                                </div>
                                                        ) : (
                                                                <div className="z-20 relative pr-4">
                                                                        <span className="flex bg-black h-[3px] rounded-xl duration-300 w-6 "></span>
                                                                        <span className="flex bg-black h-[3px] rounded-xl duration-300 w-6 my-1"></span>
                                                                        <span className="flex bg-black h-[3px] rounded-xl duration-300 w-6 "></span>
                                                                </div>
                                                        )}
                                                </label>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default Navsection
