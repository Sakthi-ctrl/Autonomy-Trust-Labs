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
    label: 'Physical AI', 
    icon: (
      <svg className="w-4 h-4 text-gold animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
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
      gsap.fromTo('.trust-node',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.trust-center',
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: ref.current, start: 'top 55%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.trust-outcome',
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 50%', toggleActions: 'play none none reverse' }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 py-32 px-10"
      style={{ background: 'rgba(6,16,31,0.80)' }}>
      <div className="max-w-[1220px] mx-auto">
        <div className="text-center mb-20">
          <span className="eyebrow eyebrow-light mb-3">Trust Layer</span>
          <h2 className="section-title section-title-light tracking-[0.03em]" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
            Everything Connected Through Trust
          </h2>
        </div>

        {/* Desktop Architecture Schematic View */}
        <div className="hidden md:flex flex-col items-center">
          {/* Nodes Row */}
          <div className="flex justify-between w-full max-w-[960px] gap-4 mb-2">
            {NODES.map(n => (
              <div key={n.label}
                className="trust-node flex items-center justify-center gap-2.5 px-6 py-4 rounded-sm font-medium text-[0.88rem] text-white cursor-default flex-1"
                style={{
                  opacity: 0,
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${n.color}26`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = n.color;
                  e.currentTarget.style.boxShadow = `0 0 16px ${n.color}33`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${n.color}26`;
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.03)';
                }}
              >
                {n.icon}
                <span className="tracking-[0.01em] font-mono text-[0.82rem]">{n.label}</span>
              </div>
            ))}
          </div>

          {/* Converging SVG Schematic Connector */}
          <div className="w-[960px] h-[100px] relative pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 960 100" fill="none">
              {/* Node 1 to Core */}
              <path d="M 96,0 C 96,65 480,35 480,100" stroke="#182E50" strokeWidth="1" />
              <path className="flowing-line-path" d="M 96,0 C 96,65 480,35 480,100" stroke="#1860FF" strokeWidth="1.5" strokeLinecap="round" />

              {/* Node 2 to Core */}
              <path d="M 288,0 C 288,65 480,35 480,100" stroke="#182E50" strokeWidth="1" />
              <path className="flowing-line-path" d="M 288,0 C 288,65 480,35 480,100" stroke="#1860FF" strokeWidth="1.5" strokeLinecap="round" />

              {/* Node 3 to Core */}
              <path d="M 480,0 L 480,100" stroke="#182E50" strokeWidth="1" />
              <path className="flowing-line-path-center" d="M 480,0 L 480,100" stroke="#C8A84C" strokeWidth="1.5" strokeLinecap="round" />

              {/* Node 4 to Core */}
              <path d="M 672,0 C 672,65 480,35 480,100" stroke="#182E50" strokeWidth="1" />
              <path className="flowing-line-path" d="M 672,0 C 672,65 480,35 480,100" stroke="#1860FF" strokeWidth="1.5" strokeLinecap="round" />

              {/* Node 5 to Core */}
              <path d="M 864,0 C 864,65 480,35 480,100" stroke="#182E50" strokeWidth="1" />
              <path className="flowing-line-path" d="M 864,0 C 864,65 480,35 480,100" stroke="#1860FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Central Assurance Core */}
          <div
            className="trust-center flex flex-col items-center justify-center text-center w-52 h-52 rounded-full cursor-default relative"
            style={{
              opacity: 0,
              background: 'radial-gradient(circle, rgba(24,96,255,0.08) 0%, rgba(6,16,31,0.92) 80%)',
              border: '1.5px solid rgba(200,168,76,0.48)',
              boxShadow: '0 0 35px rgba(200,168,76,0.12), inset 0 0 25px rgba(24,96,255,0.15)',
              transition: 'transform 0.4s ease-out',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div className="font-display text-gold text-2xl leading-none mb-1 tracking-[0.04em] uppercase">Autonomy</div>
            <div className="font-display text-gold text-2xl leading-none mb-2.5 tracking-[0.04em] uppercase">Trust Labs</div>
            <div className="font-mono text-[0.55rem] tracking-[0.14em] uppercase text-text-on-dark-muted">
              Trust Infrastructure
            </div>
          </div>

          {/* Downward Connector */}
          <div className="py-2 pointer-events-none">
            <svg className="w-16 h-20 text-gold" viewBox="0 0 100 80" fill="none">
              <path d="M 50,0 L 50,70" stroke="#182E50" strokeWidth="1.5" strokeDasharray="5 5" />
              <path d="M 45,62 L 50,70 L 55,62" stroke="#C8A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path className="flowing-dash-down" d="M 50,0 L 50,70" stroke="#C8A84C" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Final Outcome Card */}
          <div
            className="trust-outcome flex items-center gap-4 px-10 py-5 rounded-sm cursor-default"
            style={{
              opacity: 0,
              background: 'rgba(200, 168, 76, 0.02)',
              border: '1px solid rgba(200, 168, 76, 0.28)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.02)',
            }}
          >
            <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 11 2 2 4-4" />
            </svg>
            <div>
              <div className="font-display text-white text-xl tracking-[0.03em] uppercase">Trusted Deployment</div>
              <div className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-gold-light mt-1">
                Safe · Secure · Certifiable · Scalable
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View Layout (Vertical Stacking) */}
        <div className="flex md:hidden flex-col items-center gap-6">
          {/* Stacked Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
            {NODES.map(n => (
              <div key={n.label}
                className="trust-node flex items-center gap-3 px-5 py-4 rounded-sm"
                style={{
                  opacity: 0,
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${n.color}22`,
                }}
              >
                {n.icon}
                <span className="font-mono text-[0.8rem] text-white">{n.label}</span>
              </div>
            ))}
          </div>

          {/* Simple Mobile Down Arrow */}
          <div className="text-blue text-xl animate-bounce">↓</div>

          {/* Core */}
          <div
            className="trust-center flex flex-col items-center justify-center text-center w-40 h-40 rounded-full"
            style={{
              opacity: 0,
              background: 'radial-gradient(circle, rgba(24,96,255,0.08) 0%, rgba(6,16,31,0.92) 80%)',
              border: '1.5px solid rgba(200,168,76,0.4)',
            }}
          >
            <div className="font-display text-gold text-lg leading-tight uppercase">Autonomy</div>
            <div className="font-display text-gold text-lg leading-tight uppercase">Trust Labs</div>
          </div>

          {/* Simple Mobile Down Arrow */}
          <div className="text-gold text-xl animate-bounce">↓</div>

          {/* Outcome Card */}
          <div
            className="trust-outcome flex items-center gap-3.5 px-6 py-4 rounded-sm w-full"
            style={{
              opacity: 0,
              background: 'rgba(200, 168, 76, 0.02)',
              border: '1px solid rgba(200, 168, 76, 0.22)',
            }}
          >
            <svg className="w-5 h-5 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 11 2 2 4-4" />
            </svg>
            <div>
              <div className="font-display text-white text-md tracking-[0.03em] uppercase">Trusted Deployment</div>
              <div className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-gold-light mt-0.5">
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
        .flowing-line-path-center {
          stroke-dasharray: 12 36;
          animation: strokeFlow 2.5s linear infinite;
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

/* ── Section 4: Lifecycle Timeline ──────────────────── */
const LIFECYCLE_STEPS = [
  { label: 'Design', desc: 'System architecture and trust requirements definition.' },
  { label: 'Validate', desc: 'Structured testing and behavioral assurance.' },
  { label: 'Certify', desc: 'Pre-compliance support and certification readiness.' },
  { label: 'Deploy', desc: 'Trusted deployment into real-world environments.' },
  { label: 'Monitor', desc: 'Runtime compliance and performance tracking.' },
  { label: 'Update', desc: 'Governed OTA and AI model update validation.' },
  { label: 'Renew', desc: 'Lifecycle renewal and re-certification cycles.' },
  { label: 'Scale', desc: 'Trusted scaling across fleets and geographies.' },
];

export function Section4Lifecycle() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>('.lc-step');
      steps.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: `top ${70 - i * 4}%`,
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 py-32 px-10"
      style={{ background: 'rgba(6,16,31,0.85)' }}>
      <div className="max-w-[1220px] mx-auto">
        <div className="mb-12">
          <span className="eyebrow eyebrow-light mb-3">Full Lifecycle Assurance</span>
          <h2 className="section-title section-title-light mb-4 tracking-[0.03em]" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
            End-to-End Trust Pipeline
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {LIFECYCLE_STEPS.map((step, i) => (
            <div key={step.label} className="lc-step p-6 flex flex-col gap-3"
              style={{
                opacity: 0,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: i < 3 ? '#C8A84C' : '#1860FF',
                    boxShadow: i < 3 ? '0 0 8px rgba(200,168,76,0.5)' : '0 0 8px rgba(24,96,255,0.5)',
                  }} />
                <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-text-on-dark-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="font-display text-white text-xl tracking-[0.03em]">{step.label}</div>
              <p className="text-[0.8rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {step.desc}
              </p>
              {i < LIFECYCLE_STEPS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-border-dark text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 5: Industries Grid ──────────────────────── */
const INDUSTRIES = [
  { label: 'Manufacturing', icon: '🏭' },
  { label: 'Telecom', icon: '📡' },
  { label: 'Logistics', icon: '📦' },
  { label: 'Warehousing', icon: '🏪' },
  { label: 'Healthcare', icon: '🏥' },
  { label: 'Smart Cities', icon: '🏙' },
  { label: 'Defense', icon: '🛡' },
  { label: 'Energy', icon: '⚡' },
  { label: 'Infrastructure', icon: '🏗' },
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
