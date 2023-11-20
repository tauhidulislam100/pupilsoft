import Link from 'next/link';
import React from 'react';
import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const BlogCard = ({ data }: any) => {
  const { featuredImage, title, excerpt, author, date, slug } = data;
  return (
    <div className="font-avenir">
      <Link href={`/blogs/${slug}`}>
        <div className="h-[200px] md:h-[399px] w-full rounded-lg overflow-hidden">
          <img
            src={featuredImage?.node.sourceUrl}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="mt-2 md:mt-6 space-y-5">
          <div className="text-sm md:text-lg font-avenir text-[#445169] flex items-center gap-2">
            {dayjs(date).fromNow()}
            <div className="w-1.5 h-1.5 rounded-full bg-[#445169]" />
            by {author.node.name}
          </div>
          <h2 className="text-[#1C1B4E] text-2xl md:text-[40px] md:leading-[60px] font-bold">
            {title}
          </h2>
          <div
            className="text-dark"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </Link>
    </div>
  );
};
export default BlogCard;
