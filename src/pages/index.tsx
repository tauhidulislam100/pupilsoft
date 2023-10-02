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

const IndexPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-white">
      <Header />
      <Hero />
      <Projects />
      <HowWeWork />
      <Footer />
    </div>
  );
};

export default IndexPage;
