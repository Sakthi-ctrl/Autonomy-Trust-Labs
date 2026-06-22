'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LIFECYCLE = ['Design', 'Validate', 'Certify', 'Deploy', 'Monitor', 'Renew', 'Scale'];

export default function SolutionsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.sol-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );

      // Pipeline Container Animation
      gsap.fromTo('.pipeline-container',
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reverse' }
        }
      );

      // Pipeline Nodes Animation
      gsap.fromTo('.pipeline-node',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.5)', stagger: 0.1, delay: 0.4,
          scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reverse' }
        }
      );

      // Pipeline Connecting Lines Animation
      gsap.fromTo('.pipeline-line-fill',
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1, ease: 'power2.inOut', stagger: 0.1, delay: 0.6, transformOrigin: 'left center',
          scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reverse' }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="solutions" className="relative z-10 py-32 px-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020813 0%, #06101F 100%)' }}>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[300px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #1860FF 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-[1220px] mx-auto relative z-10">

        {/* Header */}
        <div className="mb-20 sol-header">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-[700px]">
              <h2 className="font-display tracking-[0.02em] text-white leading-[1.05] mb-5 uppercase" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
                Platform instead of Our Solutions
              </h2>
              <p className="text-[1.1rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                We combine software, testing methodology, risk intelligence, and lifecycle assurance to help autonomous systems move from pilot to trusted deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Lifecycle Pipeline */}
        <div className="pipeline-container relative border rounded-xl p-10 md:p-14 backdrop-blur-md shadow-2xl"
          style={{ background: 'rgba(10,22,42,0.6)', borderColor: '#182E50' }}>

          <div className="relative flex justify-between items-start w-full px-4 overflow-x-auto pb-4 scrollbar-none">

            {/* Background Track Line */}
            <div className="absolute left-[4%] right-[4%] h-[2px] bg-[#182E50] top-[15px] -z-10 min-w-[600px]" />

            {LIFECYCLE.map((step, i) => (
              <div key={step} className="pipeline-node flex-1 flex flex-col items-center relative z-10 min-w-[100px]">

                {/* Connecting Line Fill (GSAP Animated) */}
                {i < LIFECYCLE.length - 1 && (
                  <div className="absolute left-[50%] w-full h-[2px] top-[15px] -z-10 pipeline-line-fill"
                    style={{ background: i < 2 ? '#C8A84C' : i === 2 ? 'linear-gradient(90deg, #C8A84C, #1860FF)' : '#1860FF' }} />
                )}

                {/* Node Dot */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-5 shadow-lg ${i < 3 ? 'bg-[#141A1F] border border-[#C8A84C]' : 'bg-[#0A162A] border border-[#1860FF]'}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${i < 3 ? 'bg-[#C8A84C]' : 'bg-[#1860FF]'}`}
                    style={{ boxShadow: i < 3 ? '0 0 12px rgba(200,168,76,0.6)' : '0 0 12px rgba(24,96,255,0.6)' }} />
                </div>

                {/* Node Text */}
                <span className={`font-mono text-[0.7rem] tracking-[0.1em] uppercase text-center transition-colors duration-300 ${i < 3 ? 'text-[#C8A84C]' : 'text-white/70'}`}>
                  {step}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
