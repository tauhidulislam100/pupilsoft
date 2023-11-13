import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Service = ({ translateX }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: translateX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="bg-dark border-2 border-[#FF7A02] rounded py-8 md:py-9 lg:pt-[50px] lg:pb-16 2xl:pb-[110px] text-center px-3"
    >
      <div className="w-[100px] h-[70px] 2xl:w-[130px] 2xl:h-[100px] mx-auto relative">
        <Image
          src="/img/turnkey.svg"
          fill
          alt="vector"
          className="object-contain"
        />
      </div>
      <div className="mt-5 lg:mt-10 2xl:mt-[61px]">
        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold font-poppins text-white">
          Turnkey web app development
        </h4>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[25px] font-light text-white mt-3 lg:mt-5 2xl:mt-9">
          We handle full-cycle web solutions development, delivering everything
          from design and architecture prototyping to coding, optimization, and
          post-release support.
        </p>
      </div>
    </motion.div>
  );
};
export default Service;
