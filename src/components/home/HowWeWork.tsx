import { Button } from 'components';
import Image from 'next/image';
import React from 'react';
import { dummyPartners } from 'utils/sample-data';

const HowWeWork = () => {
  return (
    <div className="bg-white">
      <div className="my-16 w-3/4 mx-auto flex gap-5">
        <div className="relative flex-1">
          <Image
            src={'/img/mockup.png'}
            fill
            alt="Mockup"
            className="object-contain"
          />
        </div>
        <div className="w-1/3 text-dark">
          <h2 className="text-[47px] leading-[54px] font-bold tracking-[0.118px] font-poppins">
            WE ARE TRANSPARENT, AND SO IS OUR PROCESS
          </h2>
          <p className="mt-7 mb-10 text-[17px] leading-[25.5px] tracking-[0.15px]">
            Our process is simple, reliable, and available to customers. We
            provide access to all the necessary project tools and constantly
            communicate with each other. A Scrum-based workflow allows us to
            cooperate efficiently, even with time-zone differences between our
            team and clients.
          </p>
          <Button className="py-2 bg-dark w-auto text-lg">
            Look at How we Work
          </Button>
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
    </div>
  );
};

export default HowWeWork;
