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

const ProjectsPage: NextPage = () => {
  return (
    <div className="w-full bg-[#F0F2F5] min-h-screen flex flex-col justify-center items-center text-white">
      <Header />
      <Hero />
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
