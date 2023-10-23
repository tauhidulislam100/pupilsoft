import React from "react";

const Text = ({ title, description, list }: any) => {
  return (
    <div className="p-5 sm:p-7 md:p-8 xl:p-10 2xl:p-[50px] 2xl:pt-[61px] bg-white border border-[#BCAFA3] rounded">
      <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-[35px] 2xl:leading-[54px] font-bold font-poppins uppercase">
        {title}
      </h3>
      {list ? (
        <ul className="list-disc text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] 2xl:leading-[35px] tracking-[0.055px] mt-2 md:mt-3 pl-6 md:pl-8">
          {list?.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 md:mt-3 text-dark text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] 2xl:leading-[35px] tracking-[0.055px]">
          {description}
        </p>
      )}
    </div>
  );
};
export default Text;
