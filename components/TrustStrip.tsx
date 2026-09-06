import { ShieldCheck, Star, Clock, Award, DollarSign, Wrench } from "lucide-react";
import { TRUST_STRIP } from "@/lib/constants";
import type { SanityTrustStrip } from "@/sanity/lib/queries";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Star, Clock, Award, DollarSign, Wrench,
};

export default function TrustStrip({ data = TRUST_STRIP }: { data?: SanityTrustStrip }) {
  return (
    <section className="bg-navy-950 border-y border-gold-500/20 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-8 gap-y-3">
          {data.badges.map(({ icon, label }) => {
            const Icon = ICON_MAP[icon];
            return (
              <div key={label} className="flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4 text-gold-500 shrink-0" />}
                <span className="text-white/70 text-sm font-medium whitespace-nowrap">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
