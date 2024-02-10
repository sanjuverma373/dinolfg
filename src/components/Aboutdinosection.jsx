import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import abouttree1 from '../assets/images/about-tree-1.webp';
import abouttree2 from '../assets/images/about-tree-2.webp';
import dragon from '../assets/images/about-dragon.webp';

const Aboutdinosection = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);
    return (
        <>
            <div id='about' className='bg-[#09655A] sm:pt-[76px] pt-[8px] sm:pb-[17px] pb-[30px] mt-[-2px]'>
                <div className="relative">
                    <div className='container mx-auto xl:max-w-[1157px] px-3 xl:px-6'>
                        <div data-aos="zoom-in"
                            data-aos-duration="2000" className='flex items-center justify-center sm:flex-row flex-col sm:gap-[22px] gap-[5px]'>
                            <h3 data-aos="fade-down-right" className=' font-Chewy sm:text-[64px] text-[40px] font-normal text-white leading-[132%]'>About</h3>
                            <h2 data-aos="fade-down-right" className=' font-dino sm:text-[69.669px] text-[50px] mt-1 font-normal text-[#FBA11D] leading-[95%] drop-shadow-[0px_1.337px_0px_#fff]'>
                                D
                                <span className='text-[#23AAAC]'>i</span>
                                <span className='text-[#D45B07]'>n</span>
                                <span className='text-[#8EC627]'>o</span>
                                <span className='text-[#FCCA2B]'>L</span>
                                <span className='text-[#8F78D2]'>F</span>
                                <span className='text-[#8EC627]'>G</span>
                            </h2>
                        </div>
                        <div data-aos="fade-down-right" className='flex flex-col items-center justify-center md:px-0 sm:px-7 px-3 lg:px-14'>
                            <p className='sm:text-[24px] text-[17px] font-normal font-Balsamiq text-white text-center sm:mt-[42px] mt-[25px] leading-[121%]'>$DINO is a meme coin with very strong utility.</p>
                            <p className='max-w-[560px] sm:text-[24px] text-[17px] font-Balsamiq font-normal text-white text-center sm:mt-[18px] mt-[14px] leading-[128%]'>Biggest problem of meme coins is lack of utility and usecase, <span className='text-[#8EC627] cursor-pointer'>$</span>
                                <span className='text-[#FBA11D] cursor-pointer'>D</span>
                                <span className='text-[#23AAAC] cursor-pointer'>I</span>
                                <span className='text-[#D45B07] cursor-pointer'>N</span>
                                <span className='text-[#FB5352] cursor-pointer'>O</span> is going to fix it.</p>
                            <p className='mt-[10px] sm:text-[24px] text-[17px] font-normal text-white max-w-[522px] text-center font-Balsamiq leading-[117%]'>We want to bring a lot of usecases and utility to $DINO holders, just sit back and relax.</p>
                            <p className='mt-[14px] sm:text-[24px] text-[17px] font-normal text-white max-w-[599px] text-center font-Balsamiq leading-[121%]'>In $DINO, we want to build a very strong community, that’s why we are going to have a lot of games and crypto tips in our Telegram and Twitter.</p>
                        </div>
                    </div>
                    <img src={abouttree1} alt="AboutTree1" className='lg:max-w-[190px] md:max-w-[130px] sm:max-w-[90px] max-w-[90px] bottom-0 w-full absolute lg:bottom-[-34%] md:bottom-[-10%] left-0 z-10' />
                    <img src={abouttree2} alt="AboutTree2" className='lg:max-w-[270px] md:max-w-[150px] sm:max-w-[100px] max-w-[90px] bottom-[4%] w-full absolute lg:bottom-[-12%] md:bottom-[-3%] right-0 z-10' />
                    <img src={dragon} alt="BabyDragon" className='lg:max-w-[169px] sm:block hidden mini-dino max-w-[60px] w-full absolute right-0 lg:bottom-[-18%] bottom-[-4%] z-10' />
                </div>
            </div>
        </>
    )
}

export default Aboutdinosection
