"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Button } from "../ui/button";

// import Image from "next/image";

export default function ReadyForClean() {
  return (
    <main className="flex flex-col justify-center items-center gap-20 p-2 py-16 w-full h-full m-auto bg-[#F2F6FF]">
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-6xl lg:text-7xl text-center font-bold mb-14">Ready for Clean Air?</h2>

        <div className="flex flex-col gap-2">
          {/* Image */}
          <div className="bg-amber-500 w-60 h-60 rounded-lg"></div>
          <p className="text-[#077D61] ml-2">In Stock</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 mt-6">
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
        </div>
      </section>

      <ScrollArea className="w-full whitespace-nowrap">
        <section className="flex flex-col w-full flex-wrap lg:flex-nowrap md:flex-row md:gap-8 gap-4 px-6">
          <div className="bg-amber-500 md:w-125 m-auto w-full h-60 md:h-100 rounded-lg"></div>
          <div className="bg-amber-500 md:w-125 m-auto w-full h-60 md:h-100 rounded-lg"></div>
          <div className="bg-amber-500 md:w-125 m-auto w-full h-60 md:h-100 rounded-lg"></div>

          <div className="hidden lg:block bg-amber-500 w-full md:w-125 m-auto h-60 md:h-100 rounded-lg"></div>
        </section>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </main>
  );
}
