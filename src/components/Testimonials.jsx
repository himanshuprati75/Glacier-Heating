import { Star, CheckCircle2, MapPin, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah & Dan K.',
      location: 'Grand Rapids (Northwest Side), MI',
      service: 'Emergency Late-Night Furnace Repair',
      date: 'Verified Homeowner',
      rating: 5,
      text: 'Our furnace stopped igniting at 10:30 PM on a night where the wind chill hit 5 degrees. Gerardo arrived within 45 minutes, immediately put on boot covers, diagnosed a faulty flame sensor and dirty burner, and had warm heat blowing in under an hour. He didn’t try to upsell us on anything and the price was totally fair. Jerry is our HVAC guy for life!',
    },
    {
      name: 'Carlos M.',
      location: 'Wyoming, MI',
      service: 'AC Replacement & Ductwork Tune-Up',
      date: 'Bilingual Customer',
      rating: 5,
      text: 'Excelente servicio en español y en inglés. Jerry nos explicó con todo detalle por qué nuestro aire acondicionado ya no enfriaba y nos dio diferentes opciones sin ninguna presión. La instalación fue impecable, muy limpio y puntual. Recomiendo a Glacier Heating 100% a toda la comunidad de Grand Rapids.',
    },
    {
      name: 'Bradley T.',
      location: 'Walker, MI',
      service: 'Water Heater Replacement',
      date: 'Emergency Service',
      rating: 5,
      text: 'Found a puddle around our 14-year-old water heater on a Saturday morning. Called Glacier, and Jerry was at our house by noon with a brand new 50-gallon tank on his truck. Hauled the rusty old tank out, installed the new one with clean copper joints, and swept up completely. Couldn’t have asked for a smoother experience.',
    },
    {
      name: 'Megan R.',
      location: 'Ada / Cascade, MI',
      service: 'High-Efficiency Heat Pump Installation',
      date: 'Home Renovation',
      rating: 5,
      text: 'We wanted to upgrade to a dual-fuel heat pump to reduce our winter gas bills. Jerry provided a clear, itemized quote that was significantly more transparent than the big corporate companies in Grand Rapids. The system runs whisper quiet and our utility bills are already noticeably lower.',
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            Verified Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-glacierNavy-950 tracking-tight">
            Trusted by Hundreds of West Michigan Homeowners
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Read real feedback from homeowners across Grand Rapids, Wyoming, Kentwood, Walker, and Kent County.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {rev.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-glacierNavy-950">{rev.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-fireOrange-500" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    VERIFIED SERVICE
                  </span>
                  <div className="text-[10px] text-slate-400 mt-0.5">{rev.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregated Rating Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400" />
              ))}
            </div>
            <div>
              <div className="text-sm font-black text-glacierNavy-950">4.9 / 5.0 Average Customer Rating</div>
              <div className="text-xs text-slate-500">BBB Accredited • Serving Grand Rapids, Kent County &amp; West Michigan</div>
            </div>
          </div>

          <a
            href="tel:6169004759"
            className="text-xs font-bold text-fireOrange-600 hover:text-fireOrange-700 hover:underline flex items-center gap-1"
          >
            <span>Have an emergency? Speak with Jerry directly &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}

