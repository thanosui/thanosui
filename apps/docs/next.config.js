const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  // remarkPlugins: [
  //   [
  //     remarkMdxDisableExplicitJsx,
  //     { whiteList: ["table", "thead", "tbody", "tr", "th", "td"] },
  //   ],
  // ],
});

module.exports = withNextra({
  reactStrictMode: true,
  transpilePackages: ["ui"],
});
