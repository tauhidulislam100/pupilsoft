import { Button } from "components/common";
import { motion, useAnimate, stagger, useInView } from "framer-motion";
import React from "react";

const types = [
  "Cooperation model",
  "Scope of work",
  "Project duration",
  "Team size",
  "Team composition",
  "Level of specialists",
];

const WebDevCost = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  React.useEffect(() => {
    if (isInView) {
      animate(
        ".types",
        { opacity: 1, x: 0 },
        { delay: stagger(0.1, { startDelay: 0.3 }) }
      );
    } else {
      animate(".types", { opacity: 0, x: 20 }, { delay: 0 });
    }
  }, [isInView]);
  return (
    <section className="w-full bg-[#F0F2F5] pt-24 lg:pt-[151px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 1,
          stiffness: 50,
        }}
        className="px-5 sm:px-10 text-center text-black"
      >
        <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:lg:text-[55px] font-bold">
          Web development cost
        </h2>
        <p className="mt-3 max-w-[1242px] mx-auto font-poppins text-base sm:text-lg md:text-xl lg:text-[22px] lg:leading-[35px]">
          The ultimate cost of your web solution development project is defined
          by a number of factors. We help tailor expenses to your particular
          financial capacities and avoid hidden costs due to well-adjusted
          processes
        </p>
      </motion.div>
      <div className="px-8 lg:w-[75.5%] mx-auto mt-[55px]">
        <div
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
        </div>
        <div className="mt-20 lg:mt-[50px] lg:flex items-center justify-between gap-10 xl:gap-16 pb-20 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto lg:mx-0 w-1/2 2xl:w-[799px] 2xl:h-[717px]"
          >
            <img src="/img/budget.svg" className="w-full h-full" alt="" />
          </motion.div>
          <div className="flex-1 max-w-[581px] mx-auto mt-10 lg:mt-0">
            <motion.h3
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center sm:text-left text-xl min-[480px]:text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] xl:leading-[54px] font-bold text-black font-poppins"
            >
              Want to know the budget of your project?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center sm:text-left pt-3 sm:pt-5 md:pt-8 lg:pt-10 text-base sm:text-lg lg:text-xl xl:text-[22px] text-black font-commissioner pb-[30px]"
            >
              Reach out to estimate the cost of your future digital solution
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-fit mx-auto sm:mx-0"
            >
              <Button className="max-w-[292px] py-2.5 text-lg">
                Get a Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full flex items-center py-3 sm:py-5 md:py-7 lg:py-10">
        <span className="w-full h-[1px] bg-[#0B13279C]" />
        <p className="mx-7 text-xl sm:text-2xl md:text-3xl lg:text-[45px] font-bold font-poppins text-black">
          Or
        </p>
        <span className="w-full h-[1px] bg-[#0B13279C]" />
      </div>
      <div className="lg:w-[75.5%] mx-auto lg:mt-[50px] lg:flex items-center justify-between gap-[78px] py-20 px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[50%] mx-auto lg:w-1/2 2xl:w-[792px] 2xl:h-[694px]"
        >
          <img src="/img/team_meting.svg" className="w-full h-full" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 max-w-[581px] mx-auto mt-10 lg:mt-0"
        >
          <motion.h3
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center sm:text-left text-xl min-[480px]:text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] xl:leading-[54px] font-bold text-black font-poppins mb-10"
          >
            you can arrange a schedule for meting with our team.
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-fit mx-auto sm:mx-0"
          >
            <Button className="max-w-[257px] py-2.5 text-lg">
              Let&apos;s Talk
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default WebDevCost;
