"use client";

import { Button } from "../ui/button";

export default function LEVOITvs() {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 p-2 lg:px-5 w-full h-full m-auto">
        <h2 className="font-bold text-2xl">LEVOIT vs. Other Brands</h2>
        <table className="">
          <caption className="caption-top">
            Table 3.1: Professional wrestlers and their signature moves.
          </caption>
          <thead>
            <tr>
              <th>Feature</th>
              <th>LEVOIT</th>
              <th>Others</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Filtration</td>
              <td>HEPA H13</td>
              <td>HEPA H11 or lower</td>
            </tr>
            <tr>
              <td>Noise Level</td>
              <td>Very Quite</td>
              <td>Moderate</td>
            </tr>
            <tr>
              <td>Room Coverage</td>
              <td>Up to 1095 ft²</td>
              <td>Up to 600 ft²</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>Affordable</td>
              <td>Varies</td>
            </tr>
          </tbody>
        </table>

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
    </>
  );
}
