import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Shield } from "lucide-react";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import type { SanityBusiness } from "@/sanity/lib/queries";

export default function Footer({
  business = BUSINESS as SanityBusiness,
  serviceAreas = SERVICE_AREAS,
}: {
  business?: SanityBusiness;
  serviceAreas?: string[];
}) {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Roasa Plumbing Inc."
                width={160}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {business.footerDescription}
            </p>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <Shield className="w-4 h-4 text-gold-500 shrink-0" />
              <span>{business.license}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {business.footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-start gap-2.5 text-white/60 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm">{business.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">{business.city}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div className="text-sm text-white/60">
                  <p>{business.hoursWeekday}</p>
                  <p>{business.hoursWeekend}</p>
                  <p className="text-gold-400 font-medium">{business.emergencyNote}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
