'use client';

import { useEffect, useState } from 'react';
import { Belanosima } from 'next/font/google';

const belanosima = Belanosima({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const NAV_LINKS = [
  { label: 'Platform',   href: '#solutions'  },
  { label: 'Industries', href: '#industries' },
  { label: 'Partners',   href: '#partners'   },
  { label: 'Contact Now', href: '#contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 500,
        height: 70,
        display: 'flex', alignItems: 'center',
        padding: '0 40px',
        background: scrolled ? 'rgba(6,16,31,0.97)' : 'rgba(6,16,31,0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid #182E50',
        transition: 'background 0.3s ease',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <span className={belanosima.className} style={{ fontSize: '1.45rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.01em' }}>
            Autonomy Trust <span style={{ fontWeight: 400, color: '#C8A84C' }}>Labs</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}
          className="hidden md:flex">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                style={{ fontSize: '0.88rem', fontWeight: 500, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.01em' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col gap-1.5 p-2 bg-transparent border-0 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block', width: 20, height: 2, background: '#fff',
                transition: 'all 0.3s',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translateY(8px)'
                  : i === 2 ? 'rotate(-45deg) translateY(-8px)'
                  : 'scaleX(0)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div style={{
          position: 'absolute', top: 70, left: 0, right: 0,
          background: 'rgba(6,16,31,0.97)', borderTop: '1px solid #182E50',
          padding: 24, display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
              style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
