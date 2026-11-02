import { ShieldCheck, Award, Clock, DollarSign, CheckCircle2, HeartHandshake, Globe, Sparkles } from 'lucide-react';

export default function TrustShield({ onOpenCallModal }) {
  const pillars = [
    {
      icon: Award,
      title: 'Licensed & BBB Accredited',
      badge: 'MICHIGAN LICENSED',
      desc: 'State-licensed mechanical contractor and BBB Accredited business backed by comprehensive liability and worker safety coverage.',
      highlight: '100% Guaranteed Workmanship',
    },
    {
      icon: Globe,
      title: 'Bilingual & Home-Respectful',
      badge: 'SE HABLA ESPAÑOL',
      desc: 'Operated by Gerardo "Jerry" Lopez. We always wear boot protectors, protect your floors, and clearly explain repairs in English or Spanish.',
      highlight: 'Courteous & Clean Service',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Dispatch',
      badge: 'NIGHT OR WEEKEND',
      desc: 'Immediate emergency routing when your furnace quits during a West Michigan freeze or AC fails during humid summer peaks.',
      highlight: 'Rapid Response Mobile Vans',
    },
    {
      icon: DollarSign,
      title: 'Upfront Flat-Rate Pricing',
      badge: 'ZERO SURPRISES',
      desc: 'Clear diagnostics and written quotes before any work begins. No unexpected after-hours upcharges or hidden travel fees.',
      highlight: 'Transparent Written Quotes',
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fireOrange-500/20 text-fireOrange-400 text-xs font-bold uppercase tracking-wider mb-3 border border-fireOrange-500/30">
            <ShieldCheck className="w-4 h-4" />
            The Glacier Standard of Excellence
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Why West Michigan Homeowners Trust Glacier First
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Local craftsmanship, honest mechanical diagnostics, and respectful service on every home visit.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-fireOrange-500/50 hover:bg-slate-800 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-fireOrange-500/20 text-fireOrange-400 border border-fireOrange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-fireOrange-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700 flex items-center gap-2 text-xs font-semibold text-fireOrange-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-glacierNavy-950 to-slate-900 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-fireOrange-500/20 text-fireOrange-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Emergency Dispatchers Standing By 24/7/365</div>
              <div className="text-xs text-slate-400">Grand Rapids, MI 49504 • Direct Line: (616) 900-4759</div>
            </div>
          </div>

          <a
            href="tel:6169004759"
            className="px-6 py-2.5 rounded-full bg-fireOrange-600 hover:bg-fireOrange-500 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap btn-emergency-glow"
          >
            Call (616) 900-4759 Now
          </a>
        </div>

      </div>
    </section>
  );
}

