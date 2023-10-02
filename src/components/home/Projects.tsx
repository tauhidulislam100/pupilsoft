import Button from 'components/common/Button';
import Project from 'components/project';
import React from 'react';

const Projects = () => {
  return (
    <div className="w-full bg-[#F0F2F5]">
      <div className="text-center text-black">
        <h2 className="text-[47px] font-medium mt-40">
          These Are Some Of Our Projects
        </h2>
        <p className="mt-3">
          Get seasoned offshore developers without breaking the bank.
          <br /> We train and manage our engineers and hence relieve you of
        </p>
      </div>
      <div className="mt-10 w-3/4 mx-auto space-y-12">
        {[...Array(2)].map((_, idx: number) => (
          <Project key={idx} />
        ))}
      </div>
      <div className="my-16 mx-auto max-w-[808px]">
        <Button className="bg-dark text-[22px]">Explore More Projects</Button>
      </div>
    </div>
  );
};

export default Projects;
