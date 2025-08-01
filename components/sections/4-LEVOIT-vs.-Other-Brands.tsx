"use client";

export default function LEVOITvs() {
  const productLink =
    "https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_1?crid=3FFYUKWK2X00Y&dib=eyJ2IjoiMSJ9.h1ZxlhUZUvTKQ3b25RgTx8cqBjmL_u7sQzQMP2MkhM824C0WkymudLUcq6P7_el7J73GJlfw3M74zjUb8G0AEd_7ZrZhfzJ2rcKkeHrtjpitumCgohddlZuFsEEEYr8BSjHJw9UIz-fqtizTTYXqXRhiTszkzz9u8oefj0fAyHvhZGiTpKpSukXlaEQTITzHdI71bfKbZzDrnDumIfNu9GCaWSaD72hFDIQEztyGSFI.A8qD29VKmj04v18695WrWMYz3lD_errEsS5wVy8vwwI&dib_tag=se&keywords=mini%2Bair%2Bpurifier&qid=1750736560&rnid=8308919011&sprefix=mini%2Bair%2Bpurifier%2Caps%2C267&sr=8-1&th=1";
  
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-10 p-2 py-16 w-full h-full m-auto bg-[#f3f4f6]">
        <h2 className="font-bold text-2xl">LEVOIT vs. Other Brands</h2>
        <table className="">
          <thead className="border-2 bg-white">
            <tr>
              <th className="py-4 px-4">Feature</th>
              <th className="py-4 px-4 text-[#F55700]">LEVOIT</th>
              <th className="py-4 px-4">Others</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2">
              <td className="py-4 px-4">Filtration</td>
              <td className="py-4 px-4 text-[#F55700]">HEPA H13</td>
              <td className="py-4 px-4">HEPA H11 or lower</td>
            </tr>
            <tr className="border-2 bg-white">
              <td className="py-4 px-4">Noise Level</td>
              <td className="py-4 px-4 text-[#F55700]">Very Quite</td>
              <td className="py-4 px-4">Moderate</td>
            </tr>
            <tr className="border-2">
              <td className="py-4 px-4">Room Coverage</td>
              <td className="py-4 px-4 text-[#F55700]">Up to 1095 ft²</td>
              <td className="py-4 px-4">Up to 600 ft²</td>
            </tr>
            <tr className="border-2 bg-white">
              <td className="py-4 px-4">Price</td>
              <td className="py-4 px-4 text-[#F55700]">Affordable</td>
              <td className="py-4 px-4">Varies</td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col justify-center items-center gap-8 mt-6">
          <div>
            <a href={productLink} target="_blank" className="hover:cursor-pointer w-2xs px-6 py-4 bg-[#FFA41C] hover:bg-[#f29b1a] text-[#0F1111] text-xl font-bold rounded-full">
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
    </>
  );
}
