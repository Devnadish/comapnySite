import React from "react";

function page({ searchParams }) {
  const { tag, title } = searchParams;
  return (
    <div className="text-2xl flex items-center justify-center flex-col min-w-screen min-h-screen p-8 ">
      <div className="text-2xl flex items-center justify-center flex-col w-full border rounded-lg border-white/40 p-4">
        {/* {tag} */}
        <section className="text-xl font-cairo w-full h-[70px]">
          <p className="border-b border-white/40 pb-4"> {title}</p>
        </section>
        <section>banner</section>
        <article>Info</article>
        <section>gallary</section>
      </div>
    </div>
  );
}

export default page;
