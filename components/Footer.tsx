"use client";

export default function Footer() {
  return (
    <>
      <main className="flex flex-col absolute bottom-0 justify-center w-full p-8 gap-8 bg-[#222F3E]">
        <div className="flex flex-col gap-4 text-center text-white">
          <h1 className="text-2xl font-bold">CleanAir.com</h1>
          <p>
            This site is not affiliated with or endorsed by LEVOIT or its parent
            companies.
          </p>
          <div className="flex justify-center rounded-full w-5/6 lg:w-3/6 m-auto py-2 px-4 bg-[#364558] ">
            <p>All Right Reserved - 2025</p>
          </div>
        </div>
      </main>
    </>
  );
}
