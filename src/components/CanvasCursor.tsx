"use client";

import { useEffect, useRef } from "react";

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

interface Trail {
    points: Point[];
    spring: number;
    friction: number;
    colour: string;
}

const TRAIL_COLOURS = [
    "rgba(106, 196, 59, 0.3)",
    "rgba(31, 146, 190, 0.26)",
    "rgba(242, 166, 40, 0.26)",
    "rgba(120, 91, 211, 0.24)",
    "rgba(224, 79, 111, 0.22)",
];

const createTrail = (x: number, y: number, index: number): Trail => ({
    points: Array.from({ length: 19 }, () => ({ x, y, vx: 0, vy: 0 })),
    spring: 0.18 + index * 0.002,
    friction: 0.68 - index * 0.003,
    colour: TRAIL_COLOURS[index % TRAIL_COLOURS.length],
});

const CanvasCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const finePointer = window.matchMedia("(pointer: fine)");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (!canvas || !finePointer.matches || reducedMotion.matches) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        let trails: Trail[] = [];
        let animationFrame: number | null = null;
        let lastMovement = 0;

        const resizeCanvas = () => {
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(window.innerWidth * pixelRatio);
            canvas.height = Math.round(window.innerHeight * pixelRatio);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        };

        const drawTrail = (trail: Trail) => {
            const [head] = trail.points;
            head.vx += (pointer.x - head.x) * trail.spring;
            head.vy += (pointer.y - head.y) * trail.spring;
            head.vx *= trail.friction;
            head.vy *= trail.friction;
            head.x += head.vx;
            head.y += head.vy;

            for (let index = 1; index < trail.points.length; index += 1) {
                const point = trail.points[index];
                const previous = trail.points[index - 1];
                point.x += (previous.x - point.x) * 0.32;
                point.y += (previous.y - point.y) * 0.32;
            }

            context.beginPath();
            context.moveTo(head.x, head.y);

            for (let index = 1; index < trail.points.length - 1; index += 1) {
                const point = trail.points[index];
                const next = trail.points[index + 1];
                context.quadraticCurveTo(
                    point.x,
                    point.y,
                    (point.x + next.x) / 2,
                    (point.y + next.y) / 2,
                );
            }

            context.strokeStyle = trail.colour;
            context.lineWidth = 1;
            context.stroke();
        };

        const render = (time: number) => {
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            trails.forEach(drawTrail);

            if (time - lastMovement > 1400) {
                animationFrame = null;
                context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                return;
            }

            animationFrame = window.requestAnimationFrame(render);
        };

        const handlePointerMove = (event: PointerEvent) => {
            if (event.pointerType && event.pointerType !== "mouse") return;

            pointer.x = event.clientX;
            pointer.y = event.clientY;
            lastMovement = window.performance.now();

            if (trails.length === 0) {
                trails = Array.from({ length: 7 }, (_, index) =>
                    createTrail(pointer.x, pointer.y, index),
                );
            }

            if (animationFrame === null) {
                animationFrame = window.requestAnimationFrame(render);
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden && animationFrame !== null) {
                window.cancelAnimationFrame(animationFrame);
                animationFrame = null;
                context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            }
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("pointermove", handlePointerMove);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[60] motion-reduce:hidden"
            aria-hidden="true"
        />
    );
};

export default CanvasCursor;
