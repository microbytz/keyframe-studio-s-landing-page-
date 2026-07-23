import React, { useState } from 'react';
import { Sliders, Sparkles, Check, CheckCircle2, ChevronDown, RotateCcw } from 'lucide-react';

export const BrushLabScreenshot: React.FC = () => {
  const [stabilizer, setStabilizer] = useState(true);
  const [pressure, setPressure] = useState(true);
  const [gridSnap, setGridSnap] = useState(false);
  const [lightMode, setLightMode] = useState(true);
  const [smoothing, setSmoothing] = useState(75);
  const [pressureVal, setPressureVal] = useState(42);
  const [selectedBg, setSelectedBg] = useState('#FFFFFF');

  const bgColors = ['#FFFFFF', '#1E293B', '#0F172A', '#F87171', '#86EFAC'];

  return (
    <div className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-xl overflow-hidden font-sans text-xs select-none transition-all duration-300 hover:shadow-2xl">
      {/* Top Studio Header Bar */}
      <div className="bg-white px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 text-sm font-semibold">&lt;</span>
          <span className="font-bold tracking-wider text-slate-700 uppercase text-[11px]">STUDIO SETTINGS / PREFERENCES & BRUSH LAB</span>
        </div>
        <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1 rounded font-semibold text-[11px] tracking-wide flex items-center gap-1 transition-colors">
          <Check className="w-3 h-3 text-emerald-600" />
          COMMIT
        </button>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 bg-slate-100/70">
        {/* Left Column: Library & Quick Export */}
        <div className="md:col-span-5 space-y-4">
          {/* Library Card */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-1.5 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <Sliders className="w-3.5 h-3.5" />
              <span>LIBRARY & SNAPSHOTS</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-1.5 px-2 rounded font-semibold flex items-center justify-center gap-1">
                + NEW
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-1.5 px-2 rounded font-semibold flex items-center justify-center gap-1">
                ↓ EXPORT
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-1.5 px-2 rounded font-semibold flex items-center justify-center gap-1">
                ↑ IMPORT
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-1.5 px-2 rounded font-semibold flex items-center justify-center gap-1">
                ↺ SNAPSHOT
              </button>
            </div>
            <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-2.5">
              <div className="font-bold text-slate-800 text-[11px]">NEW KEYFRAME</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">ID: J1G2OQ80 • 23/07/2026, 00:10:49</div>
            </div>
          </div>

          {/* Quick Render GIF Card */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm space-y-2.5">
            <div className="font-bold uppercase tracking-wider text-slate-500 text-[10px]">RENDER GIF</div>
            <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">SCALE</span>
              <span className="bg-white border px-2 py-0.5 rounded font-mono font-bold text-slate-700 flex items-center gap-1">
                1.0x <ChevronDown className="w-3 h-3 text-slate-400" />
              </span>
            </div>
            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-lg tracking-wider text-[11px] shadow transition-colors flex items-center justify-center gap-1.5">
              <span>↓</span> GENERATE GIF
            </button>
          </div>
        </div>

        {/* Right Column: Studio Preferences & Stabilizer */}
        <div className="md:col-span-7 bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-1.5 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>PREFERENCES & STYLUS DYNAMICS</span>
          </div>

          {/* Toggle Switches Row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-700">STABILIZER</span>
              <button 
                onClick={() => setStabilizer(!stabilizer)}
                className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors ${stabilizer ? 'bg-slate-900 justify-end' : 'bg-slate-300 justify-start'}`}
              >
                <span className="w-4 h-4 rounded-full bg-white shadow-md"></span>
              </button>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-700">GRID SNAP</span>
              <button 
                onClick={() => setGridSnap(!gridSnap)}
                className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors ${gridSnap ? 'bg-slate-900 justify-end' : 'bg-slate-300 justify-start'}`}
              >
                <span className="w-4 h-4 rounded-full bg-white shadow-md"></span>
              </button>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-700">PRESSURE</span>
              <button 
                onClick={() => setPressure(!pressure)}
                className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors ${pressure ? 'bg-slate-900 justify-end' : 'bg-slate-300 justify-start'}`}
              >
                <span className="w-4 h-4 rounded-full bg-white shadow-md"></span>
              </button>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-700">LIGHT MODE</span>
              <button 
                onClick={() => setLightMode(!lightMode)}
                className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors ${lightMode ? 'bg-slate-900 justify-end' : 'bg-slate-300 justify-start'}`}
              >
                <span className="w-4 h-4 rounded-full bg-white shadow-md"></span>
              </button>
            </div>
          </div>

          {/* Stylus Pressure Meter */}
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-[11px]">
              <span className="font-bold text-slate-700 uppercase">STYLUS PRESSURE METER</span>
              <span className="font-mono font-bold text-indigo-600">{pressureVal}% • READY</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={pressureVal} 
              onChange={(e) => setPressureVal(Number(e.target.value))}
              className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <p className="text-[10px] text-slate-400 italic">Hold or press stylus on screen to preview real-time response</p>
          </div>

          {/* Stabilizer Intensity Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-700 text-[11px] uppercase">STABILIZER INTENSITY (SMOOTHING)</span>
              <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{smoothing}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={smoothing} 
              onChange={(e) => setSmoothing(Number(e.target.value))}
              className="w-full accent-slate-900 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">Higher values produce smoother lines but introduce a slight drawing offset.</p>
          </div>

          {/* Canvas Background Color Selector */}
          <div className="flex items-center justify-between pt-1">
            <span className="font-bold text-slate-700 text-[11px] uppercase">CANVAS BACKGROUND</span>
            <div className="flex items-center space-x-1.5">
              {bgColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedBg(color)}
                  style={{ backgroundColor: color }}
                  className={`w-5 h-5 rounded-full border border-slate-300 shadow-sm transition-transform ${selectedBg === color ? 'scale-125 ring-2 ring-indigo-500' : 'hover:scale-110'}`}
                />
              ))}
              <span className="font-mono text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border text-slate-600 font-semibold">{selectedBg}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
