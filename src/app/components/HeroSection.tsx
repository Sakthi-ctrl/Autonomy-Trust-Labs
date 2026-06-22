'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LIFECYCLE = ['Design', 'Validate', 'Certify', 'Deploy', 'Monitor', 'Update', 'Renew', 'Scale'];

interface HeroSectionProps {
  isReady?: boolean;
}

export default function HeroSection({ isReady = true }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate hero heading lines one by one
      tl.fromTo('.hero-text-line',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
        0.3
      )
        .fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, 0.55)
        .fromTo(actionsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.75)
        .fromTo(statsRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.8 }, 0.6);
    }, containerRef);

    return () => ctx.revert();
  }, [isReady]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex flex-col justify-end pt-[70px]"
      style={{ background: 'transparent', position: 'relative', zIndex: 2 }}>

      {/* Hero body */}
      <div className="relative z-10 max-w-[1220px] mx-auto w-full px-10 pb-[72px] pt-24 flex items-end justify-between gap-16 flex-wrap">

        {/* Left: headline + CTA */}
        <div className="max-w-[700px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-7 rounded-sm"
            style={{ background: 'rgba(200,168,76,0.1)', border: '1px solid rgba(200,168,76,0.28)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-[0.67rem] tracking-[0.13em] uppercase text-gold">
              Physical AI Trust Platform
            </span>
          </div>

          <h1 className="font-display leading-[0.95] tracking-[0.03em] text-white mb-5 flex flex-col"
            style={{ fontSize: 'clamp(3rem,7vw,5.8rem)' }}>
            <span className="hero-text-line block opacity-0">Trust Infrastructure</span>
            <span className="hero-text-line block opacity-0">
              for the <span className="text-gold">Autonomous</span> World
            </span>
          </h1>

          <p ref={descRef} className="font-sans text-[1.05rem] leading-[1.75] font-light mb-11 max-w-[560px]"
            style={{ color: 'rgba(255,255,255,0.86)', opacity: 0 }}>
            Helping organizations build, validate, deploy, and monitor trusted autonomous systems and Physical AI.
          </p>

          <div ref={actionsRef} className="flex gap-3.5 flex-wrap" style={{ opacity: 0 }}>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-semibold text-[0.92rem] transition-all duration-200 cursor-pointer"
              style={{ background: '#1860FF', color: '#fff', border: '2px solid #1860FF' }}
              onMouseEnter={e => Object.assign(e.currentTarget.style, { background: '#1245CC', borderColor: '#1245CC' })}
              onMouseLeave={e => Object.assign(e.currentTarget.style, { background: '#1860FF', borderColor: '#1860FF' })}
            >
              Partner With Us
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-semibold text-[0.92rem] transition-all duration-200 cursor-pointer"
              style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.36)' }}
              onMouseEnter={e => Object.assign(e.currentTarget.style, { background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.65)' })}
              onMouseLeave={e => Object.assign(e.currentTarget.style, { background: 'transparent', borderColor: 'rgba(255,255,255,0.36)' })}
            >
              Request a Briefing
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes goldPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(200,168,76,0.2); }
          50% { box-shadow: 0 0 0 7px rgba(200,168,76,0); }
        }
        @keyframes lineTravel {
          0% { left: -100%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { scrollbar-width: none; }
      `}</style>
    </section>
  );
}
