"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Hero() {
  return (
    <>
      <main>
        <section>
          <h1></h1>
          <p></p>
        </section>

        <section>
          <AspectRatio ratio={16 / 9}>
            <Image src="..." alt="Image" className="rounded-md object-cover" />
          </AspectRatio>
        </section>
      </main>
    </>
  );
}
