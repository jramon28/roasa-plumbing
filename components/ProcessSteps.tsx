const STEPS = [
  {
    number: "01",
    title: "Call or Request Online",
    description:
      "Call us or submit a quote request. We respond quickly and get back to you the same day.",
  },
  {
    number: "02",
    title: "Get a Clear Quote",
    description:
      "We assess your issue and give you an upfront, honest price. No surprises.",
  },
  {
    number: "03",
    title: "We Fix It Right",
    description:
      "We arrive on time, with the right tools, and get the job done with care. No shortcuts.",
  },
  {
    number: "04",
    title: "Guaranteed Satisfaction",
    description:
      "We don't leave until you're 100% satisfied. Every job is backed by our workmanship guarantee.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Getting Help is Simple
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Four easy steps stand between you and a fixed plumbing problem.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
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
