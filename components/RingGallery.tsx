"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function RingGallery() {
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [currentProject, setCurrentProject] = useState<Project>(projects[0]);
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    const fadeFrame = window.requestAnimationFrame(() => {
      setImageVisible(false);
      window.setTimeout(() => {
        setImageVisible(true);
      }, 50);
    });

    return () => window.cancelAnimationFrame(fadeFrame);
  }, [currentProject]);

  /* ─── Main 3D ring effect ─── */
  useEffect(() => {
    const ring = ringRef.current;
    const stage = stageRef.current;
    if (!ring || !stage || projects.length === 0) return;

    let cleanupFn: (() => void) | undefined;

    const build = () => {
      if (cleanupFn) cleanupFn();
      ring.innerHTML = "";

      /* ─── Responsive config ─── */
      const width = window.innerWidth;
      let radius = 650;
      let cardW = 60;
      let cardH = 36;
      let totalCards = Math.max(75, projects.length * 5);

      if (width < 640) {
        radius = 260;
        cardW = 22;
        cardH = 44;
        totalCards = Math.max(45, projects.length * 3);
      } else if (width < 1024) {
        radius = 450;
        cardW = 28;
        cardH = 56;
        totalCards = Math.max(60, projects.length * 4);
      }

      /* ─── Build ring cards ─── */
      const cardsData: Array<{
        element: HTMLDivElement;
        angle: number;
        data: Project;
        calculatedZIndex: number;
      }> = [];

      const abortController = new AbortController();
      const { signal } = abortController;
      let touchMoved = false;

      // Card hover tracking variable to pause auto-rotation
      let isHovered = false;

      for (let i = 0; i < totalCards; i++) {
        const itemData = projects[i % projects.length];
        const item = document.createElement("div");

        const angle = (i / totalCards) * Math.PI * 2;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const rotateY = (angle * 180) / Math.PI;

        // Bookshelf / Card Deck tangent orientation (+90 deg offset)
        gsap.set(item, {
          position: "absolute",
          width: `${cardW}px`,
          height: `${cardH}px`,
          left: `-${cardW / 2}px`,
          top: `-${cardH / 2}px`,
          borderRadius: "2px",
          overflow: "hidden",
          cursor: "pointer",
          backgroundColor: "#111111",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          x: x,
          z: z,
          rotationY: rotateY + 90,
          backfaceVisibility: "visible",
          pointerEvents: "auto",
          webkitBackfaceVisibility: "visible",
        });

        const img = document.createElement("img");
        img.src = itemData.image;
        img.alt = itemData.title;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.pointerEvents = "none";
        item.appendChild(img);

        const cardObj = {
          element: item,
          angle,
          data: itemData,
          calculatedZIndex: 1,
        };
        cardsData.push(cardObj);

        /* ─── Hover / click ─── */
        const onEnter = () => {
          isHovered = true; // Ring rotation pauses
          setCurrentProject(itemData);
          item.style.zIndex = "99999";
          gsap.to(item, {
            scale: 1.6,
            rotationY: rotateY + 45,
            filter: "brightness(1.3)",
            boxShadow: "0 12px 25px rgba(0,0,0,0.5)",
            duration: 0.22,
            overwrite: "auto",
          });
        };

        const onLeave = () => {
          isHovered = false; // Ring rotation resumes
          item.style.zIndex = `${cardObj.calculatedZIndex}`;
          gsap.to(item, {
            scale: 1,
            rotationY: rotateY + 90,
            filter: "brightness(1)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            duration: 0.22,
            overwrite: "auto",
          });
        };

        const onClick = (e: Event) => {
          e.stopPropagation();
          if (touchMoved) {
            touchMoved = false;
            return;
          }
          setCurrentProject(itemData);
          window.location.assign(`/portfolio/${itemData.slug}`);
        };

        item.addEventListener("mouseenter", onEnter, { signal });
        item.addEventListener("mouseleave", onLeave, { signal });
        item.addEventListener("click", onClick, { signal });

        ring.appendChild(item);
      }

      /* ─── Animation state ─── */
      let targetRotationY = 0;
      let targetRotationX = width < 640 ? -35 : -12;
      let currentRotationY = 0;
      let currentRotationX = targetRotationX;
      let prevMouseX = 0;
      let isDragging = false;
      let isFastMode = false;
      let dragVelocityY = 0;

      const updateRingTransforms = (rotYDeg: number) => {
        const rotYRad = (rotYDeg * Math.PI) / 180;
        cardsData.forEach((card) => {
          const effectiveAngle = card.angle + rotYRad;
          const currentZ = Math.cos(effectiveAngle) * radius;
          const zIndexValue = Math.round(currentZ + radius) + 1;
          card.calculatedZIndex = zIndexValue;

          if (!card.element.matches(":hover")) {
            card.element.style.zIndex = `${zIndexValue}`;
            const normalizedDepth = (currentZ + radius) / (2 * radius);
            const opacity = 0.25 + normalizedDepth * 0.75;
            card.element.style.opacity = opacity.toFixed(2);
          }
        });
      };

      /* ─── Mouse ─── */
      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        prevMouseX = e.clientX;
      };

      const onMouseMove = (e: MouseEvent) => {
        const deltaX = e.clientX - prevMouseX;

        if (isDragging) {
          const speed = isFastMode ? 1.2 : 0.6;
          targetRotationY -= deltaX * speed;
          dragVelocityY = -deltaX * speed;
        } else {
          targetRotationY -= deltaX * 0.03;
          const centerY = window.innerHeight / 2;
          const normalized = (e.clientY - centerY) / (window.innerHeight / 2);
          const baseTilt = width < 640 ? -20 : -12;
          targetRotationX = baseTilt - normalized * 2.5;
        }

        prevMouseX = e.clientX;
      };

      const onMouseUp = () => {
        isDragging = false;
        isFastMode = false;
      };

      const onDoubleClick = (e: MouseEvent) => {
        isDragging = true;
        isFastMode = true;
        prevMouseX = e.clientX;
      };

      /* ─── Touch ─── */
      let touchActive = false;

      const onTouchStart = (e: TouchEvent) => {
        touchActive = true;
        isDragging = true;
        touchMoved = false;
        prevMouseX = e.touches[0].clientX;
      };

      const onTouchMove = (e: TouchEvent) => {
        if (!touchActive) return;
        e.preventDefault();
        const touch = e.touches[0];
        const dx = touch.clientX - prevMouseX;
        if (Math.abs(dx) > 2) touchMoved = true;
        targetRotationY -= dx * 0.8;
        dragVelocityY = -dx * 0.8;
        prevMouseX = touch.clientX;
      };

      const onTouchEnd = () => {
        touchActive = false;
        isDragging = false;
      };

      stage.addEventListener("mousedown", onMouseDown, { signal });
      stage.addEventListener("dblclick", onDoubleClick, { signal });
      window.addEventListener("mousemove", onMouseMove, { signal });
      window.addEventListener("mouseup", onMouseUp, { signal });

      stage.addEventListener("touchstart", onTouchStart, {
        signal,
        passive: false,
      });
      stage.addEventListener("touchmove", onTouchMove, {
        signal,
        passive: false,
      });
      stage.addEventListener("touchend", onTouchEnd, { signal });

      const lerp = (start: number, end: number, factor: number) =>
        start + (end - start) * factor;

      let rafId = 0;

      const tickHandler = () => {
        // Sirf tabhi auto rotate hoga jab user drag na kar raha ho AUR card par hover na ho
        if (!isDragging && !isHovered) {
          targetRotationY += 0.12;
        }

        if (!isDragging && Math.abs(dragVelocityY) > 0.05) {
          targetRotationY += dragVelocityY;
          dragVelocityY *= 0.92;
        }

        currentRotationY = lerp(currentRotationY, targetRotationY, 0.05);
        currentRotationX = lerp(currentRotationX, targetRotationX, 0.03);

        ring.style.transform = `rotateX(${currentRotationX.toFixed(2)}deg) rotateY(${currentRotationY.toFixed(2)}deg)`;

        updateRingTransforms(currentRotationY);

        rafId = window.requestAnimationFrame(tickHandler);
      };

      rafId = window.requestAnimationFrame(tickHandler);

      cleanupFn = () => {
        abortController.abort();
        window.cancelAnimationFrame(rafId);
      };
    };

    /* ─── Init + debounced resize rebuild ─── */
    build();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 250);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      if (cleanupFn) cleanupFn();
    };
  }, []);

  /* ─── Render ─── */
  return (
    <section className="relative w-full overflow-hidden pb-16 md:pb-40 select-none">
      {/* Stage */}
      <div
        ref={stageRef}
        className="relative w-full h-105 sm:h-140 md:h-165 flex justify-center items-center cursor-grab active:cursor-grabbing perspective-distant touch-none"
      >
        {/* Center Card */}
        <div className="absolute z-40 pointer-events-none flex justify-center items-center px-4">
          <Link
            href={`/portfolio/${currentProject.slug}`}
            className="w-55 sm:w-70 md:w-75 bg-white border border-slate-200 rounded-sm p-2.5 sm:p-3 shadow-2xl text-center pointer-events-auto cursor-pointer transition-transform duration-250 hover:-translate-y-2 hover:scale-[1.01]"
          >
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              width={1000}
              height={1000}
              unoptimized
              className={`w-full h-34 sm:h-47.5 md:h-55 object-cover rounded-sm mb-3 bg-slate-100 transition-opacity duration-150 ${
                imageVisible ? "opacity-100" : "opacity-30"
              }`}
            />
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded inline-block max-w-full truncate">
              {currentProject.techStack.slice(0, 3).join(" / ")}
            </span>
            <h3 className="text-sm md:text-base font-bold text-slate-900 mt-2 mb-1 line-clamp-1">
              {currentProject.title}
            </h3>
            <p className="text-[10px] md:text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-2">
              {currentProject.category}
              {currentProject.client ? ` • ${currentProject.client}` : ""}
            </p>
            <div className="text-[10px] md:text-[11px] font-extrabold text-lime-600 tracking-wider">
              VIEW PROJECT →
            </div>
          </Link>
        </div>

        {/* 3D Ring */}
        <div className="absolute w-full h-full flex justify-center items-center transform-3d pointer-events-none z-20">
          <div
            ref={ringRef}
            className="relative w-px h-px transform-3d will-change-transform pointer-events-none"
            style={{ transformOrigin: "center center 0px" }}
          />
        </div>
      </div>
    </section>
  );
}
