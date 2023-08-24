import { NextPage } from 'next';
import { Hero, Header } from 'components/home';

const IndexPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-dark text-white">
      <Header />
      <Hero />
    </div>
  );
};

export default IndexPage;
