import { Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, Flame, Snowflake, Wind, Droplets, Wrench, Sparkles, Globe } from 'lucide-react';

export default function Hero({ onSelectIssue, onOpenCallModal }) {
  const commonIssues = [
    { id: 'furnace-repair', label: 'Furnace Quit / Blowing Cold Air', icon: Flame, tag: 'HIGH URGENCY' },
    { id: 'ac-repair', label: 'AC Not Cooling / Frozen Coil', icon: Snowflake, tag: 'POPULAR' },
    { id: 'water-heater', label: 'Water Heater Leaking / No Hot Water', icon: Droplets, tag: 'SAME-DAY FIX' },
    { id: 'heatpump', label: 'Heat Pump Fault / Aux Heat Issue', icon: Wind, tag: 'SPECIALTY' },
    { id: 'tune-up', label: 'Safety Inspection & Seasonal Tune-Up', icon: Wrench, tag: 'PREVENTIVE' },
    { id: 'replacement', label: 'New High-Efficiency System Quote', icon: Sparkles, tag: 'FREE ESTIMATE' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-glacierNavy-950 via-glacierNavy-900 to-glacierNavy-950 text-white pt-8 pb-16 sm:pb-24 overflow-hidden border-b border-glacierNavy-800">
      
      {/* Background Ambient Glows & Subtle Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-fireOrange-600/20 via-glacierCyan-500/15 to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Capsule */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-200 mb-6 flex-wrap">
          <span className="w-2 h-2 rounded-full bg-fireOrange-500 animate-ping"></span>
          <span className="font-semibold text-fireOrange-300">Live Michigan Dispatch:</span>
          <span>Grand Rapids, Wyoming, Kentwood, Walker &amp; Kent County</span>
          <span className="text-slate-400 hidden sm:inline">•</span>
          <span className="text-glacierCyan-300 hidden sm:inline-flex items-center gap-1 font-semibold">
            <Globe className="w-3.5 h-3.5" /> Se Habla Español
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Psychological Headline & Immediate Funnel (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Grand Rapids &amp; West Michigan’s Trusted{' '}
              <span className="bg-gradient-to-r from-fireOrange-400 via-fireOrange-500 to-amberGold-400 bg-clip-text text-transparent">
                Heating &amp; Cooling Pros.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              When Michigan lake-effect blizzards drop temperatures below zero or muggy summer heatwaves peak, you need immediate, honest HVAC service. Operated by certified technician <strong className="text-white font-semibold">Gerardo "Jerry" Lopez</strong> in Grand Rapids, MI, Glacier Heating &amp; Cooling provides <strong className="text-fireOrange-400 font-semibold">24/7 emergency dispatch</strong>, respectful home care, and zero surprise overtime rates.
            </p>

            {/* Quick Issue Selector (CRO Hook: Force active engagement in <3 seconds) */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-fireOrange-400"></span>
                Select your system issue for instant estimate &amp; response:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {commonIssues.map((issue) => {
                  const Icon = issue.icon;
                  return (
                    <button
                      key={issue.id}
                      onClick={() => onSelectIssue(issue.id)}
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-fireOrange-400/60 transition-all duration-200 text-left shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-1.5 rounded-lg bg-fireOrange-500/20 text-fireOrange-400 group-hover:bg-fireOrange-500 group-hover:text-white transition-colors shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                          {issue.label}
                        </span>
                      </div>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-white/10 text-slate-300 group-hover:bg-fireOrange-500 group-hover:text-white transition-colors shrink-0">
                        {issue.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:6169004759"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-fireOrange-600 to-fireOrange-500 hover:from-fireOrange-500 hover:to-fireOrange-600 text-white font-extrabold text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 btn-emergency-glow"
              >
                <Phone className="w-5 h-5 text-white animate-bounce" />
                <span>CALL 24/7: (616) 900-4759</span>
              </a>

              <a
                href="#calculator"
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:border-white/40"
              >
                <span>Calculate Repair Cost</span>
                <ArrowRight className="w-4 h-4 text-fireOrange-400" />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fireOrange-400 shrink-0" />
                Licensed &amp; Insured MI Contractor
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fireOrange-400 shrink-0" />
                BBB Accredited Business
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fireOrange-400 shrink-0" />
                Bilingual (English &amp; Español)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-fireOrange-400 shrink-0" />
                Upfront Flat-Rate Pricing
              </span>
            </div>

          </div>

          {/* Right Column: Visual Trust Hero Graphic with Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-glacierNavy-800/80 backdrop-blur-sm relative group">
                <img 
                  src="/images/hero_tech.jpg" 
                  alt="Glacier Heating & Cooling Technicians in Grand Rapids" 
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-glacierNavy-950 via-glacierNavy-950/30 to-transparent"></div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-glacierNavy-950/90 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-fireOrange-400 uppercase tracking-wider">Grand Rapids, MI 49504 Hub</div>
                      <div className="text-sm font-extrabold text-white">Gerardo "Jerry" Lopez, Lead Pro</div>
                      <div className="text-xs text-slate-300">Fast West Michigan Mobile Response Unit</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-fireOrange-500/20 border border-fireOrange-400/30 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-fireOrange-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Bilingual & Gerardo Lopez Badge (Top Left) */}
              <div className="absolute -top-6 -left-4 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-2xl animate-pulse-subtle">
                <img 
                  src="/images/badge_bilingual.png" 
                  alt="Gerardo Jerry Lopez Bilingual HVAC" 
                  className="w-full h-full object-contain filter drop-shadow-xl"
                />
              </div>

              {/* Floating Badge 2: Licensed & BBB Accredited Seal (Bottom Right) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-2xl">
                <img 
                  src="/images/badge_licensed.png" 
                  alt="Licensed & Insured Michigan Contractor BBB Accredited" 
                  className="w-full h-full object-contain filter drop-shadow-xl"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

