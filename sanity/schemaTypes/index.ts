import { businessType } from "./business";
import { serviceType } from "./service";
import { testimonialType } from "./testimonial";
import { faqType } from "./faq";
import { galleryType } from "./gallery";
import { serviceAreaType } from "./serviceArea";
import { heroType } from "./hero";
import { whyChooseUsType } from "./whyChooseUs";
import { processStepsType } from "./processSteps";
import { emergencyCtaType } from "./emergencyCta";
import { trustStripType } from "./trustStrip";

export const schemaTypes = [
  businessType,
  heroType,
  whyChooseUsType,
  processStepsType,
  emergencyCtaType,
  trustStripType,
  serviceType,
  testimonialType,
  faqType,
  galleryType,
  serviceAreaType,
];

export const SINGLETON_TYPES = [
  "business",
  "hero",
  "whyChooseUs",
  "processSteps",
  "emergencyCta",
  "trustStrip",
];
