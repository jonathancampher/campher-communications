
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { resetCookieConsent } from '@/utils/cookieManager';
import { useLanguageContext } from '@/context/LanguageContext';

/**
 * Cookies-komponent
 * 
 * Side med informasjon om informasjonskapsler (cookies) som 
 * brukes på nettsiden.
 */
const Cookies = () => {
  const { language } = useLanguageContext();
  
  // Set page title based on language
  useEffect(() => {
    document.title = language === 'no' 
      ? "Informasjonskapsler | Campher Communications" 
      : "Cookies | Campher Communications";
    document.documentElement.lang = language;
  }, [language]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const texts = {
    no: {
      title: "Informasjonskapsler (Cookies)",
      breadcrumb: "Informasjonskapsler",
      whatAre: {
        title: "Hva er informasjonskapsler?",
        content: "Informasjonskapsler (cookies) er små tekstfiler som lagres på din enhet når du besøker vår nettside. De brukes for å huske dine preferanser, forbedre brukeropplevelsen og forstå hvordan besøkende bruker nettsiden."
      },
      types: {
        title: "Hvilke typer informasjonskapsler vi bruker",
        necessary: {
          title: "Nødvendige informasjonskapsler",
          content: "Disse er essensielle for at nettsiden skal fungere korrekt. De aktiveres som svar på dine handlinger som å sette personvernpreferanser eller fylle ut skjemaer."
        },
        analytics: {
          title: "Analytiske informasjonskapsler",
          content: "Vi bruker verktøy som Google Analytics for å samle inn anonym informasjon om hvordan besøkende bruker nettsiden vår. Dette hjelper oss å forbedre nettsidens funksjonalitet."
        },
        functional: {
          title: "Funksjonelle informasjonskapsler",
          content: "Disse gjør det mulig for nettsiden å huske valg du har gjort tidligere for å gi forbedret funksjonalitet og personlige funksjoner."
        }
      },
      manage: {
        title: "Slik administrerer du informasjonskapsler",
        intro: "De fleste nettlesere gir deg muligheten til å administrere informasjonskapsler gjennom innstillingene. Du kan:",
        options: [
          "Slette informasjonskapsler fra din enhet",
          "Blokkere informasjonskapsler som standard",
          "Velge å blokkere informasjonskapsler fra bestemte nettsider",
          "Blokkere tredjeparters informasjonskapsler"
        ],
        note: "Vær oppmerksom på at å blokkere eller slette informasjonskapsler kan påvirke brukeropplevelsen på vår nettside.",
        reset: "Nullstill cookie-innstillinger"
      },
      changes: {
        title: "Endringer i vår informasjonskapselspolicy",
        content: "Vi kan oppdatere vår informasjonskapselspolicy fra tid til annen. Eventuelle endringer vil bli publisert på denne siden, og hvis endringene er vesentlige, vil vi gi en mer fremtredende melding."
      },
      contact: {
        title: "Kontakt oss",
        content: "Hvis du har spørsmål om vår bruk av informasjonskapsler, vennligst kontakt oss på:",
        email: "E-post: kontakt@camphercommunications.no",
        phone: "Telefon: +47 94053198",
        address: "Adresse: Åsgårdstrandveien 384, 3179 Åsgårdstrand, Norge"
      },
      backHome: "Tilbake til forsiden"
    },
    en: {
      title: "Cookies",
      breadcrumb: "Cookies",
      whatAre: {
        title: "What are cookies?",
        content: "Cookies are small text files stored on your device when you visit our website. They are used to remember your preferences, improve the user experience, and understand how visitors use the website."
      },
      types: {
        title: "Types of cookies we use",
        necessary: {
          title: "Necessary cookies",
          content: "These are essential for the website to function properly. They are activated in response to your actions such as setting privacy preferences or filling out forms."
        },
        analytics: {
          title: "Analytical cookies",
          content: "We use tools like Google Analytics to collect anonymous information about how visitors use our website. This helps us improve the website's functionality."
        },
        functional: {
          title: "Functional cookies",
          content: "These enable the website to remember choices you have made in the past to provide enhanced functionality and personalized features."
        }
      },
      manage: {
        title: "How to manage cookies",
        intro: "Most browsers allow you to manage cookies through their settings. You can:",
        options: [
          "Delete cookies from your device",
          "Block cookies by default",
          "Choose to block cookies from specific websites",
          "Block third-party cookies"
        ],
        note: "Please note that blocking or deleting cookies may affect your user experience on our website.",
        reset: "Reset cookie settings"
      },
      changes: {
        title: "Changes to our cookie policy",
        content: "We may update our cookie policy from time to time. Any changes will be published on this page, and if the changes are significant, we will provide a more prominent notice."
      },
      contact: {
        title: "Contact us",
        content: "If you have any questions about our use of cookies, please contact us at:",
        email: "Email: kontakt@camphercommunications.no",
        phone: "Phone: +47 94053198",
        address: "Address: Åsgårdstrandveien 384, 3179 Åsgårdstrand, Norway"
      },
      backHome: "Back to homepage"
    }
  };

  const t = texts[language === 'no' ? 'no' : 'en'];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom">
          {/* Breadcrumbs navigation */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/"><Home size={16} /></Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight size={16} />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{t.breadcrumb}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-8 text-center">{t.title}</h1>
          
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm">
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">{t.whatAre.title}</h2>
              <p className="text-campher-gray">
                {t.whatAre.content}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">{t.types.title}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">{t.types.necessary.title}</h3>
                  <p className="text-campher-gray">
                    {t.types.necessary.content}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">{t.types.analytics.title}</h3>
                  <p className="text-campher-gray">
                    {t.types.analytics.content}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">{t.types.functional.title}</h3>
                  <p className="text-campher-gray">
                    {t.types.functional.content}
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">{t.manage.title}</h2>
              <p className="text-campher-gray mb-4">
                {t.manage.intro}
              </p>
              <ul className="list-disc pl-6 text-campher-gray space-y-2">
                {t.manage.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
              <p className="text-campher-gray mt-4">
                {t.manage.note}
              </p>
              
              <div className="mt-6">
                <Button
                  onClick={resetCookieConsent}
                  variant="outline"
                  className="border-campher-blue text-campher-blue hover:bg-campher-blue/5"
                >
                  {t.manage.reset}
                </Button>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">{t.changes.title}</h2>
              <p className="text-campher-gray">
                {t.changes.content}
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-medium mb-4">{t.contact.title}</h2>
              <p className="text-campher-gray">
                {t.contact.content}<br /><br />
                
                {t.contact.email}<br />
                {t.contact.phone}<br />
                {t.contact.address}
              </p>
            </section>
            
            <div className="mt-8 flex justify-center">
              <Link 
                to="/" 
                className="bg-campher-blue hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t.backHome}
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cookies;
