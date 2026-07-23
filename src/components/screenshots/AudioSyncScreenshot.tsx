import React, { useState } from 'react';
import { Mic, Music, Volume2, Play, Plus, Trash2, Copy, FileAudio } from 'lucide-react';

export const AudioSyncScreenshot: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [scrubAudio, setScrubAudio] = useState(true);
  const [fpsVal, setFpsVal] = useState(12);

  return (
    <div className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-xl overflow-hidden font-sans text-xs select-none transition-all duration-300 hover:shadow-2xl">
      {/* Top Header Bar */}
      <div className="bg-white px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 font-semibold">&lt;</span>
          <span className="font-bold tracking-wider text-slate-700 uppercase text-[11px]">STUDIO SETTINGS / AUDIO SYNC & LIP-SYNC</span>
        </div>
        <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1 rounded font-semibold text-[11px] tracking-wide flex items-center gap-1 transition-colors">
          <FileAudio className="w-3.5 h-3.5 text-indigo-600" />
          IMPORT MP3
        </button>
      </div>

      <div className="p-4 space-y-4 bg-slate-100/70">
        {/* Audio Track Card (Matching Image 7) */}
        <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-slate-500 font-bold uppercase text-[10px]">
              <Volume2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>AUDIO TRACK (MICROPHONE & TIMELINE)</span>
            </div>
            <button 
              onClick={() => setIsRecording(!isRecording)}
              className={`px-3 py-1 rounded-lg font-bold text-[10px] uppercase flex items-center gap-1.5 transition-all ${
                isRecording ? 'bg-red-600 text-white animate-pulse' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              <Mic className="w-3 h-3" />
              {isRecording ? 'RECORDING...' : 'RECORD'}
            </button>
          </div>

          {/* Audio Waveform Track Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg h-20 relative flex items-center justify-between px-3 overflow-hidden">
            {/* Simulated Audio Waveform SVG */}
            <svg className="w-full h-12 text-indigo-500" viewBox="0 0 400 50">
              <path 
                d="M 0 25 Q 10 5, 20 25 T 40 25 T 60 5 T 80 40 T 100 25 T 120 10 T 140 35 T 160 25 T 180 5 T 200 45 T 220 25 T 240 15 T 260 30 T 280 25 T 300 10 T 320 35 T 340 25 T 360 25 T 380 25 T 400 25" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
              />
            </svg>
            <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-red-500 shadow-sm" />
            <span className="absolute left-2 bottom-1 text-[9px] font-mono text-slate-400">0.0s</span>
            <span className="absolute right-2 bottom-1 text-[9px] font-mono text-slate-400">1.2s</span>
          </div>
        </div>

        {/* Timeline Reference Thumbnails (Matching Image 7) */}
        <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
            <span>TIMELINE REFERENCE</span>
            <div className="flex items-center space-x-2">
              <Play className="w-3 h-3 text-slate-700 cursor-pointer" />
              <span className="font-mono text-slate-700">⏱ 12</span>
              <Copy className="w-3 h-3 text-slate-400 cursor-pointer" />
              <Trash2 className="w-3 h-3 text-slate-400 cursor-pointer" />
              <Plus className="w-3 h-3 text-slate-700 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-14 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border border-slate-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Preferences Toggles (Matching Image 7 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <span className="font-bold text-slate-700 uppercase text-[11px]">SCRUB AUDIO</span>
            <button 
              onClick={() => setScrubAudio(!scrubAudio)}
              className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors ${scrubAudio ? 'bg-slate-900 justify-end' : 'bg-slate-300 justify-start'}`}
            >
              <span className="w-4 h-4 rounded-full bg-white shadow-md"></span>
            </button>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <span className="font-bold text-slate-700 uppercase text-[11px]">FPS: {fpsVal}</span>
            <input 
              type="range" 
              min="1" 
              max="60" 
              value={fpsVal} 
              onChange={(e) => setFpsVal(Number(e.target.value))}
              className="w-24 accent-slate-900 h-1.5 bg-slate-200 rounded cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
