import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});

// ─── Data ────────────────────────────────────────────────────────────────────

const business = {
  _type: "business",
  _id: "business",
  name: "Roasa Plumbing Inc.",
  phone: "(619) 452-6911",
  phoneHref: "tel:6194526911",
  textHref: "sms:6194526911",
  email: "roasa.plumbing.electric@gmail.com",
  website: "roasaplumbing.com",
  license: "C-36 License #1139229",
  serviceArea: "San Diego County",
  city: "San Diego, California",
  formspreeId: "xkoegzlg",
  tagline: "Reliable. Honest. Quality Work.",
  navLinks: [
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Service Areas", href: "/#service-areas" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/#contact" },
  ],
  footerDescription:
    "Licensed and insured plumbing services throughout San Diego County. Fast response, quality work, guaranteed.",
  footerQuickLinks: [
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Emergency Service", href: "/contact#emergency" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact Us", href: "/contact" },
  ],
  hoursWeekday: "Mon–Fri: 7am – 7pm",
  hoursWeekend: "Sat–Sun: 8am – 5pm",
  emergencyNote: "Emergency calls welcome",
};

const hero = {
  _type: "hero",
  _id: "hero",
  badgeText: "Licensed & Insured · San Diego County",
  headlineLine1: "Reliable Plumbing",
  headlineHighlight: "Services You",
  headlineLine3: "Can Trust",
  subheadline:
    "Christ-centered plumbing company serving San Diego County with over 6 years of experience.",
  trustBadges: [
    { icon: "ShieldCheck", label: "Licensed & Insured" },
    { icon: "Clock", label: "60-Min Response" },
    { icon: "Star", label: "5-Star Rated" },
    { icon: "AlertTriangle", label: "Same-Day Service" },
  ],
  sideCardTitle: "Why San Diego Calls Me First",
  stats: [
    { value: "Same Day", label: "Service Available" },
    { value: "60 min", label: "Avg. Response Time" },
    { value: "5★", label: "Average Rating" },
    { value: "100%", label: "Satisfaction Guarantee" },
  ],
};

const whyChooseUs = {
  _type: "whyChooseUs",
  _id: "whyChooseUs",
  sectionLabel: "About Us",
  title: "ROASA Plumbing Inc.",
  paragraphs: [
    "Roasa Plumbing Inc. is a Christ-centered, owner-operated plumbing company serving homeowners and businesses throughout San Diego County.",
    "With over 6 years of hands-on experience, we built this business on a simple foundation: show up on time, do the job right, charge a fair price, and treat every customer with respect.",
    "From leak repairs and drain cleaning to full repiping and water heater installation, Roasa Plumbing is the trusted name San Diego calls when it matters most.",
  ],
  ctaText: "Get a Quote",
  badges: [
    { icon: "Cross", label: "Christ-Centered" },
    { icon: "Heart", label: "Husband & Father" },
    { icon: "Star", label: "6 Years Experience" },
    { icon: "ShieldCheck", label: "Licensed & Insured" },
    { icon: "UserCheck", label: "Owner on Every Job" },
    { icon: "Medal", label: "5-Star Rated" },
  ],
  reasonsSectionLabel: "Why ROASA",
  reasonsTitle: "A Plumber You Can Rely On",
  reasons: [
    { icon: "ShieldCheck", title: "Licensed & Insured", description: "California C-36 licensed and fully insured. Every job is protected for your peace of mind and mine." },
    { icon: "Clock", title: "Fast Response", description: "We pick up the phone and show up. Most calls get us on-site within 60 minutes." },
    { icon: "DollarSign", title: "Upfront Pricing", description: "No hidden fees, no surprises. We give you a straight quote before touching anything." },
    { icon: "Star", title: "5-Star Quality", description: "We treat every home like our own. Our name is on every job so quality is non-negotiable." },
    { icon: "UserCheck", title: "Owner on Every Job", description: "You're not getting a random subcontractor. When you call ROASA, we show up personally." },
    { icon: "Phone", title: "You Call Me Directly", description: "No call centers, no hold music. You reach us directly, emergency or not." },
  ],
};

const processSteps = {
  _type: "processSteps",
  _id: "processSteps",
  sectionLabel: "How It Works",
  title: "Getting Help is Simple",
  subtitle: "Four easy steps stand between you and a fixed plumbing problem.",
  steps: [
    { number: "01", title: "Call or Request Online", description: "Call us or submit a quote request. We respond quickly and get back to you the same day." },
    { number: "02", title: "Get a Clear Quote", description: "We assess your issue and give you an upfront, honest price. No surprises." },
    { number: "03", title: "We Fix It Right", description: "We arrive on time, with the right tools, and get the job done with care. No shortcuts." },
    { number: "04", title: "Guaranteed Satisfaction", description: "We don't leave until you're 100% satisfied. Every job is backed by our workmanship guarantee." },
  ],
};

