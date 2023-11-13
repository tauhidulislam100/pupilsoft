import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Service from "./Service";

const services = [
  { translate: -200 },
  { translate: 200 },
  { translate: -200 },
  { translate: 200 },
];

const DevServices = () => {
  return (
    <section className="bg-dark bg-[url('/img/twice_code.png')] bg-no-repeat bg-contain">
      <div className="bg-black/30 pt-8 sm:pt-10 md:pt-14 lg:pt-20 xl:pt-28 2xl:pt-[163px] pb-14 sm:pb-20 md:pb-[103px]">
        <div className="w-[85%] xl:w-3/4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              stiffness: 50,
            }}
            className="max-w-[1132px] mx-auto"
          >
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] 2xl:tracking-[0.138px] font-bold font-poppins text-center">
              Our custom web development services
            </h2>
            <p className="mt-1 sm:mt-4 lg:mt-5 2xl:mt-[35px] text-white text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[22px] 2xl:leading-[35px] 2xl:tracking-[0.055px] text-center">
              Specialists At Innowise Group Launch, Manage, And Complete CMS
              Website Development Projects Of Any Scope And Complexity,
              Including:
            </p>
          </motion.div>
          <div className="mt-14 md:mt-24 2xl:pt-[146px] grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-7 lg:gap-y-10">
            {services.map((_, idx) => (
              <Service key={idx} translateX={_.translate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default DevServices;
