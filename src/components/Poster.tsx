import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Decorative motif illustrations for the project cards. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'finance' && (
          <g transform="translate(210 54)" fill="none" stroke={a} strokeOpacity="0.85" strokeWidth="2">
            <rect x="0" y="16" width="150" height="104" rx="14" />
            <path d="M0 43h150M18 84h38M18 99h62" strokeOpacity="0.55" />
            <circle cx="116" cy="84" r="20" />
            <path d="M116 73v22m-7-16c0-5 14-5 14 0s-14 5-14 10 14 5 14 0" strokeLinecap="round" />
            <path d="M22 1h64M22 9h40" strokeLinecap="round" strokeOpacity="0.45" />
          </g>
        )}
        {project.motif === 'healthcare' && (
          <g transform="translate(216 50)" fill="none" stroke={a} strokeOpacity="0.85" strokeWidth="2">
            <rect x="14" y="0" width="126" height="168" rx="18" />
            <path d="M48 0v18h58V0M14 42h126" strokeOpacity="0.6" />
            <path d="M66 68h22v18h18v22H88v18H66v-18H48V86h18z" strokeLinejoin="round" />
            <circle cx="77" cy="150" r="4" fill={a} stroke="none" />
            <path d="M0 100h18m-9-9v18M145 74h28m-14-14v28" strokeLinecap="round" strokeOpacity="0.5" />
          </g>
        )}
        {project.motif === 'fashion' && (
          <g transform="translate(204 50)" fill="none" stroke={a} strokeOpacity="0.85" strokeWidth="2">
            <path d="M72 20c0-14 8-22 18-22s18 8 18 22" strokeLinecap="round" />
            <path d="M90 20 12 66l9 14 22-11 9 128h76l9-128 22 11 9-14z" strokeLinejoin="round" />
            <path d="m48 69 42 24 42-24M90 93v104" strokeOpacity="0.45" />
            <path d="M24 212h132" strokeLinecap="round" strokeOpacity="0.45" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}
