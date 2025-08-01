"use client";

import reviewData from "@/lib/Reviews-Data";
import videoData from "@/lib/VideoData";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Check } from "lucide-react";
import { Play } from "lucide-react";
import { CircleUserRound } from "lucide-react";

import Image from "next/image";

export default function WhatPeople() {
  const productLink =
    "https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_1?crid=3FFYUKWK2X00Y&dib=eyJ2IjoiMSJ9.h1ZxlhUZUvTKQ3b25RgTx8cqBjmL_u7sQzQMP2MkhM824C0WkymudLUcq6P7_el7J73GJlfw3M74zjUb8G0AEd_7ZrZhfzJ2rcKkeHrtjpitumCgohddlZuFsEEEYr8BSjHJw9UIz-fqtizTTYXqXRhiTszkzz9u8oefj0fAyHvhZGiTpKpSukXlaEQTITzHdI71bfKbZzDrnDumIfNu9GCaWSaD72hFDIQEztyGSFI.A8qD29VKmj04v18695WrWMYz3lD_errEsS5wVy8vwwI&dib_tag=se&keywords=mini%2Bair%2Bpurifier&qid=1750736560&rnid=8308919011&sprefix=mini%2Bair%2Bpurifier%2Caps%2C267&sr=8-1&th=1";

  return (
    <main className="flex flex-col justify-center items-center gap-10 p-2 py-16 lg:w-4/6 w-full h-full m-auto text-[#5E5E5E]">
      <h1 className="text-2xl font-bold text-[#0F1111]">
        What People Are Saying
      </h1>

      <section className="bg-[#f3f4f6] flex flex-col gap-4 mx-2 p-3">
        <h2 className="text-xl font-bold">Customers say</h2>
        <p>
          Customers find the air purifier easy to set up and use, with an
          attractive design that fits well in any room, and appreciate its
          ability to filter out airborne dust. The device works well for pet
          dander and quickly removes strong cooking odors
        </p>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-4 lg:gap-8 text-sm justify-around lg:justify-center">
            <p>851 customers mention &quot;Air quality&quot;</p>
            <p className="text-[#077D61]">740 positive</p>
          </div>

          <div className="flex gap-6 justify-center rounded-lg p-2 bg-[#222F3E] text-white">
            <p>
              4.5 <span className="text-[#FFA41C]">★★★★</span>
            </p>
            <p>55,383 ratings</p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-4 md:gap-4">
        <p className="flex items-center gap-2">
          <Check className="w-6 h-auto text-[#79a55b]" /> Air quality
        </p>
        <p className="flex items-center gap-2">
          <Check className="w-6 h-auto text-[#79a55b]" /> Works well
        </p>
        <p className="flex items-center gap-2">
          <Check className="w-6 h-auto text-[#79a55b]" /> Ease of use
        </p>
        <p className="flex items-center gap-2">
          <Check className="w-6 h-auto text-[#79a55b]" /> Design
        </p>
        <p className="flex items-center gap-2">
          <Check className="w-6 h-auto text-[#79a55b]" /> Filter quality
        </p>
      </section>

      {/* Videos list */}
      <section className="flex flex-col gap-5 mt-10  overflow-auto md:w-full">
        <h2 className="text-2xl text-start md:text-center font-bold text-[#0F1111]">
          Reviews with videos
        </h2>
        <ScrollArea className="w-86 md:w-full h-auto whitespace-nowrap ">
          <div className="flex gap-4 lg:gap-6 md:justify-center">
            {videoData.map((data, index) => (
              <a
                key={index}
                target="_blank"
                href={data.link}
                className="border-2 border-[#364558] hover:border-2 hover:border-amber-500 flex flex-col justify-end p-2 w-35 h-55 lg:w-52 lg:h-72 rounded-lg"
              >
                <Image
                  src={data.image}
                  alt=""
                  width={300}
                  height={250}
                  className="h-full rounded-md object-cover"
                />
                <span className="text-[#FFA41C]">{data.stars}</span>
                <p className="flex gap-2 text-[#364558]">
                  {" "}
                  <Play className="w-5 h-auto" /> {data.time}
                </p>
              </a>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Image List */}
      <section className="flex flex-col gap-5 w-full m-aut">
        <h2 className="text-2xl text-start md:text-center font-bold text-[#0F1111]">
          Reviews with images
        </h2>
        <div className="flex justify-around gap-4 md:justify-center md:gap-6">
          <a
            href="https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_1?crid=3FFYUKWK2X00Y&dib=eyJ2IjoiMSJ9.h1ZxlhUZUvTKQ3b25RgTx8cqBjmL_u7sQzQMP2MkhM824C0WkymudLUcq6P7_el7J73GJlfw3M74zjUb8G0AEd_7ZrZhfzJ2rcKkeHrtjpitumCgohddlZuFsEEEYr8BSjHJw9UIz-fqtizTTYXqXRhiTszkzz9u8oefj0fAyHvhZGiTpKpSukXlaEQTITzHdI71bfKbZzDrnDumIfNu9GCaWSaD72hFDIQEztyGSFI.A8qD29VKmj04v18695WrWMYz3lD_errEsS5wVy8vwwI&dib_tag=se&keywords=mini%2Bair%2Bpurifier&qid=1750736560&rnid=8308919011&sprefix=mini%2Bair%2Bpurifier%2Caps%2C267&sr=8-1&th=1"
            target="_blank"
            className="bg-[#364558] hover:border-2 border-amber-500 flex flex-col justify-end w-45 h-60 lg:w-72 lg:h-auto rounded-lg"
          >
            <Image
              src="/review-images/r-image-1.jpg"
              alt=""
              width={300}
              height={250}
              className="h-full rounded-md object-cover"
            />
          </a>
          <a
            href="https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_1?crid=3FFYUKWK2X00Y&dib=eyJ2IjoiMSJ9.h1ZxlhUZUvTKQ3b25RgTx8cqBjmL_u7sQzQMP2MkhM824C0WkymudLUcq6P7_el7J73GJlfw3M74zjUb8G0AEd_7ZrZhfzJ2rcKkeHrtjpitumCgohddlZuFsEEEYr8BSjHJw9UIz-fqtizTTYXqXRhiTszkzz9u8oefj0fAyHvhZGiTpKpSukXlaEQTITzHdI71bfKbZzDrnDumIfNu9GCaWSaD72hFDIQEztyGSFI.A8qD29VKmj04v18695WrWMYz3lD_errEsS5wVy8vwwI&dib_tag=se&keywords=mini%2Bair%2Bpurifier&qid=1750736560&rnid=8308919011&sprefix=mini%2Bair%2Bpurifier%2Caps%2C267&sr=8-1&th=1"
            target="_blank"
            className="bg-[#364558] hover:border-2 border-amber-500 flex flex-col justify-end w-45 h-60 lg:w-72 lg:h-auto rounded-lg"
          >
            <Image
              src="/review-images/r-image-2.jpg"
              alt=""
              width={300}
              height={250}
              className="h-full rounded-md object-cover"
            />
          </a>
        </div>
      </section>

      {/* CTA-btn */}
      <section className="flex flex-col justify-center items-center gap-8 mt-6">
        <div>
          <a
            href={productLink}
            target="_blank"
            className="hover:cursor-pointer w-2xs px-6 py-4 bg-[#FFA41C] hover:bg-[#f29b1a] text-[#0F1111] text-xl font-bold rounded-full"
          >
            Check Price on Amazon
          </a>
        </div>

        <div>
          <ul className="flex gap-8 -mt-2">
            <li>• Free Return</li>
            <li>• Free Delivery</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center gap-5">
        <h2 className="text-xl font-bold text-[#0F1111]">
          Top reviews from the United States
        </h2>
        {reviewData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 border-2 rounded-2xl"
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 justify-start items-center text-[#0F1111]">
                <CircleUserRound className="w-8 h-auto" />
                <h3 className="text-xl ">{data.logoInit}</h3>
              </div>

              <div>
                <p>
                  <span className="text-[#FFA41C] mr-4">{data.stars}</span>{" "}
                  {data.starsText}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-xl text-[#0F1111]">
                {data.header}
              </h3>
              <p>{data.subtext}</p>
              <p className="text-[#0F1111]">{data.textP}... </p>
              <a
                href={data.link}
                target="_blank"
                className="text-blue-500 hover:underline decoration-wavy"
              >
                See more
              </a>
            </div>

            <p className="self-center">{data.lastMessage}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
