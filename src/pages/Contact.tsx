import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, RefreshCw, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get('service') || 'Website Development';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: preSelectedService,
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.description.trim() || formData.description.length < 10) {
      errs.description = 'Please provide a project description (at least 10 characters).';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Website Development',
      description: '',
    });
    setErrors({});
  };

  return (
    <div className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Have an Idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Let's Build It.
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Tell us what you're planning. Let's discuss how we can bring your idea to life.
          </p>
        </div>

        {/* Form and Contact Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#090d16] border border-white/[0.08] space-y-6">
              <h2 className="text-xl font-display font-bold text-white">
                Contact Information
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">Email Inquiries</span>
                    <a 
                      href={`mailto:${siteConfig.contact.officialEmail}`}
                      className="text-slate-200 hover:text-blue-400 font-medium transition-colors font-mono text-xs sm:text-sm"
                    >
                      {siteConfig.contact.officialEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">Location</span>
                    <span className="text-slate-200 text-xs sm:text-sm">{siteConfig.contact.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs text-slate-400 leading-relaxed space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Direct Leadership Review</span>
                </div>
                <p>
                  Every inquiry is reviewed directly by <strong>{siteConfig.leadership.founder.name}</strong> and <strong>{siteConfig.leadership.coFounder.name}</strong>.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-400">
              Response commitment: We reply within 24 business hours.
            </div>
          </div>

          {/* Right Column: Clean Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-2xl bg-[#090d16] border border-white/[0.08]">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-white">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-slate-300 max-w-sm mx-auto">
                      Thank you, <strong className="text-white">{formData.name}</strong>. We have received your project details and will be in touch shortly.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full bg-[#070a12] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className={`w-full bg-[#070a12] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company and Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full bg-[#070a12] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#070a12] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Application Development">Application Development</option>
                        <option value="Digital Solutions">Digital Solutions</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                      Project Description <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us what you are planning to build, target requirements, or timeline..."
                      className={`w-full bg-[#070a12] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.description ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                      }`}
                    ></textarea>
                    {errors.description && (
                      <p className="text-[11px] text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 active:scale-[0.99] transition-all shadow-md shadow-blue-600/30 border border-blue-400/30"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
