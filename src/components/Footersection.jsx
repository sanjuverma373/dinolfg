import React, { useState } from 'react'
import { Arrow1, Arrow2, Ftdiscord, Ftinsta, Fttwitter } from './Icons'
import footerbg from '../assets/webps/footerbg.webp'
import layerb from '../assets/webps/roadmaplayer-b.webp'
import footerd from '../assets/webps/footer-d.webp'

const Footersection = () => {
        const [openAccordion, setOpenAccordion] = useState(null);
        const toggleAccordion = (index) => {
                setOpenAccordion(openAccordion === index ? null : index);
        };          
        

        const accordionData = [
                {
                        title: "Maecenas laoreet, sapien vel cursus ultricies?",
                        content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? ",
                },
                {
                        title: "Maecenas laoreet, sapien vel cursus ultricies?",
                        content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, ",
                },
                {
                        title: "Maecenas laoreet, sapien vel cursus ultricies?",
                        content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? ",
                },
                {
                        title: "Maecenas laoreet, sapien vel cursus ultricies?",
                        content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies sapien vel cursus ultricies?",
                },
                {
                        title: "Maecenas laoreet, sapien vel cursus ultricies?",
                        content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, ",
                },
                {
                        title: "Maecenas laoreet, sapien vel cursus ultricies?",
                        content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, vel cursus ultricies?",
                },
        ];
        return (
                <div id='faq' className=' bg-[#0A4740] relative'>
                        <div className="max-w-[970px] px-3 mx-auto pt-[80px] sm:pt-[100px] md:pt-[170px] lg:pt-[298px]">
                        <h2 className='sm:text-[64px] text-[40px] leading-[132%] text-center font-normal font-Chewy text-white lg:mb-[61px] mb-[35px]'>FAQs</h2>
                                <div className="accordion">
                                        {accordionData.map((item, index) => (
                                                <div className="accordion-item py-[22px] pr-[20px] sm:pr-[53px] pl-[26px] bg-[#09655A]" key={index}>
                                                        <div onClick={() => toggleAccordion(index)} className="flex justify-between items-center">
                                                                <div className="accordion-title font-Balsamiq text-[13px] sm:text-[16px] md:text-[20px] text-start font-bold text-white w-full justify-between" >{item.title}</div>
                                                                <p className="text-white font-sans text-4xl cursor-pointer bg-white w-[30px] sm:w-[39px] h-[26px] sm:h-[37px] rounded-full flex items-center justify-center">{openAccordion === index ? (<Arrow2/>) :(<Arrow1/>)  }</p>
                                                        </div>
                                                        <div className={`accordion-content text-[11px] sm:text-[14px] md:text-[16px] font-medium text-white ${openAccordion === index ? "open" : ""}`} >
                                                                {item.content}
                                                        </div>
                                                </div>
                                        ))
                                        }
                                </div >
                        </div>
                        <div className='relative lg:mt-[248px] md:mt-[150px] sm:mt-[100px] mt-[50px] pb-[75px] lg:pb-[267px] md:pb-[150px]'>
                                <div data-aos="fade-down" className='container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative z-10 flex flex-col lg:gap-[33px] gap-[20px] justify-center items-center'>
                                        <h2 className='font-dino text-[50px] sm:text-[80.366px] text-center leading-[95%] font-normal text-[#FBA11D] drop-shadow-[0px_1.337px_0px_#000]'>
                                                D
                                                <span className='text-[#23AAAC]'>i</span>
                                                <span className='text-[#D45B07]'>n</span>
                                                <span className='text-[#8EC627]'>o</span>
                                                <span className='text-[#FCCA2B]'>L</span>
                                                <span className='text-[#8F78D2]'>F</span>
                                                <span className='text-[#8EC627]'>G</span>
                                        </h2>
                                        <p className='text-[14px] font-normal font-Balsamiq text-center text-white max-w-[376px] leading-[122%]'>Sed tempus pretium est, vestibulum dapibus mauris viverra id. Curabitur feugiat porta lorem,  </p>
                                        <div className='flex items-center justify-center gap-2'>
                                                <a className=' hover:-translate-y-1  duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(223,232,229,0.36)]' href="https://www.instagram.com/" target='_blank'><Fttwitter /></a>
                                                <a className=' hover:-translate-y-1  duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(223,232,229,0.36)]' href="https://www.instagram.com/" target='_blank'><Ftdiscord /></a>
                                                <a className=' hover:-translate-y-1 duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(223,232,229,0.36)]' href="https://www.instagram.com/" target='_blank'><Ftinsta /></a>
                                        </div>
                                </div>
                                <img src={footerbg} alt="FooterForest" className='absolute 2xl:bottom-[-5%] bottom-0 left-0 right-0 w-full' />
                        </div>
                        <img className=' absolute top-[-23px] w-full' src={layerb} alt="#" />
                        <img className=' absolute bottom-1 right-[9%] animate-flip lg:max-w-[211px] sm:max-w-[140px] max-w-[50px]' src={footerd} alt="" />
                </div>
        )
}

export default Footersection
