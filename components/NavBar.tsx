"use client";

import { Star } from "lucide-react";

export default function NavBar() {
  return (
    <main className="relative top-0">
      <section className="flex justify-evenly items-center gap-12 h-18 bg-[#222F3E]">
        <h1 className="font-bold text-2xl text-white">
          CleanAir.com
        </h1>
        <div className="flex gap-6 font-medium">
          <a
            href="https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_1?crid=3FFYUKWK2X00Y&dib=eyJ2IjoiMSJ9.h1ZxlhUZUvTKQ3b25RgTx8cqBjmL_u7sQzQMP2MkhM824C0WkymudLUcq6P7_el7J73GJlfw3M74zjUb8G0AEd_7ZrZhfzJ2rcKkeHrtjpitumCgohddlZuFsEEEYr8BSjHJw9UIz-fqtizTTYXqXRhiTszkzz9u8oefj0fAyHvhZGiTpKpSukXlaEQTITzHdI71bfKbZzDrnDumIfNu9GCaWSaD72hFDIQEztyGSFI.A8qD29VKmj04v18695WrWMYz3lD_errEsS5wVy8vwwI&dib_tag=se&keywords=mini%2Bair%2Bpurifier&qid=1750736560&rnid=8308919011&sprefix=mini%2Bair%2Bpurifier%2Caps%2C267&sr=8-1&th=1"
            target="_blank"
            className="text-[#FFA41C]"
          >
            Buy Now
          </a>
          <a
            href="https://ui.shadcn.com/docs/components/dropdown-menu"
            className="text-white"
          >
            Blog
          </a>
        </div>
      </section>

      <section className="flex justify-center items-center gap-6 h-10 bg-[#364558] text-white">
        <div className="flex items-center gap-0.5">
          <p className="mr-2">4.5</p>
          <Star size={"18"} fill="#FFA41C" strokeOpacity={"0"} />
          <Star size={"18"} fill="#FFA41C" strokeOpacity={"0"} />
          <Star size={"18"} fill="#FFA41C" strokeOpacity={"0"} />
          <Star size={"18"} fill="#FFA41C" strokeOpacity={"0"} />
        </div>
        <p>55,383 ratings</p>
      </section>
    </main>
  );
}
