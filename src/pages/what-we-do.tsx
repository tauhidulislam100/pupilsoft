import {
  ClientResult,
  DevServices,
  DevStrength,
  Footer,
  Header,
  Hero,
  Projects,
} from "components";
import Text from "components/what-we-do/Text";
import Head from "next/head";
import React from "react";

const texts1 = [
  {
    title: "WE MAKE COMPLEX CUSTOM APPLICATIONS IN A CLEAR WAY",
    description:
      "Our focus is on complex long-term web and mobile projects, in  which we are fully responsible for the technical part, from  planning a roadmap to deploying and maintaining applications.",
  },
  {
    title: "WE VALUE RELATIONSHIPS",
    description:
      "We believe that good projects are born of transparency and synergy between the client and the team. We walk this path together, and together we make decisions as partners. While we handle the entire technical aspect, we expect you to focus on the business side",
  },
];
const texts2 = [
  {
    title: "WE KNOW EXACTLY WHAT WE ARE GOOD AT",
    description: "Our clear definition makes us really good experts.",
  },
  {
    title: "WE PROVIDE:",
    list: [
      "Programming",
      "Testing.",
      "Development process management.",
      "Server configuration and support.",
      "Documentation creation.",
    ],
  },
];
const texts3 = [
  {
    title: "WE PROWE DO NOT PROVIDE:",
    list: [
      `Consulting; we can share our experience, but consulting is not
      our area.`,
      "Design; if you don't have your own designer, we are ready to recommend our partners.",
      "AI/VR/AR/ML; we can determine the need for such technologies and attract third-party narrow experts.",
      `Promotion and sales; we are techies, so business endeavors are
      up to you.`,
    ],
  },
  {
    title: "IT’S EASY TO GET US STARTED",
    description:
      "If you have a vision for a future product, you simply need to reach out and tell us your idea. There’s no need to include  technical specifications and other complex documentation, and we  won’t burden you with requests for payment or cost estimations  right away. If we feel your project is a good match for us, we  will assemble a team, draw up a roadmap, and launch sprints. There  will be interesting and difficult work ahead, but this stage is  very simple.",
  },
];

const WhatWeDo = () => {
  return (
    <>
      <Head>
        <title>What we do</title>
      </Head>
      <Header />
      <div className="bg-[#F0F2F5]">
        <Hero>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[51px] font-semibold lg:leading-[70px] text-center">
            We Are a True Partner In Your Web <br />
            <span className="text-primary">APP Development.</span>
          </h1>
        </Hero>
        <section className="w-[85%] xl:w-3/4 mx-auto py-16 sm:py-24 space-y-5 sm:space-y-[35px]">
          <Text title={texts1[0].title} description={texts1[0].description} />
          <Text title={texts1[1].title} description={texts1[1].description} />
        </section>
        <Projects
          wrapClass="bg-[#707d9b36] pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16 xl:pt-[128px] xl:pb-[89px]"
          items={1}
        />
        <section className="w-[85%] xl:w-3/4 mx-auto py-16 sm:py-24 space-y-5 sm:space-y-[35px]">
          <Text title={texts2[0].title} description={texts2[0].description} />
          <Text title={texts2[1].title} list={texts2[1].list} />
        </section>
        <DevServices />
        <section className="w-[85%] xl:w-3/4 mx-auto py-16 sm:py-24 space-y-5 sm:space-y-[35px]">
          <Text title={texts3[0].title} list={texts3[0].list} />
          <Text title={texts3[1].title} description={texts3[1].description} />
        </section>
        <ClientResult />
        <DevStrength />
      </div>
      <Footer />
    </>
  );
};
export default WhatWeDo;
