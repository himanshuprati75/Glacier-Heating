import { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, ShieldCheck } from 'lucide-react';

export default function FAQ({ onOpenCallModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How fast can you arrive for an emergency furnace breakdown during a Michigan freeze?',
      a: 'We provide 24/7/365 emergency dispatch with mobile service vans stocked with common universal ignitors, flame sensors, gas valves, and blower motors. For urgent no-heat emergencies across Grand Rapids, Wyoming, Walker, and Kentwood, our technicians typically arrive on-site within 30 to 60 minutes.',
    },
    {
      q: 'Do you charge extra after-hours or overtime fees for weekend and night calls?',
      a: 'No! At Glacier Heating and Cooling, we operate on 100% upfront flat-rate pricing. We provide a transparent diagnostic and a guaranteed written quote before any work starts. You will never face surprise overtime rate multipliers on nights or weekends.',
    },
    {
      q: 'Do you provide bilingual service in Spanish? (¿Ofrecen servicio en español?)',
      a: '¡Sí, absolutamente! Glacier Heating & Cooling is operated by Gerardo "Jerry" Lopez, and our team is proud to offer fluent bilingual service in both English and Spanish (Se Habla Español). We clearly explain system diagnostics, repair options, and estimates in your preferred language.',
    },
    {
      q: 'What are the warning signs my residential water heater is about to fail?',
      a: 'Key warning signs include rusty or discolored hot water, rumbling popping noises caused by sediment buildup in the tank base, moisture or puddling around the bottom, and lukewarm showers. If your tank is over 10-12 years old and showing moisture, immediate replacement prevents catastrophic basement flooding.',
    },
    {
      q: 'How long does a furnace typically last in West Michigan’s climate?',
      a: 'With annual seasonal maintenance, a modern gas furnace in West Michigan generally lasts between 15 to 20 years. If your furnace is over 15 years old, requires frequent repairs, or your winter heating bills are steadily climbing, upgrading to a 96%+ AFUE high-efficiency furnace will typically save you 20% to 30% on monthly utility costs.',
    },
    {
      q: 'Do you offer free estimates on new furnace and air conditioning installations?',
      a: 'Yes, we provide 100% free, zero-pressure on-site estimates for all new furnace, central AC, heat pump, and water heater installations. We perform accurate load calculations for your home square footage and present clear tier options tailored to your budget.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fireOrange-50 text-fireOrange-700 text-xs font-bold uppercase tracking-wider mb-3 border border-fireOrange-200">
            <HelpCircle className="w-4 h-4 text-fireOrange-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-glacierNavy-950 tracking-tight">
            Clear Answers to Your Heating &amp; Cooling Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about our local Grand Rapids service, water heaters, and emergency response.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-glacierNavy-950">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-fireOrange-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h4 className="text-base font-bold text-glacierNavy-950">Have a specific equipment or emergency question?</h4>
          <p className="text-xs text-slate-500 mt-1">Gerardo "Jerry" Lopez and the Glacier dispatch team in Grand Rapids are ready 24/7.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:6169004759"
              className="px-6 py-2.5 rounded-full bg-fireOrange-600 hover:bg-fireOrange-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
            >
              Call (616) 900-4759
            </a>
            <a
              href="mailto:glopez@glacier-services.com"
              className="px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

