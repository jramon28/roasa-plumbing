import Image from "next/image";

const PHOTOS = [
  {
    src: "/gallery/water-heater.jpg",
    caption: "Water Heater Installation",
    description: "Bradford White tank install with copper supply lines",
  },
  {
    src: "/gallery/repiping.jpg",
    caption: "Repiping",
    description: "Full copper repipe. Old lines out, new lines in.",
  },
  {
    src: "/gallery/valve-repair.jpg",
    caption: "Leak & Valve Repair",
    description: "Shower valve access and repair behind tile",
  },
  {
    src: "/gallery/water-line.jpg",
    caption: "Water Line Repair",
    description: "Underground water line replacement",
  },
  {
    src: "/gallery/sewer-line.jpg",
    caption: "Sewer Line Installation",
    description: "New sewer main installation and trenching",
  },
  {
    src: "/gallery/foundation.jpg",
    caption: "New Construction Plumbing",
    description: "Underground rough-in for new construction build",
  },
];

export default function WorkGallery() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
            Real Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Jobs I've Done
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Every photo is from an actual job in San Diego County. No stock images, no shortcuts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="group relative rounded-2xl overflow-hidden bg-navy-800 aspect-[4/5]"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base">{photo.caption}</p>
                <p className="text-white/60 text-sm mt-0.5">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