const emergencyCta = {
  _type: "emergencyCta",
  _id: "emergencyCta",
  title: "Plumbing Emergency?",
  description: "Burst pipe, flooding, or no water? Call us and we'll be on our way.",
  buttonText: "Call Now",
};

const trustStrip = {
  _type: "trustStrip",
  _id: "trustStrip",
  badges: [
    { icon: "ShieldCheck", label: "Licensed & Insured" },
    { icon: "Star", label: "5-Star Google Rating" },
    { icon: "Clock", label: "Same-Day Service" },
    { icon: "Award", label: "C-36 State License" },
    { icon: "DollarSign", label: "Financing Up to $25,000" },
    { icon: "Wrench", label: "Satisfaction Guaranteed" },
  ],
};

const services = [
  { title: "Leak Repairs", description: "We provide professional leak repair services for residential and commercial plumbing systems, delivering fast and reliable solutions with quality workmanship on every job.", icon: "Droplets", href: "/services/leak-repairs", order: 1 },
  { title: "Drain Cleaning", description: "We clear clogged sinks, toilets, showers, and main sewer lines quickly and efficiently using hydro-jetting and drain snaking. Dependable results you can count on.", icon: "Waves", href: "/services/drain-cleaning", order: 2 },
  { title: "Tank & Tankless Water Heater", description: "We install top-quality tank and tankless water heaters including Noritz, Rinnai, and Bradford White, with guaranteed professional installation.", icon: "Flame", href: "/services/water-heater", order: 3 },
  { title: "Water Conditioner", description: "We install premium HALO water conditioning systems that remove chlorine, chloramines, VOCs, and contaminants while protecting your plumbing from mineral buildup.", icon: "Droplets", href: "/services/water-conditioner", order: 4 },
  { title: "Toilet Repair & Installation", description: "We offer toilet repair and installation with reliable performance and long-lasting results. Our top recommended brand is TOTO, a premium Japanese fixture.", icon: "Wrench", href: "/services/toilet-repairs", order: 5 },
  { title: "Sewer Line Repairs", description: "Trenchless repair and full sewer line replacement to protect your property. We get it done right without tearing up your yard.", icon: "Shovel", href: "/services/sewer-line", order: 6 },
  { title: "Repiping", description: "Affordable repiping with financing available. We use the best materials and go above and beyond to ensure the best possible result for your home.", icon: "GitBranch", href: "/services/repiping", order: 7 },
  { title: "Fixture Installation", description: "Bundle 3 or more fixture installations and receive a good discount. Faucets, sinks, showers, and more — installed clean and right the first time.", icon: "Settings", href: "/services/fixture-installation", order: 8 },
  { title: "Emergency Plumbing", description: "Urgent response for burst pipes, severe leaks, and plumbing failures. Call us and we'll get there as fast as possible.", icon: "AlertTriangle", href: "/services/emergency", order: 9 },
  { title: "Commercial Plumbing", description: "Professional plumbing services for restaurants, offices, and multi-unit properties across San Diego County.", icon: "Building2", href: "/services/commercial", order: 10 },
];

const testimonials = [
  { name: "Edward H.", location: "San Diego, CA", rating: 5, text: "After we realized our hot water pipe was busted, I called a couple of companies. Darell was quick to respond. He came out at 1AM, fixed it, and I was able to sleep peacefully without worrying about a leaking pipe. Good and friendly service. I would highly recommend.", source: "Yelp", order: 1 },
  { name: "Jelarzhel A.", location: "San Diego, CA", rating: 5, text: "I hired Darrell to work on three bathroom faucets. He was professional, nice, approachable and polite. He arrived 15 minutes early. He did a very good job removing the old faucets and installing the new ones. He checked everything to make sure no leaks, then cleaned the entire work area. I strongly recommend him.", source: "Yelp", order: 2 },
  { name: "Holly S.", location: "San Diego, CA", rating: 5, text: "Second time hiring Darell and again he gets 5/5. I had an outdoor water pipe with a pinhole leak. He came a few hours later and even though it ended up being a bigger project, he stayed till the end and finished the work. Polite, professional, and knowledgeable.", source: "Yelp", order: 3 },
  { name: "Tom P.", location: "San Diego, CA", rating: 5, text: "Darrell is an honest man. He told me what to check before he came so I could fix the plumbing problem myself if it was easy. He wouldn't even take a tip for his recommendation. I strongly recommend him.", source: "Yelp", order: 4 },
  { name: "Elizabeth H.", location: "San Diego, CA", rating: 5, text: "I use Darrell for all my handyman repairs. He does great work and is reasonable in price. He does amazing electrical work. He is easy to work with and easy to get a hold of. I recommend him highly.", source: "Yelp", order: 5 },
  { name: "Richard B.", location: "San Diego, CA", rating: 5, text: "Darell was available quickly which worked out for my needs. Did a great job, kept the site clean, and was very responsive on keeping me up to date on when he would arrive. Was on time and got the job done.", source: "Yelp", order: 6 },
  { name: "Landon F.", location: "San Diego, CA", rating: 5, text: "I've called Darrell for 3 very different jobs already and he's been great each time. First job he installed a bidet, a hard job given the plumbing setup, but he got it done. Highly recommend.", source: "Yelp", order: 7 },
  { name: "Teekay K.", location: "San Diego, CA", rating: 5, text: "I hired Darrell to install a reverse osmosis water system underneath the sink. He did an awesome job, very professional and respectful. I would definitely recommend him.", source: "Yelp", order: 8 },
  { name: "Allen M.", location: "San Diego, CA", rating: 5, text: "His quote was the best of many that I received and he was very accommodating to my schedule changes. On the day of installation he followed up on when he would arrive and delivered exactly what was promised.", source: "Yelp", order: 9 },
  { name: "Jared S.", location: "San Diego, CA", rating: 5, text: "We just bought a house and needed a variety of small jobs done. Darell quoted us a fair price, showed up on time looking professional, and brought all the necessary tools and supplies. Great experience.", source: "Yelp", order: 10 },
  { name: "Paul M.", location: "San Diego, CA", rating: 5, text: "We needed to get a new kitchen faucet installed. He did a good job and was professional throughout. I will definitely hire him again in the future.", source: "Yelp", order: 11 },
];

