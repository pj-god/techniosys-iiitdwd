'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface CoreGeometryProps {
  currentPhase: number;
}

export function CoreGeometry({ currentPhase }: CoreGeometryProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const innerCoreRef = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const speedMultiplier = currentPhase === 1 ? 1.8 : currentPhase === 2 ? 1.2 : 0.8;

    // Smooth rotation of the cyber prism
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x += delta * 0.4 * speedMultiplier;
      innerCoreRef.current.rotation.y += delta * 0.6 * speedMultiplier;
      const pulse = 1 + Math.sin(time * 2) * 0.04;
      innerCoreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.3 * speedMultiplier;
      wireframeRef.current.rotation.y += delta * 0.5 * speedMultiplier;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.7 * speedMultiplier;
      ringRef.current.rotation.x = Math.sin(time * 0.6) * 0.3;
    }

    // Dynamic offset based on phase:
    // Phase 0: Floats gracefully on the right side [2.7, 0.2, -0.6] keeping the center text 100% visible
    // Phase 1: Shifts left/back [-2.0, -1.2, -1.5]
    // Phase 2: Shifts right/down [2.5, -4.0, -1.0]
    if (groupRef.current) {
      const targetX = currentPhase === 0 ? 2.7 : currentPhase === 1 ? -2.0 : 2.5;
      const targetY = currentPhase === 0 ? 0.2 : currentPhase === 1 ? -1.2 : -4.0;
      const targetZ = currentPhase === 0 ? -0.6 : currentPhase === 1 ? -1.5 : -1.0;

      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 2.5, delta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 2.5, delta);
      groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 2.5, delta);
    }
  });

  // Dynamic cyber color palette
  const accentColor = currentPhase === 2 ? '#ff0055' : '#00f0ff';
  const wireColor = currentPhase === 2 ? '#ff3377' : '#38bdf8';

  return (
    <group ref={groupRef} position={[2.7, 0.2, -0.6]}>
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.5}>
        {/* Inner Crystalline Quantum Core (Faceted Octahedron) */}
        <mesh ref={innerCoreRef}>
          <octahedronGeometry args={[1.0, 0]} />
          <meshStandardMaterial
            color={accentColor}
            emissive={accentColor}
            emissiveIntensity={0.7}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Outer Minimalist Wireframe Shell */}
        <mesh ref={wireframeRef}>
          <octahedronGeometry args={[1.4, 0]} />
          <meshStandardMaterial
            color={wireColor}
            wireframe
            emissive={wireColor}
            emissiveIntensity={1.0}
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* Single Sleek Slender Orbital Ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.9, 0.018, 16, 80]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive={accentColor}
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={1.0}
          />
        </mesh>

        {/* Sleek Corner Accent Markers */}
        {[0, 1, 2, 3].map((idx) => {
          const angle = (idx / 4) * Math.PI * 2;
          const r = 1.9;
          return (
            <mesh
              key={idx}
              position={[Math.cos(angle) * r, Math.sin(angle) * r, 0]}
            >
              <octahedronGeometry args={[0.06, 0]} />
              <meshBasicMaterial color={idx % 2 === 0 ? '#00f0ff' : '#ff0055'} />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
}
