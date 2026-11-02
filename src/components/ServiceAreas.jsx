import { useState } from 'react';
import { MapPin, Search, CheckCircle2, Navigation, Clock, Phone } from 'lucide-react';

export default function ServiceAreas({ onOpenCallModal }) {
  const [searchQuery, setSearchQuery] = useState('');

  const areas = [
    { name: 'Grand Rapids, MI', county: 'Kent County (HQ Hub)', zip: '49504', response: '15 - 30 mins', tag: 'PRIMARY HQ' },
    { name: 'Wyoming, MI', county: 'Kent County', zip: '49509', response: '15 - 30 mins', tag: 'RAPID DISPATCH' },
    { name: 'Walker, MI', county: 'Kent County', zip: '49534', response: '15 - 25 mins', tag: 'LOCAL HUB' },
    { name: 'Kentwood, MI', county: 'Kent County', zip: '49508', response: '20 - 35 mins', tag: 'FULL COVERAGE' },
    { name: 'Grandville, MI', county: 'Kent County', zip: '49418', response: '20 - 35 mins', tag: 'FULL COVERAGE' },
    { name: 'East Grand Rapids, MI', county: 'Kent County', zip: '49506', response: '20 - 35 mins', tag: 'PRIORITY RESIDENTIAL' },
    { name: 'Comstock Park, MI', county: 'Kent County', zip: '49321', response: '15 - 30 mins', tag: 'RAPID DISPATCH' },
    { name: 'Rockford, MI', county: 'Kent County (North)', zip: '49341', response: '25 - 40 mins', tag: 'NORTH KENT' },
    { name: 'Ada, MI', county: 'Kent County', zip: '49301', response: '25 - 40 mins', tag: 'SCHEDULED & 24/7' },
    { name: 'Cascade, MI', county: 'Kent County', zip: '49546', response: '25 - 40 mins', tag: 'SCHEDULED & 24/7' },
    { name: 'Jenison, MI', county: 'Ottawa County', zip: '49428', response: '20 - 35 mins', tag: 'WEST SUBURBS' },
    { name: 'Hudsonville, MI', county: 'Ottawa County', zip: '49426', response: '25 - 45 mins', tag: 'WEST SUBURBS' },
    { name: 'Byron Center, MI', county: 'Kent County (South)', zip: '49315', response: '25 - 45 mins', tag: 'SOUTH KENT' },
    { name: 'Allendale, MI', county: 'Ottawa County', zip: '49401', response: '30 - 50 mins', tag: 'WEST REGION' },
    { name: 'Sparta, MI', county: 'Kent County', zip: '49345', response: '25 - 45 mins', tag: 'NORTH KENT' },
    { name: 'Coopersville, MI', county: 'Ottawa County', zip: '49404', response: '30 - 50 mins', tag: 'WEST REGION' },
  ];

  const filteredAreas = areas.filter(
    (a) =>
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.zip.includes(searchQuery)
  );

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-glacierNavy-50 border border-glacierNavy-200 text-glacierNavy-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-4 h-4 text-glacierNavy-600" />
            Regional Coverage Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-glacierNavy-950 tracking-tight">
            Serving Grand Rapids, Kent County &amp; West Michigan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Technicians routed directly from our Grand Rapids, MI headquarters. Enter your city or zip code to verify response time:
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city, county, or zip (e.g. 49504, Walker, Wyoming)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-fireOrange-500/20 focus:border-fireOrange-500 shadow-sm"
            />
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-fireOrange-300 hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-glacierNavy-50 text-glacierNavy-700 group-hover:bg-fireOrange-50 group-hover:text-fireOrange-600 flex items-center justify-center shrink-0 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-glacierNavy-950 truncate">
                    {area.name}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {area.county} • {area.zip}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0 ml-3">
                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600 block">
                  {area.tag}
                </span>
                <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-1 justify-end">
                  <Clock className="w-3 h-3 text-fireOrange-500" />
                  {area.response}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Proximity Reassurance Card */}
        <div className="mt-10 p-5 rounded-2xl bg-glacierNavy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Don’t see your exact West Michigan township or neighborhood?</h4>
            <p className="text-xs text-slate-300 mt-0.5">We service all surrounding residential areas throughout Kent and Eastern Ottawa counties.</p>
          </div>
          <a
            href="tel:6169004759"
            className="px-6 py-2.5 rounded-full bg-fireOrange-600 hover:bg-fireOrange-500 text-white font-bold text-xs whitespace-nowrap shadow-md transition-colors"
          >
            Check Availability: (616) 900-4759
          </a>
        </div>

      </div>
    </section>
  );
}