const faqs = [
  { question: "Do you offer emergency plumbing services?", answer: "Yes. For urgent plumbing issues throughout San Diego County, call us directly and we'll get there as fast as possible.", order: 1 },
  { question: "Are you licensed and insured?", answer: "Absolutely. We hold a California C-36 License (#1139229) and carry full liability insurance. You're fully protected on every job.", order: 2 },
  { question: "How quickly can you respond to an emergency?", answer: "For most emergency calls in San Diego County, we aim to be on-site within 60 minutes or less. Response time may vary by location and time of day.", order: 3 },
  { question: "How do I get a quote?", answer: "Call us directly or fill out the quote form on this page. We'll get back to you quickly with honest, upfront pricing before any work begins.", order: 4 },
  { question: "What areas do you serve?", answer: "We serve all of San Diego County including San Diego, Chula Vista, El Cajon, La Mesa, National City, Santee, Spring Valley, Lemon Grove, and surrounding areas.", order: 5 },
  { question: "Do you offer warranties on your work?", answer: "Yes. My workmanship is backed by a personal satisfaction guarantee. Parts and materials are covered by manufacturer warranties. Ask me for specifics on your job.", order: 6 },
];

const serviceAreas = [
  "San Diego", "Chula Vista", "El Cajon", "La Mesa", "National City",
  "Santee", "Spring Valley", "Lemon Grove", "Bonita", "Coronado",
  "Poway", "Lakeside", "Alpine", "Rancho San Diego",
].map((city, i) => ({ city, order: i + 1 }));

// ─── Seed ────────────────────────────────────────────────────────────────────

async function seed() {
  console.log("🌱 Seeding Sanity...\n");

  // Business (singleton with fixed _id)
  await client.createOrReplace(business);
  console.log("✓ Business info");

  // Hero, Why Choose Us, Process Steps, Emergency CTA, Trust Strip (singletons)
  await client.createOrReplace(hero);
  console.log("✓ Hero section");
  await client.createOrReplace(whyChooseUs);
  console.log("✓ Why Choose Us section");
  await client.createOrReplace(processSteps);
  console.log("✓ Process Steps section");
  await client.createOrReplace(emergencyCta);
  console.log("✓ Emergency CTA bar");
  await client.createOrReplace(trustStrip);
  console.log("✓ Trust Strip badges");

  // Services
  const tx = client.transaction();
  for (const s of services) {
    tx.createOrReplace({ _type: "service", _id: `service-${s.order}`, ...s });
  }
  await tx.commit();
  console.log(`✓ ${services.length} services`);

  // Testimonials
  const tx2 = client.transaction();
  for (const t of testimonials) {
    tx2.createOrReplace({ _type: "testimonial", _id: `testimonial-${t.order}`, ...t });
  }
  await tx2.commit();
  console.log(`✓ ${testimonials.length} testimonials`);

  // FAQs
  const tx3 = client.transaction();
  for (const f of faqs) {
    tx3.createOrReplace({ _type: "faq", _id: `faq-${f.order}`, ...f });
  }
  await tx3.commit();
  console.log(`✓ ${faqs.length} FAQs`);

  // Service Areas
  const tx4 = client.transaction();
  for (const a of serviceAreas) {
    tx4.createOrReplace({ _type: "serviceArea", _id: `area-${a.order}`, ...a });
  }
  await tx4.commit();
  console.log(`✓ ${serviceAreas.length} service areas`);

  console.log("\n✅ Done! Open your Studio to see all the content.");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  process.exit(1);
});
