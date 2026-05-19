import { ShieldCheck, Clock, DollarSign, Star, UserCheck, Phone, Medal, Heart } from "lucide-react";

const BADGES: { icon?: React.ComponentType<{ className?: string }>; glyph?: string; label: string }[] = [
  { glyph: "✝", label: "Christ-Centered" },
  { icon: Heart, label: "Husband & Father" },
  { icon: Star, label: "6 Years Experience" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: UserCheck, label: "Owner on Every Job" },
  { icon: Medal, label: "5-Star Rated" },
];

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "California C-36 licensed and fully insured. Every job is protected for your peace of mind and mine.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "I pick up my phone and show up. Most calls get me on-site within 60 minutes.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description:
      "No hidden fees, no surprises. I give you a straight quote before touching anything.",
  },
  {
    icon: Star,
    title: "5-Star Quality",
    description:
      "I treat every home like my own. My name is on every job so quality is non-negotiable.",
  },
  {
    icon: UserCheck,
    title: "Owner on Every Job",
    description:
      "You're not getting a random subcontractor. When you call ROASA, I show up personally.",
  },
  {
    icon: Phone,
    title: "You Call Me Directly",
    description:
      "No call centers, no hold music. You reach me directly, emergency or not.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-slate-50">

      {/* Personal intro */}
      <div className="py-20 lg:py-28 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: intro */}
            <div>
              <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                Roasa Plumbing Inc.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Roasa Plumbing Inc. is a Christ-centered, owner-operated plumbing company serving homeowners and businesses throughout San Diego County.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                With over 6 years of hands-on experience, we built this business on a simple foundation: show up on time, do the job right, charge a fair price, and treat every customer with respect.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From leak repairs and drain cleaning to full repiping and water heater installation, Roasa Plumbing is the trusted name San Diego calls when it matters most.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-7 py-4 rounded-xl transition-colors"
              >
                Get a Quote
              </a>
            </div>

            {/* Right: badge grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {BADGES.map(({ icon: Icon, glyph, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center">
                    {glyph
                      ? <span className="text-2xl text-gold-500">{glyph}</span>
                      : Icon && <Icon className="w-6 h-6 text-gold-500" />
                    }
                  </div>
                  <p className="text-navy-900 font-semibold text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why choose me */}
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Why ROASA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              A Plumber You Can Rely On
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REASONS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-navy-100 transition-all"
              >
                <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-navy-700" />
                </div>
                <h3 className="font-bold text-navy-900 mb-1.5">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
