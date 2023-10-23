import Image from "next/image";
import React from "react";

const DevServices = () => {
  return (
    <section className="bg-dark bg-[url('/img/twice_code.png')] bg-no-repeat bg-contain">
      <div className="bg-black/30 pt-8 sm:pt-10 md:pt-14 lg:pt-20 xl:pt-28 2xl:pt-[163px] pb-14 sm:pb-20 md:pb-[103px]">
        <div className="w-[85%] xl:w-3/4 mx-auto">
          <div className="max-w-[1132px] mx-auto">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] 2xl:tracking-[0.138px] font-bold font-poppins text-center">
              Our custom web development services
            </h2>
            <p className="mt-1 sm:mt-4 lg:mt-5 2xl:mt-[35px] text-white text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[22px] 2xl:leading-[35px] 2xl:tracking-[0.055px] text-center">
              Specialists At Innowise Group Launch, Manage, And Complete CMS
              Website Development Projects Of Any Scope And Complexity,
              Including:
            </p>
          </div>
          <div className="mt-14 md:mt-24 2xl:pt-[146px] grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-7 lg:gap-y-10">
            {Array(4)
              .fill("")
              .map((_, idx) => (
                <div
                  key={idx}
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
                      We handle full-cycle web solutions development, delivering
                      everything from design and architecture prototyping to
                      coding, optimization, and post-release support.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default DevServices;
