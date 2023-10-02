import { NextPage } from 'next';
import {
  Hero,
  Header,
  Footer,
  Project,
  FeaturedMagic,
  Projects,
  HowWeWork,
} from 'components';
import { useState } from 'react';

const ProjectsPage: NextPage = () => {
  const [isClicked, setClicked] = useState(false);
  return (
    <div className="w-full bg-[#F0F2F5] min-h-screen flex flex-col justify-center items-center text-white">
      <Header />
      <Hero>
        <h1 className="text-[51px] font-semibold leading-[70px] text-center">
          We create custom web applications for you and{' '}
          <span
            onClick={() => setClicked((prev) => !prev)}
            className={`${isClicked ? 'text-[#0AF4E1]' : 'text-primary'}`}
          >
            Mobile applications
          </span>
        </h1>
      </Hero>
      <div className="relative my-20 space-y-14">
        {[...Array(4)].map((_, idx: number) => (
          <Project key={idx} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
