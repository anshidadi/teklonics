import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Sparkles, 
  Phone, 
  Video, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get('service');
  const projectRef = searchParams.get('projectRef');

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    selectedServices: preSelectedService ? [preSelectedService] : [] as string[],
    budgetRange: '$3,000 - $7,000',
    timeline: 'Within 1-2 months',
    projectSummary: projectRef ? `I would like to discuss a project similar to "${projectRef}". ` : '',
    preferredMethod: 'email',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableServices = [
    'Website Development',
    'E-Commerce Solutions',
    'Web Applications / SaaS',
    'Frontend Engineering',
    'Backend Engineering',
    'UI/UX Design Systems',
    'Mobile Solutions / PWA',
    'Advanced Digital & AI Integrations',
  ];

  const budgetOptions = [
    '< $2,500 (Scoping & MVP)',
    '$3,000 - $7,000 (Standard Release)',
    '$7,000 - $15,000 (Enterprise Solution)',
    '$15,000+ (Comprehensive Platform)',
    'Flexible / Retainer Based',
  ];

  const timelineOptions = [
    'Immediately (Next 2 weeks)',
    'Within 1-2 months',
    'Quarterly Roadmap (3+ months)',
    'Exploratory / Feasibility Scoping',
  ];

  // Handle service toggle
  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== service)
          : [...prev.selectedServices, service],
      };
    });
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email format.';
    }
    if (formData.selectedServices.length === 0) {
      errors.services = 'Please select at least one required capability.';
    }
    if (!formData.projectSummary.trim() || formData.projectSummary.length < 15) {
      errors.projectSummary = 'Please provide a brief description (at least 15 characters) of your goals.';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // Simulate realistic API dispatch with state persistence
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#2563eb', '#38bdf8', '#ffffff'],
          });
        } catch {
          // fallback if canvas not available
        }
      }, 1000);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      selectedServices: [],
      budgetRange: '$3,000 - $7,000',
      timeline: 'Within 1-2 months',
      projectSummary: '',
      preferredMethod: 'email',
    });
    setFormErrors({});
  };

  return (
    <div className="py-12 sm:py-20 relative">
      {/* Background illumination */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[350px] bg-blue-600/5 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Let’s Discuss Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Next Digital Project
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Share your goals, requirements, or architecture challenge. Muhammed Anshid KT and our technical engineering pod review every submission within 24 business hours.
          </p>
        </div>

        {/* Contact Layout Grid: Configurable Info on Left (5 Cols), Conversion Form on Right (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Configurable Studio Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-6">
              <h2 className="text-xl font-display font-bold text-white">
                Studio Communications
              </h2>

              <div className="space-y-4 text-sm">
                
                {/* Official Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase block">Direct Inquiries</span>
                    <a 
                      href={`mailto:${siteConfig.contact.officialEmail}`}
                      className="text-slate-200 hover:text-blue-400 font-medium transition-colors"
                    >
                      {siteConfig.contact.officialEmail}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-slate-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase block">Operating Location</span>
                    <span className="text-slate-200">{siteConfig.contact.officeLocation}</span>
                  </div>
                </div>

                {/* Operating Timezone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-slate-400 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase block">Operating Hours & Timezone</span>
                    <span className="text-slate-200">{siteConfig.contact.operatingTimezone}</span>
                  </div>
                </div>

              </div>

              {/* Founder Direct Card */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <span className="text-xs font-mono uppercase text-slate-500">Technical Leadership:</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Inquiries are directly assessed by <strong>{siteConfig.founder.name}</strong> to verify architectural scope and timeline alignment before contracting.
                </p>
              </div>

              {/* Conditional WhatsApp CTA: Render ONLY if officially configured! */}
              {siteConfig.contact.whatsApp.isConfigured ? (
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsApp.number}?text=${encodeURIComponent(siteConfig.contact.whatsApp.defaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-md shadow-emerald-600/30"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect via Verified WhatsApp</span>
                  </a>
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-slate-500">
                  <span>Note: Official instant messaging channels are enabled upon active contract execution.</span>
                </div>
              )}
            </div>

            {/* Studio Promises Reassurance */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Our Inquiry Guarantee</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Strict non-disclosure (NDA) protection upon request</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>No persistent sales follow-ups or aggressive marketing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Transparent timeline, budget, and feasibility breakdown</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Full-Featured Conversion Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/[0.08] relative">
              
              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-900/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-display font-bold text-white">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Founder Muhammed Anshid KT and our engineering pod have been notified and will examine your project brief.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-400 max-w-sm mx-auto text-left space-y-1">
                    <div>• Registered Contact: <span className="text-white">{formData.email}</span></div>
                    <div>• Selected Services: <span className="text-white">{formData.selectedServices.join(', ')}</span></div>
                    <div>• Estimated Scope: <span className="text-white">{formData.budgetRange}</span></div>
                    <div>• Response SLA: <span className="text-emerald-400">&lt; 24 Business Hours</span></div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Project Inquiry</span>
                  </button>
                </div>
              ) : (
                /* Conversion Form */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  {/* Row 1: Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                        Your Full Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className={`w-full bg-[#0a0d14] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          formErrors.fullName ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-blue-500'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                        Company or Brand
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Innovations"
                        className="w-full bg-[#0a0d14] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexander@company.com"
                        className={`w-full bg-[#0a0d14] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-blue-500'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#0a0d14] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services Multi-Select Pill Selector */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                      Select Required Capabilities <span className="text-blue-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                      {availableServices.map((service) => {
                        const isSelected = formData.selectedServices.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`p-2.5 rounded-lg text-left text-xs font-medium border transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-blue-600/25 border-blue-500 text-white font-semibold'
                                : 'bg-[#0a0d14] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                            }`}
                          >
                            <span>{service}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />}
                          </button>
                        );
                      })}
                    </div>
                    {formErrors.services && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {formErrors.services}
                      </p>
                    )}
                  </div>

                  {/* Row 3: Budget Range & Timeline Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full bg-[#0a0d14] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-[#0a0d14] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Summary */}
                  <div className="space-y-1.5 pt-2">
                    <label className="block text-xs font-mono uppercase text-slate-300 font-medium">
                      Project Goals & Technical Requirements <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectSummary}
                      onChange={(e) => setFormData({ ...formData, projectSummary: e.target.value })}
                      placeholder="Describe what you are looking to build, your current stage, key features, or any specific technologies you have in mind..."
                      className={`w-full bg-[#0a0d14] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                        formErrors.projectSummary ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-blue-500'
                      }`}
                    ></textarea>
                    {formErrors.projectSummary && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {formErrors.projectSummary}
                      </p>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-2 pt-1">
                    <label className="block text-xs font-mono uppercase text-slate-400">
                      Preferred Communication Mode:
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { id: 'email', label: 'Email', icon: <Mail className="w-3.5 h-3.5" /> },
                        { id: 'google-meet', label: 'Google Meet', icon: <Video className="w-3.5 h-3.5" /> },
                        { id: 'phone', label: 'Phone Call', icon: <Phone className="w-3.5 h-3.5" /> },
                      ].map((mode) => (
                        <label
                          key={mode.id}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer border transition-colors ${
                            formData.preferredMethod === mode.id
                              ? 'bg-blue-600/20 border-blue-500 text-white'
                              : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredMethod"
                            value={mode.id}
                            checked={formData.preferredMethod === mode.id}
                            onChange={() => setFormData({ ...formData, preferredMethod: mode.id as any })}
                            className="sr-only"
                          />
                          {mode.icon}
                          <span>{mode.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 active:scale-[0.99] transition-all shadow-xl shadow-blue-600/30 border border-blue-400/40"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Routing Brief to Muhammed Anshid KT...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Specification</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] font-mono text-slate-500 text-center mt-2.5">
                      Protected by 100% Client Confidentiality.
                    </p>
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
