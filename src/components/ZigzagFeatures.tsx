import React from 'react';
import { FEATURES_DATA } from '../data/featureData';
import { BrushLabScreenshot } from './screenshots/BrushLabScreenshot';
import { RiggingScreenshot } from './screenshots/RiggingScreenshot';
import { LayersScreenshot } from './screenshots/LayersScreenshot';
import { TimelineOnionScreenshot } from './screenshots/TimelineOnionScreenshot';
import { AudioSyncScreenshot } from './screenshots/AudioSyncScreenshot';
import { CanvasTransformScreenshot } from './screenshots/CanvasTransformScreenshot';
import { ProjectSettingsScreenshot } from './screenshots/ProjectSettingsScreenshot';
import { DarkModeScreenshot } from './screenshots/DarkModeScreenshot';
import { CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

export const ZigzagFeatures: React.FC = () => {
  const renderScreenshot = (type: string) => {
    switch (type) {
      case 'brush':
        return <BrushLabScreenshot />;
      case 'rigging':
        return <RiggingScreenshot />;
      case 'layers':
        return <LayersScreenshot />;
      case 'timeline':
        return <TimelineOnionScreenshot />;
      case 'audio':
        return <AudioSyncScreenshot />;
      case 'transform':
        return <CanvasTransformScreenshot />;
      case 'project':
        return <ProjectSettingsScreenshot />;
      case 'darkmode':
        return <DarkModeScreenshot />;
      default:
        return <BrushLabScreenshot />;
    }
  };

  return (
    <section id="features" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Background Section Accent Gradients */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Complete Feature Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Professional 2D Animators & Illustrators
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Explore Keyframe Studio’s comprehensive suite of digital drawing, skeletal rigging, frame-by-frame timing, and audio lip-syncing tools.
          </p>
        </div>

        {/* Alternating Zigzag Features List */}
        <div className="space-y-28">
          {FEATURES_DATA.map((feature, index) => {
            // Check if feature index is even (0, 2, 4, 6) -> Left Description, Right Image
            // Check if feature index is odd (1, 3, 5, 7)  -> Left Image, Right Description
            const isImageOnRight = index % 2 === 0;

            return (
              <div 
                key={feature.id} 
                id={feature.id === 'skeletal-rigging' ? 'rigging' : feature.id === 'audio-timeline' ? 'audio' : feature.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-slate-800/60 pt-16 first:border-0 first:pt-0"
              >
                {/* Description Column */}
                <div className={`lg:col-span-6 space-y-6 ${isImageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full">
                        0{feature.number}
                      </span>
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                        {feature.category}
                      </span>
                      <span className="bg-slate-800 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded-md border border-slate-700">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {feature.summary}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-4 pt-2">
                    {feature.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                            {bullet.heading}
                          </h4>
                          <p className="text-xs text-slate-400 leading-normal">
                            {bullet.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshot Image Column */}
                <div className={`lg:col-span-6 ${isImageOnRight ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group">
                    {/* Background glow around screenshot */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-amber-500/10 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    {/* Render Interactive Screenshot Component */}
                    <div className="relative z-10">
                      {renderScreenshot(feature.screenshotType)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
