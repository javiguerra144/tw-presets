module.exports = {
  branches: ["main"],
  repositoryUrl: "https://github.com/javiguerra144/tw-presets.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        npmPublish: true,
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "css/*.css", label: "CSS files" },
          { path: "tailwind-preset.ts", label: "Tailwind preset" },
        ],
      },
    ],
    "@semantic-release/git",
  ],
};
