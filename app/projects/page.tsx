import ProjectCard from "../project-card";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";

import Icon01 from "@/public/images/project-icon-01.svg";
import Icon02 from "@/public/images/project-icon-02.svg";
import Icon03 from "@/public/images/project-icon-03.svg";
import Icon04 from "@/public/images/project-icon-04.svg";
import Icon05 from "@/public/images/project-icon-05.svg";
import Icon06 from "@/public/images/project-icon-06.svg";
import Icon07 from "@/public/images/project-icon-07.svg";
import Icon08 from "@/public/images/project-icon-08.svg";

export const metadata = {
  title: "Projects - DevSpace",
  description: "Page description",
};

export default function Projects() {
  const items01 = [
    {
      id: 1,
      icon: Icon01,
      slug: "#0",
      title: "rechart.com",
      excerpt:
        "AI Rehab cost and reporting platform for real estate investors and flippers",
      openSource: false,
      comingSoon: true,
    },
    {
      id: 1,
      icon: Icon01,
      slug: "idea-center",
      title: "icvta.com",
      excerpt: "Platform for Idea Center users to manage projects and ideas",
      openSource: true,
      comingSoon: true,
    },
    {
      id: 2,
      icon: Icon02,
      slug: "#0",
      title: "yamhillridge.com",
      excerpt: "React Three Fiber 3D experience for a farm in Oregon",
      openSource: false,
      comingSoon: true,
    },
    {
      id: 3,
      icon: Icon03,
      slug: "#0",
      title: "chainstitch.com",
      excerpt:
        "Ecommerce Website for local chain stitch embroidery clothing brand",
      openSource: false,
      comingSoon: true,
    },
  ];

  const items02 = [
    {
      id: 1,
      icon: Icon04,
      slug: "#0",
      title: "Storybook",
      excerpt: "Storybook helps you develop, test, and document UIs.",
      openSource: false,
      comingSoon: true,
    },
    {
      id: 2,
      icon: Icon05,
      slug: "#0",
      title: "Knowledge AI",
      excerpt:
        "Instantly answers all questions based on your internal knowledge base.",
      openSource: true,
      comingSoon: true,
    },
    {
      id: 3,
      icon: Icon06,
      slug: "#0",
      title: "Convex App",
      excerpt: "Template to do app with convex",
      openSource: false,
      comingSoon: true,
    },
    {
      id: 4,
      icon: Icon07,
      slug: "turbo-temp",
      title: "turbo temp",
      excerpt:
        "Custom turbo repo template with Next, GQl, Prisma, NextAuth, and Postgresql",
      openSource: true,
    },
    {
      id: 5,
      icon: Icon08,
      slug: "#0",
      title: "AWS Infra Dashboard",
      excerpt: "Sample AWS Infra Dashboard with Next.js and AWS SDK",
      openSource: false,
      comingSoon: true,
    },
  ];

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">What I've Built...</h1>
            {/* Page content */}
            <div className="space-y-10">
              {/* Side Hustles cards */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">
                  Client Projects
                </h2>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                  {items01.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
              {/* Client Projects cards */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">
                  Side Projects
                </h2>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                  {items02.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
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
