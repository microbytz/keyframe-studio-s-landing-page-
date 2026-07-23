import React, { useState } from 'react';
import { Play, Pause, Plus, Trash2, Copy, Clock, Layers, Sparkles } from 'lucide-react';

export const TimelineOnionScreenshot: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFrame, setActiveFrame] = useState(6);
  const [fps, setFps] = useState(12);
  const [zoomLevel, setZoomLevel] = useState(2);

  const frames = [
    { num: 1, circlePos: 30 },
    { num: 2, circlePos: 45 },
    { num: 3, circlePos: 60 },
    { num: 4, circlePos: 75 },
    { num: 5, circlePos: 90 },
    { num: 6, circlePos: 105 },
    { num: 7, circlePos: 120 }
  ];

  return (
    <div className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-xl overflow-hidden font-sans text-xs select-none transition-all duration-300 hover:shadow-2xl">
      {/* Top Header Controls */}
      <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Clock className="w-3.5 h-3.5 text-indigo-600" />
          <span className="font-bold uppercase tracking-wider text-slate-700 text-[10px]">TIMELINE & ADVANCED ONION SKINNING</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded text-[9px] uppercase">Prev Frame (Red)</span>
          <span className="bg-slate-800 text-white font-bold px-2 py-0.5 rounded text-[9px] uppercase">Current Frame</span>
          <span className="bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded text-[9px] uppercase">Next Frame (Blue)</span>
        </div>
      </div>

      {/* Drawing Canvas Area showing Onion Skinning Overlay (Matching Image 5) */}
      <div className="bg-slate-100 p-4 relative flex items-center justify-center min-h-[220px]">
        <div className="w-full max-w-md h-48 bg-white rounded-xl border border-slate-200 shadow-inner relative flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 320 180">
            {/* Previous Frame (Red Tint) */}
            <circle cx="120" cy="90" r="38" fill="none" stroke="#fca5a5" strokeWidth="2.5" opacity="0.8" />
            
            {/* Current Frame (Active Black Stroke) */}
            <circle cx="160" cy="90" r="38" fill="none" stroke="#1e293b" strokeWidth="3.5" />
            
            {/* Next Frame (Light Blue Tint) */}
            <circle cx="200" cy="90" r="38" fill="none" stroke="#93c5fd" strokeWidth="2.5" opacity="0.8" />
          </svg>

          {/* Canvas View Status Pill */}
          <div className="absolute bottom-2 left-2 bg-slate-50/90 border border-slate-200 rounded px-2 py-0.5 text-[9px] font-mono text-slate-500">
            ZOOM: 100% | PAN: 0,0
          </div>
          <button className="absolute bottom-2 right-2 bg-white border border-slate-200 rounded px-2 py-0.5 text-[9px] font-bold text-slate-700 shadow-sm">
            RESET VIEW
          </button>
        </div>
      </div>

      {/* Bottom Timeline Dock (Matching Image 5) */}
      <div className="bg-slate-50 border-t border-slate-200 p-3 space-y-2">
        {/* Playback Controls Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-500 uppercase text-[10px]">TIMELINE</span>
            <input 
              type="range" 
              min="1" 
              max="5" 
              value={zoomLevel} 
              onChange={(e) => setZoomLevel(Number(e.target.value))}
              className="w-20 accent-slate-900 h-1 bg-slate-200 rounded"
            />
          </div>

          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>
            <span className="font-mono font-bold text-slate-700 text-[11px]">⏱ {fps} FPS</span>
            <Copy className="w-3.5 h-3.5 text-slate-400 hover:text-slate-700 cursor-pointer" />
            <Trash2 className="w-3.5 h-3.5 text-slate-400 hover:text-slate-700 cursor-pointer" />
            <button className="p-1 rounded bg-slate-200 text-slate-700 hover:bg-slate-300 font-bold"><Plus className="w-3.5 h-3.5" /></button>
          </div>
        </div>

        {/* Frame Cards Strip (Matching Image 5 layout) */}
        <div className="flex space-x-2 overflow-x-auto pb-1 pt-1">
          {frames.map((frame) => (
            <div
              key={frame.num}
              onClick={() => setActiveFrame(frame.num)}
              className={`flex-none w-20 h-16 bg-white rounded-lg border-2 p-1.5 flex flex-col justify-between cursor-pointer transition-all ${
                activeFrame === frame.num ? 'border-slate-900 ring-2 ring-slate-900/10 shadow-md' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-full h-8 bg-slate-50 rounded border border-slate-100 flex items-center justify-center overflow-hidden">
                <div 
                  className="w-4 h-4 rounded-full border-2 border-slate-700" 
                  style={{ transform: `translateX(${frame.circlePos - 75}px)` }}
                />
              </div>
              <div className="flex justify-end text-[9px] font-bold font-mono text-slate-400">
                {frame.num}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-100 px-3 py-1 border-t border-slate-200 flex justify-between text-[10px] text-slate-400 font-mono">
        <span>NEW KEYFRAME | ID: J1G2OQ80</span>
        <span>14 F @ 12 FPS</span>
      </div>
    </div>
  );
};
