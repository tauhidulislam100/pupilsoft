import React from "react";
import { BsBook } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { dummyPartners } from "utils/sample-data";

const Services = () => {
  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="text-[55px] text-black font-bold mt-40">
          Our web development services
        </h2>
        <p className="mt-3 max-w-[1132px] mx-auto font-poppins text-[22px] leading-[35px] text-black">
          Specialists at Innowise Group launch, manage, and complete CMS website
          development projects of any scope and complexity, including:
        </p>
      </div>
      <div className="w-full bg-dark mt-32 px-[10%] py-[71px] grid grid-cols-2 ">
        <div className="pt-[50px] pb-[110px] pr-[72px] border-white border-r border-b">
          <div className="w-[148px] h-[124px]">
            <img src="/img/turnkey.svg" alt="" />
          </div>
          <div className="font-poppins">
            <h4 className="text-3xl font-bold pt-10">
              Turnkey web app development
            </h4>
            <p className="text-2xl font-light pt-8 max-w-[631px]">
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </p>
          </div>
        </div>
        <div className="pt-[42px] pb-[110px] pl-[72px] border-b border-white">
          <div className="w-[140px] h-[130px]">
            <img src="/img/cms.svg" alt="" />
          </div>
          <div className="font-poppins">
            <h4 className="text-3xl font-bold pt-10">CMS web development</h4>
            <p className="text-2xl font-light pt-8 max-w-[631px]">
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </p>
          </div>
        </div>
        <div className="pt-[126px] pb-[110px] pr-[72px] border-t border-white">
          <div className="w-[109px] h-[79px]">
            <img src="/img/cloud.svg" alt="" />
          </div>
          <div className="font-poppins">
            <h4 className="text-3xl font-bold pt-10">
              Cloud-based web development
            </h4>
            <p className="text-2xl font-light pt-8 max-w-[631px]">
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </p>
          </div>
        </div>
        <div className="pt-[99px] pb-[110px] pl-[72px] border-white border-t border-l">
          <div className="w-[160px] h-[110px]">
            <img src="/img/front_end.svg" alt="" />
          </div>
          <div className="font-poppins">
            <h4 className="text-3xl font-bold pt-10">Front-end development</h4>
            <p className="text-2xl font-light pt-8 max-w-[631px]">
              We handle full-cycle web solutions development, delivering
              everything from design and architecture prototyping to coding,
              optimization, and post-release support.
            </p>
          </div>
        </div>
      </div>
      <div className="my-24">
        <h3 className="text-dark text-4xl font-medium text-center">
          Our Honorable Partner
        </h3>
        <div className="flex justify-center items-center gap-24 mt-20">
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
