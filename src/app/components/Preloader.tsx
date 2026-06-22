'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Props {
  percent: number;
  visible: boolean;
}

export default function Preloader({ percent, visible }: Props) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barRef.current) barRef.current.style.width = `${percent}%`;
  }, [percent]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: '#06101F',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'all' : 'none',
        transition: 'opacity 0.8s ease',
      }}
    >
      {/* Blueprint grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4,
        backgroundImage: 'linear-gradient(rgba(24,96,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(24,96,255,0.035) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Blue glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(24,96,255,0.12) 0%, transparent 65%)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            src="/Logo.png"
            alt="Autonomy Trust Labs"
            width={240}
            height={62}
            style={{ width: 240, height: 'auto', objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Spinner */}
        <div style={{ position: 'relative', width: 64, height: 64 }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid #182E50' }} />
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: '#C8A84C', borderRightColor: 'rgba(200,168,76,0.3)',
            animation: 'atlSpin 1.2s linear infinite',
          }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.65rem', color: '#C8A84C' }}>
              {percent}%
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ width: 260, height: 1, background: '#182E50', overflow: 'hidden' }}>
          <div
            ref={barRef}
            style={{ height: '100%', width: '0%', background: 'linear-gradient(90deg, #1860FF, #C8A84C)', transition: 'width 0.3s ease' }}
          />
        </div>

        <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.48)' }}>
          Loading System Assets…
        </p>
      </div>

      <style>{`@keyframes atlSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
