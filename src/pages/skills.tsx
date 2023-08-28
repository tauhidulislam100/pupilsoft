import Image from 'next/image';
import React from 'react';
import { techStackData } from 'utils/sample-data';

const Skills = () => {
  return (
    <div className="bg-dark px-[3%] pb-5 select-none text-white min-h-screen py-20">
      <div className="w-4/6">
        <h1 className="text-5xl font-bold font-mono">Technology Stack</h1>
        <h2 className="text-2xl font-bold mt-10">Front-End</h2>
        <p className="text-base mt-5">
          Beinng the face of the project, we pay attention to every little
          detail in order to male it fascinating and easy to use so that users
          could enjoy experiencing your website.
        </p>
      </div>
      <section className="mt-10">
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
      <section className="mt-10">
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
      <div className="w-4/6 mt-10">
        <h2 className="text-2xl font-bold">Back-End</h2>
        <p className="text-base mt-5">
          We know how to combine all the most advanced technologies to produce
          customized, secured and scalable architecture that will maintain the
          most extensive functionality of your web application.
        </p>
      </div>
      <section className="mt-10">
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
      <section className="mt-10">
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
      <section className="mt-10">
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
  );
};

export default Skills;
