"use client";

import { useCallback, useEffect, useRef } from "react";

type Vector2D = {
  x: number;
  y: number;
};

class Particle {
  pos: Vector2D = { x: 0, y: 0 };
  vel: Vector2D = { x: 0, y: 0 };
  acc: Vector2D = { x: 0, y: 0 };
  target: Vector2D = { x: 0, y: 0 };

  closeEnoughTarget = 100;
  maxSpeed = 1.0;
  maxForce = 0.1;
  particleSize = 10;
  isKilled = false;

  startColor = { r: 0, g: 0, b: 0 };
  targetColor = { r: 0, g: 0, b: 0 };
  colorWeight = 0;
  colorBlendRate = 0.01;

  move() {
    let proximityMult = 1;
    const distance = Math.hypot(this.pos.x - this.target.x, this.pos.y - this.target.y);

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
    }

    const towardsTarget: Vector2D = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    };

    const magnitude = Math.hypot(towardsTarget.x, towardsTarget.y);
    if (magnitude > 0) {
      towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult;
      towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult;
    }

    const steer: Vector2D = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    };

    const steerMagnitude = Math.hypot(steer.x, steer.y);
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce;
      steer.y = (steer.y / steerMagnitude) * this.maxForce;
    }

    this.acc.x += steer.x;
    this.acc.y += steer.y;

    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D, drawAsPoints: boolean) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
    }

    const currentColor = {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    };

    const fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;

    if (drawAsPoints) {
      ctx.fillStyle = fillStyle;
      ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
    } else {
      ctx.fillStyle = fillStyle;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  kill(width: number, height: number) {
    if (!this.isKilled) {
      const randomPos = this.generateRandomPos(width / 2, height / 2, (width + height) / 2);
      this.target.x = randomPos.x;
      this.target.y = randomPos.y;

      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
      };
      this.targetColor = { r: 4, g: 38, b: 53 };
      this.colorWeight = 0;

      this.isKilled = true;
    }
  }

  private generateRandomPos(x: number, y: number, mag: number): Vector2D {
    const randomX = Math.random() * 1000;
    const randomY = Math.random() * 500;

    const direction = {
      x: randomX - x,
      y: randomY - y,
    };

    const magnitude = Math.hypot(direction.x, direction.y);
    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag;
      direction.y = (direction.y / magnitude) * mag;
    }

    return {
      x: x + direction.x,
      y: y + direction.y,
    };
  }
}

const pixelSteps = 6;
const drawAsPoints = true;

const generateRandomPos = (x: number, y: number, mag: number): Vector2D => {
  const randomX = Math.random() * 1000;
  const randomY = Math.random() * 500;

  const direction = {
    x: randomX - x,
    y: randomY - y,
  };

  const magnitude = Math.hypot(direction.x, direction.y);
  if (magnitude > 0) {
    direction.x = (direction.x / magnitude) * mag;
    direction.y = (direction.y / magnitude) * mag;
  }

  return {
    x: x + direction.x,
    y: y + direction.y,
  };
};

interface ParticleTextEffectProps {
  words?: string[];
  className?: string;
  maxWidth?: string;
  minHeight?: string;
}

const DEFAULT_WORDS = ["SUSHI ICON"];

