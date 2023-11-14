import React from "react";
import { BsBook } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { dummyPartners } from "utils/sample-data";
import { motion, useAnimate, stagger, useInView } from "framer-motion";

const Services = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  React.useEffect(() => {
    if (isInView) {
      animate(
        ".partners",
        { opacity: 1, x: 0 },
        { delay: stagger(0.1, { startDelay: 0.25 }) }
      );
    } else {
      animate(".partners", { opacity: 0, x: 20 }, { delay: 0 });
    }
  }, [isInView]);
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 1,
          stiffness: 50,
        }}
        className="text-center px-5 lg:px-0"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] text-black font-bold mt-10 sm:mt-16 md:mt-20 lg:mt-40">
          Our web development services
        </h2>
        <p className="mt-3 max-w-[1132px] mx-auto font-poppins text-base sm:text-lg md:text-xl lg:text-[22px] lg:leading-[35px] text-black">
          Specialists at Innowise Group launch, manage, and complete CMS website
          development projects of any scope and complexity, including:
        </p>
      </motion.div>
      <div className="w-full bg-dark mt-10 sm:mt-16 md:mt-20 lg:mt-32 px-[5%] xl:px-[10%] py-12 xl:py-[71px] sm:grid grid-cols-2 gap-y-4 gap-x-4 sm:gap-0">
        <div className="sm:pt-8 lg:pt-[50px] pb-10 lg:pb-[110px] sm:pr-8 lg:pr-[72px] border-white sm:border-r sm:border-b">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-[50px] h-[42.56px] lg:w-[148px] lg:h-[124px]"
          >
            <img src="/img/turnkey.svg" alt="" />
          </motion.div>
          <div className="font-poppins pt-5 lg:pt-10">
            <motion.h4
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-base sm:text-xl lg:text-3xl font-medium sm:font-bold"
            >
              Turnkey web app development
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-sm sm:text-base lg:text-2xl font-light pt-4 lg:pt-8 max-w-[631px]"
            >
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </motion.p>
          </div>
        </div>
        <div className="sm:pt-8 lg:pt-[42px] pb-10 lg:pb-[110px] sm:pl-8 lg:pl-[72px] sm:border-b border-white">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-[50px] h-[46.42px] lg:w-[140px] lg:h-[130px]"
          >
            <img src="/img/cms.svg" alt="" />
          </motion.div>
          <div className="font-poppins pt-5 lg:pt-10">
            <motion.h4
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-base sm:text-xl lg:text-3xl font-medium sm:font-bold"
            >
              CMS web development
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-sm sm:text-base lg:text-2xl font-light pt-4 lg:pt-8 max-w-[631px]"
            >
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </motion.p>
          </div>
        </div>
        <div className="sm:pt-10 lg:pt-[126px] pb-12 lg:pb-[110px] sm:pr-8 lg:pr-[72px] sm:border-t border-white">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-[55px] h-[39.86px] lg:w-[109px] lg:h-[79px]"
          >
            <img src="/img/cloud.svg" alt="" />
          </motion.div>
          <div className="font-poppins pt-5 lg:pt-10">
            <motion.h4
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-base sm:text-xl lg:text-3xl font-medium sm:font-bold"
            >
              Cloud-based web development
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-sm sm:text-base lg:text-2xl font-light pt-4 lg:pt-8 max-w-[631px]"
            >
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </motion.p>
          </div>
        </div>
        <div className="sm:pt-10 lg:pt-[99px] pb-12 lg:pb-[110px] sm:pl-8 lg:pl-[72px] border-white sm:border-t sm:border-l">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-[55px] h-[38.22px] lg:w-[160px] lg:h-[110px]"
          >
            <img src="/img/front_end.svg" alt="" />
          </motion.div>
          <div className="font-poppins pt-5 lg:pt-10">
            <motion.h4
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-base sm:text-xl lg:text-3xl font-medium sm:font-bold"
            >
              Front-end development
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-sm sm:text-base lg:text-2xl font-light pt-4 lg:pt-8 max-w-[631px]"
            >
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="my-24">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1,
            stiffness: 50,
          }}
          className="text-dark text-2xl sm:text-3xl lg:text-4xl font-medium text-center"
        >
          Our Honorable Partner
        </motion.h3>
        <div
          ref={scope}
          className="grid grid-cols-2 w-fit mx-auto md:flex justify-center items-center gap-x-16 gap-y-10 md:gap-5 lg:gap-24 mt-8 sm:mt-10 md:mt-16 lg:mt-20 px-8 lg:px-10"
        >
          {dummyPartners.map((partner) => (
            <Image
              key={partner.id}
              src={partner.logo}
              alt={partner.title}
              width={222}
              height={56}
              className="object-contain partners"
            />
          ))}
        </div>
      </div>
      {/* <div className="mt-20 grid grid-cols-3 gap-10">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="group cursor-pointer h-[300px] shadow-lg shadow-primary rounded-lg bg-gradient-to-br from-primary/20 hover:from-primary to-white hover:to-secondary text-black hover:text-white p-10 transition-all duration-200 ease-in-out"
          >
            <div className="space-y-3 py-5 group-hover:py-0 transition-all duration-300">
              <div className="text-secondary text-5xl">
                <BsBook />
              </div>
              <h2 className="text-2xl font-semibold">App Development</h2>
              <p className="text-sm">
                We'll handle everything from to app develpment process until it
                is time to make your project live.
              </p>
              <div className="group-hover:visible text-black invisible h-0 group-hover:h-auto transition-all duration-200 text-3xl group-hover:text-white">
                <BiRightArrowAlt />
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Services;
