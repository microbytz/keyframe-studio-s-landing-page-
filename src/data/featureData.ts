import { FeatureItem, KeyboardShortcut, TechSpec } from '../types';

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'digital-drawing',
    number: 1,
    title: 'Digital Drawing Engine & Brush System',
    category: 'Drawing & Media',
    iconName: 'Paintbrush',
    summary: 'Extensive media library powered by stylus pressure dynamics and stroke stabilization for tablet and desktop precision.',
    badge: 'Pressure Sensitive',
    screenshotType: 'brush',
    bullets: [
      {
        heading: 'Traditional & FX Media Library',
        details: 'Pen, Pencil, Calligraphy, Ink, Marker, Chalk, Charcoal, Crayon, Watercolor, Airbrush, Spray Can, Highlighter, Pixel Brush, Technical Pen, Blur, Smudge, and Eraser.'
      },
      {
        heading: 'Fill, Selection & Vector Tools',
        details: 'Flood Fill (Paint Bucket with adjustable tolerance), Lasso Selection, and Vector Shapes (Line, Rectangle, Circle, Triangle) with stroke and fill configurations.'
      },
      {
        heading: 'Stylus Pressure & Line Stabilization',
        details: 'Pressure-responsive line width and opacity with adjustable stroke smoothing (0–100%) to eliminate line jitters on drawing tablets and touch screens.'
      },
      {
        heading: 'Custom Brush Creator & Real-time Preview',
        details: 'Custom brush tip generator with texture stamping, linked color modes, brush presets, and dynamic real-time profile preview canvas.'
      }
    ]
  },
  {
    id: 'skeletal-rigging',
    number: 2,
    title: 'Skeletal Rigging & Mesh Deformation',
    category: 'Animation Rigging',
    iconName: 'Bone',
    summary: 'Interactive inverse and forward kinematics with real-time grid-based skeletal deformation that warps artwork seamlessly.',
    badge: 'IK / FK Kinematics',
    screenshotType: 'rigging',
    bullets: [
      {
        heading: 'Bone Tool & Joint Hierarchy',
        details: 'Interactive creation of skeletal joints and parent-child bone chains attached directly to drawing layers.'
      },
      {
        heading: 'Inverse & Forward Kinematic (IK/FK)',
        details: 'Real-time grid-based skeletal mesh deformation that warps raster layer artwork dynamically as bones are posed.'
      },
      {
        heading: 'Pose Management & Quick Reset',
        details: 'Bind pose configuration, interactive posing mode, and one-click pose resets to maintain character consistency.'
      }
    ]
  },
  {
    id: 'layer-architecture',
    number: 3,
    title: 'Layer Architecture & Organization',
    category: 'Layer Management',
    iconName: 'Layers',
    summary: 'Unlimited multi-layer support per animation frame with professional blend modes, opacity controls, and layer folders.',
    badge: '6 Blend Modes',
    screenshotType: 'layers',
    bullets: [
      {
        heading: 'Unlimited Multi-Layer Support',
        details: 'Independent layer-based editing per animation frame with reordering via intuitive drag-and-drop.'
      },
      {
        heading: 'Granular Layer Controls',
        details: 'Toggle visibility, lock/unlock contents, adjust layer opacity (0–100%), duplicate, copy/paste artwork across layers.'
      },
      {
        heading: 'Pro Blend Modes & Layer Folders',
        details: 'Blend modes: Normal (source-over), Multiply, Screen, Overlay, Darken, Lighten. Group layers into collapsible folders for visual organization.'
      }
    ]
  },
  {
    id: 'timeline-controls',
    number: 4,
    title: 'Timeline & Frame-by-Frame Controls',
    category: 'Timeline Engine',
    iconName: 'Clock',
    summary: 'Full control over frame holds, multi-draw in-betweening, group FPS overrides, and advanced multi-frame onion skinning.',
    badge: '1 to 60 FPS',
    screenshotType: 'timeline',
    bullets: [
      {
        heading: 'Comprehensive Frame Operations',
        details: 'Add, duplicate, reorder, delete frames, and adjust individual frame hold durations for keyframing.'
      },
      {
        heading: 'Multi-Draw Mode & Frame Groups',
        details: 'Draw across a range of consecutive frames simultaneously for fast linework and in-betweening. Color-coded frame groups with individual FPS overrides.'
      },
      {
        heading: 'Advanced Onion Skinning',
        details: 'Configurable previous frame (red tint) and next frame (green tint) counts and opacity levels for precise motion arcs.'
      },
      {
        heading: 'Flexible Playback Engine',
        details: 'Play/Pause, Loop playback, and customizable animation speed ranging from 1 to 60 FPS.'
      }
    ]
  },
  {
    id: 'audio-timeline',
    number: 5,
    title: 'Audio Timeline & Lip-Sync Tools',
    category: 'Sound & Audio',
    iconName: 'Mic',
    summary: 'Record audio directly into the timeline, view synchronized visual waveforms, and scrub frame-by-frame for exact sound timing.',
    badge: 'Audio Waveforms',
    screenshotType: 'audio',
    bullets: [
      {
        heading: 'In-App Microphone Recording',
        details: 'Direct audio recording from microphone straight into the timeline track.'
      },
      {
        heading: 'Visual Audio Waveform Overlay',
        details: 'Synchronized waveform overlay matching timeline frame numbers for precise lip-syncing and sound effect timing.'
      },
      {
        heading: 'Interactive Audio Scrubbing',
        details: 'Hear instant audio feedback while scrubbing frame-by-frame across the animation timeline.'
      }
    ]
  },
  {
    id: 'canvas-transformation',
    number: 6,
    title: 'Canvas Manipulation & Transformation',
    category: 'Workspace & Grid',
    iconName: 'Maximize2',
    summary: 'Translate, scale, rotate, and skew artwork with snap-to-grid alignment, angle constraints, and custom background controls.',
    badge: 'Snap & Grid Aids',
    screenshotType: 'transform',
    bullets: [
      {
        heading: 'Transform Modes',
        details: 'Translate, Scale, Rotate, and Skew options for layer artwork and selection boundaries.'
      },
      {
        heading: 'Alignment & Snap Aids',
        details: 'Snap-to-grid with customizable grid sizes, snap-to-angle constraints, and custom canvas background color picker.'
      },
      {
        heading: 'View Controls & Flip',
        details: 'Full canvas rotation, horizontal/vertical flipping, instant zoom, pan with space bar, and clear canvas functions.'
      }
    ]
  },
  {
    id: 'project-management',
    number: 7,
    title: 'Project Management, History & Persistence',
    category: 'Storage & Versioning',
    iconName: 'HardDrive',
    summary: 'Local auto-save, multi-level undo stack up to 50 states, and project versioning snapshots with instant restoration.',
    badge: '50 Undo States',
    screenshotType: 'project',
    bullets: [
      {
        heading: 'Local Auto-Save & Storage',
        details: 'Persistent local project saving and automatic state restoration directly in the browser or native device.'
      },
      {
        heading: '50-Step Undo/Redo Stack',
        details: 'Multi-level undo/redo history tracking up to 50 states for worry-free experimental drawing.'
      },
      {
        heading: 'Project Snapshots & Multi-Project Manager',
        details: 'Create and restore named project snapshots/versions at any point in the workflow. Switch, rename, duplicate, or delete animation projects.'
      }
    ]
  },
  {
    id: 'cross-platform',
    number: 8,
    title: 'Cross-Platform & Theme Customization',
    category: 'Deployment & Themes',
    iconName: 'Smartphone',
    summary: 'Built for Web & Android native deployment via Capacitor with support for daylight light mode and studio dark theme.',
    badge: 'Android Native & Web',
    screenshotType: 'darkmode',
    bullets: [
      {
        heading: 'Capacitor Native Android & Web',
        details: 'Compiled for native mobile app deployment on Android (xyz.microbytz.keyframestudio) and responsive desktop browsers.'
      },
      {
        heading: 'Studio Dark & Light Themes',
        details: 'Toggle seamlessly between low-eyestrain Studio dark theme and bright daylight light mode.'
      }
    ]
  }
];

