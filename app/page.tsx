import Head from "next/head";

import Hero from "@/components/sections/1-Hero";
import WhyChooseLevoit from "@/components/sections/2-Why-Choose-LEVOIT";
import BlogList from "@/components/sections/3-Blog-List";
import LEVOITvs from "@/components/sections/4-LEVOIT-vs.-Other-Brands";

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>
          LEVOIT Air Purifier for Bedroom and Home – Clean Air for Better Sleep
        </title>
        <meta
          name="description"
          content="Discover why the LEVOIT air purifier is perfect for bedrooms. Quiet, powerful, HEPA H13 filtration for allergies, pets, and better sleep."
        />
      </Head>

      {/* Components */}
      <Hero />
      <WhyChooseLevoit />
      <BlogList />
      <LEVOITvs />
      {/* < /> */}
    </div>
  );
}
