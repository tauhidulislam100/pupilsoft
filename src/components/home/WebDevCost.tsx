import { Button } from 'components/common';
import { motion, useAnimate, stagger, useInView } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const types = [
  'Cooperation model',
  'Scope of work',
  'Project duration',
  'Team size',
  'Team composition',
  'Level of specialists',
];

const WebDevCost = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  React.useEffect(() => {
    if (isInView) {
      animate(
        '.types',
        { opacity: 1, x: 0 },
        { delay: stagger(0.1, { startDelay: 0.3 }) }
      );
    } else {
      animate('.types', { opacity: 0, x: 20 }, { delay: 0 });
    }
  }, [isInView]);
  return (
    <section className="w-full pt-24 lg:pt-[151px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          duration: 1,
          stiffness: 50,
        }}
        className="px-5 sm:px-10 text-center text-black"
      >
        <h2 className="text-[#0B1327] uppercase text-3xl md:text-4xl lg:text-5xl 2xl:text-[50px] 2xl:leading-[54px] font-poppins font-medium">
          Web development cost
        </h2>
        <div className="mt-4 flex items-center justify-center">
          <div className="w-[150px] md:w-[214px] h-[1px] rounded-full bg-black" />
          <div className="w-[60px] sm:w-[80px] md:w-[100px] h-2.5 md:h-[15px] rounded-full bg-black" />
          <div className="w-[150px] md:w-[214px] h-[1px] rounded-full bg-black" />
        </div>
        {/* <p className="mt-3 max-w-[1242px] mx-auto font-poppins text-base sm:text-lg md:text-xl lg:text-[22px] lg:leading-[35px]">
          The ultimate cost of your web solution development project is defined
          by a number of factors. We help tailor expenses to your particular
          financial capacities and avoid hidden costs due to well-adjusted
          processes
        </p> */}
      </motion.div>
      <div className="px-8 lg:px-0 mt-[55px]">
        <div ref={scope} className="grid xs:grid-cols-2 w-fit mx-auto">
          {types.map((type, idx) => (
            <div
              key={`type_${idx}`}
              className={`types flex items-center xs:justify-center gap-5 xs:gap-3 sm:gap-[22px] 2xl:min-w-[757px] border-black py-8 sm:pt-[47px] sm:pb-[67px] xl:pt-[67px] lg:pb-10 2xl:pb-[87px] pr-3 pl-3 sm:pr-5 sm:pl-5 md:pr-11 md:pl-[37px] ${
                idx <= 3 ? 'xs:border-b' : ''
              } ${idx % 2 === 0 ? 'xs:border-r' : ''}`}
            >
              <div className="w-[40px] h-[34px] md:w-[57px] md:h-[44px] lg:w-[85px] lg:h-[60px]">
                <img
                  src="/img/vector-fill.svg"
                  className="w-full h-full object-contain md:object-cover"
                  alt=""
                />
              </div>
              <p className="text-xl xs:text-sm sm:text-lg lg:text-xl xl:text-3xl text-black font-poppins tracking-[0.1px]">
                {type}
              </p>
            </div>
          ))}
        </div>
        {/* <div
          ref={scope}
          className="grid xs:grid-cols-2 2xl:grid-cols-3 w-fit mx-auto gap-x-4 sm:gap-x-[30px] gap-y-5"
        >
          {types.map((type, idx) => (
            <div
              key={`type_${idx}`}
              className="types flex items-center gap-5 xs:gap-3 sm:gap-[22px] bg-dark xl:min-w-[462px] py-8 sm:pt-[47px] sm:pb-[67px] xl:pt-[67px] xl:pb-[87px] pr-3 pl-3 sm:pr-5 sm:pl-5 md:pr-11 md:pl-[37px] border-l-[10px] border-[#FF7A02]"
            >
              <div className="xs:w-[40px] xs:h-[34px] md:w-[57px] md:h-[44px]">
                <img
                  src="/img/vector.svg"
                  className="w-full h-full object-contain md:object-cover"
                  alt=""
                />
              </div>
              <p className="flex-1 text-xl xs:text-sm sm:text-lg lg:text-xl xl:text-3xl text-white">
                {type}
              </p>
            </div>
          ))}
        </div> */}
        <div className="mt-10 2xl:mt-20 lg:flex items-center justify-center gap-14 xl:gap-20 pt-14 2xl:pt-28 pb-14 xl:pb-20 border-t border-black">
          <div className="flex-1 flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="mx-auto lg:mx-0 w-1/2 lg:w-[275px] xl:w-[375px] 2xl:w-[625px] 2xl:h-[561px]"
            >
              <img
                src="/img/budget.svg"
                className="w-full h-full grayscale"
                alt=""
              />
            </motion.div>
          </div>
          <div className="hidden lg:block w-2 xl:w-2.5 h-[300px] xl:h-[450px] 2xl:h-[561px] bg-black" />
          <div className="mt-10 lg:mt-0 flex-1">
            <motion.h3
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center sm:max-w-[400px] xl:max-w-[581px] sm:text-left text-xl min-[480px]:text-2xl sm:text-3xl xl:text-4xl 2xl:text-[45px] 2xl:leading-[70px] font-medium capitalize tracking-[0.113px] text-[#1D243C] font-poppins"
            >
              Want to know the budget of your project?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-[581px] sm:text-left pt-3 lg:pt-4 text-base sm:text-lg lg:text-xl 2xl:text-[22px] text-[#1D243C] tracking-[0.15px] font-commissioner pb-[30px]"
            >
              Reach out to estimate the cost of your future digital solution
            </motion.p>
            <div className="">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-fit mx-auto sm:mx-0"
              >
                <button className="w-[250px] sm:w-[300px] 2xl:w-[343px] h-12 sm:h-14 2xl:h-[70px] transition-all duration-300 py-2.5 text-base sm:text-lg uppercase font-commissioner 2xl:text-[22px] border tracking-[5px] 2xl:tracking-[10px] text-black border-black hover:bg-black hover:text-white">
                  Get a Quote
                </button>
              </motion.div>
              {/* <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-fit mx-auto sm:mx-0"
              >
                <button className="w-[343px] h-[70px] transition-all duration-300 py-2.5 text-lg uppercase font-commissioner text-[22px] px-[30px] border tracking-[10px] hover:text-black hover:bg-transparent border-black bg-black text-white">
                  Get a Quote
                </button>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full flex items-center py-3 sm:py-5 xl:py-10 max-w-[80%] mx-auto">
        <span className="w-full h-[1px] bg-[#0B13279C]" />
        <p className="mx-7 text-xl sm:text-2xl md:text-3xl lg:text-[45px] font-bold font-poppins text-black">
          Or
        </p>
        <span className="w-full h-[1px] bg-[#0B13279C]" />
      </div>
      <div className="lg:w-[75.5%] lg:mx-auto lg:flex items-center justify-center gap-12 xl:gap-16 2xl:gap-20 pt-14 xl:pt-20 px-8 lg:px-0">
        <div className="flex-1 flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-1/2 lg:w-[250px] xl:w-[350px] 2xl:w-[614px] 2xl:h-[552px] mx-auto lg:mx-0"
          >
            <img
              src="/img/team_meting.svg"
              className="w-full h-full grayscale"
              alt=""
            />
          </motion.div>
        </div>
        <div className="hidden lg:block w-2 xl:w-2.5 h-[300px] xl:h-[450px] 2xl:h-[552px] bg-black" />
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 lg:mt-0 flex-1"
        >
          <motion.h3
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-[581px] sm:text-left text-xl min-[480px]:text-2xl sm:text-3xl xl:text-4xl 2xl:text-[47px] 2xl:leading-[70px] font-medium capitalize tracking-[0.118px] text-[#1D243C] font-poppins"
          >
            you can arrange a schedule for meting with our team.
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-fit mx-auto sm:mx-0 mt-8 lg:mt-[63px]"
          >
            <button className="w-[230px] h-12 sm:w-[280px] sm:h-[63px] transition-all duration-300 sm:py-2.5 text-base sm:text-lg uppercase font-commissioner text-[22px] border font-semibold tracking-[5px] sm:tracking-[10px] text-black border-black hover:bg-black hover:text-white">
              Let&apos;s Talk
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full max-w-[100vw] h-[127px] relative mt-10">
        <Image src={'/img/footer-bg.svg'} fill alt="vector" />
      </div>
    </section>
  );
};
export default WebDevCost;
