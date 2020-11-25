module.exports = {
  pathPrefix: `/gatsby-starter-blorg`,
  siteMetadata: {
    siteURL: 'https://orga.js.org', // replace this with your own domain
    title: `Gatsby With Orga`, // replace it with your own title
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: 'Xiaoxing Hu', // this one is take, choose another name
    twitter: 'xiaoxinghu', // replace it, or set to 'false' to disable "Tweet this" button
    social: [ // again, replace thse with your own value, or set to empty array to disable them
      { name: 'twitter', url: 'https://twitter.com/xiaoxinghu' },
      { name: 'website', url: 'https://www.huxiaoxing.com' },
      { name: 'github', url: 'https://github.com/xiaoxinghu' },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-theme-blorg`,
      options: {
        // contentPath: 'content',
        // filter: () => true,
        // pagination: 5,
        // columns: 2,
        // indexPath: '/',
        // imageMaxWidth: 1380,
        // categoryIndexPath: category => `/${category}`,
        // tagIndexPath: tag => `/:${tag}:`,
        // slug: ({ export_file_name }) => `/${export_file_name}`,
        // postRedirect: () => [],
      },
    },
  ],
}
