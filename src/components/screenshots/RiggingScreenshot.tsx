import React, { useState } from 'react';
import { Pencil, Circle, Eraser, Move, Eye, RotateCcw, Trash2, HelpCircle, Check } from 'lucide-react';

export const RiggingScreenshot: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'design' | 'pose'>('design');
  const [node1, setNode1] = useState({ x: 160, y: 150 });
  const [node2, setNode2] = useState({ x: 230, y: 120 });
  const [node3, setNode3] = useState({ x: 260, y: 70 });
  const [strokeCount, setStrokeCount] = useState(14);

  return (
    <div className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-xl overflow-hidden font-sans text-xs select-none transition-all duration-300 hover:shadow-2xl">
      {/* Top App Header */}
      <div className="bg-slate-100/90 px-3 py-1.5 border-b border-slate-200 flex items-center justify-between text-[11px]">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 rounded bg-slate-800" />
          <span className="text-slate-500 font-mono">4px</span>
          <div className="h-2.5 w-24 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-slate-800 w-1/3" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-full text-[10px]">
            STROKES : {strokeCount}
          </span>
          <button 
            onClick={() => setStrokeCount(14)} 
            className="text-slate-500 hover:text-slate-800 font-semibold uppercase text-[10px] px-1"
          >
            RESET
          </button>
          <div className="w-px h-3 bg-slate-300 my-auto" />
          <span className="text-slate-600 font-bold">🌙 🥞 🎵 ⚙️</span>
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div className="relative bg-slate-100 p-4 min-h-[320px] flex flex-col items-center justify-center">
        {/* Left Toolbar */}
        <div className="absolute left-3 top-3 bottom-3 bg-white/90 border border-slate-200/80 rounded-xl p-1.5 flex flex-col space-y-2 shadow-sm z-10">
          <button className="p-1.5 rounded hover:bg-slate-100 text-slate-600"><Pencil className="w-4 h-4" /></button>
          <button className="p-1.5 rounded hover:bg-slate-100 text-slate-600"><Circle className="w-4 h-4" /></button>
          <button className="p-1.5 rounded hover:bg-slate-100 text-slate-600"><Eraser className="w-4 h-4" /></button>
          <button className="p-1.5 rounded hover:bg-slate-100 text-slate-600"><Move className="w-4 h-4" /></button>
          <button className="p-1.5 rounded bg-slate-900 text-white shadow"><span className="text-xs font-bold">🦴</span></button>
        </div>

        {/* Floating Rigging Top Bar (Matching Image 4) */}
        <div className="bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md rounded-full px-4 py-1.5 flex items-center space-x-3 z-20 mb-3">
          <div className="flex items-center space-x-1 text-slate-500 font-bold text-[10px] uppercase tracking-wider">
            <span>🦴</span>
            <span>RIGGING</span>
          </div>
          <div className="bg-slate-100 p-0.5 rounded-full flex items-center">
            <button 
              onClick={() => setActiveTab('design')}
              className={`px-3 py-1 rounded-full font-bold text-[10px] uppercase transition-all ${activeTab === 'design' ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
            >
              🔧 DESIGN
            </button>
            <button 
              onClick={() => setActiveTab('pose')}
              className={`px-3 py-1 rounded-full font-bold text-[10px] uppercase transition-all ${activeTab === 'pose' ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
            >
              ▷ POSE
            </button>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider shadow transition-colors flex items-center gap-1">
            + SET FRAME
          </button>
          <div className="flex items-center space-x-2 text-slate-400 pl-1 border-l border-slate-200">
            <Eye className="w-3.5 h-3.5 hover:text-slate-700 cursor-pointer" />
            <RotateCcw className="w-3.5 h-3.5 hover:text-slate-700 cursor-pointer" />
            <Trash2 className="w-3.5 h-3.5 hover:text-slate-700 cursor-pointer" />
            <HelpCircle className="w-3.5 h-3.5 hover:text-slate-700 cursor-pointer" />
          </div>
        </div>

        {/* Canvas Area with Interactive Bones SVG */}
        <div className="relative w-full max-w-lg h-56 bg-white rounded-2xl border border-slate-200/90 shadow-inner flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 360 200">
            {/* Raster artwork circles */}
            <circle cx="160" cy="110" r="45" fill="none" stroke="#334155" strokeWidth="3" opacity="0.8" />
            <circle cx="220" cy="85" r="40" fill="none" stroke="#334155" strokeWidth="3" opacity="0.8" />
            <circle cx="175" cy="100" r="32" fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

            {/* Bone Skeleton Connections */}
            <line x1={node1.x} y1={node1.y} x2={node2.x} y2={node2.y} stroke="#0284c7" strokeWidth="3.5" />
            <line x1={node2.x} y1={node2.y} x2={node3.x} y2={node3.y} stroke="#0284c7" strokeWidth="3.5" />

            {/* Bone Joint Handles */}
            <circle cx={node1.x} cy={node1.y} r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" className="cursor-pointer" />
            <circle cx={node2.x} cy={node2.y} r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" className="cursor-pointer" />
            <circle cx={node3.x} cy={node3.y} r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" className="cursor-pointer" />
          </svg>

          {/* Bottom Canvas View Controls */}
          <div className="absolute bottom-2 left-2 bg-slate-50/90 border border-slate-200 rounded-md px-2 py-0.5 text-[9px] font-mono text-slate-500 space-x-2">
            <span>ZOOM: 100%</span>
            <span>PAN: 0, 0</span>
            <span className="text-slate-400">Space+Drag / Wheel</span>
          </div>

          <button className="absolute bottom-2 right-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-md px-2 py-0.5 text-[9px] font-bold text-slate-700 shadow-sm">
            RESET VIEW
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-slate-100 px-3 py-1 border-t border-slate-200 flex justify-between text-[10px] text-slate-400 font-mono">
        <span>NEW KEYFRAME | ID: J1G2OQ80</span>
        <span>15 F @ 12 FPS</span>
      </div>
    </div>
  );
};
