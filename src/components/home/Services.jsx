import React from "react";
import { BsBook } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { dummyPartners } from "utils/sample-data";

const Services = () => {
  return (
    <div className="w-full">
      <div className="text-center px-5 lg:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] text-black font-bold mt-10 sm:mt-16 md:mt-20 lg:mt-40">
          Our web development services
        </h2>
        <p className="mt-3 max-w-[1132px] mx-auto font-poppins text-base sm:text-lg md:text-xl lg:text-[22px] lg:leading-[35px] text-black">
          Specialists at Innowise Group launch, manage, and complete CMS website
          development projects of any scope and complexity, including:
        </p>
      </div>
      <div className="w-full bg-dark mt-10 sm:mt-16 md:mt-20 lg:mt-32 px-[5%] xl:px-[10%] py-12 xl:py-[71px] grid grid-cols-2 gap-y-4 gap-x-4 min-[480px]:gap-0">
        <div className="min-[480px]:pt-8 lg:pt-[50px] pb-10 lg:pb-[110px] min-[480px]:pr-8 lg:pr-[72px] border-white min-[480px]:border-r min-[480px]:border-b">
          <div className="w-[50px] h-[42.56px] lg:w-[148px] lg:h-[124px]">
            <img src="/img/turnkey.svg" alt="" />
          </div>
          <div className="font-poppins pt-5 lg:pt-10">
            <h4 className="text-base sm:text-xl lg:text-3xl font-medium sm:font-bold">
              Turnkey web app development
            </h4>
            <p className="text-sm sm:text-base lg:text-2xl font-light pt-4 lg:pt-8 max-w-[631px]">
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </p>
          </div>
        </div>
        <div className="min-[480px]:pt-8 lg:pt-[42px] pb-10 lg:pb-[110px] min-[480px]:pl-8 lg:pl-[72px] min-[480px]:border-b border-white">
          <div className="w-[50px] h-[46.42px] lg:w-[140px] lg:h-[130px]">
            <img src="/img/cms.svg" alt="" />
          </div>
          <div className="font-poppins pt-5 lg:pt-10">
            <h4 className="text-base sm:text-xl lg:text-3xl font-medium sm:font-bold">
              CMS web development
            </h4>
            <p className="text-sm sm:text-base lg:text-2xl font-light pt-4 lg:pt-8 max-w-[631px]">
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </p>
          </div>
        </div>
        <div className="min-[480px]:pt-10 lg:pt-[126px] pb-12 lg:pb-[110px] min-[480px]:pr-8 lg:pr-[72px] min-[480px]:border-t border-white">
          <div className="w-[55px] h-[39.86px] lg:w-[109px] lg:h-[79px]">
            <img src="/img/cloud.svg" alt="" />
          </div>
          <div className="font-poppins pt-5 lg:pt-10">
            <h4 className="text-base sm:text-xl lg:text-3xl font-medium sm:font-bold">
              Cloud-based web development
            </h4>
            <p className="text-sm sm:text-base lg:text-2xl font-light pt-4 lg:pt-8 max-w-[631px]">
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </p>
          </div>
        </div>
        <div className="min-[480px]:pt-10 lg:pt-[99px] pb-12 lg:pb-[110px] min-[480px]:pl-8 lg:pl-[72px] border-white min-[480px]:border-t min-[480px]:border-l">
          <div className="w-[55px] h-[38.22px] lg:w-[160px] lg:h-[110px]">
            <img src="/img/front_end.svg" alt="" />
          </div>
          <div className="font-poppins pt-5 lg:pt-10">
            <h4 className="text-base sm:text-xl lg:text-3xl font-medium sm:font-bold">
              Front-end development
            </h4>
            <p className="text-sm sm:text-base lg:text-2xl font-light pt-4 lg:pt-8 max-w-[631px]">
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </p>
          </div>
        </div>
      </div>
      <div className="my-24">
        <h3 className="text-dark text-2xl sm:text-3xl lg:text-4xl font-medium text-center">
          Our Honorable Partner
        </h3>
        <div className="grid grid-cols-2 w-fit mx-auto md:flex justify-center items-center gap-x-16 gap-y-10 md:gap-5 lg:gap-24 mt-8 sm:mt-10 md:mt-16 lg:mt-20 px-8 lg:px-10">
          {dummyPartners.map((pnr) => (
            <Image
              src={pnr.logo}
              alt={pnr.title}
              width={222}
              height={56}
              className="object-contain"
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
