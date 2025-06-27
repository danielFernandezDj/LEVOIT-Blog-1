"use client";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="w-full h-[40rem] mb-18 mt-14 border-2 border-amber-400">
      <section className="flex flex-col justify-center items-center w-full h-full m-auto">
        <div>
          <h1>Breathe Better with LEVOIT</h1>
          <p>Transform your bedroom into a clean-air sanctuary.</p>
        </div>

        <div className="flex flex-col items-center justify-center m-auto">
          <AspectRatio ratio={16 / 9}>
            <Image src="" alt="Image" className="rounded-md object-cover" />
          </AspectRatio>
          <p className="text-[#077D61]">In Stock</p>
        </div>

        <div>
          <Button variant="outline">Button</Button>
        </div>

        <div>
          <ul className="...">
            <li>Free Return</li>
            <li>Free Delivery</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
