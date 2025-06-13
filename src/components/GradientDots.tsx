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

    // Dot properties
    const dots = [
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.5,
        radius: 100,
        color: "#14b8a6",
        speedX: 0.5,
        speedY: 0.3,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.4,
        radius: 120,
        color: "#a855f7",
        speedX: -0.4,
        speedY: 0.5,
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.6,
        radius: 90,
        color: "#f43f5e",
        speedX: 0.3,
        speedY: -0.4,
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

        // Draw gradient dot
        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.radius
        );
        gradient.addColorStop(0, `${dot.color}80`); // 50% opacity
        gradient.addColorStop(1, `${dot.color}00`); // 0% opacity

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
