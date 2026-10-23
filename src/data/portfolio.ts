/**
 * Central portfolio data for the product-design portfolio.
 * Every fact on the site comes from this file, so the experience remains consistent.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rohan Suresh Gaikwad',
  displayName: 'Rohan Gaikwad',
  firstName: 'ROHAN',
  portfolioLabel: 'PRODUCT DESIGN & DEVELOPMENT',
  introLabel: 'ROHAN SURESH GAIKWAD',
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

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year?: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  projectUrl: string;
  palette: Palette;
  motif: 'finance' | 'healthcare' | 'fashion';
};

export const projects: Project[] = [
  {
    id: 'billwise',
    title: 'BillWise – Personal Finance & Bill Management App',
    genre: 'PERSONAL FINANCE • MOBILE APP',
    logline: 'Designed a mobile-first finance management experience for tracking recurring bills, upcoming due dates, shared expenses, and monthly spending. Structured user flows and information architecture to simplify everyday financial management.',
    stack: ['Figma', 'FigJam', 'Auto Layout', 'Interactive Prototyping', 'Design System'],
    projectUrl: 'https://www.figma.com/design/QubpdAykwgsOSFHostHIUL/Sanovia?node-id=0-1&t=nLvRne5yZZgG0YMw-1',
    build: [],
    metrics: [],
    features: [
      'Recurring bill tracking and upcoming due dates',
      'Shared expenses and monthly spending',
      'Simplified finance-management flows and information architecture',
    ],
    palette: { from: '#10211d', via: '#286052', to: '#090909', accent: '#8ED4B8' },
    motif: 'finance',
  },
  {
    id: 'sanovia',
    title: 'Sanovia – Healthcare Appointment Booking App',
    genre: 'HEALTHCARE • APPOINTMENT BOOKING',
    logline: 'Designed a user-centered appointment booking experience with user journeys, wireframes, and interactive prototypes for doctor discovery, slot selection, and appointment management, focusing on accessibility and simplified navigation.',
    stack: ['Figma', 'FigJam', 'Auto Layout', 'Interactive Prototyping', 'Adobe XD', 'Design System'],
    projectUrl: 'https://www.figma.com/design/QubpdAykwgsOSFHostHIUL/Sanovia?node-id=0-1&t=nLvRne5yZZgG0YMw-1',
    build: [],
    metrics: [],
    features: [
      'Doctor discovery and appointment slot selection',
      'Appointment management',
      'Accessible, simplified navigation',
    ],
    palette: { from: '#111a28', via: '#355d83', to: '#090909', accent: '#9BC6EC' },
    motif: 'healthcare',
  },
  {
    id: 'rewear',
    title: 'ReWear – Sustainable Fashion Marketplace',
    genre: 'SUSTAINABLE FASHION • MARKETPLACE',
    logline: 'Designed a responsive e-commerce experience with wireframes and interactive prototypes for product discovery, search filters, product details, and checkout. Focused on seller trust, visual hierarchy, consistent UI patterns, and reusable design elements.',
    stack: ['Figma', 'FigJam', 'Auto Layout', 'Interactive Prototyping', 'Adobe XD', 'Design System'],
    projectUrl: 'https://www.figma.com/design/QubpdAykwgsOSFHostHIUL/Sanovia?node-id=0-1&t=nLvRne5yZZgG0YMw-1',
    build: [],
    metrics: [],
    features: [
      'Product discovery, search filters, and product details',
      'Checkout and seller trust',
      'Consistent, reusable UI patterns',
    ],
    palette: { from: '#21191a', via: '#69464a', to: '#090909', accent: '#D9A6A0' },
    motif: 'fashion',
  },
];

export const projectHighlights = projects;

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

const orange: Palette = { from: '#24140c', via: '#6b3517', to: '#090909', accent: '#FF8733' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#FFB36B' };
const copper: Palette = { from: '#20120b', via: '#68402b', to: '#090909', accent: '#FF9D52' };
const umber: Palette = { from: '#1c140f', via: '#5a3520', to: '#090909', accent: '#C95D1B' };
const bronze: Palette = { from: '#17110c', via: '#4d351f', to: '#090909', accent: '#FFB36B' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Design Foundation',
    period: 'Learning to look closer',
    synopsis: 'Building a user-centered mindset through observation, clarity, and visual thinking.',
    episodes: [
      {
        code: '01',
        title: 'Design Foundations',
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
        code: '01',
        title: 'User Research',
        description: 'Mapping user needs, friction points, and decision-making patterns to shape better product directions.',
        tags: ['User research', 'Problem discovery'],
        runtime: 'Discovery',
        palette: copper,
      },
      {
        code: '02',
        title: 'Research Synthesis',
        description: 'Combining journey mapping and ideation to find patterns and opportunities behind user behavior.',
        tags: ['Journey mapping', 'Affinity mapping'],
        runtime: 'Insight',
        palette: orange,
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
        code: '01',
        title: 'User Flows',
        description: 'Designing task flows and interactions that reduce friction and support clear product decisions.',
        tags: ['User flows', 'Interaction design'],
        runtime: 'UX systems',
        palette: umber,
      },
      {
        code: '02',
        title: 'Interface Design',
        description: 'Turning structure into polished screens with responsive patterns, consistency, and stronger hierarchy.',
        tags: ['UI design', 'Design systems'],
        runtime: 'Interface design',
        palette: bronze,
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
        code: '01',
        title: 'Prototyping',
        description: 'Testing early concepts with prototypes that make interaction trade-offs visible before polishing.',
        tags: ['Prototyping', 'Feedback'],
        runtime: 'Validation',
        palette: orange,
      },
      {
        code: '02',
        title: 'Usability Testing',
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
        code: '01',
        title: 'Portfolio Development',
        description: 'Curating design work, case studies, and process thinking into a clear, narrative experience.',
        tags: ['Case study', 'Portfolio design'],
        runtime: 'In progress',
        palette: copper,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Design lens', title: 'UX Research', detail: 'User needs before screens', palette: amber },
  { label: 'Core focus', title: 'Product Thinking', detail: 'Problem framing and prioritization', palette: orange },
  { label: 'Journey', title: 'User Flows', detail: 'Clear navigation and task clarity', palette: umber },
  { label: 'Interface craft', title: 'Visual Hierarchy', detail: 'Strong structure and rhythm', palette: copper },
  { label: 'System design', title: 'Design Systems', detail: 'Reusable patterns & consistency', palette: bronze },
  { label: 'Prototype', title: 'Clickable Flows', detail: 'Fast validation through design', palette: amber },
  { label: 'Experience', title: 'Interaction Design', detail: 'Micro-interactions and clarity', palette: orange },
  { label: 'Learning', title: 'Research Synthesis', detail: 'Insights into direction', palette: umber },
  { label: 'Craft', title: 'Typography', detail: 'Readable and intentional UI', palette: bronze },
  { label: 'Current focus', title: 'Case Study Design', detail: 'Writing and framing design decisions', palette: copper },
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

export type ProfileId = 'main' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'main',
    name: 'Rohan Gaikwad',
    blurb: 'The Product Designer',
    color: '#FF8733',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, skills & design story first',
    color: '#FF9D52',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Designer',
    blurb: 'UX process, flows & prototypes first',
    color: '#FFB36B',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Journey and project highlights first',
    color: '#C95D1B',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Product design and development', palette: copper },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} design stages`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} product design projects`, palette: orange },
  picks: { nav: 'Design Focus', card: 'Design Focus', meta: 'Selected product design themes', palette: bronze },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Design categories`, palette: umber },
  moments: { nav: 'Project Highlights', card: 'Project Highlights', meta: `${projectHighlights.length} product design projects`, palette: orange },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: copper },
};
