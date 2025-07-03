"use client";

import Link from "next/link";

import blogData from "@/lib/Blog-Data";

// import Image from "next/image";
import { Button } from "../ui/button";

export default function BlogList() {

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
          href="https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_1?crid=3FFYUKWK2X00Y&dib=eyJ2IjoiMSJ9.h1ZxlhUZUvTKQ3b25RgTx8cqBjmL_u7sQzQMP2MkhM824C0WkymudLUcq6P7_el7J73GJlfw3M74zjUb8G0AEd_7ZrZhfzJ2rcKkeHrtjpitumCgohddlZuFsEEEYr8BSjHJw9UIz-fqtizTTYXqXRhiTszkzz9u8oefj0fAyHvhZGiTpKpSukXlaEQTITzHdI71bfKbZzDrnDumIfNu9GCaWSaD72hFDIQEztyGSFI.A8qD29VKmj04v18695WrWMYz3lD_errEsS5wVy8vwwI&dib_tag=se&keywords=mini%2Bair%2Bpurifier&qid=1750736560&rnid=8308919011&sprefix=mini%2Bair%2Bpurifier%2Caps%2C267&sr=8-1&th=1"
          className="text-2xl py-4 text-white font-bold tracking-wide hover:tracking-widest transition-all duration-300 ease-in-out"
        >
          See more <span className="text-[#F55700]">{">"}</span>{" "}
        </Link>
      </section>
      ;
    </main>
  );
}
