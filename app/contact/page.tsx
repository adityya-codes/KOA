"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Phone, Mail, Clock, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/data";

export default function ContactPage() {
  const phones = BRAND.phones;

  return (
    <main className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question? Want to customize a package? We are here to help plan your perfect Himalayan adventure."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ─── CALL SECTION ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-surface rounded-3xl border-2 border-brand-koa/15 p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-koa rounded-r-full" />

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-brand-ember text-surface text-[11px] font-black uppercase tracking-[0.15em] px-4 py-2 rounded-full shadow-lg shadow-brand-ember/30">
                  <Phone className="w-3.5 h-3.5" />
                  Call Now to Book
                </span>
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-500 text-surface text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg shadow-red-600/30">
                  <Sparkles className="w-3 h-3" />
                  20% OFF on Pre-booking
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight text-ink">
                Book Instantly<br />
                <span className="text-ink-muted">Over the Phone</span>
              </h2>

              <p className="text-sm text-ink-muted mt-4 max-w-md leading-relaxed">
                Skip the waiting. Call us directly and secure your adventure in minutes. Our team is ready to help you pick the perfect package.
              </p>
              <p className="text-[13px] font-bold text-brand-ember mt-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Pre-book now and get 20% off on any package — minimum ₹500.
              </p>

              <div className="mt-8 space-y-3">
                {phones.map((num, i) => (
                  <motion.a
                    key={num}
                    href={`tel:+91-${num}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4 bg-brand-snow hover:bg-brand-koa/5 rounded-xl px-5 py-4 group transition-colors border border-border-subtle"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-koa/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-brand-koa" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Phone {i + 1}</p>
                      <p className="text-xl font-black tracking-tight text-ink">+91-{num}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-ink-muted/30 group-hover:text-brand-koa group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-ink-muted">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-medium">Available 8:00 AM – 7:00 PM</span>
              </div>

              <motion.a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi!%20I%20want%20to%20pre-book%20an%20adventure%20package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1DA851] text-white text-xs font-black uppercase tracking-widest px-5 py-3 rounded-xl transition-colors shadow-lg shadow-[#25D366]/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* ─── EMAIL SECTION ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-brand-snow rounded-2xl p-6 border border-border-subtle">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-koa/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-koa" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Or Send an Email</p>
                </div>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed mb-4">
                Prefer writing? Drop us a message and we will get back to you within 24 hours.
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 bg-surface rounded-xl px-4 py-3.5 border border-border-subtle hover:border-brand-koa/30 transition-colors group"
              >
                <Mail className="w-5 h-5 text-brand-koa shrink-0" />
                <span className="text-sm text-ink font-semibold flex-1">{BRAND.email}</span>
                <ArrowRight className="w-4 h-4 text-ink-muted group-hover:text-brand-koa group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            <div className="bg-brand-snow rounded-2xl p-6 border border-border-subtle">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-koa/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-koa" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Owner</p>
                </div>
              </div>
              <p className="text-sm text-ink font-semibold">{BRAND.owner}</p>
            </div>

            <div className="text-center pt-2">
              <p className="text-[11px] text-ink-muted uppercase tracking-wider font-medium">
                Village Saur Kanatal, Near by Winter Line Cafe, Tehri Garhwal, Uttarakhand
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
