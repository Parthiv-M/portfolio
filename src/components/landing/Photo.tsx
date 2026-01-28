'use client'

import { useEffect, useRef } from "react";

export default function Photo() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        let animationFrameId: number;

        const resize = () => {
            if (containerRef.current && canvas) {
                const rect = containerRef.current.getBoundingClientRect();

                // Set display size (css pixels)
                canvas.style.width = `${rect.width}px`;
                canvas.style.height = `${rect.height}px`;

                // Set actual size in memory (scaled to DPR)
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;

                // Normalize coordinate system to use css pixels
                ctx.scale(dpr, dpr);
            }
        };

        const render = () => {
            if (!ctx || !canvas) return;
            const rect = canvas.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;

            ctx.clearRect(0, 0, w, h);

            // Densely packed dots
            const dotSpacing = 8;
            const dotRadius = 1;
            const influenceRadius = 200;

            const relMouseX = mousePos.current.x - rect.left;
            const relMouseY = mousePos.current.y - rect.top;

            ctx.fillStyle = "rgba(48, 46, 40, 0.5)"; // Base opacity

            for (let x = dotSpacing / 2; x < w; x += dotSpacing) {
                for (let y = dotSpacing / 2; y < h; y += dotSpacing) {
                    const dx = x - relMouseX;
                    const dy = y - relMouseY;
                    const distSq = dx * dx + dy * dy;

                    let opacity = 0.1;
                    if (distSq < influenceRadius * influenceRadius) {
                        const dist = Math.sqrt(distSq);
                        // Darken dots close to mouse
                        opacity = 0.2 + (1 - dist / influenceRadius) * 0.5;
                        ctx.fillStyle = `rgba(48, 46, 40, ${opacity})`;
                    } else {
                        ctx.fillStyle = `rgba(48, 46, 40, 0.1)`;
                    }

                    ctx.beginPath();
                    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            animationFrameId = requestAnimationFrame(render);
        };

        resize();
        render();

        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
        mousePos.current = { x: -1000, y: -1000 };
    };

    return (
        <div
            ref={containerRef}
            className="group relative flex items-end justify-center w-full h-full min-h-[400px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
                aria-label="Interactive background dots that react to mouse movement"
            />
            <div className="relative z-10 pointer-events-none">
                <img
                    src="/ppixel.png"
                    alt='Parthiv Menon'
                    className="w-full max-w-[300px] md:max-w-[400px] relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-auto"
                />
            </div>
        </div>
    )
}