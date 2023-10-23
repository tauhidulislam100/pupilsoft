import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="p-5 sm:p-8 lg:p-10 rounded-xlg bg-white border border-stroke">
      <div className="lg:flex items-center gap-8">
        <div className="relative flex-1 h-[230px] xs:h-[300px] sm:h-[400px] md:h-[525px] xl:h-[625px]">
          <Image
            src={"/featured3.png"}
            alt="Project"
            fill
            className="rounded-xlg"
          />
        </div>
        <div className="lg:w-[40%] xl:w-1/3 text-dark text-lg mt-5">
          <h5 className="text-base sm:text-lg lg:text-[22px] font-extralight">
            Landing page{" "}
          </h5>
          <h2 className="font-bold font-poppins text-xl lg:text-[28px] mt-2">
            SmartSuite WORK MANAGEMENT PLATFORM
          </h2>
          <p className="mt-4 lg:mt-8 text-sm sm:text-base">
            <span className="font-bold">Country:</span> United States
          </p>
          <p className="mt-3 text-sm sm:text-base">
            <span className="font-bold">Technologies:</span> React, Node.js,
            Typescript, Django, Python, ElasticSearch, Kubernetes, PostgreSQL,
            Mongodb, Cypress, Angular, WebSockets
          </p>
          <p className="mt-3 text-sm sm:text-base">
            <span className="font-bold">Time Together:</span> 4 Years Till...
          </p>
          <p className="mt-3 text-sm sm:text-base">
            <span className="font-bold">Team:</span> 3 PMs, 2 BAs, 12
            developers, 6 HTML/CSS coders, 5 Automation Engineers, 8 QAs
          </p>
          <Image
            src={"/img/arrow_right.svg"}
            alt="Arrow"
            width={152}
            height={30}
            className=" mt-8 xl:mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
