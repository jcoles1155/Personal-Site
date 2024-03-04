import Image from "next/image";
import HeroImage from "@/public/images/sis_and_bro.jpg";
import Link from "next/link";

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
            <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
              code. surf. music.
            </span>{" "}
            <br />
            <strong>occassionally</strong> some op-ed.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            You can usually find me driving the PCH looking for a wave, writing
            tunes with friends, or posting up with a book, and a beer at a
            campsite along the 5 on the way to Oregon.
          </p>
          <br />
          <p>
            Hit me up on{" "}
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button className="btn-sm text-slate-100 bg-sky-500 hover:bg-sky-600">
              <a
                href={"https://www.linkedin.com/in/nicholas-jc-coles-314495a6/"}
              >
                <strong>the socials</strong>{" "}
              </a>
            </button>{" "}
            or{" "}
            <Link href={"/subscribe"}>
              <strong>schedule a call</strong>
            </Link>{" "}
            for work inquiries!
          </p>
        </div>
      </div>
    </section>
  );
}
