import React, { useState, useRef, useEffect } from 'react';
import { Pencil, Circle, Eraser, Move, Play, Pause, RotateCcw, Sparkles, Layers, Sliders, Moon, Sun, Download, Trash2 } from 'lucide-react';

export const InteractiveStudioDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pencil' | 'circle' | 'eraser'>('pencil');
  const [color, setColor] = useState('#1e293b');
  const [brushSize, setBrushSize] = useState(4);
  const [smoothing, setSmoothing] = useState(75);
  const [activeFrame, setActiveFrame] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [themeDark, setThemeDark] = useState(false);

  // Clear canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 600;
    canvas.height = 350;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Draw initial demo frame vector art
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Draw initial sample circle
    ctx.beginPath();
    ctx.arc(300, 175, 60, 0, Math.PI * 2);
    ctx.stroke();
  }, []);

  // Frame Playback Loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveFrame((prev) => (prev >= 6 ? 1 : prev + 1));
      }, 1000 / 12);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === 'eraser') {
      ctx.clearRect(x - brushSize * 2, y - brushSize * 2, brushSize * 4, brushSize * 4);
    } else {
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <section id="demo" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Try Keyframe Studio Live</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Interactive Drawing & Animation Sandbox
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Draw directly on the canvas below, adjust brush stroke stabilization, toggle themes, and scrub through animation frames in real-time.
          </p>
        </div>

        {/* Interactive App Window */}
        <div className={`max-w-4xl mx-auto rounded-3xl border shadow-2xl overflow-hidden font-sans transition-colors ${
          themeDark ? 'bg-[#0b0f19] border-slate-800' : 'bg-slate-50 border-slate-300 text-slate-800'
        }`}>
          {/* Studio Header Bar */}
          <div className={`px-4 py-2 border-b flex items-center justify-between text-xs ${
            themeDark ? 'bg-[#111827] border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
          }`}>
            <div className="flex items-center space-x-3">
              <span className="font-bold font-mono">KEYFRAME STUDIO DEMO</span>
              <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono">STABILIZER {smoothing}%</span>
            </div>

            <div className="flex items-center space-x-3">
              <a 
                href="https://keyframestudio.microbytz.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1 shadow-sm"
              >
                Open Full Studio ↗
              </a>
              <button 
                onClick={() => setThemeDark(!themeDark)}
                className="p-1 rounded hover:bg-slate-700/50 text-amber-400"
              >
                {themeDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button 
                onClick={clearCanvas}
                className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 text-slate-800"
              >
                Clear Canvas
              </button>
            </div>
          </div>

          {/* Sandbox Workspace */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left Tools Bar */}
            <div className="md:col-span-2 flex md:flex-col justify-center space-x-2 md:space-x-0 md:space-y-3 bg-white/10 p-2 rounded-2xl border border-slate-700/50">
              <button 
                onClick={() => setTool('pencil')}
                className={`p-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                  tool === 'pencil' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Pencil className="w-4 h-4" />
                <span className="hidden md:inline">Brush</span>
              </button>

              <button 
                onClick={() => setTool('eraser')}
                className={`p-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                  tool === 'eraser' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eraser className="w-4 h-4" />
                <span className="hidden md:inline">Eraser</span>
              </button>

              <div className="pt-2 border-t border-slate-700/50 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase block text-center">Color</span>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {['#1e293b', '#f43f5e', '#3b82f6', '#10b981', '#f59e0b'].map((c) => (
                    <button 
                      key={c} 
                      onClick={() => { setColor(c); setTool('pencil'); }}
                      style={{ backgroundColor: c }}
                      className={`w-5 h-5 rounded-full border border-white/20 transition-transform ${color === c ? 'scale-125 ring-2 ring-indigo-400' : ''}`}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/50 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase block text-center">Size {brushSize}px</span>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={brushSize} 
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-1 bg-slate-700 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* Canvas Area */}
            <div className="md:col-span-10 flex flex-col items-center justify-center">
              <div className="w-full bg-white rounded-2xl shadow-inner border border-slate-300 overflow-hidden flex items-center justify-center relative">
                <canvas 
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className="cursor-crosshair touch-none w-full h-[280px]"
                />

                <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white px-2.5 py-0.5 rounded text-[10px] font-mono">
                  Drawing Frame {activeFrame} • Smooth 75%
                </div>
              </div>

              {/* Timeline Controls */}
              <div className="w-full mt-3 bg-slate-900 text-white p-3 rounded-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <span className="font-mono text-xs text-slate-300">12 FPS Animation</span>
                </div>

                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5, 6].map((f) => (
                    <button
                      key={f}
                      onClick={() => setActiveFrame(f)}
                      className={`w-8 h-8 rounded-lg font-mono font-bold text-xs transition-all ${
                        activeFrame === f 
                          ? 'bg-amber-400 text-slate-950 shadow-md scale-105' 
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
