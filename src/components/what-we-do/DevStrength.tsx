import { Button } from "components/common";
import { motion } from "framer-motion";
import React from "react";

const DevStrength = () => {
  return (
    <section className="w-[87%] xl:w-3/4 mx-auto pt-24 lg:mt-[50px] lg:flex items-center justify-between gap-7 xl:gap-14 pb-20 lg:pb-0">
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto lg:mx-0 w-[70%] sm:w-1/2 2xl:w-[780px] 2xl:h-[663px]"
      >
        <img src="/img/dev_strength.svg" className="w-full h-full" alt="" />
      </motion.div>
      <div className="flex-1 max-w-[581px] mx-auto mt-10 lg:mt-0">
        <motion.h3
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-[45px] 2xl:leading-[54px] font-bold text-black font-poppins"
        >
          See our web development strength
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="pt-3 sm:pt-5 2xl:pt-10 text-base sm:text-lg lg:text-xl 2xl:text-[22px] text-black font-commissioner pb-[30px]"
        >
          Reach out to estimate the cost of your future digital solution
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=""
        >
          <Button className="max-w-[292px] py-2.5 text-lg">
            See our Skills
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default DevStrength;
