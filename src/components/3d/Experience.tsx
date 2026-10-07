'use client';

import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CoreGeometry } from './CoreGeometry';
import { EnvironmentGrid } from './EnvironmentGrid';
import { CameraRig } from './CameraRig';
import { HologramPlanes } from './HologramPlanes';

interface ExperienceProps {
  scrollProgress: number;
  currentPhase: number;
}

export function Experience({ scrollProgress, currentPhase }: ExperienceProps) {
  const cyanLightRef = useRef<THREE.PointLight>(null!);
  const magentaLightRef = useRef<THREE.PointLight>(null!);
  const dirLightRef = useRef<THREE.DirectionalLight>(null!);

  useFrame((_, delta) => {
    // Dynamic light color and intensity shifting
    if (cyanLightRef.current && magentaLightRef.current) {
      if (currentPhase === 0) {
        // Cyan-dominant (Phase 1)
        cyanLightRef.current.intensity = THREE.MathUtils.damp(
          cyanLightRef.current.intensity,
          4.0,
          3,
          delta
        );
        magentaLightRef.current.intensity = THREE.MathUtils.damp(
          magentaLightRef.current.intensity,
          1.0,
          3,
          delta
        );
      } else if (currentPhase === 1) {
        // Dual high-intensity (Phase 2 - Mega Rush)
        cyanLightRef.current.intensity = THREE.MathUtils.damp(
          cyanLightRef.current.intensity,
          3.5,
          3,
          delta
        );
        magentaLightRef.current.intensity = THREE.MathUtils.damp(
          magentaLightRef.current.intensity,
          3.5,
          3,
          delta
        );
      } else {
        // Magenta-dominant (Phase 3 - Leadership)
        cyanLightRef.current.intensity = THREE.MathUtils.damp(
          cyanLightRef.current.intensity,
          1.2,
          3,
          delta
        );
        magentaLightRef.current.intensity = THREE.MathUtils.damp(
          magentaLightRef.current.intensity,
          5.0,
          3,
          delta
        );
      }
    }
  });

  return (
    <Suspense fallback={null}>
      {/* Cinematic Depth Fog matching Deep Void Black #07090e */}
      <fog attach="fog" args={['#07090e', 8, 38]} />

      {/* Dynamic Lighting System */}
      <ambientLight intensity={0.4} />

      {/* Directional Key Light */}
      <directionalLight
        ref={dirLightRef}
        position={[10, 10, 5]}
        intensity={1.2}
        color={currentPhase === 2 ? '#ff6699' : '#b3f5ff'}
      />

      {/* Primary Cyan Accent Light */}
      <pointLight
        ref={cyanLightRef}
        position={[-6, 3, 4]}
        intensity={4}
        distance={25}
        color="#00f0ff"
      />

      {/* Secondary Magenta Accent Light */}
      <pointLight
        ref={magentaLightRef}
        position={[6, -4, 3]}
        intensity={1.5}
        distance={25}
        color="#ff0055"
      />

      {/* Core Accent Light */}
      <pointLight position={[2.7, 0.5, 2]} intensity={0.6} color="#00f0ff" distance={8} />

      {/* Camera Rig driven by Scroll */}
      <CameraRig scrollProgress={scrollProgress} currentPhase={currentPhase} />

      {/* Hero Core Geometry at [0, 0, 0] */}
      <CoreGeometry currentPhase={currentPhase} />

      {/* Environment Cyber Grid Floor and Particles */}
      <EnvironmentGrid currentPhase={currentPhase} />

      {/* Floating 3D Hologram Cards */}
      <HologramPlanes currentPhase={currentPhase} />
    </Suspense>
  );
}
