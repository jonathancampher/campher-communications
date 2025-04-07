
export interface BlogPostPreview {
  id: number;
  title: {
    no: string;
    en: string;
  };
  excerpt: {
    no: string;
    en: string;
  };
  publishDate: {
    no: string;
    en: string;
  };
  readTime: {
    no: string;
    en: string;
  };
  keywords: string;
  featured: boolean;
}

export const blogPostPreviews: BlogPostPreview[] = [
  {
    id: 1,
    title: {
      no: "Hvorfor en nettside er avgjørende for bedriften din i 2025",
      en: "Why a website is crucial for your business in 2025"
    },
    excerpt: {
      no: "I 2025 er en profesjonell nettside selve hjertet i din digitale tilstedeværelse. Med økende konkurranse på nett og forbrukere som søker informasjon raskt, er en nettside ikke lenger valgfritt – det er en nødvendighet.",
      en: "In 2025, a professional website is the very heart of your digital presence. With increasing online competition and consumers seeking information quickly, a website is no longer optional – it's a necessity."
    },
    publishDate: {
      no: "5. januar 2025",
      en: "January 5, 2025"
    },
    readTime: {
      no: "4 minutter",
      en: "4 minutes"
    },
    keywords: "nettside 2025, digital tilstedeværelse, profesjonell nettside",
    featured: true
  },
  {
    id: 2,
    title: {
      no: "Hvordan en nettside booster synligheten din i søkemotorer i 2025",
      en: "How a website boosts your visibility in search engines in 2025"
    },
    excerpt: {
      no: "Å ha en nettside i 2025 er nøkkelen til å bli funnet på Google og andre søkemotorer. Med SEO-optimalisering kan du rangere høyere på søkeord som er relevante for din bransje.",
      en: "Having a website in 2025 is the key to being found on Google and other search engines. With SEO optimization, you can rank higher on keywords relevant to your industry."
    },
    publishDate: {
      no: "12. januar 2025",
      en: "January 12, 2025"
    },
    readTime: {
      no: "3 minutter",
      en: "3 minutes"
    },
    keywords: "SEO 2025, søkemotoroptimalisering, Google rangering",
    featured: false
  },
  {
    id: 3,
    title: {
      no: "Nettsider som konverterer: Hvorfor det lønner seg i 2025",
      en: "Websites that convert: Why it pays off in 2025"
    },
    excerpt: {
      no: "En nettside er ikke bare et digitalt visittkort – det er et kraftig verktøy for å konvertere besøkende til kunder. I 2025 forventer forbrukere en sømløs brukeropplevelse.",
      en: "A website isn't just a digital business card – it's a powerful tool for converting visitors into customers. In 2025, consumers expect a seamless user experience."
    },
    publishDate: {
      no: "18. januar 2025",
      en: "January 18, 2025"
    },
    readTime: {
      no: "5 minutter",
      en: "5 minutes"
    },
    keywords: "nettside konvertering, brukeropplevelse 2025, øke salg online, digitalt verktøy",
    featured: false
  },
  {
    id: 4,
    title: {
      no: "Bygg tillit med en profesjonell nettside i 2025",
      en: "Build trust with a professional website in 2025"
    },
    excerpt: {
      no: "I en verden full av svindel og usikkerhet på nett, er tillit gull verdt. En profesjonell nettside i 2025 signaliserer at bedriften din er seriøs og pålitelig.",
      en: "In a world full of online scams and uncertainty, trust is worth its weight in gold. A professional website in 2025 signals that your business is serious and reliable."
    },
    publishDate: {
      no: "25. januar 2025",
      en: "January 25, 2025"
    },
    readTime: {
      no: "4 minutter",
      en: "4 minutes"
    },
    keywords: "nettside tillit, profesjonell nettutvikling, digital troverdighet",
    featured: false
  },
  {
    id: 5,
    title: {
      no: "Fremtidsrettet suksess: Nettsidens rolle i 2025 og fremover",
      en: "Future-oriented success: The role of websites in 2025 and beyond"
    },
    excerpt: {
      no: "Å ha en nettside i 2025 handler om å være klar for fremtiden. Med teknologi som AI, mobiltilpasning og integrasjoner i rask utvikling, er en nettside plattformen som holder deg relevant.",
      en: "Having a website in 2025 is about being ready for the future. With technology like AI, mobile adaptation, and integrations rapidly developing, a website is the platform that keeps you relevant."
    },
    publishDate: {
      no: "2. februar 2025",
      en: "February 2, 2025"
    },
    readTime: {
      no: "6 minutter",
      en: "6 minutes"
    },
    keywords: "nettside fremtid, digital strategi, teknologitrender 2025",
    featured: false
  }
];
