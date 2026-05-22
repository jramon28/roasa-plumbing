import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Serving All of San Diego County
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              From Coronado to Alpine, we cover every corner of
              San Diego County. Wherever you are, we're close by.
            </p>

            {/* Areas grid */}
            <div className="flex flex-wrap gap-2 mb-8">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 hover:border-navy-300 transition-colors"
                >
                  <MapPin className="w-3 h-3 text-gold-500" />
                  <span className="text-sm text-navy-800 font-medium">{area}</span>
                </div>
              ))}
            </div>

            <a
              href="/service-areas"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors"
            >
              View full service area map →
            </a>
          </div>

          {/* Right: map embed */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-video lg:aspect-auto lg:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505155.2448366132!2d-117.43740089014365!3d32.824055947295385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e1!3m2!1sen!2sus!4v1779155274084!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
