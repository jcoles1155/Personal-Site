import Image from "next/image";
import WidgetSponsor from "@/components/widget-sponsor";
import WidgetBook from "@/components/widget-book";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Testimonial01 from "@/public/images/testimonial-01.jpg";
import Testimonial02 from "@/public/images/testimonial-02.jpg";
import ScheduleMeetingButton from "@/components/schedule-meeting-button";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata = {
  title: "Subscribe or Schedule a Call - JC Tech Blog",
  description: "JC Tech Blog - A blog about tech, startups, and coding.",
};

export default function Subscribe() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <div className="space-y-10">
            <section>
              {/* Page title */}
              <h1 className="h1 font-aspekta mb-5">
                Schedule a call, or subscribe to the newsletter for resources!
              </h1>
              {/* Page content */}
              <div className="text-slate-500 dark:text-slate-400 space-y-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                      className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Monthly posts</span>
                  </li>
                  <li className="flex items-start">
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                      className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Actionable advice for engineers, and tech teams</span>
                  </li>
                  <li className="flex items-start">
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                      className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Scoop on emerging tech</span>
                  </li>
                </ul>
                <div>
                  <SubscribeForm />

                  <div className="flex items-center justify-center lg:justify-start mt-5">
                    <div className="inline-flex -space-x-3 -ml-0.5">
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar01}
                        width={24}
                        height={24}
                        alt="Avatar 01"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar02}
                        width={24}
                        height={24}
                        alt="Avatar 02"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar03}
                        width={24}
                        height={24}
                        alt="Avatar 03"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar04}
                        width={24}
                        height={24}
                        alt="Avatar 04"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar05}
                        width={24}
                        height={24}
                        alt="Avatar 05"
                      />
                    </div>
                    <div className="text-sm text-slate-500 ml-3">
                      Join the community!
                    </div>
                  </div>
                  <br />
                  <div className="flex items-center justify-center lg:justify-start">
                    <h2>
                      <div className="mr-6">Or let's chat!</div>
                    </h2>
                    <div className="align-center">
                      <ScheduleMeetingButton />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              {/* Cards */}
              {/* <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                <a
                  className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                  href="#0"
                >
                  <div className="flex flex-col h-full">
                    <div className="grow">
                      <Image className="rounded-full mb-2" src={Testimonial01} width={40} height={40} alt="Testimonial 01" />
                      <div className="text-lg font-aspekta font-[650] mb-1">“ Incredible Value “</div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        I was able to quickly master the skills necessary to advance my career. I'm grateful for the resources Mark provided
                        and would recommend him to anyone.
                      </p>
                    </div>
                    <div className="text-xs font-aspekta font-[650] text-sky-500">— Mary Coyle</div>
                  </div>
                </a>
                <a
                  className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                  href="#0"
                >
                  <div className="flex flex-col h-full">
                    <div className="grow">
                      <Image className="rounded-full mb-2" src={Testimonial02} width={40} height={40} alt="Testimonial 02" />
                      <div className="text-lg font-aspekta font-[650] mb-1">“ The Best Newsletter “</div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        I was able to quickly master the skills necessary to advance my career. I'm grateful for the resources Mark provided
                        and would recommend him to anyone.
                      </p>
                    </div>
                    <div className="text-xs font-aspekta font-[650] text-sky-500">— Daniel Burka</div>
                  </div>
                </a>
              </div> */}
            </section>
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          {/* <WidgetSponsor /> */}
          {/* <WidgetBook /> */}
        </div>
      </aside>
    </div>
  );
}
