import {
  Droplets, Waves, Flame, Wrench, Shovel, GitBranch,
  Settings, AlertTriangle, Building2,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import type { SanityService } from "@/sanity/lib/queries";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets, Waves, Flame, Wrench, Shovel, GitBranch,
  Settings, AlertTriangle, Building2,
};

export default function ServicesSection({ services = SERVICES as unknown as SanityService[] }: { services?: SanityService[] }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Plumbing Services You Can Count On
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, ROASA handles every
            plumbing need across San Diego County.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            const isEmergency = service.icon === "AlertTriangle";
            return (
              <div
                key={service.title}
                className={`rounded-2xl p-6 border transition-all duration-200 ${
                  isEmergency
                    ? "bg-navy-900 border-navy-800"
                    : "bg-white border-gray-100 shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isEmergency
                      ? "bg-gold-500/20"
                      : "bg-navy-50"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`w-6 h-6 ${
                        isEmergency ? "text-gold-400" : "text-navy-700"
                      }`}
                    />
                  )}
                </div>
                <h3
                  className={`font-bold text-lg mb-2 ${
                    isEmergency ? "text-white" : "text-navy-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isEmergency ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
