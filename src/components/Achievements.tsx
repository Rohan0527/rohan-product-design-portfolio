import { motion } from 'framer-motion';
import { projectHighlights } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-orange-highlight ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {
  return (
    <>
      <SectionHeading kicker="Selected work" title="Project Highlights" />

      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [perspective:1400px]">
        {projectHighlights.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#101010_60%,#090909)] px-5 pb-6 pt-8 text-center ring-1 ring-orange-highlight/20 transition duration-500 group-hover:ring-orange-highlight/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-highlight/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-orange-highlight/10 blur-3xl transition duration-700 group-hover:bg-orange-highlight/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-orange-highlight">PROJECT {String(i + 1).padStart(2, '0')}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">{project.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-highlight">{project.stack.slice(0, 3).join(' · ')}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{project.logline}</p>
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

    </>
  );
}
