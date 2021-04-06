module.exports = {
  siteMetadata: {
    title: "When Did EG Last Throw",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
          trackingId: process.env.GOOGLE_ANALYTICS_ID,
          head: true,
          anonymize: true,
          respectDNT: true,
          pageTransitionDelay: 0,
          defer: false
      }
    }
  ],
};
