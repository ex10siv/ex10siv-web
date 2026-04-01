import { Lock, ZapIcon } from "lucide-react";

export default function FuturePhases() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-500">Beyond Phase 1</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <div className="flex items-center gap-4 opacity-50 p-4 rounded-2xl border border-dashed border-gray-600 backdrop-blur-sm grayscale">
            <Lock className="w-6 h-6" />
            <div className="text-left">
              <h4 className="font-bold text-white">Phase 2</h4>
              <p className="text-xs text-gray-400">Booga • TymBomb • Leeft • PickDropa</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 opacity-30 p-4 rounded-2xl border border-dashed border-gray-700 backdrop-blur-sm grayscale">
            <ZapIcon className="w-6 h-6" />
            <div className="text-left">
              <h4 className="font-bold text-white">Phase 3</h4>
              <p className="text-xs text-gray-400">Global Domination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
