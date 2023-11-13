import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = () => {
  return (
    <div className="p-5 sm:p-8 lg:p-10 rounded-xlg bg-white border border-stroke overflow-hidden">
      <div className="lg:flex items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex-1 h-[230px] xs:h-[300px] sm:h-[400px] md:h-[525px] xl:h-[625px]"
        >
          <Image
            src={'/featured3.png'}
            alt="Project"
            fill
            className="rounded-xlg"
          />
        </motion.div>
        <div className="lg:w-[40%] xl:w-1/3 text-dark text-lg mt-5">
          <motion.h5
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-base sm:text-lg lg:text-[22px] font-extralight"
          >
            Landing page{' '}
          </motion.h5>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="font-bold font-poppins text-xl lg:text-[28px] mt-2"
          >
            SmartSuite WORK MANAGEMENT PLATFORM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 lg:mt-8 text-sm sm:text-base"
          >
            <span className="font-bold">Country:</span> United States
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-3 text-sm sm:text-base"
          >
            <span className="font-bold">Technologies:</span> React, Node.js,
            Typescript, Django, Python, ElasticSearch, Kubernetes, PostgreSQL,
            Mongodb, Cypress, Angular, WebSockets
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-3 text-sm sm:text-base"
          >
            <span className="font-bold">Time Together:</span> 4 Years Till...
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-3 text-sm sm:text-base"
          >
            <span className="font-bold">Team:</span> 3 PMs, 2 BAs, 12
            developers, 6 HTML/CSS coders, 5 Automation Engineers, 8 QAs
          </motion.p>
          <Link href={'/'}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-fit"
            >
              <Image
                src={'/img/arrow_right.svg'}
                alt="Arrow"
                width={152}
                height={30}
                className=" mt-8 xl:mt-16"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
