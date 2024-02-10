import React, { useState } from 'react'
import backtop from '../assets/webps/backtop.webp'

const Backtop = () => {
        const [isVisible, setIsVisible] = useState(false);

        const scrollToTop = () => {
                window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                });
        };

        window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                        setIsVisible(true);
                } else {
                        setIsVisible(false);
                }
        });
        return (
                <>
                        <button className={`back-to-top ${isVisible ? 'visible' : ''} fixed bottom-[14px] right-[14px] z-[100]`}
                                onClick={scrollToTop}
                                style={{ display: isVisible ? 'block' : 'none', }} >
                                <div className='w-[30px] h-[30px] xs:w-[50px] xs:h-[50px] cursor-pointer rounded-full bg-[#FECC48] hover:-translate-y-1 duration-300 hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)] flex justify-center items-center'>
                                        <img src={backtop} alt="#" />
                                </div>
                        </button>
                </>
        )
}

export default Backtop
