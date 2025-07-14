"use client";

import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function WhyChooseLevoit() {
  const productLink =
    "https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_1?crid=3FFYUKWK2X00Y&dib=eyJ2IjoiMSJ9.h1ZxlhUZUvTKQ3b25RgTx8cqBjmL_u7sQzQMP2MkhM824C0WkymudLUcq6P7_el7J73GJlfw3M74zjUb8G0AEd_7ZrZhfzJ2rcKkeHrtjpitumCgohddlZuFsEEEYr8BSjHJw9UIz-fqtizTTYXqXRhiTszkzz9u8oefj0fAyHvhZGiTpKpSukXlaEQTITzHdI71bfKbZzDrnDumIfNu9GCaWSaD72hFDIQEztyGSFI.A8qD29VKmj04v18695WrWMYz3lD_errEsS5wVy8vwwI&dib_tag=se&keywords=mini%2Bair%2Bpurifier&qid=1750736560&rnid=8308919011&sprefix=mini%2Bair%2Bpurifier%2Caps%2C267&sr=8-1&th=1";

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
          <div className="w-60 h-60 rounded-2xl bg-amber-500">
            <a href={productLink} target="_blank">
              <Image
                src="https://m.media-amazon.com/images/I/71m4zakrmmL._AC_SX679_.jpg"
                alt="Image"
                width={300}
                height={240}
                className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale hover:border-2 border-[#0F1111]"
              />
            </a>
          </div>
          <div className="w-60 h-60 rounded-2xl bg-amber-500">
            <a href={productLink} target="_blank">
              <Image
                src="https://m.media-amazon.com/images/I/71vIJdf1mQL._AC_SL1500_.jpg"
                alt="Image"
                width={300}
                height={240}
                className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale hover:border-2 border-[#0F1111]"
              />
            </a>
          </div>
          <div className="w-60 h-60 rounded-2xl bg-amber-500">
            <a href={productLink} target="_blank">
              <Image
                src="https://m.media-amazon.com/images/I/71CQ17XiTqL._AC_SX679_.jpg"
                alt="Image"
                width={300}
                height={240}
                className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale hover:border-2 border-[#0F1111]"
              />
            </a>
          </div>
        </div>

        <ScrollArea className="lg:hidden w-96 md:w-full h-auto rounded-2xl whitespace-nowrap">
          <div className="flex w-max space-x-4 p-4 m-auto">
            <div className="w-60 h-60 rounded-2xl bg-amber-500">
              <a href={productLink} target="_blank">
                <Image
                  src="https://m.media-amazon.com/images/I/71m4zakrmmL._AC_SX679_.jpg"
                  alt="Image"
                  width={300}
                  height={240}
                  className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </a>
            </div>
            <div className="w-60 h-60 rounded-2xl bg-amber-500">
              <a href={productLink} target="_blank">
                <Image
                  src="https://m.media-amazon.com/images/I/71vIJdf1mQL._AC_SL1500_.jpg"
                  alt="Image"
                  width={300}
                  height={240}
                  className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </a>
            </div>
            <div className="w-60 h-60 rounded-2xl bg-amber-500">
              <a href={productLink} target="_blank">
                <Image
                  src="https://m.media-amazon.com/images/I/71CQ17XiTqL._AC_SX679_.jpg"
                  alt="Image"
                  width={300}
                  height={240}
                  className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </a>
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </main>
  );
}
