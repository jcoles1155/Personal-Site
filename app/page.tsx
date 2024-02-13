import { Post, allPosts } from "contentlayer/generated";
import Hero from "@/components/hero";
import PostItem from "./post-item";
import Talks from "@/components/talks";
import FeaturedProjects from "@/components/featured-projects";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
import WidgetBook from "@/components/widget-book";
import { sql } from "@vercel/postgres";
import { useLiveReload } from "next-contentlayer/hooks";
import { useEffect, useState } from "react";
import PostsSection from "./posts/postsSection";

// const metadata = {
//   title: "Home - DevSpace",
//   description: "Page description",
// };

// interface postProps {
//   postsList: Post[];
// }

export default async function Home() {
  // useLiveReload();
  // Sort posts by date
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  return (
    <>
      <Hero />
      {/* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        {/* Middle area */}
        <div className="grow">
          <div className="max-w-[700px]">
            <div className="space-y-10">
              <PostsSection {...sortedPosts} />
              <Talks />
              <FeaturedProjects />
            </div>
          </div>
        </div>
        {/* <Emails params={{ email: "" }} /> */}

        {/* Right sidebar */}
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="space-y-6">
            <WidgetNewsletter />
            <WidgetSponsor />
            <WidgetBook />
          </div>
        </aside>
      </div>
    </>
  );
}

// async function Emails({
//   params,
// }: {
//   params: { email: string };
// }): Promise<JSX.Element> {
//   const { rows } = await sql`SELECT * from user where Email=${params.email}`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// }
