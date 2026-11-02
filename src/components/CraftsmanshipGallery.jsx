import { useState } from 'react';
import { Camera, ZoomIn, X, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CraftsmanshipGallery() {
  const [activeModalImg, setActiveModalImg] = useState(null);

  const projects = [
    {
      title: 'High-Efficiency 96% AFUE Gas Furnace Replacement',
      location: 'Grand Rapids (Northwest Side), MI',
      category: 'Residential Heating',
      desc: 'Complete removal of a failed 22-year-old furnace and precision installation of a variable-speed 96% AFUE system with custom transition ductwork.',
      image: '/images/furnace_install.jpg',
      specs: '96% AFUE Gas Furnace • Sealed Combustion • Digital Diagnostic Check',
    },
    {
      title: 'High-SEER2 Central Air Conditioner & Line Set',
      location: 'Wyoming, MI',
      category: 'Air Conditioning',
      desc: 'Same-day condenser replacement with new vibration isolation pad, quick disconnect box, and nitrogen-purged braze joints.',
      image: '/images/mini_splits.jpg',
      specs: '16 SEER2 High Efficiency • Puron Refrigerant • Factory Warranty',
    },
    {
      title: 'Residential 50-Gallon Water Heater Replacement',
      location: 'Kentwood, MI',
      category: 'Water Heaters',
      desc: 'Emergency replacement of a ruptured hot water tank completed within 3 hours. Included brass shutoff valve and thermal expansion tank.',
      image: '/images/water_heater.jpg',
      specs: '50-Gal Gas Tank • Low-NOx Burner • Leak-Safe Drip Pan Installed',
    },
    {
      title: 'Cold-Climate Multi-Zone Ductless Mini-Split',
      location: 'Walker, MI',
      category: 'Ductless Heat Pumps',
      desc: 'Multi-head ductless installation for a 2nd-story master suite, providing independent whisper-quiet cooling and winter supplemental heat.',
      image: '/images/heatpump_install.jpg',
      specs: 'Inverter Technology • Remote Controls • Sub-Zero Heating Output',
    },
    {
      title: 'Whole-Home Aprilaire Filtration & Smart Control',
      location: 'Ada, MI',
      category: 'Air Quality & Controls',
      desc: 'Installed central MERV 13 high-capacity media air filtration alongside an Ecobee smart Wi-Fi thermostat for automated indoor humidity defense.',
      image: '/images/iaq_air_cleaner.jpg',
      specs: 'MERV 13 Media Filter • Smart Ecobee Wi-Fi • Remote Temperature Alerts',
    },
    {
      title: 'Emergency Blower Motor & Capacitor Restoration',
      location: 'Rockford, MI',
      category: 'Emergency Diagnostic',
      desc: 'Late-night emergency furnace repair during a sub-zero winter storm. Replaced seized blower motor and restored heating to safe 72°F.',
      image: '/images/commercial_ac.jpg',
      specs: '24/7 Mobile Van Dispatch • OEM Factory Motor • Heat Restored in 45 Min',
    },
  ];

  return (
    <section id="craftsmanship" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fireOrange-500/20 text-fireOrange-400 text-xs font-bold uppercase tracking-wider mb-3 border border-fireOrange-500/30">
            <Camera className="w-4 h-4" />
            Verified Jobsite Craftsmanship
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Real Work Across Grand Rapids &amp; West Michigan
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Every repair and installation is personally verified by Gerardo "Jerry" Lopez and guaranteed for reliable performance.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalImg(proj)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-800/90 border border-slate-700 hover:border-fireOrange-500/50 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/90 text-fireOrange-400 border border-white/10 backdrop-blur-sm">
                  {proj.category}
                </span>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-fireOrange-500 transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-fireOrange-400 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-fireOrange-400 transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {proj.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/80 text-[11px] text-slate-300 font-mono">
                  {proj.specs}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeModalImg && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveModalImg(null)}
          >
            <div 
              className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalImg(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 sm:h-96">
                <img 
                  src={activeModalImg.image} 
                  alt={activeModalImg.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-fireOrange-400 font-semibold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{activeModalImg.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{activeModalImg.title}</h3>
                <p className="text-xs text-slate-300 mt-2">{activeModalImg.desc}</p>
                <div className="mt-4 p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono">
                  {activeModalImg.specs}
                </div>
                <div className="mt-6 flex justify-end">
                  <a
                    href="tel:6169004759"
                    className="px-6 py-2.5 rounded-full bg-fireOrange-600 hover:bg-fireOrange-500 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Request Similar Installation
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

