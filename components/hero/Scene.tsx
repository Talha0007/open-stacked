"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// Positions generation logic (Pure function)
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

function ParticleOrb({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  const color1 = useMemo(() => new THREE.Color("#00aeef"), []);
  const color2 = useMemo(() => new THREE.Color("#2e3192"), []);

  // Use dynamic count for memoization
  const positions = useMemo(() => generateSphericalPositions(count), [count]);

  useFrame((state) => {
    const { x, y } = state.mouse;
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        x * 1.5,
        0.05,
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        y * 1.5,
        0.05,
      );
      groupRef.current.rotation.y = time * 0.15;
      groupRef.current.rotation.x = time * 0.08;
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
          opacity={1}
        />
      </Points>
    </group>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const init = () => {
      setMounted(true);
      setIsMobile(window.innerWidth < 768);
    };
    init();

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hydration safe check
  if (!mounted) return <div className="absolute inset-0 bg-black" />;

  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas
        // FIX 2: Cap DPR to 1.5 on mobile to prevent GPU strain
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{
          antialias: !isMobile, // Disable antialiasing on mobile for performance
          powerPreference: "high-performance",
        }}
        eventSource={
          typeof document !== "undefined"
            ? (document.body as HTMLElement)
            : undefined
        }
        eventPrefix="client"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={40} />
        <ambientLight intensity={1} />
        {/* FIX 1: Dynamic particle count */}
        <ParticleOrb count={isMobile ? 1200 : 4000} />
      </Canvas>
    </div>
  );
}
