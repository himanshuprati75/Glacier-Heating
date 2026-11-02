import { useState } from 'react';
import { Flame, Snowflake, Droplets, Wind, Wrench, Sparkles, ChevronRight, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

export default function ServicesGrid({ onSelectService, onOpenCallModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Capabilities (6)' },
    { id: 'heating', label: 'Furnaces & Heating' },
    { id: 'ac', label: 'Air Conditioning' },
    { id: 'water', label: 'Water Heaters' },
    { id: 'heatpumps', label: 'Heat Pumps' },
    { id: 'iaq', label: 'Tune-Ups & IAQ' },
  ];

  const services = [
    {
      id: 'heating',
      serviceId: 'furnace-repair',
      title: 'High-Efficiency Furnace Repair & Installation',
      tag: 'MICHIGAN WINTER EXPERTS',
      desc: 'Rapid 24/7 diagnostic and repair for failed furnaces, cracked heat exchangers, electronic ignitors, and turnkey 96%+ AFUE furnace installations.',
      features: [
        'Same-day emergency heat restoration across Kent County',
        'Electronic ignition & flame sensor diagnostic',
        'High-efficiency variable-speed furnace replacements',
        'Certified carbon monoxide safety inspection',
      ],
      image: '/images/furnace_install.jpg',
      icon: Flame,
    },
    {
      id: 'ac',
      serviceId: 'ac-repair',
      title: 'Central Air Conditioning & Ductless Mini-Splits',
      desc: 'Precision AC diagnostics, refrigerant recharge, compressor repair, and multi-zone ductless mini-split systems for additions and bedrooms.',
      features: [
        'Same-day refrigerant leak detection & recharge',
        'High-SEER2 central cooling unit replacements',
        'Multi-zone mini-splits for additions and bonus rooms',
        'Capacitor, contactor, and condenser fan motor repair',
      ],
      image: '/images/mini_splits.jpg',
      icon: Snowflake,
    },
    {
      id: 'water',
      serviceId: 'water-heater',
      title: 'Residential Water Heater Service & Replacement',
      desc: 'Same-day emergency replacement and repair for leaking or failing residential hot water tanks, gas burners, and high-efficiency tankless units.',
      features: [
        'Fast response for leaking water heaters & pilot faults',
        'Traditional 40 & 50-gallon gas and electric tanks',
        'High-efficiency on-demand tankless water heaters',
        'Complete removal & disposal of old water heaters',
      ],
      image: '/images/water_heater.jpg',
      icon: Droplets,
    },
    {
      id: 'heatpumps',
      serviceId: 'heatpump',
      title: 'Heat Pumps & Dual-Fuel Inverter Systems',
      desc: 'Cold-climate heat pump technology delivering efficient electric heating and summer cooling with dual-fuel hybrid furnace pairings.',
      features: [
        'Advanced variable-capacity inverter compressors',
        'Dual-fuel hybrid heating optimization with gas backup',
        'Reversing valve and defrost control diagnosis',
        'Substantial reduction in seasonal energy consumption',
      ],
      image: '/images/heatpump_install.jpg',
      icon: Wind,
    },
    {
      id: 'iaq',
      serviceId: 'tune-up',
      title: 'Annual Seasonal Safety Tune-Ups',
      desc: 'Comprehensive 24-point pre-season maintenance that prevents unexpected freeze-ups, lowers electric bills, and validates manufacturer warranties.',
      features: [
        'Full 24-point electrical, burner & airflow check',
        'Blower wheel and evaporator coil visual review',
        'Capacitor and motor amp draw performance testing',
        'Priority scheduling & discount on repair parts',
      ],
      image: '/images/hero_tech.jpg',
      icon: Wrench,
    },
    {
      id: 'iaq',
      serviceId: 'replacement',
      title: 'Smart Wi-Fi Thermostats & Indoor Air Filtration',
      desc: 'Upgrade your home comfort with Ecobee, Nest, or Honeywell smart thermostats, central air filtration, and humidity management.',
      features: [
        'Smart phone thermostat control from anywhere',
        'Whole-home MERV 13 high-capacity air filtration',
        'Crawlspace and central home humidity balance',
        'Automated freeze warnings & energy reports',
      ],
      image: '/images/iaq_air_cleaner.jpg',
      icon: Sparkles,
    },
  ];

  const filteredServices = services.filter((s) => {
    if (activeTab === 'all') return true;
    return s.id === activeTab;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-glacierNavy-50 border border-glacierNavy-200 text-glacierNavy-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-glacierNavy-600" />
            Complete Grand Rapids &amp; West Michigan Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-glacierNavy-950 tracking-tight">
            Full-Spectrum Residential HVAC &amp; Water Heaters
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Installed and serviced by licensed, bilingual technicians with 100% upfront flat-rate pricing.
          </p>
        </div>

        {/* 6 Separated Category Tabs (User Navigation Standard) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-inner overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-glacierNavy-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-glacierNavy-900 hover:bg-white/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-fireOrange-300"
              >
                <div>
                  {/* Image Header with Badge */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-glacierNavy-950/80 via-transparent to-transparent"></div>
                    
                    <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-glacierNavy-950/90 text-fireOrange-400 border border-white/10 backdrop-blur-sm">
                      {service.tag}
                    </span>

                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 text-glacierNavy-900 flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-fireOrange-600" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-black text-glacierNavy-950 group-hover:text-fireOrange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div className="mt-4 space-y-2 pt-4 border-t border-slate-200/80">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-fireOrange-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service.serviceId)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-glacierNavy-900 hover:bg-fireOrange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Get Estimate</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="tel:6169004759"
                      className="p-2.5 rounded-xl border border-slate-300 hover:border-fireOrange-500 bg-white text-slate-700 hover:text-fireOrange-600 transition-colors"
                      title="Call (616) 900-4759"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

