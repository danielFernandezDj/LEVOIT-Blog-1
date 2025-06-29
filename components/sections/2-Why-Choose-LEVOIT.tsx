"use client";

// import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function WhyChooseLevoit() {
  return (
    <main className="flex flex-col gap-14 lg:gap-0 lg:flex-row justify-evenly w-full m-auto py-14 text-[#0F1111]">
      <section className="flex flex-col justify-center items-center gap-8 px-10">
        <h2 className="text-2xl font-bold">Why Choose LEVOIT?</h2>
        <ul className="list-disc flex flex-col gap-4">
          <li>H13 True HEPA filtration captures 99.97% of particles.</li>
          <li>Ideal for large bedrooms.</li>
          <li>Whisper-quiet operation.</li>
          <li>Effective for allergies, pets, and smoke.</li>
          <li>Trusted by over 50,000 users.</li>
        </ul>
      </section>

      <section className="flex justify-around w-full lg:w-3/6 gap-8 overflow-auto">
        <div className="hidden lg:flex justify-center w-full gap-8">
          <div className="w-50 h-60 rounded-2xl bg-amber-500">
            {/* <Image
              src=""
              alt="Image"
              fill
              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
              /> */}
          </div>
          <div className="w-50 h-60 rounded-2xl bg-amber-500">
            {/* <Image
              src=""
              alt="Image"
              fill
              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
              /> */}
          </div>
          <div className="w-50 h-60 rounded-2xl bg-amber-500">
            {/* <Image
              src=""
              alt="Image"
              fill
              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
              /> */}
          </div>
        </div>

        <ScrollArea className="lg:hidden w-96 md:w-full h-auto rounded-2xl whitespace-nowrap">
          <div className="flex w-max space-x-4 p-4 m-auto">
            <div className="w-50 h-60 rounded-2xl bg-amber-500">
              {/* <Image
              src=""
              alt="Image"
              fill
              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
              /> */}
            </div>
            <div className="w-50 h-60 rounded-2xl bg-amber-500">
              {/* <Image
              src=""
              alt="Image"
              fill
              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
              /> */}
            </div>
            <div className="w-50 h-60 rounded-2xl bg-amber-500">
              {/* <Image
              src=""
              alt="Image"
              fill
              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
              /> */}
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </main>
  );
}
