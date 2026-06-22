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

        {/* Right: stats */}
        <div ref={statsRef} className="flex flex-col gap-0.5 flex-shrink-0" style={{ opacity: 0 }}>
          <div className="flex gap-0.5">
            {[
              { val: '6+', lbl: 'Platform Products' },
              { val: '12+', lbl: 'Industry Verticals' },
            ].map(s => (
              <div key={s.lbl} className="px-7 py-5 min-w-[130px]"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #182E50' }}>
                <div className="font-display text-white text-[2rem] leading-none mb-1.5 tracking-[0.03em]">{s.val}</div>
                <div className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-text-on-dark-muted">{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-0.5">
            {[
              { val: '8', lbl: 'Partner Segments' },
              { val: 'E2E', lbl: 'Lifecycle Coverage' },
            ].map(s => (
              <div key={s.lbl} className="px-7 py-5 min-w-[130px]"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #182E50' }}>
                <div className="font-display font-bold text-white text-[1.75rem] leading-none mb-1.5">{s.val}</div>
                <div className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-text-on-dark-muted">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lifecycle pipeline */}
      <div className="relative z-10 max-w-[1220px] mx-auto w-full px-10 border-t border-border-dark">
        <div className="font-mono text-[0.62rem] tracking-[0.13em] uppercase text-text-on-dark-muted py-5">
          Full Lifecycle Assurance Pipeline
        </div>
        <div className="flex items-center pb-7 overflow-x-auto scrollbar-none">
          {LIFECYCLE.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-2.5 h-2.5 rounded-full ${i < 3 ? 'bg-gold shadow-[0_0_0_3px_rgba(200,168,76,0.2)]' : 'bg-blue shadow-[0_0_0_3px_rgba(24,96,255,0.18)]'}`}
                  style={i < 3 ? { animation: 'goldPulse 2.8s ease-in-out infinite' } : {}} />
                <span className={`font-mono text-[0.64rem] tracking-[0.07em] mt-2.5 whitespace-nowrap ${i < 3 ? 'text-gold-light' : 'text-text-on-dark-muted'}`}>
                  {step}
                </span>
              </div>
              {i < LIFECYCLE.length - 1 && (
                <div className="flex-1 min-w-[44px] h-px mx-0 bg-border-dark relative overflow-hidden" style={{ top: '-9px' }}>
                  <div className="absolute top-0 left-[-100%] h-full w-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #1860FF, #C8A84C, transparent)',
                      animation: `lineTravel 4.5s ease-in-out infinite`,
                      animationDelay: `${i * 0.56}s`,
                    }} />
                </div>
              )}
            </div>
          ))}
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
