import React, { useState } from 'react';
import { HardDrive, Download, Keyboard, ChevronDown, Check } from 'lucide-react';

export const ProjectSettingsScreenshot: React.FC = () => {
  const [resolution, setResolution] = useState('Original (1080p)');
  const [fps, setFps] = useState('12 fps');
  const [startFrame, setStartFrame] = useState('1');
  const [endFrame, setEndFrame] = useState('15');
  const [isExporting, setIsExporting] = useState(false);

  const handleRender = () => {
    setIsExporting(true);
    setTimeout(() => setIsExporting(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-xl overflow-hidden font-sans text-xs select-none transition-all duration-300 hover:shadow-2xl">
      {/* Top Header */}
      <div className="bg-white px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 font-semibold">&lt;</span>
          <span className="font-bold tracking-wider text-slate-700 uppercase text-[11px]">STUDIO SETTINGS / RENDER MP4 VIDEO & SHORTCUTS</span>
        </div>
        <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1 rounded font-semibold text-[11px] tracking-wide flex items-center gap-1 transition-colors">
          <Check className="w-3 h-3 text-emerald-600" />
          COMMIT
        </button>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 bg-slate-100/70">
        {/* Render MP4 Panel (Matching Image 1 & 2) */}
        <div className="md:col-span-6 bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3.5">
          <div className="flex items-center space-x-2 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
            <Download className="w-3.5 h-3.5 text-indigo-600" />
            <span>RENDER MP4 VIDEO</span>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-600">RESOLUTION</span>
              <select 
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                className="bg-white border border-slate-300 rounded px-2 py-1 font-mono text-slate-800 font-bold text-[10px] cursor-pointer"
              >
                <option>Original (1080p)</option>
                <option>4K Ultra HD</option>
                <option>720p Mobile</option>
              </select>
            </div>

            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-600">FRAME RATE (FPS)</span>
              <select 
                value={fps}
                onChange={(e) => setFps(e.target.value)}
                className="bg-white border border-slate-300 rounded px-2 py-1 font-mono text-slate-800 font-bold text-[10px] cursor-pointer"
              >
                <option>12 fps</option>
                <option>24 fps (Cinema)</option>
                <option>30 fps</option>
                <option>60 fps</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">START FRAME</span>
                <input 
                  type="text" 
                  value={startFrame} 
                  onChange={(e) => setStartFrame(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded px-2 py-1 font-mono font-bold text-slate-800 text-center mt-0.5"
                />
              </div>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">END FRAME</span>
                <input 
                  type="text" 
                  value={endFrame} 
                  onChange={(e) => setEndFrame(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded px-2 py-1 font-mono font-bold text-slate-800 text-center mt-0.5"
                />
              </div>
            </div>

            <button 
              onClick={handleRender}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl uppercase tracking-wider text-[11px] shadow transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isExporting ? 'RENDERING VIDEO...' : 'GENERATE MP4'}</span>
            </button>
          </div>
        </div>

        {/* Keyboard Shortcuts Card (Matching Image 1 & 2) */}
        <div className="md:col-span-6 bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center space-x-2 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
            <Keyboard className="w-3.5 h-3.5 text-indigo-600" />
            <span>KEYBOARD SHORTCUTS</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">Brush/Pen Tool</span>
              <kbd className="bg-white border px-1.5 py-0.5 rounded font-mono font-bold text-slate-800">B</kbd>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">Eraser Tool</span>
              <kbd className="bg-white border px-1.5 py-0.5 rounded font-mono font-bold text-slate-800">E</kbd>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">Paint Bucket</span>
              <kbd className="bg-white border px-1.5 py-0.5 rounded font-mono font-bold text-slate-800">G</kbd>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">Lasso Select</span>
              <kbd className="bg-white border px-1.5 py-0.5 rounded font-mono font-bold text-slate-800">L</kbd>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">Move Canvas</span>
              <kbd className="bg-white border px-1.5 py-0.5 rounded font-mono font-bold text-slate-800">V</kbd>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">Undo / Redo</span>
              <span className="font-mono font-bold text-slate-800">Ctrl+Z / Y</span>
            </div>
          </div>

          <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 rounded-lg text-[10px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5">
            <Keyboard className="w-3.5 h-3.5" />
            <span>VIEW ALL SHORTCUTS GUIDE</span>
          </button>
        </div>
      </div>
    </div>
  );
};
