import { Button } from "components/common";
import React from "react";

const ThinkTwice = () => {
  return (
    <section className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-[url('/img/twice_code.png')] bg-no-repeat bg-cover bg-center">
      <div className="w-full h-full bg-[#00000099] flex flex-col items-center justify-center gap-[30px]">
        <h3 className=" text-2xl sm:text-3xl md:text-5xl lg:text-[55px] text-white font-bold font-poppins">
          Think twice. Code once.
        </h3>
        <Button className=" max-w-[190px] md:max-w-[257px] py-2.5 text-lg bg-black border-black hover:border-primary text-white">
          Get In Touch
        </Button>
      </div>
    </section>
  );
};
export default ThinkTwice;
