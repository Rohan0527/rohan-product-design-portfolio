/**
 * Central portfolio data for the product-design portfolio.
 * Every fact on the site comes from this file, so the experience remains consistent.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rohan Suresh Gaikwad',
  displayName: 'Rohan Gaikwad',
  firstName: 'ROHAN',
  seriesTag: 'THE PORTFOLIO',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A ROHAN ORIGINAL',
  role: 'UI/UX & Product Designer',
  tagline: ['UI/UX & Product Designer', 'User Research', 'Figma'],
  intro:
    'I design thoughtful digital experiences by translating user needs, product goals, and product constraints into clear flows, intuitive interfaces, and scalable design systems that feel effortless to use.',
  location: 'Chhatrapati Sambhaji Nagar',
  email: 'rohangaikwad2707@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/igrohan45/',
    github: 'https://github.com/Rohan0527',
    hackerrank: 'https://www.hackerrank.com/profile/rohangaikwad2707',
    leetcode: 'https://leetcode.com/u/igrohan27/',
  },
  resumePdf: '/assets/Rohan-Gaikwad-Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rohan Gaikwad',
  },
  interests: ['UX Research', 'Product Thinking', 'Design Systems', 'Interaction Design'],
};

export const education = [
  {
    school: 'Deogiri Institute of Engineering & Management Studies',
    place: 'Chhatrapati Sambhaji Nagar',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: 'August 2023 – August 2027',
    score: 'CGPA 6.33',
  },
  {
    school: 'Dnyankunj Arts, Commerce & Science Junior College',
    place: 'Chhatrapati Sambhaji Nagar',
    degree: 'HSC',
    period: 'June 2021 – May 2023',
    score: '74.33%',
  },
  {
    school: 'Varad Vidya Mandir & Rajhans Madhyamic Vidyalay',
    place: 'Chhatrapati Sambhaji Nagar',
    degree: 'SSC',
    period: 'June 2020 – June 2021',
    score: '91.80%',
  },
];

export const experience = [
  {
    company: 'Learning Portfolio Practice',
    role: 'Product Design Learner',
    place: 'Remote / Personal Projects',
    period: '2025 – Present',
    points: [
      'Exploring user-centered product design through research, prototyping, and interface thinking across personal case studies and concept work.',
      'Shaping information architecture, user journeys, interaction patterns, and design system decisions around clarity and usability.',
      'Building a portfolio that documents thinking, iteration, and visual decision-making across product scenarios and digital experiences.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'commerce-discovery',
    title: 'Commerce Discovery Redesign',
    year: '2025',
    genre: 'UX • E-commerce • Research',
    logline: 'A concept redesign centered on product discovery, search clarity, and more confident decision-making.',
    stack: ['User Research', 'Wireframes', 'Prototype', 'Design System'],
    build: [
      'Mapped friction across product discovery, category browsing, and filtering to identify where users lose confidence or momentum.',
      'Reframed the experience around better hierarchy, clearer CTAs, and more useful product comparisons to support purchase decisions faster.',
    ],
    features: [
      'Search and filter redesign',
      'Category navigation improvement',
      'Higher-clarity product detail flow',
      'Conversion-friendly checkout touchpoints',
    ],
    metrics: [
      { value: '3', label: 'core journeys mapped' },
      { value: '7', label: 'UX pain points reviewed' },
      { value: '2', label: 'design iteration rounds' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'insights-dashboard',
    title: 'Insights Dashboard',
    year: '2025',
    genre: 'Product Design • SaaS • Analytics',
    logline: 'A design exploration for complex dashboard clarity, prioritization, and decision support.',
    stack: ['Information Architecture', 'Dashboard Design', 'UX Writing', 'Prototyping'],
    build: [
      'Explored how a dense data experience could present clearer hierarchy, more useful filters, and faster information scanning.',
      'Restructured the information architecture to guide attention toward decisions, anomalies, and immediate action areas without overwhelming the user.',
    ],
    features: [
      'Data hierarchy and dashboard clarity',
      'Improved filter patterns',
      'Simplified table and chart prioritization',
      'Responsive enterprise-ready screens',
    ],
    metrics: [
      { value: '4', label: 'key user journeys' },
      { value: '1', label: 'concept system', },
      { value: '2', label: 'feedback loops' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'streaming-refresh',
    title: 'Streaming Experience Refresh',
    year: '2025',
    genre: 'UI • Media • Product Flow',
    logline: 'A concept refresh for discovery, continue-watching, and mobile-first browsing comfort.',
    stack: ['User Journeys', 'Mobile UI', 'Interaction Design', 'Component System'],
    build: [
      'Rethought how users discover content, move between categories, and return to saved shows without unnecessary friction.',
      'Focused on stronger content hierarchy, visual pacing, and cleaner discovery behaviors to make browsing feel more intentional and effortless.',
    ],
    features: [
      'Personalized discovery patterns',
      'Watchlist and continue-watching clarity',
      'Content detail and browsing flow',
      'Responsive streaming surfaces',
    ],
    metrics: [
      { value: '3', label: 'content journeys' },
      { value: '5', label: 'screen states explored' },
      { value: '1', label: 'iterative design system' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'research-practice',
    title: 'Research Practice',
    org: 'Self-initiated',
    detail: 'Mapped user needs and synthesis themes across concept projects to sharpen decision-making and prioritization.',
    laurel: 'UX Research',
  },
  {
    id: 'prototype-iteration',
    title: 'Prototype Iteration',
    org: 'Design Sprint',
    detail: 'Explored multiple interaction patterns and refined them through usability-driven feedback.',
    laurel: 'Interaction Design',
  },
  {
    id: 'system-thinking',
    title: 'System Thinking',
    org: 'Design Systems',
    detail: 'Built reusable patterns and scalable interfaces to keep products consistent as they grow.',
    laurel: 'Systems',
  },
  {
    id: 'visual-story',
    title: 'Visual Storytelling',
    org: 'Portfolio Practice',
    detail: 'Turned concept work into a clearer narrative through layout, hierarchy, and case-study framing.',
    laurel: 'UI Craft',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Practice', name: 'UX Research Fundamentals' },
  { issuer: 'Practice', name: 'Interaction Design Principles' },
  { issuer: 'Practice', name: 'Design Systems Foundations' },
  { issuer: 'Practice', name: 'Prototype Testing Basics' },
  { issuer: 'Practice', name: 'Accessible Interface Thinking' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'research',
    title: 'UX Research',
    subtitle: 'Listening before designing',
    skills: [
      { name: 'User Research', mono: 'Ur' },
      { name: 'User Interviews', mono: 'Ui' },
      { name: 'User Personas', mono: 'Up' },
      { name: 'User Journey Mapping', mono: 'Uj' },
      { name: 'Competitive Analysis', mono: 'Ca' },
      { name: 'Usability Testing', mono: 'Ut' },
    ],
  },
  {
    id: 'ux-design',
    title: 'UX Design',
    subtitle: 'Problem framing and clarity',
    skills: [
      { name: 'Information Architecture', mono: 'Ia' },
      { name: 'User Flows', mono: 'Uf' },
      { name: 'Wireframing', mono: 'Wf' },
      { name: 'Interaction Design', mono: 'Id' },
      { name: 'Accessibility Fundamentals', mono: 'Aa' },
      { name: 'Heuristic Evaluation', mono: 'He' },
    ],
  },
  {
    id: 'ui-design',
    title: 'UI Design',
    subtitle: 'Making systems feel effortless',
    skills: [
      { name: 'Visual Hierarchy', mono: 'Vh' },
      { name: 'Typography', mono: 'Tp' },
      { name: 'Color Theory', mono: 'Ct' },
      { name: 'Layout Design', mono: 'Ld' },
      { name: 'Responsive UI', mono: 'Ru' },
      { name: 'Component Design', mono: 'Cd' },
    ],
  },
  {
    id: 'product-design',
    title: 'Product Design',
    subtitle: 'Designing with business and user goals in mind',
    skills: [
      { name: 'Product Thinking', mono: 'Pt' },
      { name: 'Feature Prioritization', mono: 'Fp' },
      { name: 'Design Strategy', mono: 'Ds' },
      { name: 'Product Discovery', mono: 'Pd' },
      { name: 'MVP Design', mono: 'Mv' },
      { name: 'Design Iteration', mono: 'Di' },
    ],
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    subtitle: 'Validating decisions early',
    skills: [
      { name: 'Low-Fidelity Prototyping', mono: 'Lf' },
      { name: 'High-Fidelity Prototyping', mono: 'Hf' },
      { name: 'Clickable Prototypes', mono: 'Cp' },
      { name: 'Interaction Validation', mono: 'Iv' },
      { name: 'Prototype Testing', mono: 'Pt' },
      { name: 'Feedback Analysis', mono: 'Fa' },
    ],
  },
  {
    id: 'systems',
    title: 'Design Systems',
    subtitle: 'Consistency across product surfaces',
    skills: [
      { name: 'Design Tokens', mono: 'Dt' },
      { name: 'Component Libraries', mono: 'Cl' },
      { name: 'Reusable Components', mono: 'Rc' },
      { name: 'Spacing Systems', mono: 'Ss' },
      { name: 'Typography Systems', mono: 'Ts' },
      { name: 'UI Consistency', mono: 'Uc' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Working from research to polish',
    skills: [
      { name: 'Figma', mono: 'Fg' },
      { name: 'FigJam', mono: 'Fj' },
      { name: 'Adobe Photoshop', mono: 'Ps' },
      { name: 'Adobe Illustrator', mono: 'Ai' },
      { name: 'Miro', mono: 'Mi' },
      { name: 'Notion', mono: 'No' },
    ],
  },
];

/**
 * Cross-references shown when a skill card is hovered/tapped.
 */
