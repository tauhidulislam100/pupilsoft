import Image from 'next/image';
import React from 'react';

const Project = () => {
  return (
    <div className="p-10 rounded-xlg bg-white border border-stroke">
      <div className="flex items-center gap-8">
        <div className="relative flex-1 h-[625px]">
          <Image
            src={'/featured3.png'}
            alt="Project"
            fill
            className="rounded-xlg"
          />
        </div>
        <div className="w-1/3 text-dark text-lg">
          <h5 className="text-[22px] font-extralight">Landing page </h5>
          <h2 className="font-bold font-poppins text-[28px] mt-2">
            SmartSuite WORK MANAGEMENT PLATFORM
          </h2>
          <p className="mt-8">
            <span className="font-bold">Country:</span> United States
          </p>
          <p className="mt-3">
            <span className="font-bold">Technologies:</span> React, Node.js,
            Typescript, Django, Python, ElasticSearch, Kubernetes, PostgreSQL,
            Mongodb, Cypress, Angular, WebSockets
          </p>
          <p className="mt-3">
            <span className="font-bold">Time Together:</span> 4 Years Till...
          </p>
          <p className="mt-3">
            <span className="font-bold">Team:</span> 3 PMs, 2 BAs, 12
            developers, 6 HTML/CSS coders, 5 Automation Engineers, 8 QAs
          </p>
          <Image
            src={'/img/arrow_right.svg'}
            alt="Arrow"
            width={152}
            height={30}
            className="mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
