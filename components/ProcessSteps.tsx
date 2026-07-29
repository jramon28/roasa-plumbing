import { PROCESS_STEPS } from "@/lib/constants";
import type { SanityProcessSteps } from "@/sanity/lib/queries";

export default function ProcessSteps({ data = PROCESS_STEPS }: { data?: SanityProcessSteps }) {
  return (
    <section className="py-20 lg:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">
            {data.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {data.steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < data.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-gold-500/40 to-transparent z-0" />
              )}
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 transition-colors">
                <div className="text-gold-500 font-black text-4xl mb-4 leading-none">
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
