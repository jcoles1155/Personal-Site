"use client";
import { Post, allPosts } from ".contentlayer/generated";
import PostItem from "../post-item";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PostsSection({ ...props }) {
  const pathname = usePathname();

  const codingPosts = allPosts.filter(
    (post) => post._raw.sourceFileDir === "Coding"
  );

  const tutorialPosts = allPosts.filter(
    (post) => post._raw.sourceFileDir === "Tutorials"
  );

  const startupPosts = allPosts.filter(
    (post) => post._raw.sourceFileDir === "Startups"
  );

  const opinionPosts = allPosts.filter(
    (post) => post._raw.sourceFileDir === "Opinion"
  );

  const indieHackingPosts = allPosts.filter(
    (post) => post._raw.sourceFileDir === "Indie-Hacking"
  );

  let postsListType: any;
  let setPostsListType: any;
  [postsListType, setPostsListType] = useState();
  let posts = allPosts;

  const handleClick = (e: string) => {
    return (e: React.MouseEvent) => {
      setPostsListType(e?.target);
      e.preventDefault();
    };
  };

  function stringify(obj: any) {
    let cache: any[] | null = [];
    let str = JSON.stringify(
      obj,
      function (key, value) {
        if (typeof value === "object" && value !== null) {
          if (cache && cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
          }
          // Store value in our collection
          if (cache) {
            cache.push(value);
          }
        }
        return value;
      },
      2
    );
    cache = null; // reset the cache
    return str;
  }

  console.log(`postsListType: ${stringify(postsListType)}`);

  useEffect(() => {
    switch (postsListType) {
      case "Coding":
        posts = codingPosts;
        break;
      case "Tutorials":
        posts = tutorialPosts;
        break;
      case "Startups":
        posts = startupPosts;
        break;
      case "Opinion":
        posts = opinionPosts;
        break;
      case "Indie-Hacking":
        posts = indieHackingPosts;
        break;
      default:
        posts = allPosts;
        break;
    }
  }, [postsListType]);

  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>

      {/* Filters */}
      <ul className="flex flex-wrap text-sm border-b border-slate-100 dark:border-slate-800">
        <li className="px-3 -mb-px" onClick={handleClick("Opinion")}>
          <a
            className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            href="/#Opinion"
          >
            Opinion
          </a>
        </li>
        <li className="px-3 -mb-px">
          <Link
            className={`block py-3 font-medium text-slate-800 dark:text-slate-100 border-b-2 border-sky-500 after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
              pathname === "/#Coding"
                ? "text-sky-500 after:bg-sky-500"
                : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
            }`}
            href="/#Coding"
          >
            Coding
          </Link>
        </li>
        <li className="px-3 -mb-px">
          <a
            className={`block py-3 font-medium text-slate-800 dark:text-slate-100 border-b-2 border-sky-500 after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
              pathname === "/#Startups"
                ? "text-sky-500 after:bg-sky-500"
                : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
            }`}
            href="/#Startups"
          >
            Startups
          </a>
        </li>
        <li
          className="px-3 -mb-px"
          // onClick={setPostsListType("Tutorials")}
        >
          <a
            className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            href="/#Tutorials"
          >
            Tutorials
          </a>
        </li>
        <li
          className="px-3 -mb-px"
          // onClick={setPostsListType("Indie-Hacking")}
        >
          <a
            className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            href="#Indie-Hacking"
          >
            Indie Hacking
          </a>
        </li>
      </ul>

      {/* Articles list */}
      <div>
        {posts?.map((post, postIndex) => (
          <PostItem key={postIndex} {...post} />
        ))}
      </div>
    </section>
  );
}
