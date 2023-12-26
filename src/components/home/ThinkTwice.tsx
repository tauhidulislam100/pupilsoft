import { Button } from 'components/common';
import { motion } from 'framer-motion';
import React from 'react';

const ThinkTwice = () => {
  return (
    <section className="w-full h-[250px] sm:h-[300px] md:h-[400px] xl:h-[500px] bg-no-repeat bg-cover bg-center bg-black flex items-center justify-center">
      <div className="">
        <h2 className="text-white text-2xl sm:text-5xl xl:text-6xl 2xl:text-[80px] 2xl:leaing-[54px] font-bold uppercase font-poppins tracking-[10px] lg:tracking-[16px] xl:tracking-[24px] text-center">
          Think twice
        </h2>
        <button className="w-[260px] sm:w-[300px] lg:w-[347px] xl:w-[437px] h-11 sm:h-14 lg:h-16 xl:h-20 2xl:w-[637px] 2xl:h-[117px] mt-6 sm:mt-12 2xl:mt-[66px] py-2.5 text-xs sm:text-base lg:text-lg xl:text-3xl uppercase font-commissioner 2xl:text-[35px] border tracking-[10px] text-white border-white block mx-auto">
          {`<Code once! />`}
        </button>
      </div>
      {/* <div className="w-full h-full bg-[#00000099]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1,
            stiffness: 50,
          }}
          className="w-full h-full flex flex-col items-center justify-center gap-[30px]"
        >
          <h3 className=" text-2xl sm:text-3xl md:text-5xl lg:text-[55px] text-white font-bold font-poppins">
            Think twice. Code once.
          </h3>
          <Button className=" max-w-[190px] md:max-w-[257px] py-2.5 text-lg bg-black border-black hover:border-primary text-white">
            Get In Touch
          </Button>
        </motion.div>
      </div> */}
    </section>
  );
};
export default ThinkTwice;
