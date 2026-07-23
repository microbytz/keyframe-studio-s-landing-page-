import React from 'react';
import { KEYBOARD_SHORTCUTS } from '../data/featureData';
import { Keyboard, X, Sparkles } from 'lucide-react';

interface ShortcutsGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsGuideModal: React.FC<ShortcutsGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative space-y-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Keyboard Shortcuts Cheatsheet</h3>
              <p className="text-xs text-slate-400 font-mono">In-App Quick Binding Reference • Keyframe Studio</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {KEYBOARD_SHORTCUTS.map((item, idx) => (
            <div key={idx} className="bg-slate-950 p-3 rounded-2xl border border-slate-800/80 flex items-center justify-between">
              <span className="text-slate-300 font-medium">{item.description}</span>
              <kbd className="bg-slate-800 text-amber-300 border border-slate-700 font-mono font-bold px-2.5 py-1 rounded-lg text-xs shadow-sm">
                {item.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Full tablet stylus & mouse gesture binding support
          </span>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-md transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
