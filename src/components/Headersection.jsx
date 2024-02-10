import React from 'react'
import Navsection from './Navsection'
import acycled from '../assets/webps/a-cycle-d.webp'
import arod from '../assets/webps/aro-d.webp'
import cycled from '../assets/webps/cycle-d.webp'


const Headersection = () => {
  return (
    <div className=' overflow-hidden bg-[url(./assets/webps/bgheaderimg.webp)] lg:bg-full bg-cover bg-center bg-repeat xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[810px] h-[660px] relative z-[1]'>
      <Navsection/>
      <div className=' max-w-[935px] px-3 mx-auto w-full'>
        <img className=' object-cover absolute bottom-[6%] right-[10%] lg:max-w-[211px] sm:max-w-[140px] max-w-[100px]  animate-flip w-full z-10 ' src={acycled} alt="#" />
        <img className=' object-cover absolute bottom-[15%] right-[43%] -z-10 md:max-w-[131px] sm:max-w-[65px] max-w-[70px] animate-flip1 w-full' src={cycled} alt="#" />
        <div className=' object-cover grid lg:grid-cols-2 gap-[30px] lg:gap-[100px] pt-[83px]'>
             <div className=' flex justify-center lg:justify-start items-start lg:items-center order-2 lg:order-1 lg:pt-[100px]  '>
                <img className=' object-cover w-full max-w-[300.14px] sm:max-w-[394.14px] h-full min-h-[170.86px] sm:min-h-[240.86px] z-10' src={arod} alt="#" />
             </div>
             <div className=' order-1 lg:order-2 flex lg:flex-col justify-center lg:justify-start '>
             <h2 className=' font-dino text-[75px] sm:text-[150px] lg:text-[175.64px] drop-shadow-[2px_6px_0px_#000] font-normal leading-[100px] sm:leading-[166.35px] text-[#FBA11D]'>D<span className=' text-[#23AAAC]'>I</span><span className=' text-[#D45B07]'>N</span><span className='text-[#8EC627]'>O</span></h2>
             <h2 className=' font-dino text-[75px] sm:text-[150px] lg:text-[175.64px] drop-shadow-[2px_6px_0px_#000] font-normal leading-[100px] sm:leading-[166.35px] text-center'><span className='text-[#8EC627]'>L</span><span className='text-[#FCCA2B]'>F</span><span className=' text-[#8F78D2]'>G</span></h2>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Headersection