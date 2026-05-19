"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${BUSINESS.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: copy */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Get a Quote
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Request a Quote
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Fill out the form and I'll get back to you within one business hour.
              For urgent issues, call me directly.
            </p>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-4 rounded-xl transition-colors mb-6"
            >
              📞 {BUSINESS.phone}
            </a>

            <div className="bg-gold-500/10 border border-gold-500/30 rounded-xl p-4">
              <p className="text-gold-600 font-semibold text-sm mb-1">🚨 Plumbing Emergency?</p>
              <p className="text-gold-600/80 text-sm">
                Don't wait. Call me directly and I'll get there as fast as I can.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
                <h3 className="text-navy-900 font-bold text-2xl mb-2">Request Sent!</h3>
                <p className="text-gray-500">
                  I'll be in touch within one business hour. For urgent needs, call{" "}
                  <a href={BUSINESS.phoneHref} className="text-navy-700 font-semibold">
                    {BUSINESS.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="(619) 000-0000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service Address
                  </label>
                  <input
                    name="address"
                    type="text"
                    placeholder="123 Main St, San Diego, CA"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Describe Your Issue
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    placeholder="Please describe the problem in as much detail as possible..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    {["Phone", "Email", "Either"].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          defaultChecked={method === "Phone"}
                          className="accent-navy-700"
                        />
                        <span className="text-sm text-gray-700">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors text-base"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Request a Quote
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400">
                  I respect your privacy. Your info is never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
