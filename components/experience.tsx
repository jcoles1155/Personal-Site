import CurriLogo from "../public/images/curri_logo.webp";
import SurflineLogo from "../public/images/surfline_logo.jpeg";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Work Experience
      </h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <a href={"https://www.curri.com/"}>
                <Image src={CurriLogo} alt="Curri Logo" />
              </a>
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                May 2021{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                January 2024
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Full Stack Software Engineer
              </div>
              <a href="https://www.curri.com/" target="_blank" rel="noreferrer">
                <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  Curri
                </div>
              </a>

              <div className="text-sm text-slate-500 dark:text-slate-400">
                Worked in Next, GraphQl, PostgresQl, and Prisma building next
                generation logistics software. Got the opportunity to contribute
                to many projects, and authored a couple features that are used
                system wide.{" "}
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12">
                <path
                  className="fill-slate-800 dark:fill-slate-100"
                  d="M5.64 0c3.116 0 5.641 2.686 5.641 6s-2.525 6-5.64 6C2.526 12 0 9.314 0 6c0-3.313 2.525-6 5.64-6Zm9.008.351c1.558 0 2.82 2.53 2.82 5.65h.001c0 3.118-1.263 5.648-2.82 5.648-1.558 0-2.82-2.53-2.82-5.649S13.09.351 14.648.351Zm4.36.589C19.556.94 20 3.205 20 6c0 2.794-.444 5.06-.992 5.06s-.992-2.265-.992-5.06c0-2.794.444-5.06.992-5.06Z"
                />
              </svg>
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                May 2017{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Apr 2020
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Full Stack Web Developer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Freelance
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Worked with clients to build web applications and websites. I
                specialized in React and built a few e-commerce sites using
                Shopify and WordPress.
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <a href={"https://www.surfline.com/"}>
                <Image src={SurflineLogo} alt="Surfline Logo" />
              </a>
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                May 2017{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Apr 2022
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Network Technician
              </div>
              <a
                href="https://www.surfline.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  Surfline
                </div>
              </a>

              <div className="text-sm text-slate-500 dark:text-slate-400">
                Maintained cameras and servers from Malibu to Santa Barbara.
                Whenever cameras went down or needed maintenence, I was called.
                Also worked with the team to install new cameras and servers at
                locations when needed
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
