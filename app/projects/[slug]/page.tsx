import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetPosts from "@/components/widget-posts";
import { Mdx } from "@/components/mdx/mdx";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) return;

  const { name, description } = project;

  return {
    title: name,
    description,
  };
}

export default async function SingleProject({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) notFound();

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          {/* Back */}
          <div className="mb-3">
            <Link
              className="inline-flex text-sky-500 rounded-full border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30"
              href="/projects"
            >
              <span className="sr-only">Back</span>
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">
                <path
                  className="fill-current"
                  d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z"
                />
              </svg>
            </Link>
          </div>

          <article>
            {/* Post header */}
            <header>
              <div className="flex items-center justify-between mb-1">
                {/* Post date */}
                <div className="text-xs text-slate-500 uppercase">
                  {project.createdAt ? "Open Source" : "Private"}
                </div>
              </div>
              {/* Post title */}
              <h1 className="h1 font-aspekta mb-5">{project.name}</h1>
              {/* Post image */}
              <div className="mb-8">
                <a href={project.href}>
                  <img
                    className="rounded-lg"
                    src={project.image}
                    alt={project.name}
                  />
                </a>
              </div>
              {/* Post content */}
              <div className="text-slate-500 dark:text-slate-400 space-y-8">
                <div className="space-y-4">
                  <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                    Description
                  </h2>
                  <p>{project.description}</p>
                  <Mdx code={project.body.code} />
                </div>
              </div>
            </header>
          </article>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          {/* <WidgetNewsletter /> */}
          {/* <WidgetSponsor /> */}
          <WidgetPosts />
        </div>
      </aside>
    </div>
  );
}
