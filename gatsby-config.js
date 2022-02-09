module.exports = {
  pathPrefix: `/digital-garden`,
  siteMetadata: {
    title: `DryMind`,
    description: `Thoughts, notes and views`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/Index",
        contentPath: `${__dirname}/contents`,
      },
    },
  ],
};
