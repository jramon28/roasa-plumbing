import { ShieldCheck, Star, Clock, Award, DollarSign, Wrench } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: "5-Star Google Rating" },
  { icon: Clock, label: "Same-Day Service" },
  { icon: Award, label: "C-36 License #1139229" },
  { icon: DollarSign, label: "Financing Up to $25,000" },
  { icon: Wrench, label: "Satisfaction Guaranteed" },
];

export default function TrustStrip() {
  return (
    <section className="bg-navy-950 border-y border-gold-500/20 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-8 gap-y-3">
          {BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="text-white/70 text-sm font-medium whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
