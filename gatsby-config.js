module.exports = {
 pathPrefix: "/digital-garden",
  siteMetadata: {
    title: `DryMind`,
    description: `Thoughts, notes and views`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
	contentPath: `${__dirname}/content`,
        basePath: `/`,
        rootNote: `/About`,
        parseWikiLinks: true,
      },
    },
  ],
};
