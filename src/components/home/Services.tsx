import React from 'react';
import { BsBook } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import Image from 'next/image';
import { dummyPartners } from 'utils/sample-data';
import { motion, useAnimate, stagger, useInView } from 'framer-motion';

const Services = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          duration: 1,
          stiffness: 50,
        }}
        className="text-center px-5 lg:px-0"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[50px] text-dark font-medium mt-10 uppercase font-poppins">
          Our web development services
        </h2>
        <p className="mt-3 max-w-[650px] xl:max-w-[870px] mx-auto font-poppins text-sm sm:text-lg xl:text-lg 2xl:text-xl text-dark">
          Specialists at Innowise Group launch, manage, and complete CMS website
          development projects of any scope and complexity, including:
        </p>
        <div className="pt-5 flex items-center justify-center">
          <div className="w-[150px] md:w-[214px] h-[1px] rounded-full bg-black" />
          <div className="w-[60px] sm:w-[80px] md:w-[100px] h-2.5 md:h-[15px] rounded-full bg-black" />
          <div className="w-[150px] md:w-[214px] h-[1px] rounded-full bg-black" />
        </div>
      </motion.div>
      <div className="w-full sm:mt-10 lg:mt-16 xl:mt-20 2xl:mt-32 px-[5%] xl:px-[10%] py-12 xl:py-[71px] sm:grid grid-cols-2 gap-y-4 gap-x-4 sm:gap-0">
        <div className="sm:pt-8 lg:pt-[50px] pb-10 lg:pb-14 2xl:pb-[110px] sm:pr-8 lg:pr-14 2xl:pr-[72px] border-black sm:border-r sm:border-b">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-[50px] h-[42.56px] lg:w-[110px] lg:h-[95px] 2xl:w-[148px] 2xl:h-[124px]"
          >
            <img src="/img/turnkeyFill.svg" alt="" />
          </motion.div>
          <div className="font-poppins pt-5 lg:pt-10">
            <motion.h4
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-base sm:text-xl lg:text-2xl 2xl:text-3xl font-medium tracking-[0.1px] font-poppins text-black"
            >
              Turnkey web app development
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-black text-sm sm:text-base lg:text-xl 2xl:text-2xl font-light pt-4 lg:pt-6 2xl:pt-8 max-w-[631px]"
            >
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </motion.p>
          </div>
        </div>
        <div className="sm:pt-8 lg:pt-[42px] pb-10 lg:pb-14 2xl:pb-[110px] sm:pl-8 lg:pl-[72px] sm:border-b border-black">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-[50px] h-[46.42px] lg:w-24 lg:h-[80px] 2xl:w-[140px] 2xl:h-[130px]"
          >
            <img src="/img/cmsFill.svg" alt="" />
          </motion.div>
          <div className="font-poppins pt-5 lg:pt-14">
            <motion.h4
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-base sm:text-xl lg:text-2xl 2xl:text-3xl font-medium tracking-[0.1px] font-poppins text-black"
            >
              CMS web development
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-black text-sm sm:text-base lg:text-xl 2xl:text-2xl font-light pt-4 lg:pt-6 2xl:pt-8 max-w-[631px]"
            >
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </motion.p>
          </div>
        </div>
        <div className="sm:pt-10 lg:pt-24 2xl:pt-[126px] pb-12 lg:pb-14 2xl:pb-[110px] sm:pr-8 lg:pr-10 2xl:pr-[72px]">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-[55px] h-[39.86px] lg:w-[80px] lg:h-[59px] 2xl:w-[109px] 2xl:h-[79px]"
          >
            <img src="/img/cloudFill.svg" alt="" />
          </motion.div>
          <div className="font-poppins pt-5 lg:pt-10">
            <motion.h4
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-base sm:text-xl lg:text-2xl 2xl:text-3xl font-medium underline tracking-[0.1px] font-poppins text-black"
            >
              Cloud-based web development
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-black text-sm sm:text-base lg:text-xl 2xl:text-2xl font-light pt-4 lg:pt-6 2xl:pt-8 max-w-[631px]"
            >
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </motion.p>
          </div>
        </div>
        <div className="sm:pt-10 lg:pt-20 2xl:pt-[99px] pb-12 lg:pb-14 2xl:pb-[110px] sm:pl-8 lg:pl-[72px] border-black sm:border-l">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-[55px] h-[38.22px] lg:w-[110px] lg:h-[80px] 2xl:w-[160px] 2xl:h-[110px]"
          >
            <img src="/img/front_endFill.svg" alt="" />
          </motion.div>
          <div className="font-poppins pt-5 lg:pt-10">
            <motion.h4
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-base sm:text-xl lg:text-2xl 2xl:text-3xl font-medium underline tracking-[0.1px] font-poppins text-black"
            >
              Front-end development
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-black text-sm sm:text-base lg:text-xl 2xl:text-2xl font-light pt-4 lg:pt-6 2xl:pt-8 max-w-[631px]"
            >
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
