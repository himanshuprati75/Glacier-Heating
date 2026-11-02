import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, HeartHandshake, Globe } from 'lucide-react';

export default function Footer({ onOpenCallModal }) {
  return (
    <footer className="bg-glacierNavy-950 text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-glacierNavy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-glacierNavy-800">
          
          {/* Col 1: Brand & NAP (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <img 
              src="/images/logo.png" 
              alt="Glacier Heating & Cooling" 
              className="h-14 w-auto object-contain brightness-110"
            />
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Glacier Heating and Cooling LLC is a local, licensed mechanical contractor operated by <strong className="text-white">Gerardo "Jerry" Lopez</strong>. We provide 24/7 emergency furnace repair, central air conditioning, heat pumps, and water heater service across Grand Rapids and Kent County, MI.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-fireOrange-500 shrink-0 mt-0.5" />
                <span>Grand Rapids, MI 49504 (Kent County, West Michigan)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-fireOrange-500 shrink-0" />
                <a href="tel:6169004759" className="text-white font-bold hover:text-fireOrange-400 transition-colors">
                  (616) 900-4759
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-fireOrange-500 shrink-0" />
                <a href="mailto:glopez@glacier-services.com" className="hover:text-white transition-colors">
                  glopez@glacier-services.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-glacierCyan-300">
                <Globe className="w-4 h-4 text-glacierCyan-400 shrink-0" />
                <span>Bilingual Services • Se Habla Español</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  High-Efficiency Furnace Repair &amp; Install
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Central Air Conditioning &amp; Mini-Splits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Residential Water Heater Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cold-Climate Heat Pump &amp; Dual Fuel
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Annual 24-Point Seasonal Safety Tune-Ups
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Smart Wi-Fi Thermostats &amp; Air Quality
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Regional Coverage
            </h4>
            <div className="text-xs text-slate-400 space-y-1.5">
              <div>• Grand Rapids (49504 &amp; Metro)</div>
              <div>• Wyoming &amp; Walker, MI</div>
              <div>• Kentwood &amp; Grandville, MI</div>
              <div>• East Grand Rapids &amp; Comstock Park</div>
              <div>• Ada, Cascade &amp; Rockford, MI</div>
              <div>• Jenison &amp; Hudsonville, MI</div>
              <div className="pt-2">
                <a href="#service-areas" className="text-fireOrange-400 font-bold hover:underline">
                  View Full Coverage Matrix &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Dispatch Hours & Certifications (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Emergency Hours
            </h4>
            <div className="p-3 rounded-xl bg-glacierNavy-900 border border-glacierNavy-800 text-[11px] space-y-1.5">
              <div className="font-bold text-fireOrange-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                24/7/365 On-Call
              </div>
              <p className="text-slate-400">Regular: Mon-Fri 8am - 5pm</p>
              <p className="text-slate-400">Emergency: 24h Night &amp; Weekend</p>
            </div>

            <div className="pt-1 flex flex-col gap-1.5 text-[11px]">
              <span className="inline-flex items-center gap-1 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amberGold-400" />
                BBB Accredited Business
              </span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-glacierCyan-400" />
                Licensed MI Mechanical Contractor
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Glacier Heating and Cooling LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:6169004759" className="hover:text-slate-300 transition-colors">
              Phone: (616) 900-4759
            </a>
            <span>•</span>
            <a href="mailto:glopez@glacier-services.com" className="hover:text-slate-300 transition-colors">
              glopez@glacier-services.com
            </a>
            <span>•</span>
            <span>Grand Rapids, MI 49504</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

