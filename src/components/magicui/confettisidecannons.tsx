"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function ConfettiSideCannons() {
  useEffect(() => {
    const duration = 10 * 1000; // 10 seconds
    const end = Date.now() + duration;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#66ff99"];

    const frame = () => {
      if (Date.now() > end) return;

      // Left cannon (more intense)
      confetti({
        particleCount: 5, // Increased from 2
        angle: 60,
        spread: 75, // Wider spread
        startVelocity: 80, // Faster
        origin: { x: 0, y: 0.7 },
        colors: colors,
        shapes: ["circle", "square"], // Variety
        scalar: 1.2, // Slightly larger
      });

      // Right cannon (more intense)
      confetti({
        particleCount: 5, // Increased from 2
        angle: 120,
        spread: 75, // Wider spread
        startVelocity: 80, // Faster
        origin: { x: 1, y: 0.7 },
        colors: colors,
        shapes: ["circle", "square"], // Variety
        scalar: 1.2, // Slightly larger
      });

      // Occasional bursts from bottom
      if (Math.random() > 0.7) {
        confetti({
          particleCount: 15,
          spread: 70,
          startVelocity: 55,
          origin: { x: 0.5, y: 1 },
          colors: colors,
        });
      }

      requestAnimationFrame(frame);
    };

    frame();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
}
