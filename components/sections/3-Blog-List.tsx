"use client";

import Link from "next/link";
import blogData from "@/lib/Blog-Data";
// import Image from "next/image";

export default function BlogList() {
  return (
    <main className="bg-[#222F3E]">
      <section className="flex flex-col justify-center items-center w-full gap-6 py-16">
        <h2 className="text-3xl text-white font-bold mb-4">
          <span className="text-[#F55700]">-</span> Our Top ️Blogs{" "}
          <span className="text-[#F55700]">-</span>
        </h2>
        <div className="max-w-2xl mx-auto px-4 space-y-10 pb-8">
          {blogData.slice(0 ,3).map((post) => (
            <div
              key={post.slug}
              className="flex justify-between items-start gap-4 border-b border-gray-700 pb-6"
            >
              <div>
                <h2 className="text-xl text-white font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-300 mt-1">{post.summary}</p>
                <p className="text-xs mt-2 text-gray-400">
                  #{post.tag} • {post.date}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-3 bg-[#F55700] text-white text-sm font-bold tracking-wider py-2 px-4 rounded-full hover:bg-orange-600 transition"
                >
                  See more &gt;
                </Link>
              </div>
              <div className="hidden md:block md:min-w-64 min-h-44 bg-[#F55700] rounded-lg" />
            </div>
          ))}
        </div>
        <Link
          href="/blog"
          className="text-2xl text-white font-bold tracking-wide hover:tracking-widest transition-all duration-300 ease-in-out"
        >
          See more <span className="text-[#F55700]">{">"}</span>{" "}
        </Link>
      </section>
      ;
    </main>
  );
}
