"use client";

import CarouselHero from "../layout/CarouselHero";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="w-full py-14 bg-[#F2F6FF] text-[#0F1111]">
      <section className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 p-2 lg:px-5 w-full h-full m-auto">
        <div className="flex flex-col gap-2 lg:gap-4 lg:w-3/6 lg:m-auto md:gap-4 text-center">
          <div className="flex flex-col gap-4 lg:max-w-5/6 m-auto">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold">
              Breathe Better with LEVOIT
            </h1>
            <p className="md:text-3xl">
              Transform your bedroom into a clean-air sanctuary.
            </p>
          </div>

          <div className="hidden lg:flex flex-col justify-center items-center gap-8 mt-6">
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
        </div>

        <div className="flex flex-col justify-center gap-2 m-auto bg-white rounded-2xl">
          {/* <CarouselHero /> */}
          <Image
            src="https://m.media-amazon.com/images/I/71tpOZEW0eL._AC_SL1500_.jpg"
            alt="Image?"
            width={500}
            height={500}
            className="w-56 md:w-60 h-full m-auto rounded-2xl px-10 pt-5"
          />
          <p className="text-[#077D61] text-sm md:text-xl px-2">In Stock</p>
        </div>

        <div>
          <Button className="lg:hidden hover:cursor-pointer w-2xs py-7 bg-[#FFA41C] hover:bg-[#f29b1a] text-[#0F1111] text-xl font-bold rounded-full">
            Check Price on Amazon
          </Button>
        </div>

        <div>
          <ul className="lg:hidden flex gap-8 -mt-2">
            <li>• Free Return</li>
            <li>• Free Delivery</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
