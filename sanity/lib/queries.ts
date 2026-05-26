import { client } from "./client";
import { BUSINESS, SERVICES, TESTIMONIALS, FAQS, SERVICE_AREAS } from "@/lib/constants";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SanityBusiness {
  name: string; phone: string; phoneHref: string; textHref: string;
  email: string; website: string; license: string; serviceArea: string;
  city: string; formspreeId: string;
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
  _id: string; photo: SanityImageSource; caption: string; description: string; order: number;
}

export interface SanityServiceArea {
  _id: string; city: string; order: number;
}

// ─── Queries (fall back to constants.ts if Sanity not configured) ─────────────

const isSanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

export async function getBusinessInfo(): Promise<SanityBusiness> {
  if (!isSanityConfigured) return BUSINESS as SanityBusiness;
  const data = await client.fetch<SanityBusiness>(`*[_type == "business"][0]`);
  return data ?? (BUSINESS as SanityBusiness);
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
    `*[_type == "galleryPhoto"] | order(order asc) { _id, photo, caption, description, order }`
  );
}

export async function getServiceAreas(): Promise<string[]> {
  if (!isSanityConfigured) return SERVICE_AREAS;
  const data = await client.fetch<SanityServiceArea[]>(
    `*[_type == "serviceArea"] | order(order asc)`
  );
  return data?.length ? data.map((a) => a.city) : SERVICE_AREAS;
}
