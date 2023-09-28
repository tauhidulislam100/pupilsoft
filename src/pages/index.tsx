import { NextPage } from 'next';
import { Hero, Header, Footer, Team, FeaturedMagic } from 'components/home';

const IndexPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-dark text-white">
      <Header />
      <Hero />
      <FeaturedMagic />
      <Team />
      <Footer />
    </div>
  );
};

export default IndexPage;
