import type { Metadata } from "next";
import { Star } from "lucide-react";
import { TESTIMONIALS, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reviews | Roasa Plumbing Inc.",
  description:
    "Real 5-star reviews from San Diego homeowners. See what customers say about Darell Roasa and Roasa Plumbing Inc.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
            Customer Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Customers Are Saying
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Real reviews from real San Diego homeowners — every word is from a verified customer.
          </p>

          {/* Summary bar */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-white/50 text-sm">· {TESTIMONIALS.length} reviews · Yelp</span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-navy-100 transition-all flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                  "{t.text}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-navy-900 font-bold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                  {t.source && (
                    <span className="text-xs font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded-full">
                      {t.source}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to experience it yourself?
          </h2>
          <p className="text-white/60 mb-8">
            Call or text me directly — I'll get back to you fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Call Now — {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.textHref}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Text Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
