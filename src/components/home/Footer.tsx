import React from "react";
import { RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import Button from "components/common/Button";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full bottom-0 left-0 -z-0 bg-dark">
      <div className="w-[80%] pt-5 sm:py-10 mx-auto border-t border-white/20">
        <div className="lg:flex gap-10 mt-10 md:mt-20 lg:mt-40">
          <div className="lg:w-3/5 space-y-5 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] font-bold">
              Let’s Make It Together
            </h1>
            <p className="mt-2 text-lg lg:text-[22px] text-[#E0E0E0]">
              The baseline is the invisible line upon which a line of text
              rests. In Material Design, the baseline is an important
              specification in measuring
            </p>
            <div className="pt-10 lg:pt-20 flex justify-evenly gap-5 lg:gap-10 font-jost">
              <div className="w-full">
                <label htmlFor="name" className="font-bold text-base">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="block placeholder:text-[#54565B] mt-2.5 w-full rounded-[10px] bg-[#060E22] border-b border-white px-6 py-4"
                />
              </div>
              <div className="w-full">
                <label htmlFor="name" className="font-bold text-base">
                  Your Email
                </label>
                <input
                  type="text"
                  placeholder="johndoe@gmail.com"
                  className="block placeholder:text-[#54565B] mt-2.5 w-full rounded-[10px] bg-[#060E22] border-b border-white px-6 py-4"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="name" className="font-bold text-base">
                How can we Help you?
              </label>
              <textarea
                placeholder="help me...."
                className="block placeholder:text-[#54565B] mt-2.5 w-full h-[211px] rounded-[10px] bg-[#060E22] border-b border-white px-6 py-4"
              />
            </div>
            <div className="">
              <div className="rounded-[10px] border border-[#8F7676] border-dashed border-spacing-3 flex justify-center items-center">
                <p className="py-10 text-center">
                  Drop useful files here or{" "}
                  <span className="font-bold">upload</span> them from your
                  computer
                  <br /> We accept files up to 15 MB
                </p>
              </div>
            </div>
            <Button className="text-xl py-4 lg:py-5 lg:text-[26px]">
              Submit
            </Button>
          </div>
          <div className="lg:w-2/5 pt-5 space-y-8 lg:space-y-10">
            <Button className="text-xl py-4 lg:py-5 lg:text-[26px] hidden lg:inline-block">
              Get in Touch
            </Button>
            <Button className="text-xl py-4 lg:py-5 lg:text-[26px] hidden lg:inline-block">
              Let's talk
            </Button>
            <div className="">
              <h3 className="uppercase text-secondary text-2xl md:text-3xl lg:text-[35px] lg:leading-[90px] font-bold">
                Review
              </h3>
              <div className="mt-3 lg:mt-0">
                <Image
                  src={"/img/clutch_banner.png"}
                  alt="Clutch"
                  width={450}
                  height={120}
                />
                <Image
                  src={"/img/trustpilot.png"}
                  alt="Clutch"
                  width={450}
                  height={131}
                  className="mt-3.5"
                />
              </div>
            </div>
            <Button className="text-xl py-4 lg:hidden">Get in Touch</Button>
            <Button className="text-xl py-4 lg:hidden">Let's talk</Button>
            <div className="text-secondary font-bold">
              <h3 className="uppercase text-2xl md:text-3xl lg:text-[35px] lg:leading-[90px]">
                Drop us a line:
              </h3>
              <p className="">codestudionfo@gmail.com</p>
            </div>
            <div className="text-secondary">
              <h3 className="uppercase font-bold text-2xl md:text-3xl lg:text-[35px] lg:leading-[90px]">{`We're here:`}</h3>
              <p className="text-[#828080] text-xl lg:text-[25px]">
                32b Velyka Vasylkivska str., Kyiv, Ukraine
                <br />
                <span className="">working hours:</span>
                <br />
                From 9 am to 8 pm(UTC + 3)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#060E22] text-xs text-center py-10 mb-5">
        <p className="text-white font-commissioner text-[15px]">
          &copy; Copyright {new Date().getFullYear()}. Designed by Tuhin
        </p>
      </div>
    </section>
  );
};

export default Footer;
