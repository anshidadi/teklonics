import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ArrowUpRight, Copy, Check, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = (phone: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.08] bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Great Together.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Have a website or application idea? Get in touch with our team and let's discuss your project.
          </p>
        </div>

        {/* Real Contact Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Official Email */}
          <div className="p-8 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Email Inquiries
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-lg sm:text-xl font-display font-bold text-white hover:text-blue-400 transition-colors break-all mt-1 inline-block"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Send us your project outline or inquiry directly. We respond within 24 business hours.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={copyEmail}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 2: Phone Number 1 */}
          <div className="p-8 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Direct Line & WhatsApp
                </span>
                <a
                  href={`tel:${siteConfig.contact.phones[0].raw}`}
                  className="text-lg sm:text-xl font-display font-bold text-white hover:text-blue-400 transition-colors mt-1 inline-block"
                >
                  {siteConfig.contact.phones[0].display}
                </a>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Direct phone consultation with our team for rapid discussion of your project requirements.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2">
              <a
                href={`tel:${siteConfig.contact.phones[0].raw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
              >
                <Phone className="w-3 h-3" />
                <span>Call Now</span>
              </a>

              <a
                href={siteConfig.contact.phones[0].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={(e) => copyPhone(siteConfig.contact.phones[0].display, e)}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone === siteConfig.contact.phones[0].display ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 3: Phone Number 2 */}
          <div className="p-8 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Secondary Line & WhatsApp
                </span>
                <a
                  href={`tel:${siteConfig.contact.phones[1].raw}`}
                  className="text-lg sm:text-xl font-display font-bold text-white hover:text-blue-400 transition-colors mt-1 inline-block"
                >
                  {siteConfig.contact.phones[1].display}
                </a>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Alternative direct contact line for technical inquiries and client collaboration.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2">
              <a
                href={`tel:${siteConfig.contact.phones[1].raw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
              >
                <Phone className="w-3 h-3" />
                <span>Call Now</span>
              </a>

              <a
                href={siteConfig.contact.phones[1].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={(e) => copyPhone(siteConfig.contact.phones[1].display, e)}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone === siteConfig.contact.phones[1].display ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Operating Details Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span>Operating from <strong>{siteConfig.contact.location}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{siteConfig.contact.status}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
            <span>Quick response commitment</span>
          </div>
        </div>

      </div>
    </section>
  );
};