export const skillEvidence: Record<string, string[]> = {
  'User Research': ['Discovery practice', 'Interview-led framing'],
  'User Interviews': ['Research synthesis', 'Feature prioritization'],
  'User Personas': ['Audience understanding', 'Need mapping'],
  'User Journey Mapping': ['Journey analysis', 'Flow diagnosis'],
  'Competitive Analysis': ['Market scan', 'Opportunity framing'],
  'Usability Testing': ['Prototype feedback', 'Iteration review'],
  'Information Architecture': ['Navigation structure', 'Content hierarchy'],
  'User Flows': ['Journey diagrams', 'Task flow design'],
  'Wireframing': ['Low-fi exploration', 'Interface planning'],
  'Interaction Design': ['Behavior mapping', 'Prototype detail'],
  'Accessibility Fundamentals': ['Inclusive design decisions', 'Usability principles'],
  'Heuristic Evaluation': ['UX critique', 'Review refinement'],
  'Visual Hierarchy': ['Screen emphasis', 'Content prioritization'],
  Typography: ['Type scale', 'Readability refinement'],
  'Color Theory': ['Mood and contrast', 'Visual consistency'],
  'Layout Design': ['Section planning', 'Responsive composition'],
  'Responsive UI': ['Mobile and desktop adaptations'],
  'Component Design': ['Reusable patterns', 'Design modules'],
  'Product Thinking': ['Problem framing', 'Feature prioritization'],
  'Feature Prioritization': ['Roadmap decisions', 'Experience trade-offs'],
  'Design Strategy': ['Product direction', 'Experience planning'],
  'Product Discovery': ['Opportunity framing', 'Early validation'],
  'MVP Design': ['Core experience exploration', 'Focused iteration'],
  'Design Iteration': ['Feedback-driven refinement'],
  'Low-Fidelity Prototyping': ['Concept sketches', 'Exploration screens'],
  'High-Fidelity Prototyping': ['Polished concept flows', 'Prototype reviews'],
  'Clickable Prototypes': ['Interactive concept testing'],
  'Interaction Validation': ['Prototype review', 'Behavior testing'],
  'Prototype Testing': ['Usability sessions', 'Feedback loops'],
  'Feedback Analysis': ['Iteration notes', 'Refinement log'],
  'Design Tokens': ['Visual system structure', 'Consistency rules'],
  'Component Libraries': ['Reusable modules', 'Pattern library'],
  'Reusable Components': ['Interface building blocks'],
  'Spacing Systems': ['Consistency across screens'],
  'Typography Systems': ['Scale and alignment'],
  'UI Consistency': ['Coherent design language'],
  Figma: ['Interface design', 'Prototype building'],
  FigJam: ['Research synthesis', 'Workshop collaboration'],
  'Adobe Photoshop': ['Visual exploration', 'Image polish'],
  'Adobe Illustrator': ['Icon and vector work'],
  Miro: ['Journey mapping', 'Idea framing'],
  Notion: ['Research notes', 'Design documentation'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Design Foundation',
    period: 'Learning to look closer',
    synopsis: 'Building a user-centered mindset through observation, clarity, and visual thinking.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The First Lens',
        description: 'Exploring problem framing, visual hierarchy, and the value of designing for clarity before decoration.',
        tags: ['Design thinking', 'Visual hierarchy'],
        runtime: 'Learning phase',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Research & Insight',
    period: 'Listening to users',
    synopsis: 'Turning questions into meaningful opportunities through interviews, journeys, and synthesis.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Discoverer',
        description: 'Mapping user needs, friction points, and decision-making patterns to shape better product directions.',
        tags: ['User research', 'Problem discovery'],
        runtime: 'Discovery',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Synthesizer',
        description: 'Combining journey mapping and ideation to find patterns and opportunities behind user behavior.',
        tags: ['Journey mapping', 'Affinity mapping'],
        runtime: 'Insight',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Experience Design',
    period: 'From flows to interfaces',
    synopsis: 'Defining interaction patterns, responsive layouts, and thoughtful product experiences.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Flow Builder',
        description: 'Designing task flows and interactions that reduce friction and support clear product decisions.',
        tags: ['User flows', 'Interaction design'],
        runtime: 'UX systems',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Interface Maker',
        description: 'Turning structure into polished screens with responsive patterns, consistency, and stronger hierarchy.',
        tags: ['UI design', 'Design systems'],
        runtime: 'Interface design',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Prototyping & Validation',
    period: 'Testing ideas early',
    synopsis: 'Refining concepts through low-fi exploration, clickable prototypes, and informed iteration.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Prototype',
        description: 'Testing early concepts with prototypes that make interaction trade-offs visible before polishing.',
        tags: ['Prototyping', 'Feedback'],
        runtime: 'Validation',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Iterator',
        description: 'Using usability feedback to refine details, reduce confusion, and improve clarity across the product experience.',
        tags: ['Iteration', 'Usability testing'],
        runtime: 'Refinement',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'Now in Motion',
    period: 'Portfolio in progress',
    synopsis: 'Bringing together product thinking, UX craft, and design systems into a coherent personal portfolio.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Portfolio Story',
        description: 'Curating design work, case studies, and process thinking into a clear, narrative experience.',
        tags: ['Case study', 'Portfolio design'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Design lens', title: 'UX Research', detail: 'User needs before screens', palette: amber },
  { label: 'Core focus', title: 'Product Thinking', detail: 'Problem framing and prioritization', palette: crimson },
  { label: 'Journey', title: 'User Flows', detail: 'Clear navigation and task clarity', palette: ocean },
  { label: 'Interface craft', title: 'Visual Hierarchy', detail: 'Strong structure and rhythm', palette: violet },
  { label: 'System design', title: 'Design Systems', detail: 'Reusable patterns & consistency', palette: jade },
  { label: 'Prototype', title: 'Clickable Flows', detail: 'Fast validation through design', palette: amber },
  { label: 'Experience', title: 'Interaction Design', detail: 'Micro-interactions and clarity', palette: crimson },
  { label: 'Learning', title: 'Research Synthesis', detail: 'Insights into direction', palette: ocean },
  { label: 'Craft', title: 'Typography', detail: 'Readable and intentional UI', palette: jade },
  { label: 'Current focus', title: 'Case Study Design', detail: 'Writing and framing design decisions', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Approach',
    title: 'Research-first design',
    lines: ['User needs, product context, and usability shape the work before the interface is built.', 'Clarity, intent, and accessibility guide every decision.'],
    chips: ['UX Research', 'Problem Framing'],
  },
  {
    kicker: 'Design focus',
    title: 'Product thinking',
    lines: ['Balancing business goals with user behavior to shape useful, functional experiences.', 'Exploring what matters most before moving into screens.'],
    chips: ['Product Design', 'Strategy'],
  },
  {
    kicker: 'Craft',
    title: 'UX + UI',
    lines: ['Info architecture, flow design, visual hierarchy, and interaction details all work together.', 'The goal is not complexity — it is confidence and ease.'],
    chips: ['Wireframes', 'Interaction Design'],
  },
  {
    kicker: 'Systems',
    title: 'Design systems',
    lines: ['Reusable patterns and consistent UI help products scale without losing clarity.', 'Every component should support usability and speed.'],
    chips: ['Figma', 'Design Tokens'],
  },
  {
    kicker: 'Validation',
    title: 'Prototype and refine',
    lines: ['Testing interactions early highlights where users get stuck or lose confidence.', 'Feedback turns good ideas into better experiences.'],
    chips: ['Usability Testing', 'Iteration'],
  },
  {
    kicker: 'Current story',
    title: 'Designing digital experiences',
    lines: ['Conceptualizing clear journeys for web and product experiences.', 'Turning complex problems into intuitive, human-centered outcomes.'],
    chips: ['UI/UX', 'Case Studies'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Rohan',
    blurb: 'The Product Designer',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, skills & design story first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Designer',
    blurb: 'UX process, flows & prototypes first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • UX foundation', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} concept studies • UX case work`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Design Focus', meta: 'Selected themes from the process', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Design categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Design Reflections', meta: `${achievements.length} practice notes • ${certifications.length} learning cards`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
