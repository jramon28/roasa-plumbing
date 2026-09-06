import { ShieldCheck, Clock, DollarSign, Star, UserCheck, Phone, Medal, Heart, Cross } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import type { SanityWhyChooseUs } from "@/sanity/lib/queries";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Clock, DollarSign, Star, UserCheck, Phone, Medal, Heart, Cross,
};

export default function WhyChooseUs({ data = WHY_CHOOSE_US }: { data?: SanityWhyChooseUs }) {
  return (
    <section id="about" className="bg-slate-50">

      {/* Personal intro */}
      <div className="py-20 lg:py-28 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: intro */}
            <div>
              <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
                {data.sectionLabel}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                {data.title}
              </h2>
              {data.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-gray-600 text-lg leading-relaxed ${
                    i === data.paragraphs.length - 1 ? "mb-8" : "mb-4"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-7 py-4 rounded-xl transition-colors"
              >
                {data.ctaText}
              </a>
            </div>

            {/* Right: badge grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {data.badges.map(({ icon, label }) => {
                const Icon = ICON_MAP[icon];
                return (
                  <div
                    key={label}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3"
                  >
                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center">
                      {Icon && <Icon className="w-6 h-6 text-gold-500" />}
                    </div>
                    <p className="text-navy-900 font-semibold text-sm">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Why choose me */}
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
              {data.reasonsSectionLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              {data.reasonsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.reasons.map(({ icon, title, description }) => {
              const Icon = ICON_MAP[icon];
              return (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-navy-100 transition-all"
                >
                  <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center mb-3">
                    {Icon && <Icon className="w-5 h-5 text-navy-700" />}
                  </div>
                  <h3 className="font-bold text-navy-900 mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
