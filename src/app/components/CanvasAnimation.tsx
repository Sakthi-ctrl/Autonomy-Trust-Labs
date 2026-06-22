'use client';

import { useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 105;
const FRAME_NAMES = [
  'frame_001','frame_002','frame_003','frame_004','frame_005','frame_006','frame_007',
  'frame_008','frame_009','frame_010','frame_011','frame_012','frame_013','frame_014',
  'frame_015','frame_016','frame_017','frame_018','frame_019','frame_020','frame_021',
  'frame_022','frame_023','frame_024','frame_025','frame_026','frame_027','frame_028',
  'frame_029','frame_030','frame_031','frame_032','frame_033','frame_034','frame_035',
  'frame_036','frame_037','frame_038','frame_039','frame_040','frame_041','frame_042',
  'frame_043','frame_044','frame_045','frame_046','frame_047','frame_048','frame_049',
  'frame_050','frame_051','frame_052','frame_053','frame_054','frame_055','frame_056',
  'frame_057','frame_058','frame_059','frame_060','frame_061','frame_062','frame_063',
  'frame_064','frame_065','frame_066','frame_067','frame_068','frame_069','frame_070',
  'frame_071','frame_072','frame_073','frame_074','frame_075','frame_076','frame_077',
  'frame_078','frame_079','frame_080','frame_081','frame_082','frame_083','frame_084',
  'frame_085','frame_086','frame_087','frame_088','frame_089','frame_090','frame_091',
  'frame_092','frame_093','frame_094','frame_095','frame_096','frame_097','frame_098',
  'frame_099','frame_100','frame_103','frame_104','frame_105','frame_109','frame_110',
];

interface Props {
  scrollProgress: number; // 0..1 (hero only)
  onLoaded: (pct: number) => void;
}

export default function CanvasAnimation({ scrollProgress, onLoaded }: Props) {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const imagesRef    = useRef<(HTMLImageElement | null)[]>([]);
  const loadedRef    = useRef(0);
  const rafRef       = useRef<number | null>(null);
  const lastFrameRef = useRef(-1);

  /* ── Draw one frame using COVER fit ──────────── */
  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = imagesRef.current[idx];
    if (!img?.complete || !img.naturalWidth) return;

    const cw = canvas.width, ch = canvas.height;
    const iw = img.naturalWidth, ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);      // COVER
    const dw = iw * scale, dh = ih * scale;
    const dx = (cw - dw) / 2, dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  const initRef = useRef(false);

  /* ── Preload all frames ───────────────────────── */
  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;
    
    loadedRef.current = 0;
    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);
    imagesRef.current = images;

    FRAME_NAMES.forEach((name, i) => {
      const img = new Image();
      const onDone = () => {
        loadedRef.current++;
        onLoaded(Math.round((loadedRef.current / TOTAL_FRAMES) * 100));
        // Draw first frame as soon as it loads
        if (i === 0 && img.complete) drawFrame(0);
      };
      img.onload  = onDone;
      img.onerror = onDone;
      img.src = `/frames/${name}.webp`;
      images[i] = img;
    });
  }, [onLoaded, drawFrame]);

  /* ── Re-draw on scroll progress ─────────────── */
  useEffect(() => {
    const frameIdx = Math.min(
      Math.round(scrollProgress * (TOTAL_FRAMES - 1)),
      TOTAL_FRAMES - 1
    );
    if (frameIdx === lastFrameRef.current) return;
    lastFrameRef.current = frameIdx;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(frameIdx));
  }, [scrollProgress, drawFrame]);

  /* ── Resize → full viewport ──────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const fi = Math.max(lastFrameRef.current, 0);
      lastFrameRef.current = -1;
      drawFrame(fi);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });
    return () => window.removeEventListener('resize', resize);
  }, [drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
}
