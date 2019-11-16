module.exports = {
  siteMetadata: {
    title: `Gatsby With Orga`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Xiaoxing Hu`,
    twitter: 'xiaoxinghu',
    github: 'xiaoxinghu',
  },
  plugins: [
    {
      resolve: `gatsby-theme-blorg`,
      options: {
        // basePath: `/`,
        // contentPath: `content`,
        // pagination: 10,
        // slug: ['$category', '$export_file_name'],
        // buildIndexPage: true,
        // buildCategoryIndexPage: true,
        // metadata: ['category'],
        filter: ({ category }) => category === 'posts',
        // sortBy: [`date`], // sort posts
        // order: `DESC`, // order for sorting
      },
    },
  ],
}
