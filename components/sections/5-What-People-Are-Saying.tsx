"use client";

import ReviewsData from "@/lib/Reviews-Data";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";

import { Check } from "lucide-react";
import { Play } from "lucide-react";
import { CircleUserRound } from "lucide-react";

// import Image from "next/image";

interface ReviewsItems {
  id: number;
  logoInit: string;
  stars: string;
  starsText: string;
  header: string;
  subtext: string;
  textP: string;
  link: string;
  lastMessage: string;
}

export default function WhatPeople() {
  const reviewData: ReviewsItems[] = ReviewsData();

  return (
    <main className="flex flex-col justify-center items-center gap-10 p-2 py-16 w-full h-full m-auto text-[#5E5E5E]">
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
          <div className="flex gap-4 text-sm justify-around">
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

      <section className="flex flex-wrap gap-4">
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
      <section className="flex flex-col gap-5 mt-10 pl-4 overflow-auto">
        <h2 className="text-2xl text-start font-bold text-[#0F1111]">
          Reviews with videos
        </h2>
        <ScrollArea className="lg:hidden w-96 md:w-full h-auto whitespace-nowrap">
          <div className="flex gap-4">
            {/* Video 1 */}
            <div className="bg-[#364558] flex flex-col justify-end p-2 w-35 h-55 rounded-lg">
              <span className="text-[#FFA41C]">★★★★</span>
              <p className="flex gap-2 text-white">
                {" "}
                <Play className="w-5 h-auto" /> 0:29
              </p>
            </div>
            {/* Video 2 */}
            <div className="bg-[#364558] flex flex-col justify-end p-2 w-35 h-55 rounded-lg">
              <span className="text-[#FFA41C]">★★★★</span>
              <p className="flex gap-2 text-white">
                {" "}
                <Play className="w-5 h-auto" /> 0:27
              </p>
            </div>
            {/* Video 3 */}
            <div className="bg-[#364558] flex flex-col justify-end p-2 w-35 h-55 rounded-lg">
              <span className="text-[#FFA41C]">★★★★★</span>
              <p className="flex gap-2 text-white">
                {" "}
                <Play className="w-5 h-auto" /> 0:15
              </p>
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Image List */}
      <section className="flex flex-col gap-5 w-full m-auto">
        <h2 className="text-2xl text-start font-bold text-[#0F1111]">
          Reviews with images
        </h2>

        <div className="flex justify-around">
          <div className="bg-[#364558] flex flex-col justify-end p-2 w-45 h-60 rounded-lg"></div>
          <div className="bg-[#364558] flex flex-col justify-end p-2 w-45 h-60 rounded-lg"></div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-8 mt-6">
        <div>
          <Button className="hover:cursor-pointer w-2xs py-7 bg-[#FFA41C] hover:bg-[#f29b1a] text-[#0F1111] text-xl font-bold rounded-full">
            Check Price on Amazon
          </Button>
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
              <a href={data.link} className="text-blue-500">
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
