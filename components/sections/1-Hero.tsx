"use client";

import Image from "next/image";

export default function Hero() {
  const productLink =
    "https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_1?crid=3FFYUKWK2X00Y&dib=eyJ2IjoiMSJ9.h1ZxlhUZUvTKQ3b25RgTx8cqBjmL_u7sQzQMP2MkhM824C0WkymudLUcq6P7_el7J73GJlfw3M74zjUb8G0AEd_7ZrZhfzJ2rcKkeHrtjpitumCgohddlZuFsEEEYr8BSjHJw9UIz-fqtizTTYXqXRhiTszkzz9u8oefj0fAyHvhZGiTpKpSukXlaEQTITzHdI71bfKbZzDrnDumIfNu9GCaWSaD72hFDIQEztyGSFI.A8qD29VKmj04v18695WrWMYz3lD_errEsS5wVy8vwwI&dib_tag=se&keywords=mini%2Bair%2Bpurifier&qid=1750736560&rnid=8308919011&sprefix=mini%2Bair%2Bpurifier%2Caps%2C267&sr=8-1&th=1";

  return (
    <main className="w-full pb-14 pt-6 lg:py-14 bg-[#F2F6FF] text-[#0F1111]">
      {/* <section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 p-2 lg:px-5 w-full h-full m-auto border-2"> */}
      <section className="grid lg:grid-flow-row lg:grid-cols-2 grid-rows-1 place-content-center lg:p-16 gap-8">
        <div className="flex flex-col gap-2 lg:gap-4 lg:w-full lg:m-auto md:gap-4 text-center">
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
        </div>

        <div className="flex flex-col justify-center items-center w-full gap-4">
          <Image
            src="/product-Image.png"
            alt="Image?"
            width={500}
            height={500}
            className="w-56 md:w-60"
          />
          <p className="text-[#077D61] text-sm md:text-xl px-8">In Stock</p>
        </div>

        <div className="lg:hidden flex flex-col justify-center items-center gap-8 ">
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
            <ul className="lg:hidden flex gap-8 -mt-2">
              <li>• Free Return</li>
              <li>• Free Delivery</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
