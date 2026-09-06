import { client } from "./client";
import {
  BUSINESS, SERVICES, TESTIMONIALS, FAQS, SERVICE_AREAS,
  HERO, WHY_CHOOSE_US, PROCESS_STEPS, EMERGENCY_CTA, TRUST_STRIP,
} from "@/lib/constants";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SanityBusiness {
  name: string; phone: string; phoneHref: string; textHref: string;
  email: string; website: string; license: string; serviceArea: string;
  city: string; formspreeId: string; tagline: string;
  navLinks: { label: string; href: string }[];
  footerDescription: string;
  footerQuickLinks: { label: string; href: string }[];
  hoursWeekday: string; hoursWeekend: string; emergencyNote: string;
}

export interface SanityService {
  _id: string; title: string; description: string; icon: string; href: string; order: number;
}

export interface SanityTestimonial {
  _id: string; name: string; location: string; rating: number; text: string; source: string; order: number;
}

export interface SanityFaq {
  _id: string; question: string; answer: string; order: number;
}

export interface SanityGalleryPhoto {
  _id: string; photo: SanityImageSource; caption: string; description: string; category: string; order: number;
}

export interface SanityServiceArea {
  _id: string; city: string; order: number;
}

export interface IconLabel {
  icon: string; label: string;
}

export interface SanityHero {
  badgeText: string;
  headlineLine1: string;
  headlineHighlight: string;
  headlineLine3: string;
  subheadline: string;
  trustBadges: IconLabel[];
  sideCardTitle: string;
  stats: { value: string; label: string }[];
}

export interface SanityWhyChooseUs {
  sectionLabel: string;
  title: string;
  paragraphs: string[];
  ctaText: string;
  badges: IconLabel[];
  reasonsSectionLabel: string;
  reasonsTitle: string;
  reasons: { icon: string; title: string; description: string }[];
}

export interface SanityProcessSteps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  steps: { number: string; title: string; description: string }[];
}

export interface SanityEmergencyCta {
  title: string;
  description: string;
  buttonText: string;
}

export interface SanityTrustStrip {
  badges: IconLabel[];
}

// ─── Queries (fall back to constants.ts if Sanity not configured) ─────────────

const isSanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

export async function getBusinessInfo(): Promise<SanityBusiness> {
  if (!isSanityConfigured) return BUSINESS as SanityBusiness;
  const data = await client.fetch<Partial<SanityBusiness>>(`*[_type == "business"][0]`);
  return { ...(BUSINESS as SanityBusiness), ...data };
}

export async function getServices(): Promise<SanityService[]> {
  if (!isSanityConfigured) return SERVICES as unknown as SanityService[];
  const data = await client.fetch<SanityService[]>(
    `*[_type == "service"] | order(order asc)`
  );
  return data?.length ? data : (SERVICES as unknown as SanityService[]);
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  if (!isSanityConfigured) return TESTIMONIALS as unknown as SanityTestimonial[];
  const data = await client.fetch<SanityTestimonial[]>(
    `*[_type == "testimonial"] | order(order asc)`
  );
  return data?.length ? data : (TESTIMONIALS as unknown as SanityTestimonial[]);
}

export async function getFaqs(): Promise<SanityFaq[]> {
  if (!isSanityConfigured) return FAQS as unknown as SanityFaq[];
  const data = await client.fetch<SanityFaq[]>(
    `*[_type == "faq"] | order(order asc)`
  );
  return data?.length ? data : (FAQS as unknown as SanityFaq[]);
}

export async function getGalleryPhotos(): Promise<SanityGalleryPhoto[]> {
  if (!isSanityConfigured) return [];
  return client.fetch<SanityGalleryPhoto[]>(
    `*[_type == "galleryPhoto"] | order(order asc) { _id, photo, caption, description, category, order }`
  );
}

export async function getServiceAreas(): Promise<string[]> {
  if (!isSanityConfigured) return SERVICE_AREAS;
  const data = await client.fetch<SanityServiceArea[]>(
    `*[_type == "serviceArea"] | order(order asc)`
  );
  return data?.length ? data.map((a) => a.city) : SERVICE_AREAS;
}

export async function getHero(): Promise<SanityHero> {
  if (!isSanityConfigured) return HERO;
  const data = await client.fetch<Partial<SanityHero>>(`*[_type == "hero"][0]`);
  return { ...HERO, ...data };
}

export async function getWhyChooseUs(): Promise<SanityWhyChooseUs> {
  if (!isSanityConfigured) return WHY_CHOOSE_US;
  const data = await client.fetch<Partial<SanityWhyChooseUs>>(`*[_type == "whyChooseUs"][0]`);
  return { ...WHY_CHOOSE_US, ...data };
}

export async function getProcessSteps(): Promise<SanityProcessSteps> {
  if (!isSanityConfigured) return PROCESS_STEPS;
  const data = await client.fetch<Partial<SanityProcessSteps>>(`*[_type == "processSteps"][0]`);
  return { ...PROCESS_STEPS, ...data };
}

export async function getEmergencyCta(): Promise<SanityEmergencyCta> {
  if (!isSanityConfigured) return EMERGENCY_CTA;
  const data = await client.fetch<Partial<SanityEmergencyCta>>(`*[_type == "emergencyCta"][0]`);
  return { ...EMERGENCY_CTA, ...data };
}

export async function getTrustStrip(): Promise<SanityTrustStrip> {
  if (!isSanityConfigured) return TRUST_STRIP;
  const data = await client.fetch<Partial<SanityTrustStrip>>(`*[_type == "trustStrip"][0]`);
  return { ...TRUST_STRIP, ...data };
}
