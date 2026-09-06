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
import BeforeAfterSection from "@/components/BeforeAfterSection";
import { BUSINESS } from "@/lib/constants";
import { getServices, getTestimonials, getFaqs, getServiceAreas, getGalleryPhotos } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Roasa Plumbing Inc. | Licensed San Diego Plumber",
  description:
    "Roasa Plumbing Inc. is a Christ-centered, owner-operated plumbing company serving San Diego County with over 6 years of experience. Licensed (C-36 #1139229) and insured. Call (619) 452-6911.",
  alternates: {
    canonical: "https://roasaplumbing.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: BUSINESS.name,
  image: "https://roasaplumbing.com/og-image.jpg",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
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
  hasCredential: BUSINESS.license,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
  },
};

export default async function HomePage() {
  const [services, testimonials, faqs, areas, galleryPhotos] = await Promise.all([
    getServices(),
    getTestimonials(),
    getFaqs(),
    getServiceAreas(),
    getGalleryPhotos(),
  ]);

  console.log("SANITY_PROJECT_ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  console.log("Testimonials count:", testimonials.length);
  console.log("First testimonial name:", testimonials[0]?.name);

  return (
    <>
      {/* LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <HeroSection />
      <QuoteForm />
      <TrustStrip />
      <ServicesSection services={services} />
      <WorkGallery sanityPhotos={galleryPhotos} />
      <BeforeAfterSection />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials testimonials={testimonials} />
      <EmergencyCTA />
      <FAQSection faqs={faqs} />
      <ServiceAreasSection areas={areas} />
    </>
  );
}
