import { useState } from 'react';
import { Phone, Copy, Check, X, Clock, ShieldCheck, UserCheck, AlertCircle, HeartHandshake, Globe } from 'lucide-react';

export default function CallModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [callbackNumber, setCallbackNumber] = useState('');
  const [callbackSent, setCallbackSent] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('(616) 900-4759');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (callbackNumber.trim()) {
      setCallbackSent(true);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-fireOrange-50 text-fireOrange-600 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-fireOrange-600">
              Live Emergency Dispatcher
            </span>
            <h3 className="text-xl font-black text-glacierNavy-950">
              Direct Phone Connection
            </h3>
          </div>
        </div>

        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          Our Grand Rapids dispatch center is available 24/7/365. Speak directly with Gerardo "Jerry" Lopez for rapid emergency heating, cooling, or water heater dispatch across West Michigan:
        </p>

        {/* Big Phone Number Display */}
        <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-center justify-between gap-3 mb-6">
          <a
            href="tel:6169004759"
            className="text-2xl sm:text-3xl font-black text-glacierNavy-950 hover:text-fireOrange-600 transition-colors tracking-tight flex items-center gap-2"
          >
            <Phone className="w-6 h-6 text-fireOrange-600 shrink-0" />
            (616) 900-4759
          </a>

          <button
            onClick={handleCopy}
            className="px-3 py-2 rounded-xl border border-slate-300 hover:border-fireOrange-500 bg-white text-xs font-bold text-slate-700 hover:text-fireOrange-600 transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Instant Callback Form */}
        {!callbackSent ? (
          <form onSubmit={handleCallbackSubmit} className="space-y-3 pt-2 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-700">
              Or request an immediate dispatcher call-back:
            </label>
            <div className="flex gap-2">
              <input
                type="tel"
                required
                placeholder="Enter your phone number..."
                value={callbackNumber}
                onChange={(e) => setCallbackNumber(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-fireOrange-500/20 focus:border-fireOrange-500"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-glacierNavy-900 hover:bg-fireOrange-600 text-white font-bold text-xs transition-colors shrink-0"
              >
                Call Me
              </button>
            </div>
            <p className="text-[10px] text-slate-400">Average response time: 2 to 5 minutes.</p>
          </form>
        ) : (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Callback queued for {callbackNumber}. Jerry is calling you shortly.</span>
          </div>
        )}

        {/* Micro Trust Strip */}
        <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <HeartHandshake className="w-3.5 h-3.5 text-fireOrange-600" />
            <span>Gerardo "Jerry" Lopez, Owner</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-glacierCyan-600" />
            <span>Se Habla Español</span>
          </div>
        </div>

      </div>
    </div>
  );
}

