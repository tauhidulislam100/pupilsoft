import { Button } from "components/common";
import React from "react";

const ThinkTwice = () => {
  return (
    <section className="w-full h-[500px] bg-[url('/img/twice_code.png')] bg-no-repeat bg-cover">
      <div className="w-full h-full bg-[#00000099] flex flex-col items-center justify-center gap-[30px]">
        <h3 className=" text-[55px] text-white font-poppins">
          Think twice. Code once.
        </h3>
        <Button className="max-w-[257px] py-2.5 text-lg bg-black text-white">
          Get In Touch
        </Button>
      </div>
    </section>
  );
};
export default ThinkTwice;
