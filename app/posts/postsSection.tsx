"use client";
import { Post, allPosts } from ".contentlayer/generated";
import PostItem from "../post-item";
import { useEffect, useState } from "react";

export default function PostsSection(postList: Post[]) {
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
  let posts = postList;

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
    }
  }, [postsListType]);

  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>

      {/* Filters */}
      <ul className="flex flex-wrap text-sm border-b border-slate-100 dark:border-slate-800">
        <li
          className="px-3 -mb-px"
          // onClick={setPostsListType("Opinion")}
        >
          <a
            className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            href="#0"
          >
            Opinion
          </a>
        </li>
        <li
          className="px-3 -mb-px"
          // onClick={setPostsListType("Coding")}
        >
          <a
            className="block py-3 font-medium text-slate-800 dark:text-slate-100 border-b-2 border-sky-500"
            href="#0"
          >
            Coding
          </a>
        </li>
        <li
          className="px-3 -mb-px"
          // onClick={setPostsListType("Startups")}
        >
          <a
            className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            href="#0"
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
            href="#0"
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
            href="#0"
          >
            Indie Hacking
          </a>
        </li>
      </ul>

      {/* Articles list */}
      <div>
        {/** Not sure why this is breaking */}
        {posts?.map((post) => post.title)}
        {/* {posts?.map((post, postIndex) => (
          <PostItem key={postIndex} {...post} />
        ))} */}
      </div>
    </section>
  );
}
