
export interface BlogPostPreview {
  id: number;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  keywords: string;
  featured: boolean;
}

export const blogPostPreviews: BlogPostPreview[] = [
  {
    id: 1,
    title: "Hvorfor en nettside er avgjørende for bedriften din i 2025",
    excerpt: "I 2025 er en profesjonell nettside selve hjertet i din digitale tilstedeværelse. Med økende konkurranse på nett og forbrukere som søker informasjon raskt, er en nettside ikke lenger valgfritt – det er en nødvendighet.",
    publishDate: "5. januar 2025",
    readTime: "4 minutter",
    keywords: "nettside 2025, digital tilstedeværelse, profesjonell nettside",
    featured: true
  },
  {
    id: 2,
    title: "Hvordan en nettside booster synligheten din i søkemotorer i 2025",
    excerpt: "Å ha en nettside i 2025 er nøkkelen til å bli funnet på Google og andre søkemotorer. Med SEO-optimalisering kan du rangere høyere på søkeord som er relevante for din bransje.",
    publishDate: "12. januar 2025",
    readTime: "3 minutter",
    keywords: "SEO 2025, søkemotoroptimalisering, Google rangering",
    featured: false
  },
  {
    id: 3,
    title: "Nettsider som konverterer: Hvorfor det lønner seg i 2025",
    excerpt: "En nettside er ikke bare et digitalt visittkort – det er et kraftig verktøy for å konvertere besøkende til kunder. I 2025 forventer forbrukere en sømløs brukeropplevelse.",
    publishDate: "18. januar 2025",
    readTime: "5 minutter",
    keywords: "nettside konvertering, brukeropplevelse 2025, øke salg online, digitalt verktøy",
    featured: false
  },
  {
    id: 4,
    title: "Bygg tillit med en profesjonell nettside i 2025",
    excerpt: "I en verden full av svindel og usikkerhet på nett, er tillit gull verdt. En profesjonell nettside i 2025 signaliserer at bedriften din er seriøs og pålitelig.",
    publishDate: "25. januar 2025",
    readTime: "4 minutter",
    keywords: "nettside tillit, profesjonell nettutvikling, digital troverdighet",
    featured: false
  },
  {
    id: 5,
    title: "Fremtidsrettet suksess: Nettsidens rolle i 2025 og fremover",
    excerpt: "Å ha en nettside i 2025 handler om å være klar for fremtiden. Med teknologi som AI, mobiltilpasning og integrasjoner i rask utvikling, er en nettside plattformen som holder deg relevant.",
    publishDate: "2. februar 2025",
    readTime: "6 minutter",
    keywords: "nettside fremtid, digital strategi, teknologitrender 2025",
    featured: false
  }
];
