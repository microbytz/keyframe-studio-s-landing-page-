export interface FeatureItem {
  id: string;
  number: number;
  title: string;
  category: string;
  iconName: string;
  summary: string;
  bullets: {
    heading: string;
    details: string;
  }[];
  screenshotType: 
    | 'brush' 
    | 'rigging' 
    | 'layers' 
    | 'timeline' 
    | 'audio' 
    | 'transform' 
    | 'project' 
    | 'darkmode';
  badge: string;
}

export interface KeyboardShortcut {
  key: string;
  description: string;
  category: 'Tools' | 'Canvas' | 'Timeline' | 'General';
}

export interface TechSpec {
  category: string;
  name: string;
  details: string;
}
