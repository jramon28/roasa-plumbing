import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import QuoteForm from "@/components/QuoteForm";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import WorkGallery from "@/components/WorkGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSteps from "@/components/ProcessSteps";
import FAQSection from "@/components/FAQSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import EmergencyCTA from "@/components/EmergencyCTA";
import Testimonials from "@/components/Testimonials";
import { BUSINESS } from "@/lib/constants";
import {
  getServices, getTestimonials, getFaqs, getServiceAreas, getGalleryPhotos,
  getBusinessInfo, getHero, getWhyChooseUs, getProcessSteps, getEmergencyCta, getTrustStrip,
} from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Roasa Plumbing Inc. | Licensed San Diego Plumber",
  description:
    "Roasa Plumbing Inc. is a Christ-centered, owner-operated plumbing company serving San Diego County with over 6 years of experience. Licensed (C-36 #1139229) and insured. Call (619) 452-6911.",
  alternates: {
    canonical: "https://roasaplumbing.com",
  },
};

function buildLocalBusinessSchema(business: typeof BUSINESS) {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: business.name,
    image: "https://roasaplumbing.com/og-image.jpg",
    telephone: business.phone,
    email: business.email,
    url: "https://roasaplumbing.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.7157,
      longitude: -117.1611,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "San Diego County",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    hasCredential: business.license,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "47",
    },
  };
}

export default async function HomePage() {
  const [
    business, services, testimonials, faqs, areas, galleryPhotos,
    hero, whyChooseUs, processSteps, emergencyCta, trustStrip,
  ] = await Promise.all([
    getBusinessInfo(),
    getServices(),
    getTestimonials(),
    getFaqs(),
    getServiceAreas(),
    getGalleryPhotos(),
    getHero(),
    getWhyChooseUs(),
    getProcessSteps(),
    getEmergencyCta(),
    getTrustStrip(),
  ]);

  return (
    <>
      {/* LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessSchema(business)) }}
      />

      <HeroSection hero={hero} business={business} />
      <QuoteForm business={business} services={services} />
      <TrustStrip data={trustStrip} />
      <ServicesSection services={services} />
      <WorkGallery sanityPhotos={galleryPhotos} />
      <WhyChooseUs data={whyChooseUs} />
      <ProcessSteps data={processSteps} />
      <Testimonials testimonials={testimonials} />
      <EmergencyCTA data={emergencyCta} business={business} />
      <FAQSection faqs={faqs} />
      <ServiceAreasSection areas={areas} />
    </>
  );
}
