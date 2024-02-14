import Image from "next/image";
import HeroImage from "@/public/images/sis_and_bro.jpg";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <Image
            className="rounded-full mb-5"
            src={HeroImage}
            width={56}
            height={56}
            priority
            alt="Me"
          />
          <h1 className="h1 font-aspekta mb-5">
            I write about code and being a{" "}
            <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
              full-time
            </span>{" "}
            maker.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Full Stack developer: surfing, traveling, and working on apps. I
            write about coding, startups, and my journey as a maker.
          </p>
        </div>
      </div>
    </section>
  );
}
