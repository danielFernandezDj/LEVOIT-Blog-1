import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function LevoitLargeBedroomBlog() {
  const productLink =
    "https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_1?crid=3FFYUKWK2X00Y&dib=eyJ2IjoiMSJ9.h1ZxlhUZUvTKQ3b25RgTx8cqBjmL_u7sQzQMP2MkhM824C0WkymudLUcq6P7_el7J73GJlfw3M74zjUb8G0AEd_7ZrZhfzJ2rcKkeHrtjpitumCgohddlZuFsEEEYr8BSjHJw9UIz-fqtizTTYXqXRhiTszkzz9u8oefj0fAyHvhZGiTpKpSukXlaEQTITzHdI71bfKbZzDrnDumIfNu9GCaWSaD72hFDIQEztyGSFI.A8qD29VKmj04v18695WrWMYz3lD_errEsS5wVy8vwwI&dib_tag=se&keywords=mini%2Bair%2Bpurifier&qid=1750736560&rnid=8308919011&sprefix=mini%2Bair%2Bpurifier%2Caps%2C267&sr=8-1&th=1";

  const imageGallery = [
    {
      id: 1,
      src: "https://m.media-amazon.com/images/I/71m4zakrmmL._AC_SX679_.jpg",
    },
    {
      id: 2,
      src: "https://m.media-amazon.com/images/I/71CQ17XiTqL._AC_SX679_.jpg",
    },
    {
      id: 3,
      src: "https://m.media-amazon.com/images/I/71nwDDS+b7L._AC_SX679_.jpg",
    },
    {
      id: 4,
      src: "https://m.media-amazon.com/images/I/71vZx5xu+YL._AC_SL1500_.jpg",
    },
    {
      id: 5,
      src: "https://m.media-amazon.com/images/I/71vIJdf1mQL._AC_SL1500_.jpg",
    },
  ];

  return (
    <div className="bg-white text-[#0F1111] font-sans">
      <Head>
        <title>LEVOIT HEPA H13 Explained: Why It Matters for Clean Air</title>
        <meta
          name="description"
          content="What is HEPA H13 and why does it matter? Discover the power behind LEVOIT’s filtration technology and how it helps remove allergens and airborne particles."
        />
      </Head>

      <h1 className="text-3xl md:text-5xl font-bold text-center pt-10 md:pt-15">
        Why HEPA H13 Filtration Makes LEVOIT Air Purifiers Stand Out
      </h1>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="aspect-video mb-6">
          <iframe
            className="w-full h-full rounded"
            src="https://www.youtube.com/embed/QSVqgQbxg98"
            title="LEVOIT AIR PURIFIER | Honest Review"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center">
          <Link href={productLink} target="_blank">
            <p className="inline-block bg-[#FFA41C] hover:bg-[#f29b1a] text-white font-bold text-lg px-6 py-3 rounded-full mb-5 transition cursor-pointer">
              Now on Amazon
            </p>
          </Link>
        </div>

        <section className="space-y-6">
          <p>
            Not all filters are created equal. LEVOIT air purifiers with HEPA
            H13 technology capture ultra-fine particles, making a real
            difference in how clean your air feels. Learn what HEPA H13 means,
            and why it’s a must-have for bedrooms and allergy-sensitive homes.
          </p>

          {/* Why We Recommend */}
          <h2 className="text-2xl mt-14 font-semibold">
            Hospital-Grade Air Filtration for Your Home It
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Captures 99.97% of airborne particles as small as 0.1 microns.
            </li>
            <li>Removes allergens, pet dander, dust, smoke, mold spores.</li>
            <li>Ideal for people with asthma or allergies.</li>
            <li>Higher efficiency than standard HEPA filters.</li>
            <li>Used in medical environments and now in your bedroom.</li>
          </ul>

          <p>
            With over 60,000 global ratings and thousands of real-life
            testimonials, the LEVOIT Core 400S has solidified its place as one
            of Amazon’s top-rated air purifiers for bedrooms and allergy-prone
            households. Its ability to handle large spaces, combined with its
            sleek design and smart connectivity, makes it a standout choice for
            those who want powerful purification without the bulky footprint.
          </p>

          {/* Real User Reviews */}
          <h2 className="text-2xl mt-14 font-semibold">Real User Reviews</h2>
          <section className="bg-[#f3f4f6] flex flex-col gap-4 mx-2 p-3">
            <h2 className="text-xl font-bold">Customers say</h2>
            <p>
              Customers find the air purifier easy to set up and use, with an
              attractive design that fits well in any room, and appreciate its
              ability to filter out airborne dust. The device works well for pet
              dander and quickly removes strong cooking odors.
            </p>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex gap-4 lg:gap-8 text-sm justify-around lg:justify-center">
                <p>851 customers mention &quot;Air quality&quot;</p>
                <p className="text-[#077D61]">740 positive</p>
              </div>

              <div className="flex gap-6 justify-center rounded-lg p-2 bg-[#222F3E] text-white">
                <p>
                  4.5 <span className="text-[#FFA41C]">★★★★</span>
                </p>
                <p>55,383 ratings</p>
              </div>
            </div>
          </section>

          {/* Product Specs & Deal */}
          <h2 className="text-2xl mt-14 font-semibold">Product Specs & Deal</h2>
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Amazon DealRight Now</h3>
            <p className="text-lg mb-4">List Price: $49.99</p>
            <Link href={productLink} target="_blank">
              <p className="inline-block bg-[#FFA41C] hover:bg-[#f29b1a] text-white px-6 py-3 rounded-full font-semibold transition cursor-pointer">
                View on Amazon
              </p>
            </Link>
          </div>

          <p>
            LEVOIT air purifiers are engineered with a 3-stage filtration
            system: a pre-filter for dust and pet hair, a True HEPA filter for
            allergens, and an activated carbon filter for odors and VOCs. This
            comprehensive system makes it the best air purifier for home
            allergies, pets, and clean air circulation in large bedrooms.
          </p>

          <ol className="flex flex-col gap-2 list-decimal p-4">
            <li>“Perfect for any modern bedroom setup”</li>
            <li>“Captures allergens before they settle on your bed”</li>
            <li>“Elegant design that blends into any room”</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-10">Gallery</h2>

          {imageGallery.map((image, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full h-72 md:h-200 relative"
            >
              <a
                href={productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Image
                  src={image.src}
                  alt="LEVOIT Air Purifier product image"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          ))}

          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Now on Amazon Deal</h3>
            <p className="text-lg mb-4">List Price: $49.99</p>
            <Link href={productLink} target="_blank">
              <p className="inline-block bg-[#FFA41C] hover:bg-[#f29b1a] text-white px-6 py-3 rounded-full font-semibold transition cursor-pointer">
                View on Amazon
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
