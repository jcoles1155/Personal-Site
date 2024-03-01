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
              Hi. I'm JC Coles 🤟{" "}
              <a
                href="https://www.instagram.com/jc_coles/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
                  @jc_coles
                </span>{" "}
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
                  I'm a software engineer with more about 5 years of experience
                  in a variety of domains. For the past few years, I've built on
                  logistics software with Curri in a high paced coding
                  environment - tinkering with finance, and internal tooling.
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
                  In my role as a Software Engineer for Curri, I was responsible
                  for developing and maintaining the{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="#0"
                  >
                    Admin Panel and Internal Tools as well as Finance Platform
                  </a>
                  .
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
                  needs work via{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="mailto:jcoles1155@gmail.com"
                  >
                    email
                  </a>{" "}
                  and{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="https://www.linkedin.com/in/nicholas-jc-coles-314495a6/"
                  >
                    LinkedIn
                  </a>{" "}
                  to chat about projects and ideas.
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
