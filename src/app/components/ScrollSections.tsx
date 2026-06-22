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
          <span className="cap-card eyebrow eyebrow-light mb-5 block opacity-0">Autonomous Capabilities</span>
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
  { label: 'Robotics', icon: '🤖', color: '#1860FF' },
  { label: 'Drones', icon: '🚁', color: '#1860FF' },
  { label: 'Physical AI', icon: '⚡', color: '#C8A84C' },
  { label: 'Connected Devices', icon: '📡', color: '#1860FF' },
  { label: 'Smart Infrastructure', icon: '🏗', color: '#1860FF' },
];

export function Section3TrustLayer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.trust-node',
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.4)', stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: 'top 60%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.trust-center',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(2)',
          scrollTrigger: { trigger: ref.current, start: 'top 55%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.trust-outcome',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 50%', toggleActions: 'play none none reverse' }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 py-32 px-10"
      style={{ background: 'rgba(14,35,71,0.82)' }}>
      <div className="max-w-[1220px] mx-auto">
        <div className="text-center mb-16">
          <span className="eyebrow eyebrow-light mb-3">Trust Layer</span>
          <h2 className="section-title section-title-light tracking-[0.03em]" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
            Everything Connected Through Trust
          </h2>
        </div>

        {/* Visualization */}
        <div className="flex flex-col items-center gap-8">
          {/* Source nodes */}
          <div className="flex flex-wrap justify-center gap-4">
            {NODES.map(n => (
              <div key={n.label}
                className="trust-node flex items-center gap-2.5 px-5 py-3 rounded-sm font-medium text-[0.88rem] text-white cursor-default"
                style={{
                  opacity: 0,
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${n.color}44`,
                  boxShadow: `0 0 12px ${n.color}22`,
                }}>
                <span className="text-xl">{n.icon}</span>
                {n.label}
              </div>
            ))}
          </div>

          {/* Connectors */}
          <div className="flex items-center gap-3">
            {[0,1,2].map(i => (
              <div key={i} className="h-px w-16 bg-gradient-to-r from-border-dark via-blue/40 to-border-dark"
                style={{ animation: `lineTravel2 3s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }} />
            ))}
            <div className="w-2.5 h-2.5 rounded-full bg-gold" style={{ boxShadow: '0 0 12px rgba(200,168,76,0.5)' }} />
            {[0,1,2].map(i => (
              <div key={i} className="h-px w-16 bg-gradient-to-r from-border-dark via-gold/40 to-border-dark"
                style={{ animation: `lineTravel2 3s ease-in-out infinite`, animationDelay: `${(i + 3) * 0.4}s` }} />
            ))}
          </div>

          {/* Center: ATL */}
          <div
            className="trust-center flex flex-col items-center justify-center text-center w-48 h-48 rounded-full"
            style={{
              opacity: 0,
              background: 'radial-gradient(circle, rgba(24,96,255,0.15) 0%, rgba(6,16,31,0.9) 70%)',
              border: '2px solid rgba(200,168,76,0.4)',
              boxShadow: '0 0 40px rgba(200,168,76,0.15), inset 0 0 40px rgba(24,96,255,0.1)',
            }}>
            <div className="font-display text-gold text-xl leading-tight tracking-[0.03em]">Autonomy</div>
            <div className="font-display text-gold text-xl leading-tight tracking-[0.03em]">Trust Labs</div>
            <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-text-on-dark-muted mt-2">
              Trust Infrastructure
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex flex-col items-center gap-1">
            {[0,1,2].map(i => (
              <div key={i} className="w-px h-6 bg-gradient-to-b from-gold/40 to-transparent" />
            ))}
            <div className="text-gold text-xl">↓</div>
          </div>

          {/* Outcome */}
          <div
            className="trust-outcome flex items-center gap-3 px-8 py-4 rounded-sm"
            style={{
              opacity: 0,
              background: 'rgba(200,168,76,0.08)',
              border: '1px solid rgba(200,168,76,0.3)',
            }}>
            <span className="text-2xl">✓</span>
            <div>
              <div className="font-display text-white text-xl tracking-[0.03em]">Trusted Deployment</div>
              <div className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-gold-light mt-0.5">
                Safe · Secure · Certifiable · Scalable
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes lineTravel2 {
          0% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; }
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
