"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [role='button'], [data-interactive='true']";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const squareRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) {
      return;
    }
    document.body.classList.add("custom-cursor");

    const onMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
      if (squareRef.current) {
        squareRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const tick = () => {
      const lerp = 0.16;
      ring.current.x += (mouse.current.x - ring.current.x) * lerp;
      ring.current.y += (mouse.current.y - ring.current.y) * lerp;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      animationRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    animationRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("custom-cursor");
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-50 rounded-full border border-steel transition-all duration-brutal ease-brutal"
        style={{
          width: hovering ? 60 : 40,
          height: hovering ? 60 : 40
        }}
      />
      <div
        ref={squareRef}
        className="pointer-events-none fixed z-[51] border border-charcoal transition-all duration-brutal ease-brutal"
        style={{
          width: hovering ? 28 : 16,
          height: hovering ? 28 : 16,
          backgroundColor: hovering ? "#1a1a2e" : "#4A90B8"
        }}
      />
    </>
  );
}
