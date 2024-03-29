import React from 'react'
import aboutlayer from '../assets/webps/AboutLayer.webp'
import toktreed from '../assets/webps/toktree-d.webp'
import circletok from "../assets/webps/circle-tok.webp";
import colorbox from "../assets/webps/box-color.webp";
import toklayer from "../assets/webps/tok-layer.webp";
import tokshadow from '../assets/images/tok-shadow.png';
import TokenDino from '../assets/webps/tok-tree-2.webp';

const Tokenomics = () => {
  return (
    <>
      <div id="tokenomic" className="relative bg-[#0A4740]">
                <img src={tokshadow} alt="TokenomicsLayer" className="max-w-[400px] absolute right-0 top-[16%] " />
                <img src={toklayer} alt="TreeLayer" className=" absolute w-full left-0 right-0 bottom-0 " />
                <img src={aboutlayer} alt="AboutLayor" className="absolute top-[-2px] left-0 right-0 w-full " />
                <div className="container relative z-[1] xl:max-w-[1147px] xl:px-3 px-6 mx-auto lg:pt-[250px] sm:pt-[120px] pt-[80px] xl:pb-[540px] lg:pb-[450px] sm:pb-[200px] pb-[175px]">
                    <h2 data-aos="fade-down" className="text-white font-normal font-Chewy sm:text-[64px] text-[35px] leading-[131%] text-center lg:mb-[166px] mb-[100px]">Tokenomics</h2>
                    <div className="flex items-center justify-center lg:flex-row flex-col">
                        <div className="relative xl:max-w-[589.84px] md:max-w-[430px] sm:max-w-[300px] max-w-[270px]">
                            <img data-aos="zoom-in" src={circletok} alt="BabyDino" className="absolute md:bottom-[59%] bottom-[56%] lg:left-[28%] md:left-[26%] left-[28%] xl:max-w-[252.57px] md:max-w-[188px] max-w-[128px] w-full" />
                            <img data-aos="zoom-in"
                                src={colorbox} alt="BottomDino" className="w-full " />
                            <img src={toktreed} alt="TokenomicsCartoon" className="absolute w-full mini-dino lg:top-[-29%] md:top-[-20%] md:left-[39%] top-[-42%] left-[37%] xl:max-w-[133.72px] lg:max-w-[100px] max-w-[80px] animate-flip3" />
                            <div data-aos="zoom-in" className="lg:flex hidden absolute lg:top-[12%] top-[41%] xl:left-[-45%] lg:left-[-61%] left-[-40%] lg:gap-[26.11px] gap-[15px]">
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#FBA11D] leading-[119%] lg:text-[32px] text-[20px] font-normal font-Balsamiq">333,333,333</p>
                                    <p className="text-white leading-[138%] font-normal text-[24px] text-right font-Balsamiq">Supply </p>
                                </div>
                                <div className="border border-solid border-white border-r-0 border-b-0 h-[88px] w-[16px]"></div>
                            </div>
                            <div data-aos="zoom-in" className="lg:flex hidden absolute lg:top-[24%] xl:top-[12%] top-[43%] xl:right-[-50%] lg:right-[-67%] right-[-48%] lg:gap-[26.11px] gap-[15px]">
                                <div className="border border-solid border-white border-l-0 border-b-0 h-[88px] w-[16px]"></div>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#8EC627] lg:max-w-[217px] max-w-[164px] leading-[119%] lg:text-[32px] text-[23px] font-normal font-Balsamiq"> Liquidity lock for 1 year </p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="lg:flex hidden absolute xl:bottom-[-45%] lg:bottom-[-60%] bottom-[-28%] lg:left-[39%] xl:left-[42%] left-[38%] justify-center items-center flex-col gap-[17px]">
                                <div className="bg-white h-[43px] w-[1px]"></div>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#D45B07] max-w-[217px] leading-[119%] text-[32px] font-normal font-Balsamiq"> No Tax </p>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="lg:flex hidden absolute xl:bottom-[-27%] lg:bottom-[-54%]  bottom-[-17%] xl:left-[-27%] lg:left-[-42%] justify-center items-center gap-[17px]">
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#23AAAC] max-w-[217px] leading-[119%] lg:text-[32px] text-[23px] font-normal font-Balsamiq"> 95% Uniswa </p>
                                    <p className="text-[#23AAAC] max-w-[217px] text-right leading-[119%] lg:text-[32px] text-[23px] font-normal font-Balsamiq"> 5% Marketing </p>
                                    <p className="text-white max-w-[217px] text-right leading-[119%] lg:text-[32px] text-[23px]  font-normal font-Balsamiq"> Allocation</p>
                                </div>
                                <div className="border-white border border-solid h-[102px] w-[16px] border-b-0 border-r-0 skew-y-[-50deg] "></div>
                            </div>
                            <div data-aos="zoom-in" className="lg:flex hidden absolute lg:bottom-[-47%] xl:bottom-[-23%] bottom-[-18%] xl:right-[-31%] right-[-49%] justify-center items-center gap-[17px]">
                                <div className="border-white border border-solid h-[102px] w-[16px] border-b-0 border-l-0 skew-y-[52deg] "></div>
                                <p className="text-[#FB5352] leading-[119%] lg:text-[32px] text-[23px] font-normal font-Balsamiq"> No Mint Function </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="lg:hidden flex justify-center w-full items-center mt-12">
                            <div className=" flex flex-col sm:gap-[35px] gap-[20px]">
                                <div className="flex sm:gap-[32px] gap-[20px]">
                                    <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#FBA11D]"></div>
                                    <div className="flex flex-col gap-[5px]">
                                        <p className="text-[#FBA11D] leading-[119%] sm:text-[32px] text-[20px] font-normal font-Balsamiq"> 333,333,333 </p>
                                        <p className="text-white leading-[138%] font-normal text-[20px] font-Balsamiq"> Supply </p>
                                    </div>
                                </div>
                                <div className="flex sm:gap-[32px] gap-[20px]">
                                    <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#23AAAC]"></div>
                                    <div className="flex flex-col gap-[5px]">
                                        <div className="flex flex-row flex-wrap gap-[5px]">
                                            <p className="text-[#23AAAC] leading-[119%] sm:text-[32px] text-[20px] font-normal font-Balsamiq"> 95% Uniswa </p>
                                            <p className="text-[#23AAAC] leading-[119%] sm:text-[32px] text-[20px] font-normal font-Balsamiq">5% Marketing</p>
                                        </div>
                                        <p className="text-white leading-[138%] sm:text-[32px] text-[20px] font-normal font-Balsamiq"> Allocation</p>
                                    </div>
                                </div>
                                <div className="flex sm:gap-[32px] gap-[20px]">
                                    <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#D45B07]"></div>
                                    <div className="flex flex-col gap-[5px]">
                                        <p className="text-[#D45B07] leading-[119%] sm:text-[32px] text-[20px] font-normal font-Balsamiq">No Tax </p>
                                    </div>
                                </div>
                                <div className="flex sm:gap-[32px] gap-[20px]">
                                    <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#FB5352]"></div>
                                    <div className="flex flex-col gap-[5px]">
                                        <p className="text-[#FB5352] leading-[119%] sm:text-[32px] text-[20px] font-normal font-Balsamiq">No Mint Function </p>
                                    </div>
                                </div>
                                <div className="flex sm:gap-[32px] gap-[20px]">
                                    <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#8EC627]"></div>
                                    <div className="flex flex-col gap-[5px]">
                                        <p className="text-[#8EC627] leading-[119%] sm:text-[32px] text-[20px] font-normal font-Balsamiq">Liquidity lock for 1 year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={TokenDino} alt="TokenDino" className="xl:max-w-[280px] lg:max-w-[200px] sm:max-w-[150px] max-w-[100px] w-full absolute bottom-0 left-0 " />
            </div>
    </>
  )
}

export default Tokenomics
