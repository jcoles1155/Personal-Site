import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import slugify from "slugify";


const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `Projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    createdAt: {
      type: "date",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    href: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    comingSoon: {
      type: "boolean",
      required: true,
    },
    published: {
      type: "boolean",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => slugify(doc.name, { lower: true }),
    },
  },
}));

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => slugify(doc.title, { lower: true }),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            // Each line node by default has `class="line"`.
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            // Each word node has no className by default.
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
    ],
  },
});
