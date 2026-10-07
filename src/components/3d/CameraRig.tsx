'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraRigProps {
  scrollProgress: number; // 0 to 1 continuous or stepped
  currentPhase: number;
}

export function CameraRig({ scrollProgress }: CameraRigProps) {
  // Poses for each phase
  // Phase 1 (Hero): pos [0, 0, 5], target [0, 0, 0]
  // Phase 2 (Mega Rush): pos [-4, -2, 6], target [-3, -1.6, 0]
  // Phase 3 (Leadership): pos [4, -5, 4], target [2.5, -4.2, 0]

  const p1 = new THREE.Vector3(0, 0, 5);
  const t1 = new THREE.Vector3(0, 0, 0);

  const p2 = new THREE.Vector3(-4, -2, 6);
  const t2 = new THREE.Vector3(-3, -1.6, 0);

  const p3 = new THREE.Vector3(4, -5, 4);
  const t3 = new THREE.Vector3(2.5, -4.2, 0);

  const currentCamPos = useRef(new THREE.Vector3(0, 0, 5));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    const { camera, pointer } = state;

    // Calculate interpolated target position based on scrollProgress (0 to 1)
    const targetPos = new THREE.Vector3();
    const targetLookAt = new THREE.Vector3();

    if (scrollProgress <= 0.5) {
      // Interpolate Phase 1 -> Phase 2
      const t = scrollProgress / 0.5;
      // Smooth cubic easing
      const easeT = t * t * (3 - 2 * t);
      targetPos.lerpVectors(p1, p2, easeT);
      targetLookAt.lerpVectors(t1, t2, easeT);
    } else {
      // Interpolate Phase 2 -> Phase 3
      const t = (scrollProgress - 0.5) / 0.5;
      const easeT = t * t * (3 - 2 * t);
      targetPos.lerpVectors(p2, p3, easeT);
      targetLookAt.lerpVectors(t2, t3, easeT);
    }

    // Subtle parallax from mouse pointer
    const mouseX = pointer.x * 0.45;
    const mouseY = pointer.y * 0.35;
    targetPos.x += mouseX;
    targetPos.y += mouseY;

    // Lerp camera for ultra-smooth buttery motion
    currentCamPos.current.lerp(targetPos, Math.min(1, delta * 3.5));
    currentLookAt.current.lerp(targetLookAt, Math.min(1, delta * 4));

    camera.position.copy(currentCamPos.current);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
