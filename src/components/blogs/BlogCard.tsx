import Link from 'next/link';
import React from 'react';

const BlogCard = ({
  id,
  img,
  time,
  name,
  title,
  description,
}: {
  id: number;
  img: string;
  time: string;
  name: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="font-avenir">
      <Link href={`/blogs/${id}`}>
        <div className="h-[200px] md:h-[399px] w-full rounded-lg overflow-hidden">
          <img src={img} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="mt-2 md:mt-6 space-y-5">
          <div className="text-sm md:text-lg font-avenir text-[#445169] flex items-center gap-2">
            {time} read{' '}
            <div className="w-1.5 h-1.5 rounded-full bg-[#445169]" />
            by {name}
          </div>
          <h2 className="text-[#1C1B4E] text-2xl md:text-[40px] md:leading-[60px] font-bold">
            {title}
          </h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </Link>
    </div>
  );
};
export default BlogCard;
