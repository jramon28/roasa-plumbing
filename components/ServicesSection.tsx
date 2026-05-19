import Link from "next/link";
import {
  Droplets, Waves, Flame, Wrench, Shovel, GitBranch,
  Settings, AlertTriangle, Building2, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets, Waves, Flame, Wrench, Shovel, GitBranch,
  Settings, AlertTriangle, Building2,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
            What I Do
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
              <Link
                key={service.title}
                href={service.href}
                className={`group relative rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                  isEmergency
                    ? "bg-navy-900 border-navy-800 hover:border-gold-500"
                    : "bg-white border-gray-100 hover:border-navy-200 shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isEmergency
                      ? "bg-gold-500/20 group-hover:bg-gold-500/30"
                      : "bg-navy-50 group-hover:bg-navy-100"
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
                  className={`text-sm leading-relaxed mb-4 ${
                    isEmergency ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
                <span
                  className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${
                    isEmergency
                      ? "text-gold-400 group-hover:text-gold-300"
                      : "text-navy-600 group-hover:text-gold-600"
                  }`}
                >
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
