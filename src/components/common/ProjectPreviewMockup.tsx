import { 
  ShoppingBag, 
  BarChart3, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck,
  Users
} from 'lucide-react';

interface Props {
  type: 'storefront' | 'dashboard' | 'hospitality' | 'saas' | 'portal';
  title: string;
  className?: string;
}

export const ProjectPreviewMockup: React.FC<Props> = ({ type, title, className = '' }) => {
  return (
    <div className={`w-full h-full bg-[#090d16] flex flex-col select-none overflow-hidden ${className}`}>
      {/* Browser chrome header */}
      <div className="h-8 bg-[#070a12] border-b border-white/[0.08] px-3.5 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
        </div>
        <div className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-3 py-0.5 rounded border border-white/[0.06] truncate max-w-[220px]">
          teklonics.dev/preview/{title.toLowerCase().replace(/[^a-z0-9]/g, '-')}
        </div>
        <div className="w-10"></div>
      </div>

      {/* Mockup screen interior */}
      <div className="flex-1 p-4 overflow-hidden relative font-sans">
        {type === 'storefront' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
              <span className="font-display font-bold text-xs text-white tracking-wider">AURORA / STORE</span>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span className="text-white">Shop</span>
                <span>Editorial</span>
                <span className="flex items-center gap-1 bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded text-[10px]">
                  <ShoppingBag className="w-3 h-3" /> 2
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 flex-1">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-2.5 flex flex-col justify-between">
                <div className="h-16 bg-slate-800/40 rounded flex items-center justify-center text-[11px] text-slate-500 font-mono">
                  [Product Image]
                </div>
                <div className="pt-2">
                  <div className="text-xs font-semibold text-white truncate">Minimal Chrono 01</div>
                  <div className="text-[11px] font-mono text-blue-400">$185.00</div>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-2.5 flex flex-col justify-between">
                <div className="h-16 bg-slate-800/40 rounded flex items-center justify-center text-[11px] text-slate-500 font-mono">
                  [Product Image]
                </div>
                <div className="pt-2">
                  <div className="text-xs font-semibold text-white truncate">Studio Desk Pad</div>
                  <div className="text-[11px] font-mono text-blue-400">$64.00</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/20 rounded p-2 flex items-center justify-between text-[11px]">
              <span className="text-slate-300">Free priority delivery enabled</span>
              <span className="text-blue-400 font-mono font-medium">99.8% Speed Score</span>
            </div>
          </div>
        )}

        {type === 'dashboard' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <div className="flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-bold text-white">NEXUS OPS</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                Live Telemetry
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 block">Throughput</span>
                <span className="text-sm font-bold text-white font-mono">1.4k req/s</span>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 block">Avg Latency</span>
                <span className="text-sm font-bold text-blue-400 font-mono">22ms</span>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 block">Uptime</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">99.98%</span>
              </div>
            </div>

            {/* Simulated mini chart */}
            <div className="flex-1 bg-white/[0.02] border border-white/[0.06] rounded-lg p-2.5 flex items-end gap-1.5 justify-between">
              {[40, 65, 52, 78, 60, 92, 85, 70, 88, 95, 82, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    className="w-full bg-blue-500/40 hover:bg-blue-400 rounded-t transition-all"
                    style={{ height: `${h * 0.7}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === 'hospitality' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="text-center pb-2 border-b border-white/[0.06]">
              <span className="font-display font-bold text-xs tracking-widest text-white uppercase">SAVORIA ATELIER</span>
              <p className="text-[10px] text-slate-400 italic font-serif">Contemporary Fine Dining & Reserve</p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-3 space-y-2.5 flex-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Reserve a Table</span>
              <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                <div className="bg-white/[0.04] p-1.5 rounded text-center text-slate-200 border border-white/[0.05]">
                  <Calendar className="w-3 h-3 mx-auto mb-0.5 text-blue-400" />
                  Today
                </div>
                <div className="bg-white/[0.04] p-1.5 rounded text-center text-slate-200 border border-white/[0.05]">
                  <Clock className="w-3 h-3 mx-auto mb-0.5 text-blue-400" />
                  8:30 PM
                </div>
                <div className="bg-white/[0.04] p-1.5 rounded text-center text-slate-200 border border-white/[0.05]">
                  <Users className="w-3 h-3 mx-auto mb-0.5 text-blue-400" />
                  2 Guests
                </div>
              </div>

              <div className="pt-1 border-t border-white/[0.04] flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Chef's 7-Course Tasting</span>
                <span className="text-emerald-400 font-mono">Available</span>
              </div>
            </div>

            <div className="h-6 bg-blue-600 rounded flex items-center justify-center text-[11px] font-semibold text-white">
              Confirm Reservation
            </div>
          </div>
        )}

        {type === 'portal' && (
          <div className="space-y-2.5 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5">
              <span className="text-xs font-bold text-white">FLOWDESK / CLIENT PORTAL</span>
              <span className="text-[10px] text-blue-400 font-mono">Q2 Roadmap</span>
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-[11px]">
                <span className="text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  UI/UX Design Sign-Off
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Completed</span>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-[11px]">
                <span className="text-white flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-blue-400" />
                  Frontend API Integration
                </span>
                <span className="text-[10px] font-mono text-blue-400">In Sprint</span>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-[11px]">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-slate-500" />
                  QA & Security Audit
                </span>
                <span className="text-[10px] font-mono text-slate-500">Upcoming</span>
              </div>
            </div>
          </div>
        )}

        {type === 'saas' && (
          <div className="space-y-2 h-full flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/[0.06] pb-1.5">
              <span className="flex items-center gap-1 text-white">
                <Terminal className="w-3 h-3 text-blue-400" />
                POST /api/v1/webhook
              </span>
              <span className="text-emerald-400">200 OK</span>
            </div>

            <div className="bg-black/50 p-2.5 rounded border border-white/[0.06] text-[10px] text-slate-300 leading-relaxed overflow-hidden">
              <div className="text-slate-500">// Payload synchronized</div>
              <div>&#123;</div>
              <div className="pl-3"><span className="text-blue-300">"event"</span>: <span className="text-emerald-300">"payment.succeeded"</span>,</div>
              <div className="pl-3"><span className="text-blue-300">"amount"</span>: <span className="text-emerald-300">425000</span>,</div>
              <div className="pl-3"><span className="text-blue-300">"currency"</span>: <span className="text-emerald-300">"usd"</span>,</div>
              <div className="pl-3"><span className="text-blue-300">"status"</span>: <span className="text-blue-400">"verified"</span></div>
              <div>&#125;</div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
              <span>Latency: 18ms</span>
              <span className="text-emerald-400">TLS 1.3 Verified</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
