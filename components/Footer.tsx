import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
          <span className="text-sm font-bold tracking-widest text-emerald-500/80 uppercase">
            EX10SIV UNIVYAS System Active
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">X (Twitter)</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
        </div>

        <div className="text-xs text-gray-600 font-medium">
          &copy; {new Date().getFullYear()} EX10SIV INC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
