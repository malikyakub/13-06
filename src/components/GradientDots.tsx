"use client";

import React, { useEffect, useRef } from "react";

const GradientDots = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Dot properties - 7 dots with different colors, sizes, and opacities
    const dots = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        radius: 80,
        color: "#14b8a6", // teal
        opacity: 0.4,
        speedX: 1.2,
        speedY: 0.8,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.2,
        radius: 150,
        color: "#a855f7", // purple
        opacity: 0.3,
        speedX: -1.0,
        speedY: 1.3,
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.7,
        radius: 110,
        color: "#f43f5e", // rose
        opacity: 0.5,
        speedX: 0.9,
        speedY: -1.1,
      },
      {
        x: canvas.width * 0.1,
        y: canvas.height * 0.8,
        radius: 95,
        color: "#3b82f6", // blue
        opacity: 0.35,
        speedX: 1.5,
        speedY: -0.7,
      },
      {
        x: canvas.width * 0.9,
        y: canvas.height * 0.5,
        radius: 130,
        color: "#f59e0b", // amber
        opacity: 0.25,
        speedX: -0.8,
        speedY: 1.0,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.1,
        radius: 70,
        color: "#10b981", // emerald
        opacity: 0.45,
        speedX: 0.6,
        speedY: 1.4,
      },
      {
        x: canvas.width * 0.4,
        y: canvas.height * 0.9,
        radius: 160,
        color: "#8b5cf6", // violet
        opacity: 0.2,
        speedX: -1.3,
        speedY: -0.9,
      },
    ];

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      dots.forEach((dot) => {
        // Update position
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.speedX *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.speedY *= -1;

        // Draw gradient dot with individual opacity
        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.radius
        );
        const opacityHex = Math.floor(dot.opacity * 255).toString(16).padStart(2, '0');
        gradient.addColorStop(0, `${dot.color}${opacityHex}`); // center with dot's opacity
        gradient.addColorStop(1, `${dot.color}00`); // transparent at edges

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full blur-3xl"
        style={{ filter: "blur(80px)" }}
      />
    </div>
  );
};

export default GradientDots;