export const KEYBOARD_SHORTCUTS: KeyboardShortcut[] = [
  { key: 'B', description: 'Brush / Pen Tool', category: 'Tools' },
  { key: 'E', description: 'Eraser Tool', category: 'Tools' },
  { key: 'G', description: 'Paint Bucket (Flood Fill)', category: 'Tools' },
  { key: 'L', description: 'Lasso Select Tool', category: 'Tools' },
  { key: 'V', description: 'Move / Pan Canvas Tool', category: 'Canvas' },
  { key: 'Ctrl + Z', description: 'Undo Last Action', category: 'General' },
  { key: 'Ctrl + Y', description: 'Redo Action', category: 'General' },
  { key: '← / →', description: 'Previous / Next Frame', category: 'Timeline' },
  { key: 'Space', description: 'Play / Pause Animation', category: 'Timeline' }
];

export const TECH_SPECS: TechSpec[] = [
  { category: 'Framework', name: 'Next.js 15 App Router', details: 'React 19, Server Components & Client Hooks' },
  { category: 'Cross-Platform', name: 'Capacitor 6', details: 'Android Native Package (xyz.microbytz.keyframestudio) & PWA' },
  { category: 'Styling & UI', name: 'Tailwind CSS', details: 'Responsive Studio UI & Theme Engine' },
  { category: 'Language', name: 'TypeScript', details: 'Strict type safety across animation engine and canvas state' },
  { category: 'Graphics', name: 'HTML5 Canvas 2D', details: 'Hardware-accelerated raster drawing, IK deformation & onion skinning' }
];
