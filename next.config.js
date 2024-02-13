const withBuilderDevTools = require("@builder.io/dev-tools/next")();
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withBuilderDevTools(withContentlayer(nextConfig));
