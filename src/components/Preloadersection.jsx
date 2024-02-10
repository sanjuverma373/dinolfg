import React, { useEffect, useState } from 'react'

const Preloadersection = () => {
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
                const delay = setTimeout(() => {
                        setIsLoaded(true);
                        document.body.style.overflow = '';
                }, 3500);

                return () => clearTimeout(delay);
        }, []);
        useEffect(() => {
                document.body.style.overflow = 'hidden';
        }, []);
  return (
        <div className=" duration-300 w-screen h-screen bg-[#0A4740] fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
        <div className='flex items-center justify-center h-screen'>
                <div className="flex items-center justify-center  flex-colum gap-6">
                        <div className="loader animate-bounce aspect-square w-8 flex flex-col justify-center items-center">
                        <h2 className=' cursor-pointer drop-shadow-[0px_1.337px_0px_#000] font-dino text-[64px] sm:text-[94px] font-normal leading-[37.13px] text-[#FBA11D]'>D<span className=' text-[#23AAAC]'>i</span><span className=' text-[#D45B07]'>n</span><span className='text-[#8EC627]'>o</span><span className='text-[#FCCA2B]'>L</span><span className='text-[#8F78D2]'>F</span><span className=' text-[#8EC627]'>G</span></h2>
                        </div>
                </div>

        </div>
</div>
  )
}

export default Preloadersection
