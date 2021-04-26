module.exports = {
  siteMetadata: {
    title: "vcardbook",
    author: "Santhosh Aditya",
    description: "Generate Business Card Sites in one step",
    keywords: "VCardBook, Vcard, Business Cards, Personal Sites",
    url: "",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "A2Z6St9Ivnp4nyzoGjL2pNnWGNUyQP_lR2j9aagMZ6w",
        spaceId: "qgumuto6lnmd",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