export function ParticleTextEffect({ words = DEFAULT_WORDS, className, maxWidth = "700px", minHeight = "320px" }: ParticleTextEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameCountRef = useRef(0);
  const wordIndexRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, isPressed: false, isRightClick: false });
  const animationPhaseRef = useRef<'assembled' | 'exploding' | 'scattered'>('assembled');
  const phaseFrameCountRef = useRef(0);

  const nextWord = useCallback((word: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    const offscreenCtx = offscreenCanvas.getContext("2d");
    if (!offscreenCtx) return;

    offscreenCtx.fillStyle = "white";
    const maxFontSize = Math.min(Math.max(80, Math.floor(canvas.height * 0.36)), Math.floor(canvas.width * 0.32));
    const minFontSize = 48;
    const maxTextWidth = canvas.width * 0.85;
    let fontSize = maxFontSize;

    const applyFont = () => {
      offscreenCtx.font = `800 ${fontSize}px 'Inter', 'Segoe UI', sans-serif`;
    };

    applyFont();

    while (fontSize > minFontSize && offscreenCtx.measureText(word).width > maxTextWidth) {
      fontSize -= 4;
      applyFont();
    }
    offscreenCtx.textAlign = "center";
    offscreenCtx.textBaseline = "middle";
    const verticalOffset = Math.min(canvas.height * 0.02, 12);
    const baselineY = canvas.height / 2 + verticalOffset;
    offscreenCtx.fillText(word, canvas.width / 2, baselineY);

    const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    const newColor = {
      r: 24 + Math.random() * 50,
      g: 200 + Math.random() * 45,
      b: 215 + Math.random() * 30,
    };

    const particles = particlesRef.current;
    let particleIndex = 0;

    const coordsIndexes: number[] = [];
    for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
      coordsIndexes.push(i);
    }

    for (let i = coordsIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]];
    }

    for (const coordIndex of coordsIndexes) {
      const pixelIndex = coordIndex;
      const alpha = pixels[pixelIndex + 3];

      if (alpha > 0) {
        const x = (pixelIndex / 4) % canvas.width;
        const y = Math.floor(pixelIndex / 4 / canvas.width);

        let particle: Particle;

        if (particleIndex < particles.length) {
          particle = particles[particleIndex];
          particle.isKilled = false;
          particleIndex++;
        } else {
          particle = new Particle();

          const randomPos = generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2);
          particle.pos.x = randomPos.x;
          particle.pos.y = randomPos.y;

          particle.maxSpeed = Math.random() * 8 + 8 ;
          particle.maxForce = particle.maxSpeed * 0.04;
          particle.particleSize = Math.random() * 6 + 4;
          particle.colorBlendRate = Math.random() * 0.04 + 0.008;

          particles.push(particle);
        }

        particle.startColor = {
          r: particle.startColor.r + (particle.targetColor.r - particle.startColor.r) * particle.colorWeight,
          g: particle.startColor.g + (particle.targetColor.g - particle.startColor.g) * particle.colorWeight,
          b: particle.startColor.b + (particle.targetColor.b - particle.startColor.b) * particle.colorWeight,
        };
        particle.targetColor = newColor;
        particle.colorWeight = 0;

        particle.target.x = x;
        particle.target.y = y;
      }
    }

    const opacityThreshold = 120;

    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      const pixelIndex = (Math.floor(particle.target.y) * canvas.width + Math.floor(particle.target.x)) * 4;
      if (pixels[pixelIndex + 3] < opacityThreshold) {
        particle.kill(canvas.width, canvas.height);
      }
    }

    for (let i = particleIndex; i < particles.length; i++) {
      particles[i].kill(canvas.width, canvas.height);
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles = particlesRef.current;

    ctx.fillStyle = "rgba(0, 58, 88, 0.12)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      particle.move();
      particle.draw(ctx, drawAsPoints);

      if (particle.isKilled) {
        if (particle.pos.x < 0 || particle.pos.x > canvas.width || particle.pos.y < 0 || particle.pos.y > canvas.height) {
          particles.splice(i, 1);
        }
      }
    }

    if (mouseRef.current.isPressed && mouseRef.current.isRightClick) {
      particles.forEach((particle) => {
        const distance = Math.hypot(particle.pos.x - mouseRef.current.x, particle.pos.y - mouseRef.current.y);
        if (distance < 50) {
          particle.kill(canvas.width, canvas.height);
        }
      });
    }

    frameCountRef.current++;
    phaseFrameCountRef.current++;

    // Автоматический цикл рассыпания и сборки
    // ~60 FPS, поэтому:
    // - Собрано: 180 кадров (3 секунды) - ускорено
    // - Рассыпание: 60 кадров (1 секунда) - ускорено
    // - Рассыпано: 90 кадров (1.5 секунды) - ускорено
    // - Сборка: 60 кадров (1 секунда) - ускорено
    
    if (animationPhaseRef.current === 'assembled') {
      // Частицы собраны, ждем 3 секунды, затем начинаем рассыпание
      if (phaseFrameCountRef.current >= 420) {
        animationPhaseRef.current = 'exploding';
        phaseFrameCountRef.current = 0;
        // Рассыпаем все частицы
        particles.forEach((particle) => {
          particle.kill(canvas.width, canvas.height);
        });
      }
    } else if (animationPhaseRef.current === 'exploding') {
      // Процесс рассыпания, ждем 1 секунду
      if (phaseFrameCountRef.current >= 60) {
        animationPhaseRef.current = 'scattered';
        phaseFrameCountRef.current = 0;
      }
    } else if (animationPhaseRef.current === 'scattered') {
      // Частицы рассыпаны, ждем 1.5 секунды, затем начинаем сборку
      if (phaseFrameCountRef.current >= 90) {
        animationPhaseRef.current = 'assembled';
        phaseFrameCountRef.current = 0;
        // Собираем частицы обратно в текст
        wordIndexRef.current = 0;
        nextWord(words[wordIndexRef.current]);
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [nextWord, words]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeObserver = new ResizeObserver(() => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(320, Math.floor(rect.width));
      const aspectRatio = 2.8;
      const minHeightValue = parseInt(minHeight) || 320;
      const calculatedHeight = Math.max(minHeightValue, Math.floor(width / aspectRatio));
      const height = Math.max(minHeightValue, Math.min(calculatedHeight, Math.floor(rect.height)));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        particlesRef.current = [];
        frameCountRef.current = 0;
        wordIndexRef.current = 0;
        animationPhaseRef.current = 'assembled';
        phaseFrameCountRef.current = 0;
        nextWord(words[0]);
      }
    });

    resizeObserver.observe(container);

    particlesRef.current = [];
    frameCountRef.current = 0;
    wordIndexRef.current = 0;
    animationPhaseRef.current = 'assembled';
    phaseFrameCountRef.current = 0;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    nextWord(words[0]);
    animate();

    const handleMouseDown = (event: MouseEvent) => {
      mouseRef.current.isPressed = true;
      mouseRef.current.isRightClick = event.button === 2;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
    };

    const handleMouseUp = () => {
      mouseRef.current.isPressed = false;
      mouseRef.current.isRightClick = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("contextmenu", handleContextMenu);

    return () => {
      resizeObserver.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [words, nextWord, animate, minHeight]);

  const sectionClassName = [
    "relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-[#9af9ff]/95 via-[#2fd9ff]/92 to-[#006ad6]/96 p-6 text-white",
    "sm:rounded-[44px] sm:p-10 lg:p-12",
    "shadow-[0_45px_110px_rgba(4,114,158,0.32)] ring-1 ring-white/40 backdrop-blur-2xl",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section 
      ref={containerRef} 
      className={sectionClassName}
      style={{ 
        maxWidth: maxWidth, 
        minHeight: minHeight,
        width: '100%'
      }}
    >
      <div className="animated-border" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.7),rgba(255,255,255,0)_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_78%,rgba(4,118,217,0.4),rgba(4,118,217,0)_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_120deg_at_50%_20%,rgba(255,255,255,0.35)_0deg,rgba(0,189,255,0)_140deg)]" />

      <canvas ref={canvasRef} className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[28px] sm:inset-4 sm:h-[calc(100%-2rem)] sm:w-[calc(100%-2rem)] sm:rounded-[36px]" aria-hidden="true" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end" style={{ paddingBottom: '0px' }}>
        <div className="flex flex-col items-center gap-1 sm:gap-2" style={{ transform: 'translateY(80px)' }}>
          <h2 className="sushi-rolls-title">
            THE SUSHI AND ROLL
          </h2>
        </div>
      </div>
    </section>
  );
}
