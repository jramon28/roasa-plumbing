import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real reviews from real San Diego homeowners. We let our work speak for itself.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-navy-100 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <p className="text-navy-900 font-bold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm">
            See all my reviews on{" "}
            <a
              href="#"
              className="text-navy-700 font-semibold hover:text-gold-600 transition-colors"
            >
              Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
