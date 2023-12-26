import { Header } from 'components';
import React from 'react';
import { blogs } from '.';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
dayjs.extend(relativeTime);

const Blog = ({ post, posts, preview }) => {
  const router = useRouter();
  console.log(post);
  if (router.isFallback) {
    return <div className="">Loading....</div>;
  }

  const { featuredImage, title, content, author, date, slug } = post;

  return (
    <div className="">
      <Header />
      <section className="px-5 md:px-20 pb-8 pt-[116px] md:pb-24 md:pt-[180px]">
        <div className="max-w-[760px] mx-auto space-y-8">
          <div className="space-y-5">
            <h2 className="text-[#1C1B4E] text-2xl md:text-[40px] md:leading-[60px] font-bold">
              {title}
            </h2>
            <div className="flex items-center justify-between">
              <div className="text-base md:text-lg font-avenir text-[#445169] flex items-center gap-2">
                {dayjs(date).fromNow()}
                <div className="w-1.5 h-1.5 rounded-full bg-[#445169]" />
                by {author.node.name}
              </div>
              <div className="flex items-center gap-1">
                <a
                  href={'https://facebook.com'}
                  target="_blank"
                  className="w-6 md:w-8 h-6 md:h-8"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={'https://instagram.com'}
                  target="_blank"
                  className="w-6 md:w-8 h-6 md:h-8"
                >
                  <FaInstagram />
                </a>
                <a
                  href={'https://x.com'}
                  target="_blank"
                  className="w-6 md:w-8 h-6 md:h-8"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="h-[200px] md:h-[516px] w-full rounded-lg overflow-hidden">
            <img
              src={featuredImage.node.sourceUrl}
              className="w-full h-full object-cover"
              alt="Giverise Image"
            />
          </div>
          <div className="mt-[32px]">
            <h3 className="text-xl md:text-3xl leading-[38px] font-semibold">
              Introduction
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="text-dark mt-10 text-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts.edges.map(({ node }) => `/blogs/${node.slug}`) || [],
    fallback: true,
  };
};
