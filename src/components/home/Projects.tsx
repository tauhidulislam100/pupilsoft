import Button from "components/common/Button";
import Project from "components/project";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Projects = ({
  wrapClass,
  items = 2,
}: {
  wrapClass?: string;
  items?: number;
}) => {
  return (
    <div
      className={`w-full ${
        wrapClass ? wrapClass : "bg-[#F0F2F5] pt-10 sm:pt-16 md:pt-20 lg:pt-40"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 1,
          stiffness: 50,
        }}
        className="text-center text-black px-5 lg:px-0"
      >
        <h2 className="text-2xl sm:text-4xl lg:text-[47px] font-semibold">
          These Are Some Of Our Projects
        </h2>
        <p className="mt-3 text-sm sm:text-base">
          Get seasoned offshore developers without breaking the bank.
          <br /> We train and manage our engineers and hence relieve you of
        </p>
      </motion.div>
      <div className="mt-10 w-[85%] xl:w-3/4 mx-auto space-y-12">
        {[...Array(items)].map((_, idx: number) => (
          <Project key={idx} />
        ))}
      </div>
      <div className=" mt-10 mb-16 lg:my-16 mx-auto max-w-[808px] w-3/4 lg:w-auto">
        <Link href="/projects">
          <Button className="bg-dark border-dark hover:border-dark hover:text-dark text-lg lg:text-[22px]">
            Explore More Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
