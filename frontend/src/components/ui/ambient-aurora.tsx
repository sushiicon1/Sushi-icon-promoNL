import React, { useRef, useEffect } from 'react';

const AuroraCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let time = 0;
        let animationFrameId: number;

        const setCanvasSize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Tiffany Blue & Cyan color palette - расширенная палитра с большим количеством оттенков Tiffany
        const colors = [
            { r: 10, g: 186, b: 181 },   // Tiffany Blue #0ABAB5 - основной
            { r: 28, g: 197, b: 192 },   // Light Tiffany #1CC5C0
            { r: 45, g: 218, b: 203 },   // Bright Tiffany #2DDACB
            { r: 0, g: 183, b: 249 },    // Bright Cyan #00B7F9
            { r: 0, g: 204, b: 255 },    // Cyan #00CCFF
            { r: 62, g: 255, b: 255 },   // Bright Aqua #3EFFFF
            { r: 0, g: 227, b: 255 },    // Light Blue #00E3FF
            { r: 0, g: 115, b: 216 },    // Deep Blue #0073D8
            { r: 0, g: 90, b: 204 },     // Dark Blue #005ACC
            { r: 135, g: 255, b: 250 },  // Very Light Tiffany #87FFFA
            { r: 0, g: 167, b: 225 },    // Sky Blue #00A7E1
            { r: 72, g: 209, b: 204 },   // Medium Tiffany #48D1CC
            { r: 0, g: 139, b: 139 },    // Dark Cyan #008B8B
            { r: 95, g: 158, b: 160 },   // Cadet Blue #5F9EA0
            { r: 0, g: 191, b: 255 },    // Deep Sky Blue #00BFFF
            { r: 175, g: 238, b: 238 }   // Pale Tiffany #AFEEEE
        ];

        class Orb {
            x: number;
            y: number;
            radius: number;
            color: { r: number; g: number; b: number };
            vx: number;
            vy: number;

            constructor() {
                this.x = Math.random() * (canvas?.width || window.innerWidth);
                this.y = Math.random() * (canvas?.height || window.innerHeight);
                this.radius = Math.random() * 700 + 250; // Увеличил размер для более насыщенного фона
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.vx = (Math.random() - 0.5) * 1.5; // Немного увеличил скорость для динамичности
                this.vy = (Math.random() - 0.5) * 1.5;
            }

            draw() {
                if (!canvas || !ctx) return;
                // Основной орб с более ярким центром для насыщенности Tiffany
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1.2)`);
                gradient.addColorStop(0.1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`);
                gradient.addColorStop(0.2, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.85)`);
                gradient.addColorStop(0.35, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.65)`);
                gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.45)`);
                gradient.addColorStop(0.65, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.3)`);
                gradient.addColorStop(0.8, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.18)`);
                gradient.addColorStop(0.9, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.1)`);
                gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                
                // Дополнительное яркое свечение в центре для большей насыщенности
                const glowGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 0.5);
                glowGradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`);
                glowGradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.5)`);
                glowGradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
                
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                if (!canvas) return;
                this.x += this.vx + Math.sin(time * 0.002) * 1.5;
                this.y += this.vy + Math.cos(time * 0.002) * 1.5;

                const width = canvas.width || window.innerWidth;
                const height = canvas.height || window.innerHeight;

                if (this.x < -this.radius || this.x > width + this.radius || 
                    this.y < -this.radius || this.y > height + this.radius) {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                }
            }
        }

        let orbs: Orb[] = [];
        // Adaptive number of orbs based on screen size - increased for better visibility and more Tiffany colors
        const orbCount = window.innerWidth < 768 ? 20 : window.innerWidth < 1024 ? 28 : 35;
        for (let i = 0; i < orbCount; i++) {
            orbs.push(new Orb());
        }

        function animate() {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time++;

            orbs.forEach(orb => {
                orb.update();
                orb.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                mixBlendMode: 'normal',
                opacity: 1
            }}
        />
    );
};

export default AuroraCanvas;

