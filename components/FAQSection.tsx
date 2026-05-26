"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";
import type { SanityFaq } from "@/sanity/lib/queries";

export default function FAQSection({ faqs = FAQS as unknown as SanityFaq[] }: { faqs?: SanityFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about my services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-colors ${
                open === i ? "border-navy-200" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`font-semibold text-sm sm:text-base transition-colors ${open === i ? "text-navy-900" : "text-gray-700"}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-gold-500 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
