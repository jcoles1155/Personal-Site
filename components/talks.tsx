import Image from "next/image";
import Talk01 from "@/public/images/9-metrics-investors-want.png";
import Talk02 from "@/public/images/open-ai-demo-day.png";

export default function Talks() {
  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-5">
        Videos of the Month
      </h2>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <a
          className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-tr from-slate-800 to-slate-700 odd:rotate-1 even:-rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out shadow-xl"
          href="https://www.youtube.com/embed/PTg3RZPXgLg"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            src={Talk01}
            width={336}
            height={189}
            alt="Popular post 01"
          />
          <div className="h-full relative flex flex-col items-start justify-between before:mt-auto before:flex-1 p-5">
            <div className="flex-1 flex items-center text-lg font-aspekta text-white font-[650]">
              9 metrics Investors want
            </div>
            <div className="flex-1 w-full flex justify-end items-end">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41">
                <circle
                  className="fill-white"
                  cx="20"
                  cy="20"
                  r="20"
                  fillOpacity=".88"
                />
                <path
                  className="fill-sky-500"
                  d="m24.765 19.5-6.263-4.375a.626.626 0 0 0-1.002.5v8.75c0 .5.564.812 1.002.5l6.263-4.375a.65.65 0 0 0 0-1Z"
                />
              </svg>
            </div>
          </div>
        </a>
        <a
          className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-tr from-slate-800 to-slate-700 odd:rotate-1 even:-rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out shadow-xl"
          href="https://www.youtube.com/embed/ahnGLM-RC1Y"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            src={Talk02}
            width={336}
            height={189}
            alt="Popular post 02"
          />
          <div className="h-full relative flex flex-col items-start justify-between before:mt-auto before:flex-1 p-5">
            <div className="flex-1 flex items-center text-lg font-aspekta text-white font-[650]">
              Open AI Demo Day
            </div>
            <div className="flex-1 w-full flex justify-end items-end">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41">
                <circle
                  className="fill-white"
                  cx="20"
                  cy="20"
                  r="20"
                  fillOpacity=".88"
                />
                <path
                  className="fill-sky-500"
                  d="m24.765 19.5-6.263-4.375a.626.626 0 0 0-1.002.5v8.75c0 .5.564.812 1.002.5l6.263-4.375a.65.65 0 0 0 0-1Z"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
