import React from 'react'
import utilitydl from '../assets/webps/edina-l.webp'
import cycledina from '../assets/webps/c-dina.webp'
import roadmaptlayert from '../assets/webps/roadmaplayer-t.webp'
import utilityLayer from '../assets/webps/utilitylayer.webp'
import utilityTree from '../assets/webps/utility-tree.webp'

const Utilitysection = () => {
  return (
        <div className='relative overflow-x-clip bg-[#0A4740]'>
        <img src={utilityLayer} alt="utilityLayer" className=' -translate-y-2 w-full' />

        <div className='container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative z-10'>
            <h2 className=' font-Chewy sm:text-[64px] text-[35px] font-normal text-white text-center leading-[132%]'>Utility and Usecase</h2>
            <div className='relative z-10 xl:mt-[158px] max-lg:overflow-hidden lg:mt-[100px] md:mt-[70px] mt-[40px] rounded-[20px] border border-solid lg:h-[266px] border-white bg-[#09655A] lg:py-[62px] pt-[40px] lg:pl-[39px] lg:pr-[26px] px-[20px] flex lg:justify-between lg:flex-row flex-col'>
                <div data-aos="zoom-in">
                    <p className='max-w-[681px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[20px] font-normal text-white leading-[119%] font-Balsamiq'>We are going to work hard in otder to add <span className='text-[#8EC627] cursor-pointer'>$</span>
                        <span className='text-[#FBA11D] cursor-pointer'>D</span>
                        <span className='text-[#23AAAC] cursor-pointer'>I</span>
                        <span className='text-[#D45B07] cursor-pointer'>N</span>
                        <span className='text-[#FB5352] cursor-pointer'>O</span> to main platforms as a form of payment</p>
                    <p className='max-w-[695px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[20px] font-normal text-white mt-[28px] leading-[120%] font-Balsamiq'>You will be able to buy a lot of things with <span className='text-[#8EC627] cursor-pointer'>$</span>
                        <span className='text-[#FBA11D] cursor-pointer'>D</span>
                        <span className='text-[#23AAAC] cursor-pointer'>I</span>
                        <span className='text-[#D45B07] cursor-pointer'>N</span>
                        <span className='text-[#FB5352] cursor-pointer'>O</span></p></div>
                <img src={utilitydl} alt="crocoWithGlasses" className='sm:max-w-[253px] max-w-[160px] lg:mt-[-130px] mt-6  lg:h-[332px] utility_croco w-full animate-flip3' />
            </div>
            <div className='relative max-lg:overflow-hidden z-20 lg:mt-[125px] mt-[60px] rounded-[20px] border border-solid bg-[#09655A] lg:py-[95px] pt-[40px] lg:pr-[27px] lg:pl-0 px-5 lg:h-[266px] border-white flex lg:justify-between lg:flex-row flex-col-reverse lg:items-center '>
                <img src={cycledina} alt="crocoWithCycle" className='sm:max-w-[267px] utility_croco1 max-w-[160px] lg:h-[334px] lg:translate-y-[-35px] lg:mt-0 mt-7 lg:ml-[-6px] animate-flip3' />
                <div data-aos="zoom-in" className=''>
                    <p className='sm:text-[32px] text-[20px] font-normal lg:text-end text-center text-white leading-[119%]  font-Balsamiq'>We are going to have staking and buyback/ burning mechanism</p>
                </div>
            </div>
            <img src={utilityTree} alt="utilityTree" className='lg:max-w-[320px] max-w-[200px] w-full absolute lg:right-[-20%] right-[-14%] bottom-0' />
        </div>
        <img src={roadmaptlayert} alt="TimelineLayer" className=' translate-y-5 mt-[40px] sm:mt-[168px] w-full' />
    </div>
  )
}

export default Utilitysection
