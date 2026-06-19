// components/BackgroundScene.tsx
"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, PerspectiveCamera } from "@react-three/drei";
import { useScrollStore } from "@/store/useScrollStore";
import * as THREE from "three";

const generateSphericalPositions = (count: number) => {
  const p = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = 2.8 + Math.random() * 0.15;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    p[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    p[i * 3 + 2] = radius * Math.cos(phi);
  }
  return p;
};

function ParallaxParticleGlobe({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  const color1 = useMemo(() => new THREE.Color("#00aeef"), []);
  const color2 = useMemo(() => new THREE.Color("#2e3192"), []);
  const positions = useMemo(() => generateSphericalPositions(count), [count]);

  const scrollProgress = useScrollStore((state) => state.scrollProgress);
  const activeSection = useScrollStore((state) => state.activeSection);

  useFrame((state) => {
    const { x: mouseX, y: mouseY } = state.mouse;
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // 1. CENTERED TO SCROLLED SCALING
      const targetScale = THREE.MathUtils.lerp(
        1.0,
        0.55,
        Math.min(scrollProgress * 2, 1),
      );
      groupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.1),
      );

      // 2. MOUSE TRACKING DAMPING
      const mouseDamp = THREE.MathUtils.lerp(
        1.5,
        0.4,
        Math.min(scrollProgress * 1.5, 1),
      );

      // 3. HARD SPATIAL LOCKING FOR PERFECT CENTERING
      let targetX = 0;
      let targetZ = 0;

      // Fallback fallback handling to prevent bounding offsets on load
      const currentMouseX = mouseX || 0;
      const currentMouseY = mouseY || 0;

      if (scrollProgress === 0 || activeSection === "home") {
        // Explicitly forces target base to center
        targetX = 0;
        targetZ = 0;
      } else if (activeSection === "services") {
        targetX = -2.2;
      } else if (activeSection === "infra") {
        targetX = 2.2;
        targetZ = 1.0;
      }

      // Combine position metrics
      const finalX = targetX + currentMouseX * mouseDamp;
      const finalY = currentMouseY * mouseDamp;

      // Smoothed Vector Line Interpolation
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        finalX,
        0.07,
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        finalY,
        0.07,
      );
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        targetZ,
        0.07,
      );

      // 4. COMBINED SYSTEM ROTATION
      groupRef.current.rotation.y =
        time * 0.15 + scrollProgress * Math.PI * 1.2;
      groupRef.current.rotation.x =
        time * 0.08 + scrollProgress * Math.PI * 0.4;
    }

    if (pointsRef.current) {
      const mixRatio = (Math.sin(time * 0.5) + 1) / 2;
      const material = pointsRef.current.material as THREE.PointsMaterial;
      material.color.lerpColors(color1, color2, mixRatio);
    }
  });

  return (
    <group ref={groupRef}>
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function BackgroundScene() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return <div className="fixed inset-0 bg-black -z-10" />;

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none bg-black">
      <Canvas
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
        eventSource={
          typeof document !== "undefined"
            ? (document.body as HTMLElement)
            : undefined
        }
        eventPrefix="client"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={40} />
        <ambientLight intensity={1.2} />
        <ParallaxParticleGlobe count={isMobile ? 1200 : 4000} />
      </Canvas>
    </div>
  );
}
