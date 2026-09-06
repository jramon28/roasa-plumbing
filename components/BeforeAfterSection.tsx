import Image from "next/image";

const JOBS = [
  {
    id: "kitchen-leak",
    label: "Kitchen Water Damage & Repair",
    before: [
      { src: "/gallery/before-after/before-1.JPG", caption: "Severe water damage & mold behind walls" },
      { src: "/gallery/before-after/before-2.JPG", caption: "Full demolition — rotted subfloor and framing" },
    ],
    during: [
      { src: "/gallery/before-after/during-1.JPG", caption: "New cabinet installation & plumbing rough-in" },
      { src: "/gallery/before-after/during-2.JPG", caption: "New drywall with supply lines" },
    ],
    after: [
      { src: "/gallery/before-after/after-1.JPG", caption: "Finished — new sink, faucet & quartz countertop" },
    ],
  },
];

type Phase = { src: string; caption: string };

function PhaseColumn({ label, color, photos }: { label: string; color: string; photos: Phase[] }) {
  return (
    <div className="flex flex-col gap-3">
      <span className={`text-xs font-bold uppercase tracking-widest ${color} mb-1`}>{label}</span>
      {photos.map((p) => (
        <div key={p.src} className="relative rounded-xl overflow-hidden aspect-[4/3] bg-navy-800">
          <Image
            src={p.src}
            alt={p.caption}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          <p className="absolute bottom-0 left-0 right-0 px-3 py-2 text-white text-xs leading-snug">{p.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Before & After
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            See the Difference
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real jobs, real results. From damage to done — we document every step.
          </p>
        </div>

        {/* Jobs */}
        {JOBS.map((job) => (
          <div key={job.id} className="mb-16 last:mb-0">
            <h3 className="text-navy-900 font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500 block" />
              {job.label}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Before */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <PhaseColumn label="Before" color="text-red-500" photos={job.before} />
              </div>
              {/* During */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <PhaseColumn label="During" color="text-gold-600" photos={job.during} />
              </div>
              {/* After */}
              <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm ring-1 ring-green-200">
                <PhaseColumn label="After" color="text-green-600" photos={job.after} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
