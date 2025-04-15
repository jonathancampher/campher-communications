
export interface BlogPost {
  id: number;
  title: {
    no: string;
    en: string;
  };
  content: {
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
  excerpt?: {
    no: string;
    en: string;
  };
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 6,
    title: {
      no: "Hvordan en moderne nettside øker salget for små bedrifter i Norge",
      en: "How a Modern Website Increases Sales for Small Businesses in Norway"
    },
    content: {
      no: "En moderne nettside er ikke lenger en luksus – det er en nødvendighet for små bedrifter i Norge som ønsker å konkurrere i 2025. I denne guiden viser vi hvordan en nettside kan øke salget ditt...",
      en: "A modern website is no longer a luxury - it's a necessity for small businesses in Norway looking to compete in 2025. In this guide, we show you how a website can increase your sales...\n\nWhy do small businesses need a website?\n\nAccording to Statistics Norway (SSB), over 80% of Norwegians search for products and services online before making a purchase. Without a website, you miss out on these customers. A website:\n\nBuilds credibility: A professional website, like our projects at Magnus Henriksen AS, shows that you are serious.\n\nIncreases visibility: With local SEO, you can rank for searches like 'hairdresser Oslo' or 'craftsman Bergen'.\n\nProvides accessibility: Customers can find you 24/7, even when the office is closed."
    },
    publishDate: {
      no: "15. april 2025",
      en: "April 15, 2025"
    },
    readTime: {
      no: "8 minutter",
      en: "8 minutes"
    },
    keywords: "nettside salg, små bedrifter, digital markedsføring, SEO, konvertering",
    excerpt: {
      no: "En moderne nettside er ikke lenger en luksus – det er en nødvendighet for små bedrifter i Norge som ønsker å konkurrere i 2025. I denne guiden viser vi hvordan en nettside kan øke salget ditt.",
      en: "A modern website is no longer a luxury - it's a necessity for small businesses in Norway looking to compete in 2025. In this guide, we show you how a website can increase your sales."
    },
    image: "/lovable-uploads/prosjektmagnus.webp"
  },
  {
    id: 1,
    title: {
      no: "Hvorfor en nettside er avgjørende for bedriften din i 2025",
      en: "Why a Website is Essential for Your Business in 2025"
    },
    content: {
      no: "I 2025 er en profesjonell nettside selve hjertet i din digitale tilstedeværelse. Med økende konkurranse på nett og forbrukere som søker informasjon raskt, er en nettside ikke lenger valgfritt – det er en nødvendighet. En godt designet nettside øker troverdigheten din, gir kundene enkel tilgang til dine tjenester og produkter, og hjelper deg å skille deg ut fra konkurrentene. I tillegg er det en plattform du eier, i motsetning til sosiale medier, som kan endre algoritmer når som helst. Invester i en nettside i dag for å sikre fremtiden til bedriften din.",
      en: "In 2025, a professional website is the heart of your digital presence. With increasing competition on the internet and consumers searching for information quickly, a website is no longer optional – it's a necessity. A well-designed website increases your credibility, provides easy access to your services and products, and helps you stand out from competitors. It's also a platform you own, unlike social media, which can change algorithms at any time. Invest in a website today to ensure your business's future."
    },
    publishDate: {
      no: "5. januar 2025",
      en: "January 5, 2025"
    },
    readTime: {
      no: "4 minutter",
      en: "4 minutes"
    },
    keywords: "nettside 2025, digital tilstedeværelse, profesjonell nettside"
  },
  {
    id: 2,
    title: {
      no: "Hvordan en nettside booster synligheten din i søkemotorer i 2025",
      en: "How a Website Boosts Your Visibility in Search Engines in 2025"
    },
    content: {
      no: "Å ha en nettside i 2025 er nøkkelen til å bli funnet på Google og andre søkemotorer. Med SEO-optimalisering kan du rangere høyere på søkord som er relevante for din bransje. Dette betyr mer organisk trafikk til din nettside, noe som igjen kan føre til flere kunder og økt salg. En nettside gir deg også muligheten til å målrette spesifikke målgrupper gjennom innhold og annonsering. Sørg for at din nettside er optimalisert for søkemotorer for å maksimere din digitale synlighet.",
      en: "Having a website in 2025 is the key to being found on Google and other search engines. With SEO optimization, you can rank higher on search terms relevant to your industry. This means more organic traffic to your website, which can lead to more customers and increased sales. A website also gives you the opportunity to target specific customer groups through content and advertising."
    },
    publishDate: {
      no: "12. januar 2025",
      en: "January 12, 2025"
    },
    readTime: {
      no: "3 minutter",
      en: "3 minutes"
    },
    keywords: "SEO 2025, søkemotoroptimalisering, Google rangering"
  },
  {
    id: 3,
    title: {
      no: "Nettsider som konverterer: Hvorfor det lønner seg i 2025",
      en: "Why Websites Convert: A Guide for 2025"
    },
    content: {
      no: "En nettside er ikke bare et digitalt visittkort – det er et kraftig verktøy for å konvertere besøkende til kunder. I 2025 forventer forbrukere en sømløs brukeropplevelse, rask lasting og intuitiv navigasjon. En nettside som er optimalisert for konvertering, kan øke salget og generere leads. Dette inkluderer tydelige call-to-actions, engasjerende innhold og en responsiv design som fungerer på alle enheter. Invester i en nettside som er designet for å konvertere besøkende til lojale kunder.",
      en: "A website is not just a digital sign-up – it's a powerful tool for converting visitors into customers. In 2025, consumers expect a seamless user experience, fast loading times, and intuitive navigation. A website optimized for conversion can increase sales and generate leads. This includes clear call-to-actions, engaging content, and a responsive design that works on all devices. Invest in a website designed to convert visitors into loyal customers."
    },
    publishDate: {
      no: "18. januar 2025",
      en: "January 18, 2025"
    },
    readTime: {
      no: "5 minutter",
      en: "5 minutes"
    },
    keywords: "nettside konvertering, brukeropplevelse 2025, øke salg online, digitalt verktøy"
  },
  {
    id: 4,
    title: {
      no: "Bygg tillit med en profesjonell nettside i 2025",
      en: "Build Trust with a Professional Website in 2025"
    },
    content: {
      no: "I en verden full av svindel og usikkerhet på nett, er tillit gull verdt. En profesjonell nettside i 2025 signaliserer at bedriften din er seriøs og pålitelig. Dette inkluderer en sikker tilkobling (HTTPS), tydelig kontaktinformasjon og referanser fra fornøyde kunder. En nettside gir deg også muligheten til å vise frem din ekspertise og erfaring gjennom blogginnlegg og case-studier. Bygg tillit med en nettside som viser at du er en pålitelig aktør i din bransje.",
      en: "In a world full of fraud and uncertainty on the internet, trust is worth gold. A professional website in 2025 signals that your business is serious and reliable. This includes a secure connection (HTTPS), clear contact information, and references from satisfied customers. A website also gives you the opportunity to showcase your expertise and experience through blog posts and case studies. Build trust with a website that shows you are a reliable actor in your industry."
    },
    publishDate: {
      no: "25. januar 2025",
      en: "January 25, 2025"
    },
    readTime: {
      no: "4 minutter",
      en: "4 minutes"
    },
    keywords: "nettside tillit, profesjonell nettutvikling, digital troverdighet"
  },
  {
    id: 5,
    title: {
      no: "Fremtidsrettet suksess: Nettsidens rolle i 2025 og fremover",
      en: "The Future of Success: The Role of a Website in 2025 and Beyond"
    },
    content: {
      no: "Å ha en nettside i 2025 handler om å være klar for fremtiden. Med teknologi som AI, mobiltilpasning og integrasjoner i rask utvikling, er en nettside plattformen som holder deg relevant. Dette inkluderer å tilpasse seg nye trender som stemmesøk, personalisering og automatisering. En nettside gir deg også muligheten til å samle inn data og analysere brukeratferd for å kontinuerlig forbedre din digitale strategi. Vær fremtidsrettet med en nettside som er klar for morgendagens utfordringer.",
      en: "Having a website in 2025 means being prepared for the future. With technology like AI, mobile optimization, and rapid development, a website is the platform that keeps you relevant. This includes adapting to new trends like voice search, personalization, and automation. A website also gives you the opportunity to collect data and analyze user behavior to continuously improve your digital strategy. Be future-ready with a website that is prepared for today's challenges."
    },
    publishDate: {
      no: "2. februar 2025",
      en: "February 2, 2025"
    },
    readTime: {
      no: "6 minutter",
      en: "6 minutes"
    },
    keywords: "nettside fremtid, digital strategi, teknologitrender 2025"
  }
];
