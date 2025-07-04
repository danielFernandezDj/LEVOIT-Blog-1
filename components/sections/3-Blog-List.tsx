"use client";

import Link from "next/link";

import BlogData from "@/lib/Blog-Data";

// import Image from "next/image";
import { Button } from "../ui/button";

interface BlogItem {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  hashtags: string;
  link: string;
}

export default function BlogList() {
  const blogData: BlogItem[] = BlogData();

  return (
    <main className="bg-[#222F3E]">
      <section className="flex flex-col justify-center items-center w-full gap-4 py-16">
        <h2 className="text-3xl text-white font-bold mb-10">
          <span className="text-[#F55700]">-</span> Our Top ️Blogs{" "}
          <span className="text-[#F55700]">-</span>
        </h2>
        {blogData.map((blog, index) => (
          <div key={index} className="flex flex-col w-full gap-6 text-white">
            <div className="flex justify-around md:justify-center md:gap-40 w-full px-2 text-white">
              <div className="flex flex-col gap-1 w-3/5 md:w-auto">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="max-w-5/6 text-[#CACACA]">{blog.subTitle}</p>
                <p className="text-sm text-[#CACACA]">{blog.hashtags}</p>
                <div>
                  <Button className="hover:cursor-pointer mt-2 px-8 text-lg tracking-wider rounded-full text-white bg-[#FFA41C] hover:bg-[#f29b1a]">
                    See more {">"}
                  </Button>
                </div>
              </div>

              <div className="bg-amber-500 w-30 h-30 rounded-2xl">
                {/* <Image
              src="{blog.image}"
              alt="Image"
              fill
              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
              /> */}
              </div>
            </div>

            <div className="bg-gray-500/50 w-4/5 pb-0.5 my-4 self-start md:self-center "></div>
          </div>
        ))}
        <Link
          href=""
          className="text-2xl py-4 text-white font-bold tracking-wide hover:tracking-widest transition-all duration-300 ease-in-out"
        >
          See more <span className="text-[#F55700]">{">"}</span>{" "}
        </Link>
      </section>
      ;
    </main>
  );
}
