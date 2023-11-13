import { NextPage } from "next";
import {
  Hero,
  Header,
  Footer,
  Project,
  FeaturedMagic,
  Projects,
  HowWeWork,
  WebDevCost,
  Services,
  ThinkTwice,
} from "components";

const IndexPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-white overflow-y-hidden">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <ThinkTwice />
      <WebDevCost />
      {/* <HowWeWork /> */}
      <Footer />
    </div>
  );
};

export default IndexPage;
