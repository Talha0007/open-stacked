"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// FIX 1: Math.random() ko component se baahar nikaal diya
// Taaki render function "Pure" rahe aur linting error na aaye.
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

function ParticleOrb() {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  const color1 = useMemo(() => new THREE.Color("#00aeef"), []);
  const color2 = useMemo(() => new THREE.Color("#2e3192"), []);

  // Memoize positions using our external function
  const positions = useMemo(() => generateSphericalPositions(4000), []);

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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Agar error "set-state-in-effect" phir bhi aaye, to niche wali line add karein:
  // if (typeof window === "undefined" || !mounted) return null;

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        {/* Placeholder to avoid layout shift */}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        eventSource={
          typeof window !== "undefined"
            ? (document.body as HTMLElement)
            : undefined
        }
        eventPrefix="client"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={40} />
        <ambientLight intensity={1} />
        <ParticleOrb />
      </Canvas>
    </div>
  );
}
