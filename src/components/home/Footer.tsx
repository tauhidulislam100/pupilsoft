import React from 'react';
import { RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';
import Button from 'components/common/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bottom-0 left-0 -z-0 bg-black"
    >
      <div className="w-[90%] xl:w-[80%] pt-5 sm:py-10 mx-auto border-t border-white/20">
        <div className="gap-10 mt-10 lg:mt-20 2xl:mt-40">
          <div className="space-y-5 text-white">
            <div className="sm:flex flex-wrap lg:flex-nowrap gap-6">
              <div className="sm:max-w-[65%] lg:max-w-[auto]">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] 2xl:leading-[90px] font-bold 2xl:whitespace-nowrap">
                  Let&apos;s Make It Together
                </h1>
                <p className="mt-2 text-sm md:text-base xl:text-lg 2xl:text-[22px] text-[#E0E0E0] 2xl:w-[690px]">
                  The baseline is the invisible line upon which a line of text
                  rests. In Material Design, the baseline is an important
                  specification in measuring
                </p>
              </div>
              <div className="">
                {/* <h3 className="uppercase text-secondary text-2xl md:text-3xl lg:text-[35px] lg:leading-[90px] font-bold">
                Review
                </h3> */}
                <div className="mt-5 sm:mt-0 flex sm:block w-[150px] md:w-[180px] 2xl:w-[223px]">
                  <Image
                    src={'/img/clutch_banner.png'}
                    alt="Clutch"
                    width={223}
                    height={72}
                  />
                  <Image
                    src={'/img/trustpilot.png'}
                    alt="Clutch"
                    width={221}
                    height={76}
                    className="sm:mt-2 ml-3 sm:ml-0"
                  />
                </div>
              </div>
              <div className="flex-1 mt-5 lg:ml-5 w-fit sm:flex justify-between gap-5 md:gap-0 lg:block">
                <button className="w-full md:w-[298px] xl:w-[398px] h-14 sm:h-[65px] transition-all duration-300 py-2.5 text-base lg:text-lg uppercase font-commissioner text-[22px] border-b xl:border-b-2 font-semibold tracking-[10px] text-white border-[#5F5F5F] hover:bg-dark hover:border-gray-800">
                  Get a Quote
                </button>
                <button className="w-full md:w-[298px] xl:w-[398px] h-14 sm:h-[65px] transition-all duration-300 py-2.5 text-base lg:text-lg uppercase font-commissioner text-[22px] border-b xl:border-b-2 font-semibold tracking-[10px] text-white border-[#5F5F5F] hover:bg-dark hover:border-gray-800">
                  Let&apos;s Talk
                </button>
              </div>
            </div>
            <div className="lg:flex gap-7">
              <div className="lg:w-3/5 space-y-10">
                <div className="pt-10 2xl:pt-20 sm:flex justify-evenly gap-5 lg:gap-10 font-jost">
                  <div className="w-full">
                    <label htmlFor="name" className="font-bold text-base">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className=" transition-colors duration-100 ease-in-out block placeholder:text-[#BCBCBC] mt-2.5 w-full bg-[#060E2299] focus:bg-[#060E22] border-b xl:border-b-2 border-[#5F5F5F] focus:border-gray-800 px-6 py-4 focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <div className="w-full mt-5 sm:mt-0">
                    <label htmlFor="name" className="font-bold text-base">
                      Your Email
                    </label>
                    <input
                      type="text"
                      placeholder="johndoe@gmail.com"
                      className="transition-colors duration-100 ease-in-out block placeholder:text-[#BCBCBC] mt-2.5 w-full bg-[#060E2299] focus:bg-[#060E22] border-b xl:border-b-2 border-[#5F5F5F] focus:border-gray-800 px-6 py-4 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-full mt-3">
                  <label htmlFor="name" className="font-bold text-base">
                    How can we Help you?
                  </label>
                  <textarea
                    placeholder="help me...."
                    className="block placeholder:text-[#BCBCBC] mt-2.5 w-full h-[140px] md:h-[190px] xl:h-[211px] bg-[#060E2299] focus:bg-[#060E22] border-b xl:border-b-2 border-[#5F5F5F] focus:border-gray-800 px-6 py-4 focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex-1 mt-5">
                <label htmlFor="name" className="font-bold text-base">
                  Upload your file
                </label>
                <div className="mt-4 h-[150px] md:h-[200px] xl:h-[241px] border-b xl:border-b-2 border-[#5F5F5F] border-spacing-3 flex justify-center items-center">
                  <p className="py-10 text-center text-sm xl:text-lg 2xl:text-xl font-jost font-light">
                    Drop useful files here or{' '}
                    <span className="font-bold">upload</span> them from your
                    computer
                    <br /> We accept files up to 15 MB
                  </p>
                </div>
                <div className="text-secondary mt-7 lg:mt-[57px]">
                  <h3 className="uppercase font-bold text-xl xl:text-2xl 2xl:leading-[90px]">{`We're here:`}</h3>
                  <p className="text-[#828080] text-base xl:text-lg 2xl:text-xl font-commissioner mt-2 2xl:mt-0">
                    <span className="font-bold mr-1 uppercase">MAIL TO:</span>
                    tauhidulislam100@gmail.com
                    <br />
                    <span className="font-bold mr-1 uppercase">
                      working hours:
                    </span>{' '}
                    From 9 am to 8 pm(UTC + 3)
                  </p>
                </div>
              </div>
            </div>
            <button className="w-full h-14 sm:h-16 xl:h-20 2xl:h-[92px] transition-all duration-300 py-2.5 text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl uppercase font-jost border-b xl:border-b-2 font-medium tracking-[10px] text-white border-[#5F5F5F] hover:bg-dark hover:border-gray-800">
              Submit
            </button>
          </div>
          {/* <div className="lg:w-2/5 pt-5 space-y-8 lg:space-y-10">
            <Button className="text-xl py-4 lg:py-5 lg:text-[26px] hidden lg:inline-block">
              Get in Touch
            </Button>
            <Button className="text-xl py-4 lg:py-5 lg:text-[26px] hidden lg:inline-block">
              Let's talk
            </Button>
            <Button className="text-xl py-4 lg:hidden">Get in Touch</Button>
            <Button className="text-xl py-4 lg:hidden">Let's talk</Button>
            <div className="text-secondary font-bold">
              <h3 className="uppercase text-2xl md:text-3xl lg:text-[35px] lg:leading-[90px]">
                Drop us a line:
              </h3>
              <p className="">codestudionfo@gmail.com</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-black text-xs text-center py-8 2xl:py-10">
        <p className="text-[#E0E0E0] font-commissioner text-[15px]">
          &copy; Copyright {new Date().getFullYear()}. Designed by Tuhin
        </p>
      </div>
    </motion.section>
  );
};

export default Footer;
