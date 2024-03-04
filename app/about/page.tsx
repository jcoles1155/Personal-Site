import Image from "next/image";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
import AboutImg from "@/public/images/personal_website_header.png";
import Experience from "@/components/experience";

export const metadata = {
  title: "About - DevSpace",
  description: "Page description",
};

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-5">
              Hey there! 🤟{" "}
              <a
                href="https://www.instagram.com/jc_coles/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <div className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
                  <div className="mt-3 mr-2 ml-2">
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      width="28"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#0ea5e9"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </div>
                  : @jc_coles
                </div>{" "}
              </a>
            </h1>
            <Image
              className="w-full"
              src={AboutImg}
              width={692}
              height={390}
              alt="About"
            />
            {/* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Lil Bio
                </h2>
                <p>
                  I'm a software engineer with about 5 years of experience in a
                  variety of domains. For the past few years, I've built
                  logistics software with Curri in a high paced coding
                  environment - working with finance, and internal tooling.
                </p>
                <p>
                  I grew up in Bakersfield California, and after bouncin around
                  from San Diego to Costa Mesa catching as many waves as I
                  could; I landed in Ventura - the land of the point break -
                  where I currently still reside! Fun facts are I've worked in
                  the beer and wine industry in many capacities, and love to
                  play music with friends!
                </p>
                <p>
                  While there isn't a Wikipedia page about me (sorry folks!),
                  hopefully this lil intro helps!
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Career
                </h2>
                <p>
                  I joined Curri starting the IT department, and eventually
                  moved to engineering. In my role as a Software Engineer, I was
                  responsible for developing and maintaining the{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="#0"
                  >
                    admin panel, internal tooling, as well as finance platform
                  </a>
                </p>
                <p>
                  My work involved developing and testing new features,
                  optimizing performance, and ensuring the functionality our
                  dispatchers needed was always at their fingertips. I also
                  worked on the Finance team, and got the chance to build out
                  features with the{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="https://docs.stripe.com/api"
                  >
                    Stripe API
                  </a>{" "}
                </p>
                <p>
                  As a Freelance Developer,{" "}
                  <strong className="font-medium text-slate-800 dark:text-slate-100">
                    I am responsible for leading
                  </strong>{" "}
                  the development of client projects, and ensuring that the
                  projects are completed on time and within budget, while also
                  providing technical support to help them understand the
                  technical aspects of their projects.
                </p>
              </div>

              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Let's Connect!
                </h2>
                <p>
                  I'm excited to connect with anyone looking to build, or who
                  needs work.
                  <br />
                  Hit me up via{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="mailto:jcoles1155@gmail.com"
                  >
                    email
                  </a>{" "}
                  or{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="https://www.linkedin.com/in/nicholas-jc-coles-314495a6/"
                  >
                    LinkedIn
                  </a>{" "}
                  to chat about projects ideas!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          {/* <WidgetNewsletter /> */}
          {/* <WidgetSponsor /> */}
        </div>
      </aside>
    </div>
  );
}
