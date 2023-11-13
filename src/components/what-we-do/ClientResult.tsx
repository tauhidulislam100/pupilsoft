import { Button } from 'components/common';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const ClientResult = () => {
  return (
    <section className="bg-dark bg-[url('/img/twice_code2.png')] bg-[length:50%_1087px] bg-no-repeat bg-right 2xl:h-[1087px]">
      <div className="bg-dark/40 py-10 md:py-16 lg:py-24 2xl:pt-[127px] xl:pb-[119px] h-full">
        <div className="w-[85%] xl:w-3/4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              duration: 1,
              stiffness: 50,
            }}
            className="max-w-[723px] text-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] font-bold">
              Turnkey web app development
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:ltext-xl 2xl:text-[22px] 2xl:leading-[30px] font-light mt-3 md:mt-4 lg:mt-6">
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization,{' '}
            </p>
          </motion.div>
          <div className="sm:flex items-center justify-between mt-10 lg:mt-14 2xl:mt-[88px] xl:gap-5 2xl:gap-10">
            <div className="pt-5 md:pt-8 lg:pt-10 2xl:pt-[51px] pb-4 md:pb-6 lg:pb-[33px] px-5 sm:px-8 lg:px-10 xl:px-16 2xl:px-24 bg-white sm:w-[65%]  md:w-[67%] lg:w-[75%] xl:w-[75%] 2xl:w-[1075px]">
              <p className="text-[#677085] text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.1px] text-center">
                Client Results
              </p>
              <div className="pt-3 sm:pt-4 md:pt-5 2xl:pt-9 grid grid-cols-2 divide-x-2 divide-[#BCC0CB] overflow-hidden">
                <div className="py-4 sm:py-5 md:py-8 lg:py-14 xl:py-20 font-poppins text-center overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-[120px] text-[#1D3061] 2xl:leading-[120px] font-bold"
                  >
                    32%
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-[25px]"
                  >
                    {' '}
                    web solutions development
                  </motion.p>
                </div>
                <div className="py-4 sm:py-5 md:py-8 lg:py-14 xl:py-20 font-poppins text-center overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-[120px] text-[#1D3061] 2xl:leading-[120px] font-bold"
                  >
                    56%
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-[25px]"
                  >
                    {' '}
                    web solutions development
                  </motion.p>
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:space-y-[22px] sm:max-w-[150px] md:max-w-[160px] lg:w-[190px] 2xl:max-w-[278px] mt-5 sm:mt-0 sm:ml-auto">
              <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className=""
              >
                <Button className="py-2 lg:py-2.5 text-sm md:text-base lg:text-lg whitespace-nowrap">
                  Get a Quote
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className=""
              >
                <Button className="py-2 lg:py-2.5 text-sm md:text-base lg:text-lg whitespace-nowrap">
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientResult;
