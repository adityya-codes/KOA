import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const footerLinks = [
  { href: "/activities", label: "Activities" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com/kanatal_outdoor", label: "Instagram", icon: Instagram },
];

const contactInfo = [
  { icon: MapPin, text: "Village Saur Kanatal, Tehri Garhwal, Uttarakhand" },
  { icon: Phone, text: "+91-7500069047" },
  { icon: Phone, text: "+91-8077097587" },
  { icon: Phone, text: "+91-9286002931" },
  { icon: Mail, text: "kanataloutdoor@gmail.com" },
];

export function Footer() {
  return (
    <footer className="bg-brand-koa-dark text-surface/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="bg-white/5 rounded-full p-2 inline-flex">
              <Image
                src="/images/logo.png"
                alt="KOA"
                width={500}
                height={500}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-surface/50 mt-3 max-w-xs leading-relaxed">
              Kanatal Outdoor Adventure — thrilling Himalayan experiences at Saur Kanatal. Giant Swing, Zip Line, Rope Courses, ATV rides and more.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-surface/60 hover:text-surface" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-surface/80 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-sm text-surface/50 hover:text-surface transition-colors py-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-surface/80 mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-start gap-2.5">
                    <Icon className="w-4 h-4 text-surface/40 shrink-0 mt-0.5" />
                    <span className="text-sm text-surface/50">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-surface/80 mb-4">Owner</h4>
            <p className="text-sm text-surface/50 leading-relaxed">
              Ajay Ramola<br />
              Village Saur Kanatal, Near by Winter Line Cafe<br />
              Tehri Garhwal, Uttarakhand
            </p>
            <p className="text-sm text-surface/40 mt-3">
              Web: www.kanataloutdoor.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface/30">
            &copy; {new Date().getFullYear()} KOA — Kanatal Outdoor Adventure. All rights reserved.
          </p>
          <p className="text-xs text-surface/20">
            Where the mountains meet the sky.
          </p>
        </div>
      </div>
    </footer>
  );
}
