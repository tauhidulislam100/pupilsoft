import React from 'react';
import { BsBook } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import Image from 'next/image';
import { dummyPartners } from 'utils/sample-data';
import { motion, useAnimate, stagger, useInView } from 'framer-motion';

const Partner = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  React.useEffect(() => {
    if (isInView) {
      animate(
        '.partners',
        { opacity: 1, x: 0 },
        { delay: stagger(0.1, { startDelay: 0.25 }) }
      );
    } else {
      animate('.partners', { opacity: 0, x: 20 }, { delay: 0 });
    }
  }, [isInView]);
  return (
    <div className="w-full border-t border-black">
      <div className="my-24">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            duration: 1,
            stiffness: 50,
          }}
          className="text-dark text-2xl sm:text-4xl xl:text-[50px] leading-[54px] font-medium uppercase text-center"
        >
          Our Honorable Partner
        </motion.h3>
        <div className="pt-5 flex items-center justify-center">
          <div className="w-[150px] md:w-[214px] h-[1px] rounded-full bg-black" />
          <div className="w-[60px] sm:w-[80px] md:w-[100px] h-2.5 md:h-[15px] rounded-full bg-black" />
          <div className="w-[150px] md:w-[214px] h-[1px] rounded-full bg-black" />
        </div>
        <div
          ref={scope}
          className="grid grid-cols-2 w-fit mx-auto md:flex justify-center items-center gap-x-16 xl:gap-x-24 gap-y-10 md:gap-5 mt-8 sm:mt-10 md:mt-16 lg:mt-20 px-8 lg:px-10"
        >
          {dummyPartners.map((partner) => (
            <Image
              key={partner.id}
              src={partner.logo}
              alt={partner.title}
              width={222}
              height={56}
              className="object-contain partners grayscale w-[170px] lg:w-[190px] xl:w-[222px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
