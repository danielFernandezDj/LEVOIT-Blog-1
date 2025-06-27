import Head from "next/head";
import NavBar from "@/components/NavBar";

import Hero from "@/components/sections/1-Hero";

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
    </div>
  );
}
