"use client";

export default function Footer() {
  return (
    <>
      <section className="flex flex-col absolute bottom-0 justify-center p-8 gap-8 bg-[#222F3E]">
        <div className="flex flex-col gap-4 text-center text-white">
          <h1 className="text-2xl font-bold">CleanAir.com</h1>
          <p>
            This site is not affiliated with or endorsed by LEVOIT or its parent
            companies.
          </p>
          <div className="bg-[#364558] rounded-full py-2 px-4 text-center">
            <p>All Right Reserved - 2025</p>
          </div>
        </div>
      </section>
    </>
  );
}
