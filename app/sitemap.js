export default function sitemap() {
  return [
    {
      url: "https://dreamto.app",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "https://dreamto.app/ar",
          en: "https://dreamto.app/en",
        },
      },
    },
    {
      url: "https://dreamto.app/services",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "https://dreamto.app/ar/services",
          en: "https://dreamto.app/en/services",
        },
      },
    },
    {
      url: "https://dreamto.app/worksample",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "https://dreamto.app/ar/worksample",
          en: "https://dreamto.app/en/worksample",
        },
      },
    },
  ];
}
