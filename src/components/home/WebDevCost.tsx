import { Button } from "components/common";
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
  return (
    <section className="w-full bg-[#F0F2F5]">
      <div className="text-center text-black">
        <h2 className="text-[55px] font-bold mt-40">Web development cost</h2>
        <p className="mt-3 max-w-[1242px] mx-auto font-poppins text-[22px] leading-[35px]">
          The ultimate cost of your web solution development project is defined
          by a number of factors. We help tailor expenses to your particular
          financial capacities and avoid hidden costs due to well-adjusted
          processes
        </p>
      </div>
      <div className="w-[75.5%] mx-auto mt-[55px] ">
        <div className="flex flex-wrap gap-x-[30px] gap-y-5">
          {types.map((type, idx) => (
            <div
              key={`type_${idx}`}
              className="flex items-center gap-[22px] bg-dark min-w-[462px] max-w-[462px] pt-[67px] pb-[87px] pr-11 pl-[37px] border-l-[10px] border-[#FF7A02]"
            >
              <div className="w-[57px] h-[44px]">
                <img
                  src="/img/vector.svg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-3xl text-white">{type}</p>
            </div>
          ))}
        </div>
        <div className="mt-[50px] flex items-center gap-16">
          <div className="w-[50%] 2xl:w-[799px] 2xl:h-[717px]">
            <img src="/img/budget.svg" className="w-full h-full" alt="" />
          </div>
          <div className="flex-1 max-w-[581px]">
            <h3 className="text-[45px] leading-[54px] font-bold text-black font-poppins">
              Want to know the budget of your project?
            </h3>
            <p className="pt-10 text-[22px] text-black font-commissioner pb-[30px]">
              Reach out to estimate the cost of your future digital solution
            </p>
            <Button className="max-w-[292px] py-2.5 text-lg">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white w-full flex items-center py-10">
        <span className="w-full h-[1px] bg-[#0B13279C]" />
        <p className="mx-7 text-[45px] font-bold font-poppins text-black">Or</p>
        <span className="w-full h-[1px] bg-[#0B13279C]" />
      </div>
      <div className="w-[75.5%] mx-auto mt-[50px] flex items-center gap-[78px] py-20">
        <div className="w-[50%] 2xl:w-[792px] 2xl:h-[694px]">
          <img src="/img/team_meting.svg" className="w-full h-full" alt="" />
        </div>
        <div className="flex-1 max-w-[581px]">
          <h3 className="text-[45px] leading-[54px] font-bold text-black font-poppins mb-10">
            you can arrange a schedule for meting with our team.
          </h3>
          <Button className="max-w-[257px] py-2.5 text-lg">Let’s Talk</Button>
        </div>
      </div>
    </section>
  );
};
export default WebDevCost;
