'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HologramPlanesProps {
  currentPhase: number;
}

export function HologramPlanes({ currentPhase }: HologramPlanesProps) {
  const leftGroupRef = useRef<THREE.Group>(null!);
  const rightGroupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const { pointer } = state;
    const time = state.clock.getElapsedTime();

    // Mouse tilt effect on left gallery planes (Phase 2)
    if (leftGroupRef.current) {
      const targetRotX = pointer.y * 0.25;
      const targetRotY = pointer.x * 0.35 + 0.35; // angled toward center
      leftGroupRef.current.rotation.x = THREE.MathUtils.damp(
        leftGroupRef.current.rotation.x,
        targetRotX,
        4,
        delta
      );
      leftGroupRef.current.rotation.y = THREE.MathUtils.damp(
        leftGroupRef.current.rotation.y,
        targetRotY,
        4,
        delta
      );
      leftGroupRef.current.position.y = -1.8 + Math.sin(time * 1.5) * 0.12;
    }

    // Mouse tilt effect on right team planes (Phase 3)
    if (rightGroupRef.current) {
      const targetRotX = pointer.y * 0.2;
      const targetRotY = pointer.x * 0.3 - 0.35; // angled inward
      rightGroupRef.current.rotation.x = THREE.MathUtils.damp(
        rightGroupRef.current.rotation.x,
        targetRotX,
        4,
        delta
      );
      rightGroupRef.current.rotation.y = THREE.MathUtils.damp(
        rightGroupRef.current.rotation.y,
        targetRotY,
        4,
        delta
      );
      rightGroupRef.current.position.y = -4.8 + Math.cos(time * 1.5) * 0.1;
    }
  });

  return (
    <>
      {/* LEFT GALLERY HOLOGRAM WALL (Activated/Highlighted in Phase 2) */}
      <group ref={leftGroupRef} position={[-5, -1.8, 1.5]}>
        {[-1.2, 0, 1.2].map((xOffset, idx) => (
          <group key={idx} position={[xOffset * 1.6, idx * 0.3, idx * -0.5]}>
            {/* Hologram Glass Backing */}
            <mesh>
              <planeGeometry args={[1.8, 2.4]} />
              <meshPhysicalMaterial
                color={currentPhase === 1 ? '#00f0ff' : '#0f172a'}
                transmission={0.8}
                roughness={0.2}
                transparent
                opacity={currentPhase === 1 ? 0.35 : 0.15}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Glowing Wireframe Border */}
            <lineSegments>
              <edgesGeometry args={[new THREE.PlaneGeometry(1.8, 2.4)]} />
              <lineBasicMaterial
                color={currentPhase === 1 ? '#00f0ff' : '#0077aa'}
                linewidth={2}
                transparent
                opacity={currentPhase === 1 ? 0.9 : 0.4}
              />
            </lineSegments>

            {/* Tech Corner Accent Markers */}
            <mesh position={[0.8, 1.1, 0.02]}>
              <boxGeometry args={[0.15, 0.03, 0.01]} />
              <meshBasicMaterial color="#00f0ff" />
            </mesh>
            <mesh position={[-0.8, -1.1, 0.02]}>
              <boxGeometry args={[0.15, 0.03, 0.01]} />
              <meshBasicMaterial color="#ff0055" />
            </mesh>

            {/* Subtle floating hologram ring */}
            <mesh position={[0, 0, -0.05]} rotation={[0, 0, Math.PI / 4]}>
              <ringGeometry args={[0.5, 0.53, 32]} />
              <meshBasicMaterial
                color="#00f0ff"
                transparent
                opacity={0.3}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* RIGHT COMMAND CENTER HOLOGRAM FRAMES (Activated/Highlighted in Phase 3) */}
      <group ref={rightGroupRef} position={[4.5, -4.8, 0.5]}>
        {[-1, 0, 1].map((xOffset, idx) => (
          <group key={idx} position={[xOffset * 1.5, (idx - 1) * 0.25, -idx * 0.4]}>
            {/* Hologram Profile Glass */}
            <mesh>
              <planeGeometry args={[1.6, 2.2]} />
              <meshPhysicalMaterial
                color={currentPhase === 2 ? '#ff0055' : '#0f172a'}
                transmission={0.85}
                roughness={0.15}
                transparent
                opacity={currentPhase === 2 ? 0.4 : 0.15}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Glowing Magenta Wireframe Border */}
            <lineSegments>
              <edgesGeometry args={[new THREE.PlaneGeometry(1.6, 2.2)]} />
              <lineBasicMaterial
                color={currentPhase === 2 ? '#ff0055' : '#770033'}
                linewidth={2}
                transparent
                opacity={currentPhase === 2 ? 0.9 : 0.3}
              />
            </lineSegments>

            {/* Futuristic Diamond Badge in Center */}
            <mesh position={[0, 0.5, 0.02]} rotation={[0, 0, Math.PI / 4]}>
              <planeGeometry args={[0.3, 0.3]} />
              <meshBasicMaterial
                color={currentPhase === 2 ? '#ff0055' : '#334155'}
                wireframe
              />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
}
