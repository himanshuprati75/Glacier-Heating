import { Award, ShieldCheck, HeartHandshake, CheckCircle2, Wrench, Users, PhoneCall, Building2, MapPin, Clock, Globe } from 'lucide-react';

export default function AboutUs({ onOpenCallModal }) {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl group">
              <img 
                src="/images/team_crew.jpg" 
                alt="Glacier Heating & Cooling Service Team" 
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-glacierNavy-950 via-glacierNavy-950/30 to-transparent"></div>

              {/* Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-glacierNavy-950/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-fireOrange-400">Owner-Operated Excellence</span>
                    <h4 className="text-sm font-extrabold text-white">Gerardo "Jerry" Lopez, Lead Pro</h4>
                    <p className="text-[11px] text-slate-300">Grand Rapids, MI 49504 • Se Habla Español</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-fireOrange-500/20 text-fireOrange-400 flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Pillars */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-fireOrange-600">100%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Satisfaction</div>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-glacierNavy-950">24/7</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Emergency</div>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-glacierCyan-600">BBB</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Accredited</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fireOrange-50 text-fireOrange-700 text-xs font-bold uppercase tracking-wider border border-fireOrange-200">
              <ShieldCheck className="w-4 h-4 text-fireOrange-600" />
              Our Story &amp; Local West Michigan Commitment
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-glacierNavy-950 tracking-tight leading-tight">
              Honest Mechanical Diagnostics &amp; Genuine Respect for Your Home
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Founded and operated by <strong className="text-glacierNavy-950 font-bold">Gerardo "Jerry" Lopez</strong> in Grand Rapids, Michigan, Glacier Heating &amp; Cooling was built on a foundational standard that large corporate franchises often neglect: treating every customer's home with absolute respect and delivering honest, transparent diagnostics.
              </p>
              <p>
                Whether repairing a furnace that quit on a sub-zero winter evening or installing an energy-saving heat pump, we never push unnecessary replacements. We inspect, diagnose, and clearly lay out your repair versus replacement options with upfront, flat-rate pricing.
              </p>
              <p>
                We believe exceptional service is in the details: our technicians always wear protective shoe covers, lay down floor runners, ask courteous questions before parking in your driveway, and leave your mechanical room cleaner than we found it. As a bilingual company, we are proud to communicate fluently in both <strong className="text-glacierNavy-950 font-bold">English and Spanish (Se Habla Español)</strong>.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-fireOrange-600 mb-1.5" />
                <h4 className="text-xs font-bold text-glacierNavy-950 uppercase">Licensed &amp; Insured</h4>
                <p className="text-[11px] text-slate-500 mt-1">Michigan licensed mechanical contractor and BBB Accredited business.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Globe className="w-5 h-5 text-fireOrange-600 mb-1.5" />
                <h4 className="text-xs font-bold text-glacierNavy-950 uppercase">Bilingual Service</h4>
                <p className="text-[11px] text-slate-500 mt-1">Fluent communication in English and Spanish across West Michigan.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Clock className="w-5 h-5 text-fireOrange-600 mb-1.5" />
                <h4 className="text-xs font-bold text-glacierNavy-950 uppercase">24/7/365 On-Call</h4>
                <p className="text-[11px] text-slate-500 mt-1">Live dispatchers standing by day and night for urgent heating &amp; cooling failures.</p>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="tel:6169004759"
                className="px-6 py-3 rounded-full bg-fireOrange-600 hover:bg-fireOrange-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Jerry's Team: (616) 900-4759</span>
              </a>

              <a
                href="mailto:glopez@glacier-services.com"
                className="text-xs font-bold text-slate-700 hover:text-fireOrange-600 underline flex items-center gap-1.5"
              >
                <span>glopez@glacier-services.com</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

