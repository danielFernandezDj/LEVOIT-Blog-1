import Head from "next/head";
import Link from "next/link";

import blogData from "@/lib/Blog-Data";

export default function BlogIndex() {
  return (
    <div className="bg-slate-100 text-[#222F3E] min-h-screen font-sans">
      <Head>
        <title>Our Blog – CleanAir.com</title>
        <meta
          name="description"
          content="Explore expert guides and comparisons on LEVOIT air purifiers for your bedroom."
        />
      </Head>

      <header className="text-center py-10">
        <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
          <span className="text-[#F55700]">-</span>Our Top Blogs{" "}
          <span className="text-[#F55700]">-</span>
        </h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 space-y-10 pb-20">
        {blogData.map((post) => (
          <div
            key={post.slug}
            className="flex justify-between items-start gap-4 border-b border-gray-700 pb-6"
          >
            <div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-800 mt-1">{post.summary}</p>
              <p className="text-xs mt-2 text-gray-800">
                #{post.tag} • {post.date}
              </p>
              <Link
                href={post.slug}
                className="inline-block mt-3 bg-[#F55700] text-white text-sm font-bold tracking-wider py-2 px-4 rounded-full hover:bg-orange-600 transition"
              >
                See more &gt;
              </Link>
            </div>
            <div className="hidden md:block md:min-w-64 min-h-44 bg-[#F55700] rounded-lg" />
          </div>
        ))}
      </main>
    </div>
  );
}
