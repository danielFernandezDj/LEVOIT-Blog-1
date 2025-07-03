"use client";

import { Check } from 'lucide-react';

export default function WhatPeople() {
  return (
    <main className="flex flex-col justify-center items-center gap-10 p-2 py-16 w-full h-full m-auto text-[#5E5E5E]">
      <h1 className="text-2xl font-bold text-[#0F1111]">What People Are Saying</h1>

      <section className="bg-[#f3f4f6] flex flex-col gap-4 mx-2 p-3">
        <h2 className="text-xl font-bold">Customers say</h2>
        <p>Customers find the air purifier easy to set up and use, with an attractive design that fits well in any room, and appreciate its ability to filter out airborne dust. The device works well for pet dander and quickly removes strong cooking odors</p>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-4 text-sm justify-around">
            <p>851 customers mention &quot;Air quality&quot;</p>
            <p className="text-[#077D61]">740 positive</p>
          </div>

          <div className="flex gap-6 justify-center rounded-lg p-2 bg-[#222F3E] text-white">
            <p>4.5 <span className="text-[#FFA41C]">★★★★</span></p>
            <p>55,383 ratings</p>
          </div>
        </div>
      </section>

      <section>
        <p><Check className='w-15 h-auto'/> Air quality</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </section>
    </main>
  );
}
