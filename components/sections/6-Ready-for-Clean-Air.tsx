"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function ReadyForClean() {
  const productLink =
    "https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_1?crid=3FFYUKWK2X00Y&dib=eyJ2IjoiMSJ9.h1ZxlhUZUvTKQ3b25RgTx8cqBjmL_u7sQzQMP2MkhM824C0WkymudLUcq6P7_el7J73GJlfw3M74zjUb8G0AEd_7ZrZhfzJ2rcKkeHrtjpitumCgohddlZuFsEEEYr8BSjHJw9UIz-fqtizTTYXqXRhiTszkzz9u8oefj0fAyHvhZGiTpKpSukXlaEQTITzHdI71bfKbZzDrnDumIfNu9GCaWSaD72hFDIQEztyGSFI.A8qD29VKmj04v18695WrWMYz3lD_errEsS5wVy8vwwI&dib_tag=se&keywords=mini%2Bair%2Bpurifier&qid=1750736560&rnid=8308919011&sprefix=mini%2Bair%2Bpurifier%2Caps%2C267&sr=8-1&th=1";

  const productImages = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/719T99FoFkL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/71vIJdf1mQL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/71m4zakrmmL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/71Wo7US5scL._AC_SL1500_.jpg",
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/71vZx5xu+YL._AC_SL1500_.jpg",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center gap-20 p-2 py-16 w-full h-full m-auto bg-[#F2F6FF]">
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-6xl lg:text-7xl text-center font-bold mb-14">
          Ready for Clean Air?
        </h2>

        <div className="flex flex-col items-center gap-3">
          {/* Image */}
          <Image
            src="/product-Image.png"
            alt="Image?"
            width={500}
            height={500}
            className="w-56 md:w-60"
          />
          <p className="text-[#077D61] ml-2">- In Stock -</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 mt-6">
          <div>
            <a
              href={productLink}
              target="_blank"
              className="hover:cursor-pointer w-2xs py-3 px-6 bg-[#FFA41C] hover:bg-[#f29b1a] text-[#0F1111] text-xl font-bold rounded-full"
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
        </div>
      </section>

      <ScrollArea className="w-full whitespace-nowrap">
        <section className="flex flex-col items-center w-full flex-wrap lg:flex-nowrap md:flex-row md:gap-8 gap-4 px-6">
          {productImages.map((image) => (
            <Image
              key={image.id}
              src={image.image}
              alt="Image?"
              width={500}
              height={500}
              className="md:w-125 m-auto w-full h-auto md:h-auto rounded-lg"
            />
          ))}
        </section>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </main>
  );
}
