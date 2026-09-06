"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, AlertTriangle, ShieldCheck, Clock, Star } from "lucide-react";
import { BUSINESS, HERO } from "@/lib/constants";
import type { SanityHero, SanityBusiness } from "@/sanity/lib/queries";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Clock, Star, AlertTriangle,
};

export default function HeroSection({
  hero = HERO,
  business = BUSINESS as SanityBusiness,
}: {
  hero?: SanityHero;
  business?: SanityBusiness;
}) {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-16 lg:pt-20">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Gold gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-800/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            {/* Emergency badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-gold-400 rounded-full" />
              {hero.badgeText}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {hero.headlineLine1}
              <span className="block text-gold-400">{hero.headlineHighlight}</span>
              <span className="block">{hero.headlineLine3}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-7 py-4 rounded-xl text-base transition-colors shadow-lg shadow-gold-500/20"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Call Now: {business.phone}
              </a>
              <a
                href={business.textHref}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl text-base transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Text Us
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {hero.trustBadges.map(({ icon, label }) => {
                const Icon = ICON_MAP[icon];
                return (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-white/60 text-sm"
                  >
                    {Icon && <Icon className="w-4 h-4 text-gold-500" />}
                    <span>{label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-white font-bold text-xl mb-6">
                {hero.sideCardTitle}
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 rounded-xl p-4 border border-white/5"
                  >
                    <p className="text-gold-400 font-bold text-2xl mb-1">{stat.value}</p>
                    <p className="text-white/50 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* License */}
              <div className="flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 rounded-xl p-4">
                <ShieldCheck className="w-6 h-6 text-gold-400 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Fully Licensed & Insured</p>
                  <p className="text-white/50 text-xs">{business.license}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
