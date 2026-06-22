'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Combined Section: The Shift & Capabilities ─────── */
const CAPABILITIES = [
  { phrase: 'They Can Sense', sub: 'Perceiving the physical world through advanced sensor fusion and AI perception.' },
  { phrase: 'They Can Decide', sub: 'Making complex autonomous decisions in real-time, without human intervention.' },
  { phrase: 'They Can Move', sub: 'Navigating dynamic, unpredictable environments with precision and autonomy.' },
  { phrase: 'They Can Act', sub: 'Taking consequential real-world actions that affect people and infrastructure.' },
];

export function Section1Reveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left: Headline lines staggered
      gsap.fromTo('.reveal-line',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.18,
          scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none reverse' }
        }
      );

      // Right: Cards staggered
      gsap.fromTo('.cap-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 py-32 px-10"
      style={{ background: 'rgba(6,16,31,0.78)' }}>
      <div className="max-w-[1220px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left Column: The Shift Headline */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="reveal-line eyebrow eyebrow-light mb-5">The Shift</span>
          <h2 className="font-display text-white leading-[0.98] tracking-[0.03em] flex flex-col mb-6"
            style={{ fontSize: 'clamp(2.5rem,5.5vw,4.5rem)' }}>
            <span className="reveal-line block opacity-0">Autonomous Systems</span>
            <span className="reveal-line block opacity-0">Are Moving Into</span>
            <span className="reveal-line block text-gold opacity-0">The Real World</span>
          </h2>
          <p className="reveal-line text-[0.95rem] leading-relaxed text-text-on-dark-muted max-w-[440px] opacity-0">
            Assuring trust across the entire lifecycle is no longer optional—it is the prerequisite for real-world deployment.
          </p>
        </div>

        {/* Right Column: Capabilities Cards */}
        <div className="lg:col-span-7">
          <span className="cap-card eyebrow eyebrow-light mb-5 block opacity-0"></span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {CAPABILITIES.map((c, i) => (
              <div key={c.phrase} className="cap-card p-8 flex flex-col justify-between min-h-[200px]"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  opacity: 0,
                }}>
                <div>
                  <div className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-text-on-dark-muted mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-white leading-tight mb-3 tracking-[0.03em]"
                    style={{ fontSize: 'clamp(1.5rem,3.2vw,2.2rem)' }}>
                    {c.phrase}
                  </h3>
                </div>
                <p className="text-[0.84rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.52)' }}>
                  {c.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Section 3: Trust Layer Visualization ────────────── */
const NODES = [
  {
    label: 'Robotics',
    icon: (
      <svg className="w-4 h-4 text-blue animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M12 2v4M8 5h8M8 15h.01M16 15h.01" />
      </svg>
    ),
    color: '#1860FF'
  },
  {
    label: 'Drones',
    icon: (
      <svg className="w-4 h-4 text-blue animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M2 12h7M15 12h7M12 2v7M12 15v7" />
        <circle cx="12" cy="2" r="1" />
        <circle cx="12" cy="22" r="1" />
        <circle cx="2" cy="12" r="1" />
        <circle cx="22" cy="12" r="1" />
      </svg>
    ),
    color: '#1860FF'
  },
  {
    label: 'Vision Camera',
    icon: (
      <svg className="w-4 h-4 text-gold animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>
    ),
    color: '#C8A84C'
  },
  {
    label: 'Connected Devices',
    icon: (
      <svg className="w-4 h-4 text-blue animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10M12 6a6 6 0 0 1 6 6M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M12 14v8" />
      </svg>
    ),
    color: '#1860FF'
  },
  {
    label: 'Smart Infrastructure',
    icon: (
      <svg className="w-4 h-4 text-blue animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V7l8-4v18M13 21V11l5-2v12" />
        <path d="M8 9h2M8 13h2M8 17h2M15 13h1M15 17h1" />
      </svg>
    ),
    color: '#1860FF'
  },
];

export function Section3TrustLayer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background glow animation
      gsap.to('.trust-bg-glow', {
        opacity: 0.6,
        scale: 1.1,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });

      gsap.fromTo('.trust-node',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reverse' }
        }
      );

      gsap.fromTo('.flowing-line-path',
        { strokeDashoffset: 120, opacity: 0 },
        {
          strokeDashoffset: 0, opacity: 1, duration: 2, ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 55%', toggleActions: 'play none none reverse' }
        }
      );

      gsap.fromTo('.trust-center',
        { opacity: 0, scale: 0.8, rotate: -5 },
        {
          opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: 'elastic.out(1, 0.7)',
          scrollTrigger: { trigger: ref.current, start: 'top 55%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.trust-outcome',
        { opacity: 0, y: 35, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 50%', toggleActions: 'play none none reverse' }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 py-32 px-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(6,16,31,0.95) 0%, rgba(10,22,44,0.98) 100%)' }}>

      {/* Subtle Corporate Background Glow */}
      <div className="trust-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(24,96,255,0.06) 0%, transparent 60%)', filter: 'blur(60px)' }} />

      <div className="max-w-[1220px] mx-auto relative z-10">
        <div className="text-center mb-24 max-w-[850px] mx-auto relative">
          {/* Subtle text glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-blue/5 rounded-full blur-[60px] pointer-events-none" />
          
          <h2 className="font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 leading-[1.05] mb-6 uppercase tracking-[0.03em] relative z-10" 
              style={{ fontSize: 'clamp(3rem,6vw,4.5rem)', textShadow: '0 10px 40px rgba(255,255,255,0.1)' }}>
            ATL Platform
          </h2>
          
          <p className="text-[1.15rem] leading-[1.8] font-light relative z-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            From Pilot to Trusted Deployment, our platform combines <span className="text-white font-medium">assurance software</span>, <span className="text-white font-medium">testing methodology</span>, <span className="text-white font-medium">risk intelligence</span>, and <span className="text-white font-medium">lifecycle monitoring</span>.
          </p>
        </div>

        <div className="text-center mb-24">
          <span className="eyebrow eyebrow-light mb-4 block text-blue tracking-[0.2em] font-semibold">Trust Architecture</span>
          <h2 className="section-title section-title-light tracking-[0.02em] font-light" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
            Everything Connected <br /><span className="text-white font-medium">Through Trust</span>
          </h2>
        </div>

        {/* Desktop Architecture Schematic View */}
        <div className="hidden md:flex flex-col items-center">
          {/* Nodes Row */}
          <div className="flex justify-between w-full max-w-[1020px] gap-6 mb-4">
            {NODES.map((n, i) => (
              <div key={n.label}
                className="trust-node group flex flex-col items-center justify-center gap-4 px-6 py-8 rounded-xl font-medium text-[0.88rem] text-white cursor-default flex-1 relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid rgba(255, 255, 255, 0.06)`,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `rgba(24,96,255,0.4)`;
                  e.currentTarget.style.boxShadow = `0 12px 40px rgba(24,96,255,0.15), inset 0 1px 0 rgba(255,255,255,0.1)`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `rgba(255,255,255,0.06)`;
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Node Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-3 rounded-full bg-blue/10 text-blue group-hover:bg-gold/10 group-hover:text-gold group-hover:shadow-[0_0_15px_rgba(200,168,76,0.3)] transition-all duration-300">
                  {n.icon}
                </div>
                <span className="tracking-[0.02em] font-display text-[0.95rem] text-center">{n.label}</span>
              </div>
            ))}
          </div>

          {/* Converging SVG Schematic Connector */}
          <div className="w-[1020px] h-[120px] relative pointer-events-none">
            <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 1020 120" fill="none">
              {/* Paths from nodes to center */}
              {[
                { start: 102, color: '#1860FF' },
                { start: 306, color: '#1860FF' },
                { start: 510, color: '#C8A84C' },
                { start: 714, color: '#1860FF' },
                { start: 918, color: '#1860FF' }
              ].map((path, idx) => (
                <g key={idx}>
                  {/* Base track */}
                  <path d={`M ${path.start},0 C ${path.start},70 510,40 510,120`} stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                  {/* Flowing animated line */}
                  <path className="flowing-line-path" d={`M ${path.start},0 C ${path.start},70 510,40 510,120`} stroke={path.color} strokeWidth="2" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 4px ' + path.color + ')' }} />
                </g>
              ))}
            </svg>
          </div>

          {/* Central Assurance Core */}
          <div className="relative">
            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full border border-gold/20 animate-[spin_10s_linear_infinite] scale-[1.3] opacity-50" />
            <div className="absolute inset-0 rounded-full border border-blue/20 animate-[spin_15s_linear_infinite_reverse] scale-[1.15] opacity-50" />

            <div
              className="trust-center flex flex-col items-center justify-center text-center w-64 h-64 rounded-full cursor-default relative z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(6,16,31,1) 0%, rgba(14,34,70,0.95) 100%)',
                border: '1px solid rgba(200,168,76,0.3)',
                boxShadow: '0 0 50px rgba(24,96,255,0.15), inset 0 0 30px rgba(200,168,76,0.05)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="absolute inset-2 rounded-full border border-white/5 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="font-display text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light text-3xl leading-none mb-1.5 tracking-[0.06em] uppercase">Autonomy</div>
              <div className="font-display text-white text-3xl leading-none mb-4 tracking-[0.06em] uppercase">Trust Labs</div>
              <div className="px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20">
                <div className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white font-bold">
                  Platform
                </div>
              </div>
            </div>
          </div>

          {/* Downward Connector */}
          <div className="py-4 pointer-events-none h-[100px]">
            <svg className="w-16 h-full" viewBox="0 0 64 100" fill="none">
              <path d="M 32,0 L 32,90" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 6" />
              <path className="flowing-dash-down" d="M 32,0 L 32,90" stroke="#C8A84C" strokeWidth="2" strokeLinecap="round" />
              {/* Arrow head */}
              <path d="M 24,80 L 32,90 L 40,80" stroke="#C8A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Final Outcome Card */}
          <div
            className="trust-outcome relative overflow-hidden flex flex-col items-center justify-center text-center gap-4 px-12 py-8 rounded-xl cursor-default w-full max-w-[600px] mx-auto"
            style={{
              background: 'linear-gradient(180deg, rgba(200, 168, 76, 0.05) 0%, rgba(200, 168, 76, 0.01) 100%)',
              border: '1px solid rgba(200, 168, 76, 0.2)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-dark" />
            <div className="p-3 rounded-full bg-gold/10 text-gold shadow-[0_0_20px_rgba(200,168,76,0.2)]">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <div>
              <div className="font-display text-white text-2xl tracking-[0.04em] uppercase mb-1">Trusted Deployment</div>
              <div className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-gold-light opacity-80 flex justify-center gap-2">
                <span>Safe</span><span className="text-white/30">•</span>
                <span>Secure</span><span className="text-white/30">•</span>
                <span>Certifiable</span><span className="text-white/30">•</span>
                <span>Scalable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View Layout (Vertical Stacking) */}
        <div className="flex md:hidden flex-col items-center gap-8">
          {/* Stacked Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {NODES.map(n => (
              <div key={n.label}
                className="trust-node flex items-center gap-4 px-6 py-5 rounded-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="text-blue">{n.icon}</div>
                <span className="font-display text-[0.95rem] tracking-wide text-white">{n.label}</span>
              </div>
            ))}
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-blue to-transparent opacity-50" />

          {/* Core */}
          <div
            className="trust-center flex flex-col items-center justify-center text-center w-52 h-52 rounded-full relative"
            style={{
              background: 'linear-gradient(135deg, rgba(6,16,31,1) 0%, rgba(14,34,70,0.95) 100%)',
              border: '1px solid rgba(200,168,76,0.3)',
              boxShadow: '0 0 30px rgba(24,96,255,0.1)',
            }}
          >
            <div className="font-display text-gold text-xl leading-tight uppercase tracking-wider">Autonomy</div>
            <div className="font-display text-white text-xl leading-tight uppercase tracking-wider mb-2">Trust Labs</div>
            <div className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-white">Trust Core</div>
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent opacity-50" />

          {/* Outcome Card */}
          <div
            className="trust-outcome flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 px-8 py-6 rounded-lg w-full relative overflow-hidden"
            style={{
              background: 'rgba(200, 168, 76, 0.04)',
              border: '1px solid rgba(200, 168, 76, 0.15)',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 sm:w-1 sm:h-full bg-gold" />
            <div className="text-gold mt-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <div>
              <div className="font-display text-white text-lg tracking-[0.03em] uppercase mb-1.5">Trusted Deployment</div>
              <div className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-gold-light leading-relaxed">
                Safe · Secure · Certifiable · Scalable
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes strokeFlow {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        .flowing-line-path {
          stroke-dasharray: 18 54;
          animation: strokeFlow 3.5s linear infinite;
        }
        @keyframes pulseFlow {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .flowing-dash-down {
          stroke-dasharray: 8 24;
          animation: pulseFlow 1.6s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* ── Section 5: Industries Grid ──────────────────────── */
const INDUSTRIES = [
  { 
    label: 'Manufacturing', 
    icon: (
      <svg className="w-4 h-4 text-blue animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
      </svg>
    ) 
  },
  { 
    label: 'Telecom', 
    icon: (
      <svg className="w-4 h-4 text-gold animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.9 19.1a10 10 0 0 1 0-14.2"/><path d="M8.4 15.6a5 5 0 0 1 0-7.2"/><circle cx="12" cy="12" r="2"/><path d="M15.6 15.6a5 5 0 0 0 0-7.2"/><path d="M19.1 19.1a10 10 0 0 0 0-14.2"/>
      </svg>
    ) 
  },
  { 
    label: 'Logistics', 
    icon: (
      <svg className="w-4 h-4 text-blue animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2"/><path d="M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
      </svg>
    ) 
  },
  { 
    label: 'Warehousing', 
    icon: (
      <svg className="w-4 h-4 text-blue animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ) 
  },
  { 
    label: 'Healthcare', 
    icon: (
      <svg className="w-4 h-4 text-gold animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ) 
  },
  { 
    label: 'Smart Cities', 
    icon: (
      <svg className="w-4 h-4 text-blue animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
      </svg>
    ) 
  },
  { 
    label: 'Defense', 
    icon: (
      <svg className="w-4 h-4 text-blue animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ) 
  },
  { 
    label: 'Energy', 
    icon: (
      <svg className="w-4 h-4 text-gold animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ) 
  },
  { 
    label: 'Infrastructure', 
    icon: (
      <svg className="w-4 h-4 text-blue animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V7l8-4v18M13 21V11l5-2v12"/><path d="M8 9h2M8 13h2M8 17h2M15 13h1M15 17h1"/>
      </svg>
    ) 
  },
];

export function Section5Industries() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ind-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reverse' }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="industries" className="relative z-10 py-32 px-10"
      style={{ background: 'rgba(11,29,58,0.88)' }}>
      <div className="max-w-[1220px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
          <div className="md:col-span-1 pr-4">
            <span className="eyebrow eyebrow-light mb-4">Industries</span>
            <h2 className="section-title section-title-light mb-6 tracking-[0.03em] leading-[1.1]" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)' }}>
              Environments where trust is non-negotiable.
            </h2>
            <p className="section-lead section-lead-light text-[1rem] leading-[1.8] opacity-90">
              We support organizations deploying Physical AI and autonomous systems across high-impact sectors.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-wrap content-start gap-4 pt-4 md:pt-10 pl-0 md:pl-8">
            <div className="flex flex-wrap gap-4">
              {INDUSTRIES.map(ind => (
                <div key={ind.label}
                  className="ind-card flex items-center gap-3 px-5 py-3 rounded-md text-[0.92rem] text-white cursor-default transition-all duration-200"
                  style={{
                    opacity: 0,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={e => Object.assign(e.currentTarget.style, { background: 'rgba(24,96,255,0.15)', borderColor: 'rgba(24,96,255,0.35)', color: '#fff' })}
                  onMouseLeave={e => Object.assign(e.currentTarget.style, { background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)' })}
                >
                  <span className="text-lg opacity-80">{ind.icon}</span>
                  <span className="font-medium tracking-wide">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
