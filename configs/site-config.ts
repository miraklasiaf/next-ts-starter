const baseUrl = "https://github.com/miraklasiaf/next-ts-starter"

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Faisal Karim. All Rights Reserved.`,
  author: {
    name: "Faisal Karim",
    github: "https://github.com/miraklasiaf",
    twitter: "https://twitter.com/miraklasiaf",
    linkedin: "https://linkedin.com/in/miraklasiaf",
    email: "faisalkarim96@gmail.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/develop/website`,
    blobUrl: `${baseUrl}/blob/develop`,
  },

  seo: {
    title: "Next TS Starter",
    titleTemplate: "%s · Next TS Starter",
    description: "Nextjs with Typescript Starter Kit",
    siteUrl: "https://next-ts-starter.now.sh",
    twitter: {
      handle: "@miraklasiaf",
      site: "@miraklasiaf",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://next-ts-starter.now.sh",
      title: "Next TS Starter",
      description: "Nextjs with Typescript Starter Kit",
      site_name: "Next TS Starter: Nextjs with Typescript Starter Kit",
      images: [
        {
          url: "/og-image.png",
          width: 1240,
          height: 480,
          alt: "Next TS Starter: Nextjs with Typescript Starter Kit",
        },
        {
          url: "/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt: "Next TS Starter: Nextjs with Typescript Starter Kit",
        },
      ],
    },
  },
}

export default siteConfig
