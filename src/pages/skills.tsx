import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { techStackData } from 'utils/sample-data';
import { Footer, Header } from 'components';

const Skills = () => {
  return (
    <div className="bg-dark px-[3%] pb-5 select-none text-white min-h-screen py-20">
      <Header />
      <h1 className="text-7xl font-bold font-mono text-center mt-10">
        Technology Stack
      </h1>
      <div className="w-full mt-10 flex">
        <div className="w-1/3 relative min-h-full">
          <section className="w-full sticky top-1/2">
            <h2 className="text-2xl font-bold">Front-End</h2>
            <p className="text-base mt-5">
              Beinng the face of the project, we pay attention to every little
              detail in order to male it fascinating and easy to use so that
              users could enjoy experiencing your website.
            </p>
          </section>
        </div>
        <div className="flex-1 space-y-10">
          <section className="mt-10 pinable shadow bg-gray-900 rounded-lg p-5  sticky top-[5em]">
            <h3 className="text-xl font-medium">Frameworks</h3>
            <div className="grid grid-cols-4 gap-10 mt-5">
              {techStackData.map((ts) => (
                <div className="relative w-full h-20 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={ts.logoUrl}
                    alt="Tech STack"
                    layout="fill"
                    className="object-contain p-5"
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="mt-10 pinable shadow bg-gray-900 rounded-lg p-5  sticky top-[5em] translate-y-12">
            <h3 className="text-xl font-medium">Tools And Libraries</h3>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {techStackData.map((ts) => (
                <div className="relative w-full h-20 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={ts.logoUrl}
                    alt="Tech STack"
                    layout="fill"
                    className="object-contain p-5"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="w-full mt-40 flex">
        <div className="relative w-1/3 min-h-full">
          <section className="w-full sticky top-1/2">
            <h2 className="text-2xl font-bold">Back-End</h2>
            <p className="text-base mt-5">
              We know how to combine all the most advanced technologies to
              produce customized, secured and scalable architecture that will
              maintain the most extensive functionality of your web application.
            </p>
          </section>
        </div>
        <div className="relative flex-1 space-y-10">
          <section className="pinable shadow bg-gray-900 rounded-lg p-5  sticky top-[5em]">
            <h3 className="text-xl font-medium">Technologies</h3>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {techStackData.map((ts) => (
                <div className="relative w-full h-20 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={ts.logoUrl}
                    alt="Tech STack"
                    layout="fill"
                    className="object-contain p-5"
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="pinable shadow bg-gray-900 rounded-lg p-5 sticky top-[5em] translate-y-12">
            <h3 className="text-xl font-medium">Frameworks</h3>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {techStackData.map((ts) => (
                <div className="relative w-full h-20 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={ts.logoUrl}
                    alt="Tech STack"
                    layout="fill"
                    className="object-contain p-5"
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="pinable shadow bg-gray-900 rounded-lg p-5 sticky top-[5em] translate-y-24">
            <h3 className="text-xl font-medium">Database</h3>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {techStackData.map((ts) => (
                <div className="relative w-full h-20 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={ts.logoUrl}
                    alt="Tech STack"
                    layout="fill"
                    className="object-contain p-5"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="min-h-screen " />
    </div>
  );
};

export default Skills;
