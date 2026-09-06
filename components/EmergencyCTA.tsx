import { Phone, AlertTriangle } from "lucide-react";
import { BUSINESS, EMERGENCY_CTA } from "@/lib/constants";
import type { SanityEmergencyCta, SanityBusiness } from "@/sanity/lib/queries";

export default function EmergencyCTA({
  data = EMERGENCY_CTA,
  business = BUSINESS as SanityBusiness,
}: {
  data?: SanityEmergencyCta;
  business?: SanityBusiness;
}) {
  return (
    <section className="bg-navy-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl">{data.title}</h2>
              <p className="text-white/70 text-sm mt-0.5">
                {data.description}
              </p>
            </div>
          </div>
          <a
            href={business.phoneHref}
            className="shrink-0 flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-7 py-4 rounded-xl transition-colors text-base shadow-lg"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            {data.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
