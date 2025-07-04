import Head from "next/head";
import Link from "next/link";

import blogData from "@/lib/Blog-Data";

// const blogPosts = [
//   {
//     id: 1,
//     slug: "levoit-allergies-pets-1",
//     title: "Why LEVOIT is Great for Allergies and Pet Owners",
//     summary:
//       "Say goodbye to pet hair and allergens with the right LEVOIT model.",
//     tag: "Home Health",
//     date: "Jul 2025",
//   },
//   {
//     id: 2,
//     slug: "levoit-vs-other-purifiers-2",
//     title: "LEVOIT vs Other Air Purifiers: Honest Comparison",
//     summary: "We break down the differences in filtration, noise, and value.",
//     tag: "Comparison",
//     date: "Jul 2025",
//   },
//   {
//     id: 3,
//     slug: "levoit-allergies-pets-3",
//     title: "Why LEVOIT is Great for Allergies and Pet Owners",
//     summary:
//       "Say goodbye to pet hair and allergens with the right LEVOIT model.",
//     tag: "Home Health",
//     date: "Jul 2025",
//   },
//   {
//     id: 4,
//     slug: "levoit-allergies-pets-4",
//     title: "Why LEVOIT is Great for Allergies and Pet Owners",
//     summary:
//       "Say goodbye to pet hair and allergens with the right LEVOIT model.",
//     tag: "Home Health",
//     date: "Jul 2025",
//   },
//   {
//     id: 5,
//     slug: "levoit-allergies-pets-5",
//     title: "Why LEVOIT is Great for Allergies and Pet Owners",
//     summary:
//       "Say goodbye to pet hair and allergens with the right LEVOIT model.",
//     tag: "Home Health",
//     date: "Jul 2025",
//   },
// ];

export default function BlogIndex() {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
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
      </main>
    </div>
  );
}
