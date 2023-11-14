import { Header } from 'components';
import React from 'react';
import { blogs } from '.';
import { useRouter } from 'next/router';

const Blog = () => {
  const router = useRouter();
  console.log(router.query);
  const blog = blogs[0];
  return (
    <div className="">
      <Header />
      <section className="px-5 md:px-20 pb-8 pt-[116px] md:pb-24 md:pt-[180px]">
        <div className="max-w-[760px] mx-auto space-y-8">
          <div className="space-y-5">
            <h2 className="text-[#1C1B4E] text-2xl md:text-[40px] md:leading-[60px] font-bold">
              {blog.title}
            </h2>
            <div className="flex items-center justify-between">
              <div className="text-base md:text-lg font-avenir text-[#445169] flex items-center gap-2">
                {'9 minute'} read{' '}
                <div className="w-1.5 h-1.5 rounded-full bg-[#445169]" />
                by {'Nick Brown'}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 md:w-8 h-6 md:h-8 cursor-pointer">
                  <img
                    src="/images/fb.svg"
                    className="w-full h-full object-cover"
                    alt="Facebook"
                  />
                </div>
                <div className="w-6 md:w-8 h-6 md:h-8 cursor-pointer">
                  <img
                    src="/images/insta.svg"
                    className="w-full h-full object-cover"
                    alt="Instagram"
                  />
                </div>
                <div className="w-6 md:w-8 h-6 md:h-8 cursor-pointer">
                  <img
                    src="/images/x.svg"
                    className="w-full h-full object-cover"
                    alt="Twitter"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[200px] md:h-[516px] w-full rounded-lg overflow-hidden">
            <img
              src={blog.img}
              className="w-full h-full object-cover"
              alt="Giverise Image"
            />
          </div>
          <div className="mt-[32px]">
            <h3 className="text-xl md:text-3xl leading-[38px] font-semibold">
              Introduction
            </h3>
            <p className="text-[#475467] text-base md:text-lg mt-3 md:mt-6">{`Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.`}</p>
            <p className="text-[#475467] text-base md:text-lg mt-3">{`Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.`}</p>
            <p className="text-[#475467] text-base md:text-lg mt-3">{`Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.`}</p>
            <p className="text-[#475467] text-base md:text-lg mt-3">{`Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.`}</p>
            <p className="text-[#475467] text-base md:text-lg mt-3">{`Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.`}</p>
            <p className="text-[#475467] text-base md:text-lg mt-3">{`Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.`}</p>
            <p className="text-[#475467] text-base md:text-lg mt-3">{`Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.`}</p>
            <p className="text-[#475467] text-base md:text-lg mt-3">{`Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.`}</p>
            <p className="text-[#475467] text-base md:text-lg mt-3">{`Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.`}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
