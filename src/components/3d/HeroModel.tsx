"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export function HeroModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    // Slight continuous rotation
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
    
    // React to global HTML scroll
    const scrollY = window.scrollY || 0;
    const targetY = -scrollY * 0.003;
    const targetRotX = scrollY * 0.001;

    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY + (state.mouse.y * 2) / 2,
      0.05
    );
    
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      targetRotX,
      0.05
    );
    
    // Animate position slightly based on mouse
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x, 
      (state.mouse.x * 2) / 2, 
      0.05
    );
  });

  return (
    <group>
      <Float 
        speed={1.5} 
        rotationIntensity={1.5} 
        floatIntensity={2} 
        floatingRange={[-0.1, 0.1]}
      >
        <mesh ref={meshRef} scale={1.5}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.025}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.3}
            temporalDistortion={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            color="#3b82f6"
          />
        </mesh>
      </Float>
      
      {/* Floating particles around the model */}
      <Sparkles count={150} scale={12} size={2} speed={0.4} opacity={0.6} color="#3b82f6" />
      <Sparkles count={50} scale={10} size={3} speed={0.2} opacity={0.3} color="#10b981" />
    </group>
  );
}
