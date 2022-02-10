module.exports = {
  siteMetadata: {
    title: `DryMind`,
    siteUrl: `https://ibnishak.github.io/digital-garden/`,
    description: `Thoughts, notes and views`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        basePath: `/digital-garden`,
        rootNote: `/digital-garden/Index`,
        contentPath: `content`,
        parseWikiLinks: true,
      },
    },
  ],
};
