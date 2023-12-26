import { NextPage } from 'next';
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
  Partner,
} from 'components';
import Head from 'next/head';

const IndexPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <Head>
        <title>
          PupilSoft | Your Web & Mobile APP Development We Are a True Partner
        </title>
      </Head>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Partner />
      <ThinkTwice />
      <WebDevCost />
      {/* <HowWeWork /> */}
      <Footer />
    </div>
  );
};

export default IndexPage;
