'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    sku: 'ATL CertEdge™',
    name: 'CertEdge',
    icon: '◈',
    accent: '#1860FF',
    desc: 'On-device and edge-based pre-compliance support for autonomous systems operating in field environments.',
    tags: ['Compliance', 'Edge', 'Certification'],
  },
  {
    sku: 'ATL TrustCloud™',
    name: 'TrustCloud',
    icon: '☁',
    accent: '#C8A84C',
    desc: 'Cloud-based assurance, evidence collection, monitoring, and lifecycle compliance platform for deployed systems.',
    tags: ['Cloud', 'Monitoring', 'Compliance'],
  },
  {
    sku: 'ATL RiskScore™',
    name: 'RiskScore',
    icon: '△',
    accent: '#1860FF',
    desc: 'AI-powered risk scoring for devices, deployments, and operating environments across high-stakes sectors.',
    tags: ['AI Risk', 'Scoring', 'Analytics'],
  },
  {
    sku: 'ATL Digital Registry™',
    name: 'Digital Registry',
    icon: '◉',
    accent: '#C8A84C',
    desc: 'Trusted registry for certified devices, sites, labs, and assurance status across the ATL ecosystem.',
    tags: ['Registry', 'Certification', 'Trust'],
  },
  {
    sku: 'ATL LabOS™',
    name: 'LabOS',
    icon: '⬡',
    accent: '#1860FF',
    desc: 'Operating framework for partner labs and Physical AI testing environments — from universities to enterprise.',
    tags: ['Lab Ops', 'Testing', 'Framework'],
  },
  {
    sku: 'ATL OTA Shield™',
    name: 'OTA Shield',
    icon: '⟳',
    accent: '#C8A84C',
    desc: 'Lifecycle assurance for firmware, software, and AI model updates across autonomous system deployments.',
    tags: ['OTA', 'Lifecycle', 'Security'],
  },
];

export default function SolutionsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sol-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reverse' }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="solutions" className="relative z-10 py-32 px-10"
      style={{ background: 'rgba(6,16,31,0.9)' }}>
      <div className="max-w-[1220px] mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="eyebrow eyebrow-light mb-3">Platform &amp; Services</span>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <h2 className="section-title section-title-light tracking-[0.03em]" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
                Our Solutions
              </h2>
              <p className="section-lead section-lead-light mt-3 text-[0.95rem]">
                A focused portfolio of products and services for autonomous system trust and assurance across the full lifecycle.
              </p>
            </div>
          </div>
        </div>

        {/* Glassmorphism product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map(p => (
            <div
              key={p.sku}
              className="sol-card group relative overflow-hidden rounded-sm p-8 flex flex-col gap-4 cursor-default transition-all duration-300"
              style={{
                opacity: 0,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.borderColor = `${p.accent}44`;
                e.currentTarget.style.boxShadow = `0 8px 40px ${p.accent}22, inset 0 0 40px rgba(255,255,255,0.02)`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center text-xl font-bold flex-shrink-0"
                style={{ background: `${p.accent}1A`, color: p.accent, border: `1px solid ${p.accent}33` }}
              >
                {p.icon}
              </div>

              {/* SKU */}
              <span className="font-mono text-[0.65rem] tracking-[0.1em]" style={{ color: p.accent }}>
                {p.sku}
              </span>

              {/* Name */}
              <h3 className="font-display text-white text-[1.4rem] leading-tight -mt-2 tracking-[0.03em]">
                {p.name}
              </h3>

              {/* Description */}
              <p className="text-[0.875rem] leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {p.tags.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-sm font-mono text-[0.58rem] tracking-[0.08em] uppercase"
                    style={{
                      background: `${p.accent}15`,
                      border: `1px solid ${p.accent}30`,
                      color: `${p.accent}CC`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
