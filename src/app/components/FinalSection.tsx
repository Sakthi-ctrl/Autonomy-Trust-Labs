'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

const CONTACT_TYPES = [
  'Partnership Inquiries',
  'Customer Pilots',
  'Investor Discussions',
  'Lab Enablement Programs',
  'OEM Readiness Programs',
  'Government & Smart City Programs',
];

const FOOTER_LINKS = {
  Platform: ['ATL CertEdge™','ATL TrustCloud™','ATL RiskScore™','ATL Digital Registry™','ATL LabOS™','ATL OTA Shield™'],
  Company:  ['About ATL','Solutions','Industries','Partners','Contact'],
  'Focus Areas': ['Physical AI Readiness','Autonomous Assurance','Runtime Monitoring','Risk Intelligence','OTA & Lifecycle','Lab Enablement'],
};

export default function FinalSection() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* ── Partners & About ──────────────────────────── */}
      <section id="partners" className="relative z-10 py-32 px-10"
        style={{ background: 'rgba(255,255,255,0.97)' }}>
        <div className="max-w-[1220px] mx-auto">
          <span className="eyebrow mb-3">Partners</span>
          <h2 className="section-title mb-14 tracking-[0.03em]" style={{ maxWidth: 520, fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
            Building trusted autonomy with the right partners.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <p className="section-lead mb-8">
                We work with strategic partners who are building the future of trusted autonomy — from hardware to infrastructure, standards to deployment.
              </p>
              <h3 className="font-display text-text-dark text-[1.1rem] mb-4 tracking-[0.03em]">Partner Types</h3>
              <div className="grid grid-cols-2 gap-2 mb-10">
                {['Telecom Operators','Universities & Labs','OEMs','System Integrators','Enterprises','Governments','Testing Labs','Insurance & Risk'].map(p => (
                  <div key={p} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-sm text-[0.875rem] text-text-body"
                    style={{ background: '#F6F8FD', border: '1px solid #D3DEED' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
              <div className="p-8 rounded-sm" style={{ background: '#06101F' }}>
                <p className="text-[1rem] mb-5" style={{ color: 'rgba(255,255,255,0.86)', lineHeight: 1.7 }}>
                  Interested in building trusted autonomous systems together? Contact us to explore partnership opportunities.
                </p>
                <button onClick={() => scrollTo('#contact')}
                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-sm font-semibold text-[0.9rem] transition-all duration-200 cursor-pointer"
                  style={{ background: 'transparent', color: '#DFC170', border: '2px solid rgba(200,168,76,0.4)' }}
                  onMouseEnter={e => Object.assign(e.currentTarget.style, { background: 'rgba(200,168,76,0.1)', borderColor: '#C8A84C' })}
                  onMouseLeave={e => Object.assign(e.currentTarget.style, { background: 'transparent', borderColor: 'rgba(200,168,76,0.4)' })}
                >
                  Become a Partner →
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-display text-text-dark text-[1.1rem] mb-5 tracking-[0.03em]">Partnership Opportunities</h3>
              <div className="flex flex-col">
                {[
                  'Physical AI trust labs',
                  'Connected autonomy assurance programs',
                  'Device and deployment validation',
                  'Partner lab enablement',
                  'Joint pilot programs',
                  'Research and workforce collaboration',
                  'Trusted registry participation',
                ].map((opp, i) => (
                  <div key={opp} className="flex items-start gap-4 py-4 border-b border-border-light text-[0.9rem] text-text-body"
                    style={{ borderTop: i === 0 ? '1px solid #D3DEED' : undefined }}>
                    <span className="font-mono text-[0.62rem] tracking-[0.05em] text-text-muted pt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {opp}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section className="relative z-10 py-32 px-10 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D2040 0%, #06101F 55%, #060F1A 100%)' }}>
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(24,96,255,0.12) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-[1220px] mx-auto">
          <span className="eyebrow eyebrow-light mb-5 text-center">Building Trust</span>
          <h2 className="font-display text-white leading-[0.98] mb-6 tracking-[0.03em]"
            style={{ fontSize: 'clamp(2.6rem,5.5vw,4.8rem)' }}>
            Building Trust Where<br />
            <span className="text-gold">AI Meets The Real World</span>
          </h2>
          <p className="section-lead section-lead-light mx-auto text-center mb-10 text-[1.05rem]">
            Making Physical AI safe, secure, certifiable, and scalable.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-semibold text-[0.95rem] transition-all duration-200 cursor-pointer"
              style={{ background: '#1860FF', color: '#fff', border: '2px solid #1860FF' }}
              onMouseEnter={e => Object.assign(e.currentTarget.style, { background: '#1245CC', borderColor: '#1245CC' })}
              onMouseLeave={e => Object.assign(e.currentTarget.style, { background: '#1860FF', borderColor: '#1860FF' })}
            >
              Partner With Us
            </button>
            <button onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-semibold text-[0.95rem] transition-all duration-200 cursor-pointer"
              style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.36)' }}
              onMouseEnter={e => Object.assign(e.currentTarget.style, { background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.65)' })}
              onMouseLeave={e => Object.assign(e.currentTarget.style, { background: 'transparent', borderColor: 'rgba(255,255,255,0.36)' })}
            >
              Contact ATL
            </button>
          </div>
        </div>
      </section>

      {/* ── Contact Form ───────────────────────────────── */}
      <section id="contact" className="relative z-10 py-32 px-10"
        style={{ background: '#F6F8FD', borderTop: '1px solid #D3DEED' }}>
        <div className="max-w-[1220px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.45fr] gap-20 items-start">
            {/* Left info */}
            <div>
              <span className="eyebrow mb-3">Contact</span>
              <h2 className="section-title mb-3 tracking-[0.03em]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                Let&apos;s build trusted autonomy together.
              </h2>
              <p className="text-[0.92rem] leading-[1.72] text-text-mid mb-8">
                We are currently engaging with selected partners, customers, labs, and strategic investors. Contact us to begin the conversation.
              </p>
              <div className="flex flex-col gap-3">
                {CONTACT_TYPES.map(ct => (
                  <div key={ct} className="flex items-center gap-3 text-[0.875rem] text-text-body">
                    <span className="w-2 h-2 rounded-full bg-blue flex-shrink-0" />
                    {ct}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="p-12 rounded-sm" style={{ background: '#fff', border: '1px solid #D3DEED' }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: 'rgba(24,96,255,0.08)', border: '2px solid #1860FF' }}>
                    ✓
                  </div>
                  <h3 className="font-display text-text-dark text-2xl tracking-[0.03em]">Inquiry Submitted</h3>
                  <p className="text-text-mid text-sm max-w-xs">
                    Thank you for reaching out. Our team will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Name', type: 'text', placeholder: 'Your full name' },
                      { label: 'Organization', type: 'text', placeholder: 'Company or institution' },
                      { label: 'Email', type: 'email', placeholder: 'you@organization.com' },
                      { label: 'Phone', type: 'tel', placeholder: '+1 (555) 000-0000' },
                    ].map(f => (
                      <div key={f.label} className="flex flex-col gap-1.5">
                        <label className="font-mono text-[0.63rem] tracking-[0.11em] uppercase text-text-mid">
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          className="px-4 py-2.5 rounded-sm text-[0.93rem] text-text-dark outline-none transition-colors duration-200"
                          style={{ background: '#F6F8FD', border: '1px solid #D3DEED' }}
                          onFocus={e => e.currentTarget.style.borderColor = '#1860FF'}
                          onBlur={e => e.currentTarget.style.borderColor = '#D3DEED'}
                        />
                      </div>
                    ))}
                    <div className="col-span-2 flex flex-col gap-1.5">
                      <label className="font-mono text-[0.63rem] tracking-[0.11em] uppercase text-text-mid">
                        Area of Interest
                      </label>
                      <select
                        className="px-4 py-2.5 rounded-sm text-[0.93rem] text-text-dark outline-none transition-colors duration-200"
                        style={{ background: '#F6F8FD', border: '1px solid #D3DEED' }}
                        onFocus={e => e.currentTarget.style.borderColor = '#1860FF'}
                        onBlur={e => e.currentTarget.style.borderColor = '#D3DEED'}
                      >
                        <option value="">Select an area...</option>
                        {['Partnership','Customer Pilot','Investor Discussion','Lab Enablement','OEM Readiness','Enterprise Deployment','Government / Smart City Program','Other'].map(o => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-2 flex flex-col gap-1.5">
                      <label className="font-mono text-[0.63rem] tracking-[0.11em] uppercase text-text-mid">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your program or initiative..."
                        className="px-4 py-2.5 rounded-sm text-[0.93rem] text-text-dark outline-none resize-y transition-colors duration-200"
                        style={{ background: '#F6F8FD', border: '1px solid #D3DEED', minHeight: 118 }}
                        onFocus={e => e.currentTarget.style.borderColor = '#1860FF'}
                        onBlur={e => e.currentTarget.style.borderColor = '#D3DEED'}
                      />
                    </div>
                  </div>
                  <button type="submit"
                    className="w-full py-4 rounded-sm font-bold text-[0.98rem] text-white tracking-[0.01em] transition-colors duration-200 cursor-pointer mt-1"
                    style={{ background: '#06101F' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#0B1D3A'}
                    onMouseLeave={e => e.currentTarget.style.background = '#06101F'}
                  >
                    Submit Inquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="relative z-10 px-10 pt-16 pb-8"
        style={{ background: '#06101F', borderTop: '1px solid #182E50' }}>
        <div className="max-w-[1220px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-14 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-6">
                <Image
                  src="/Logo.png"
                  alt="Autonomy Trust Labs"
                  width={220}
                  height={56}
                  style={{ width: 'auto', height: 56, objectFit: 'contain' }}
                />
              </div>
              <div className="font-mono text-[0.62rem] tracking-[0.1em] uppercase mb-3.5"
                style={{ color: 'rgba(255,255,255,0.48)' }}>
                Trust Infrastructure for the Autonomous World™
              </div>
              <p className="text-[0.855rem] leading-relaxed max-w-[280px]"
                style={{ color: 'rgba(255,255,255,0.48)' }}>
                Building the trust layer for the next generation of autonomous systems — from pilot to trusted, scalable deployment.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <div className="font-mono text-[0.62rem] tracking-[0.13em] uppercase mb-4.5"
                  style={{ color: 'rgba(255,255,255,0.48)' }}>
                  {title}
                </div>
                <ul className="flex flex-col gap-2.5 list-none">
                  {links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-[0.855rem] no-underline transition-colors duration-200"
                        style={{ color: 'rgba(255,255,255,0.44)' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.44)'}
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer bottom */}
          <div className="flex items-center justify-between flex-wrap gap-3 pt-6"
            style={{ borderTop: '1px solid #182E50' }}>
            <span className="font-mono text-[0.64rem] tracking-[0.06em]"
              style={{ color: 'rgba(255,255,255,0.48)' }}>
              © 2025 Autonomy Trust Labs. All rights reserved.
            </span>
            <span className="font-mono text-[0.64rem] tracking-[0.09em] uppercase"
              style={{ color: '#C8A84C', opacity: 0.75 }}>
              Trust Infrastructure for the Autonomous World™
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
