import Button from 'components/common/Button';
import Project from 'components/project';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const Projects = ({
  wrapClass,
  items = 2,
}: {
  wrapClass?: string;
  items?: number;
}) => {
  return (
    <div
      className={`w-full ${
        wrapClass ? wrapClass : 'sm:pt-16 md:pt-20 lg:pt-40'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          duration: 1,
          stiffness: 50,
        }}
        className="text-center text-black px-5 lg:px-0"
      >
        <h2 className="text-2xl sm:text-4xl 2xl:text-[50px] font-medium uppercase font-poppins">
          These Are Some Of Our Projects
        </h2>
        <p className="mt-3 text-sm sm:text-base xl:text-xl">
          Get seasoned offshore developers without breaking the bank. We train
          and <br /> manage our engineers and hence relieve you of
        </p>
        <div className="mt-4 flex items-center justify-center">
          <div className="w-[150px] md:w-[214px] h-[1px] rounded-full bg-black" />
          <div className="w-[60px] sm:w-[80px] md:w-[100px] h-2.5 md:h-[15px] rounded-full bg-black" />
          <div className="w-[150px] md:w-[214px] h-[1px] rounded-full bg-black" />
        </div>
      </motion.div>
      <div className="mt-10 w-[85%] xl:w-3/4 mx-auto space-y-12">
        {[...Array(items)].map((_, idx: number) => (
          <Project key={idx} />
        ))}
      </div>
      <div className="mt-10 pb-16 sm:pb-20 md:pb-[93px] xl:mt-16 mx-auto w-fit">
        <Link href="/projects" className="inline-block">
          <button className="w-[280px] sm:w-[349px] xl:w-[449px] h-[50px] sm:h-[60px] xl:h-[80px] py-2.5 text-base sm:text-lg uppercase font-commissioner xl:text-[22px] border tracking-[5px] sm:tracking-[10px] text-black border-black hover:bg-black hover:text-white">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
