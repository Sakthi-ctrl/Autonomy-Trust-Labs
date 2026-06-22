'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

import Navbar      from './components/Navbar';
import Preloader   from './components/Preloader';
import HeroSection from './components/HeroSection';
import {
  Section1Reveal,
  Section2Capabilities,
  Section3TrustLayer,
  Section4Lifecycle,
  Section5Industries,
} from './components/ScrollSections';
import SolutionsSection from './components/SolutionsSection';
import FinalSection     from './components/FinalSection';

const CanvasAnimation = dynamic(
  () => import('./components/CanvasAnimation'),
  { ssr: false }
);

export default function HomePage() {
  const [loadPct,          setLoadPct]          = useState(0);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [scrollProgress,   setScrollProgress]   = useState(0);

  const heroRef  = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<import('lenis').default | null>(null);
  const rafRef   = useRef<number | null>(null);

  /* ── frame loading ─────────────────────────────── */
  const handleLoaded = useCallback((pct: number) => {
    setLoadPct(pct);
    if (pct >= 100) setTimeout(() => setPreloaderVisible(false), 700);
  }, []);

  // Fallback: force hide preloader after 4 seconds to ensure website is accessible
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setLoadPct(100);
      setPreloaderVisible(false);
    }, 4000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  /* ── Lenis smooth scroll ────────────────────────── */
  useEffect(() => {
    let lenis: import('lenis').default;
    (async () => {
      const { default: Lenis } = await import('lenis');
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      lenisRef.current = lenis;
      const raf = (time: number) => { lenis.raf(time); rafRef.current = requestAnimationFrame(raf); };
      rafRef.current = requestAnimationFrame(raf);
    })();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenisRef.current?.destroy();
    };
  }, []);

  /* ── Scroll progress → hero section only ──────────
     Canvas animation plays only while hero is on screen.
     Once scrolled past hero bottom, progress locks at 1.
  ─────────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const heroH = hero.offsetHeight;         // hero section height (≈ 100vh)
      const scrollY = window.scrollY;
      // Map 0..heroH → 0..1
      const p = Math.min(scrollY / heroH, 1);
      setScrollProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Preloader */}
      <Preloader percent={loadPct} visible={preloaderVisible} />

      {/* ── Fixed full-screen canvas layer ─────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          // Background colour that perfectly matches the first frame
          backgroundColor: '#787680',
        }}
      >
        <CanvasAnimation scrollProgress={scrollProgress} onLoaded={handleLoaded} />

        {/* Dark left-side gradient for hero text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(105deg, rgba(6,16,31,0.82) 0%, rgba(6,16,31,0.45) 45%, rgba(6,16,31,0.0) 75%)',
            pointerEvents: 'none',
          }}
        />

        {/* Bottom gradient — blends into hero bottom / lifecycle bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '18%',
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(6,16,31,0.4) 50%, rgba(6,16,31,0.92) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Sticky navigation */}
      <Navbar />

      {/* ── Scrollable content ──────────────────────── */}
      <main style={{ position: 'relative', zIndex: 1 }}>

        {/* HERO — transparent so canvas shows through */}
        <div ref={heroRef}>
          <HeroSection isReady={!preloaderVisible} />
        </div>

        {/* Scroll storytelling — each section has its own solid/semi bg */}
        <Section1Reveal />
        <Section2Capabilities />
        <Section3TrustLayer />
        <Section4Lifecycle />
        <Section5Industries />
        <SolutionsSection />

        {/* Light corporate sections + footer */}
        <FinalSection />
      </main>
    </>
  );
}
