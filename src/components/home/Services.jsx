import React from 'react';
import { BsBook } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';

const Services = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="ml5">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters ampersand inline-block">Our Services</span>
          <span className="line line2"></span>
        </span>
      </h1>
      <div className="mt-20 grid grid-cols-3 gap-10">
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
      </div>
    </div>
  );
};

export default Services;
