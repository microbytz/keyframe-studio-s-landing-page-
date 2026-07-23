import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ZigzagFeatures } from './components/ZigzagFeatures';
import { InteractiveStudioDemo } from './components/InteractiveStudioDemo';
import { TechStackSpec } from './components/TechStackSpec';
import { ShortcutsGuideModal } from './components/ShortcutsGuideModal';
import { Footer } from './components/Footer';

export default function App() {
  const [shortcutsModalOpen, setShortcutsModalOpen] = useState(false);

  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Top Fixed Header */}
      <Navbar 
        onOpenDemo={scrollToDemo} 
        onOpenShortcuts={() => setShortcutsModalOpen(true)} 
      />

      {/* Hero Section */}
      <Hero 
        onOpenDemo={scrollToDemo} 
        onOpenShortcuts={() => setShortcutsModalOpen(true)} 
      />

      {/* Core Zigzag Features Showcase Section */}
      <ZigzagFeatures />

      {/* Interactive Studio Drawing & Animation Sandbox */}
      <InteractiveStudioDemo />

      {/* Cross-Platform Specifications & APK Download */}
      <TechStackSpec />

      {/* Footer */}
      <Footer onOpenShortcuts={() => setShortcutsModalOpen(true)} />

      {/* Shortcuts Guide Modal */}
      <ShortcutsGuideModal 
        isOpen={shortcutsModalOpen} 
        onClose={() => setShortcutsModalOpen(false)} 
      />
    </div>
  );
}
