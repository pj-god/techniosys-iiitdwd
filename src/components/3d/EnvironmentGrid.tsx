'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Grid, Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';

interface EnvironmentGridProps {
  currentPhase: number;
}

export function EnvironmentGrid({ currentPhase }: EnvironmentGridProps) {
  const embersGroupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (embersGroupRef.current) {
      embersGroupRef.current.rotation.y += delta * 0.02;
    }
  });

  const gridSectionColor = currentPhase === 2 ? '#ff0055' : '#00f0ff';
  const gridCellColor = currentPhase === 2 ? '#44001a' : '#002f3d';

  return (
    <>
      {/* Infinite Glowing Cyber Grid Floor at y = -3 (Soft fading into void black) */}
      <Grid
        position={[0, -3, 0]}
        infiniteGrid
        cellSize={1.2}
        cellThickness={0.5}
        cellColor={gridCellColor}
        sectionSize={3.6}
        sectionThickness={1.0}
        sectionColor={gridSectionColor}
        fadeDistance={30}
        fadeStrength={2.0}
      />

      {/* Gentle, minimal ambient floating embers (positioned with depth, non-distracting) */}
      <group ref={embersGroupRef}>
        <Sparkles
          count={35}
          scale={[20, 10, 15]}
          size={2.0}
          speed={0.4}
          noise={0.2}
          color={currentPhase === 2 ? '#ff0055' : '#00f0ff'}
          opacity={0.6}
        />
        <Sparkles
          count={25}
          scale={[24, 12, 18]}
          size={1.6}
          speed={0.3}
          noise={0.1}
          color="#ffffff"
          opacity={0.4}
        />
      </group>

      {/* Deep Space Background Stars (Soft, non-distracting in distance) */}
      <Stars
        radius={45}
        depth={40}
        count={1200}
        factor={2}
        saturation={0.3}
        fade
        speed={0.4}
      />
    </>
  );
}
