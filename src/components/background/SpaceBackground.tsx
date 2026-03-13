"use client";

import * as React from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  a: number;
  vx: number;
  vy: number;
  tw: number;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function SpaceBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const starsRef = React.useRef<Star[]>([]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const safeCanvas = canvas;

    const reduced = prefersReducedMotion();
    const ctx = safeCanvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const safeCtx = ctx;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { innerWidth: w, innerHeight: h } = window;
      safeCanvas.width = Math.floor(w * dpr);
      safeCanvas.height = Math.floor(h * dpr);
      safeCanvas.style.width = `${w}px`;
      safeCanvas.style.height = `${h}px`;
      safeCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Re-seed stars on resize for consistent density.
      const count = Math.max(140, Math.floor((w * h) / 12000));
      starsRef.current = Array.from({ length: count }, () => ({
        x: rand(0, w),
        y: rand(0, h),
        r: rand(0.6, 1.8),
        a: rand(0.25, 0.95),
        vx: rand(-0.06, 0.08),
        vy: rand(-0.03, 0.06),
        tw: rand(0.002, 0.01),
      }));
    }

    let last = performance.now();
    function tick(now: number) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dt = Math.min(32, now - last);
      last = now;

      safeCtx.clearRect(0, 0, w, h);

      // Space gradient (kept subtle so content stays clean).
      const g = safeCtx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "rgba(14, 18, 46, 0.72)");
      g.addColorStop(0.55, "rgba(7, 9, 24, 0.90)");
      g.addColorStop(1, "rgba(3, 5, 14, 1)");
      safeCtx.fillStyle = g;
      safeCtx.fillRect(0, 0, w, h);

      // Nebula glows (bright accents).
      const neb1 = safeCtx.createRadialGradient(
        w * 0.18,
        h * 0.22,
        0,
        w * 0.18,
        h * 0.22,
        Math.max(w, h) * 0.7,
      );
      neb1.addColorStop(0, "rgba(56, 189, 248, 0.16)"); // sky
      neb1.addColorStop(0.45, "rgba(168, 85, 247, 0.10)"); // violet
      neb1.addColorStop(1, "rgba(0, 0, 0, 0)");
      safeCtx.fillStyle = neb1;
      safeCtx.fillRect(0, 0, w, h);

      const neb2 = safeCtx.createRadialGradient(
        w * 0.78,
        h * 0.65,
        0,
        w * 0.78,
        h * 0.65,
        Math.max(w, h) * 0.8,
      );
      neb2.addColorStop(0, "rgba(251, 191, 36, 0.12)"); // amber
      neb2.addColorStop(0.55, "rgba(59, 130, 246, 0.08)"); // blue
      neb2.addColorStop(1, "rgba(0, 0, 0, 0)");
      safeCtx.fillStyle = neb2;
      safeCtx.fillRect(0, 0, w, h);

      // Stars
      for (const s of starsRef.current) {
        // motion
        if (!reduced) {
          s.x += s.vx * (dt * 0.06);
          s.y += s.vy * (dt * 0.06);
          if (s.x < -10) s.x = w + 10;
          if (s.x > w + 10) s.x = -10;
          if (s.y < -10) s.y = h + 10;
          if (s.y > h + 10) s.y = -10;

          s.a += Math.sin(now * s.tw) * 0.002;
          s.a = Math.max(0.18, Math.min(0.98, s.a));
        }

        safeCtx.beginPath();
        safeCtx.fillStyle = `rgba(255, 255, 255, ${s.a})`;
        safeCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        safeCtx.fill();
      }

      if (!reduced) rafRef.current = window.requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Draw once for reduced motion users; otherwise animate.
    if (reduced) {
      tick(performance.now());
    } else {
      rafRef.current = window.requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />;
}
