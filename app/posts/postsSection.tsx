"use client";
import { Post, allPosts } from ".contentlayer/generated";
import PostItem from "../post-item";
import { useState } from "react";
import { set } from "date-fns";

const tabs = [
  {
    name: "All",
  },
  {
    name: "Opinion",
  },
  {
    name: "Coding",
  },
  {
    name: "Startups",
  },
  {
    name: "Tutorials",
  },
  {
    name: "Indie Hacking",
  },
  {
    name: "Notion Resources 📝",
    link: "https://www.jctechresources.blog/",
  },
];

export default function PostsSection() {
  const [postsListType, setPostsListType] = useState("All");
  const [postsList, setPostsList] = useState(allPosts);

  const setPosts = (type: String) => {
    setPostsListType(type as string);

    if (type !== "All") {
      const filteredPosts = allPosts.filter(
        (post) => post._raw.sourceFileDir === type
      );
      setPostsList(filteredPosts);
    } else {
      setPostsList(allPosts);
    }
  };

  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-3">Latest</h2>

      {/* Filters */}
      <ul className="flex flex-wrap text-sm border-b border-slate-100 dark:border-slate-800">
        {tabs.map((tab) => (
          <li
            className="px-3 -mb-px cursor-pointer"
            {...(!tab.link ? { onClick: () => setPosts(tab.name) } : {})}
          >
            <a
              className={`block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300${
                tab.name === postsListType ? " border-b-2 border-sky-500" : ""
              }`}
              href={tab.link && tab.link}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Articles list */}
      {postsList.length < 1 ? (
        <h4 className="text-center text-sm pt-6">Nothing yet 😎</h4>
      ) : (
        ""
      )}
      <div>
        {postsList?.map((post, postIndex) => (
          <PostItem key={postIndex} {...post} />
        ))}
      </div>
    </section>
  );
}
