import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  layer: number;
}

interface Nebula {
  x: number;
  y: number;
  size: number;
  hue: number;
  opacity: number;
}

export const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const nebulasRef = useRef<Nebula[]>([]);
  const animationRef = useRef<number>();
  const scrollRef = useRef(0);
  const timeRef = useRef(0);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      initializeSpace();
    };

    const initializeSpace = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 10000); // Reduced density slightly
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5, // Slightly smaller stars
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        layer: Math.floor(Math.random() * 3),
      }));
      // Reduced nebula count to 0 to remove circular shadows
      nebulasRef.current = [];
    };

    const drawStar = (star: Star, time: number, scrollOffset: number) => {
      const parallaxFactor = (star.layer + 1) * 0.1; // Reduced parallax speed
      const y = star.y - scrollOffset * parallaxFactor;
      const wrappedY = ((y % canvas.height) + canvas.height) % canvas.height;

      // Simple opacity twinkle
      const twinkle = Math.abs(Math.sin(time * star.twinkleSpeed * 5));
      const finalOpacity = star.opacity * (0.5 + 0.5 * twinkle);

      // Color/Fill
      const lightness = star.layer === 0 ? 70 : star.layer === 1 ? 80 : 90;
      ctx.fillStyle = `hsla(200, 50%, ${lightness}%, ${finalOpacity})`;

      ctx.beginPath();
      ctx.arc(star.x, wrappedY, star.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      timeRef.current += 0.016;
      scrollRef.current = window.scrollY;

      // Clear canvas for transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Removed nebula drawing
      starsRef.current.forEach(star => drawStar(star, timeRef.current, scrollRef.current));

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', () => {
      scrollRef.current = window.scrollY;
    }, { passive: true });

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
    </>
  );
};
