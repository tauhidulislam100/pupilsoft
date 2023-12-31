import { BlogCard, Header } from 'components';
import React from 'react';

export const blogs = [
  {
    img: '/img/blog1.jpeg',
    time: '9 minute',
    name: 'Nick Brown',
    title: "Crush Your Nonprofit's Fundraising Goals on Giving Tuesday",
    description: `Launch a successful GivingTuesday fundraising campaign for your
            nonprofit with Givelify's mobile donation app and our step-by-step
            guide on how to harness the power of this generosity movement.`,
  },
  {
    img: '/img/blog2.jpeg',
    time: '9 minute',
    name: 'Nick Brown',
    title: 'How Giverise helps your organization achieve its long term growth',
    description: `Launch a successful GivingTuesday fundraising campaign for your
            nonprofit with Givelify's mobile donation app and our step-by-step
            guide on how to harness the power of this generosity movement.`,
  },
];

const Blogs = () => {
  return (
    <div className="">
      <Header />
      <section className="px-5 md:px-20 pb-10 pt-[120px] md:pb-24 md:pt-[180px]">
        <div className="max-w-[760px] mx-auto">
          <h1 className="text-4xl md:text-6xl leading-[50px] md:leading-[70px] font-bold text-[#1C1B4E] text-center md:text-left ">
            Latest blogs from Giverise
          </h1>
          <div className="pt-8 md:pt-[60px] space-y-[60px]">
            {blogs.map((blog: any, idx: number) => (
              <BlogCard
                key={`blog_${idx}`}
                id={idx}
                img={blog.img}
                time="9 minute"
                name="Nick Brown"
                title={blog.title}
                description="Launch a successful GivingTuesday fundraising campaign for your
          nonprofit with Givelify's mobile donation app and our step-by-step
          guide on how to harness the power of this generosity movement."
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
