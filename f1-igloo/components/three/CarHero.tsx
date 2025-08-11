"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import { Group, Vector3, Euler } from "three";
import CarModel, { CarFallback } from "@/components/three/CarModel";
import ErrorBoundary from "@/components/three/ErrorBoundary";

function Rig() {
  const ref = useRef<Group>(null!);
  const targetPos = useRef(new Vector3(0, 0, 0));
  const targetRot = useRef(new Euler(0, 0, 0));

  useFrame((state) => {
    const p = state.pointer; // normalized -1..1
    // Target rotation and position based on pointer
    const rotX = (-p.y || 0) * 0.25; // tilt up/down
    const rotY = (p.x || 0) * 0.4; // yaw
    const posX = (p.x || 0) * 0.5;
    const posY = (p.y || 0) * 0.25;

    targetRot.current.set(rotX, rotY, 0);
    targetPos.current.set(posX, posY, 0);

    // Smoothly lerp towards targets
    ref.current.rotation.x += (targetRot.current.x - ref.current.rotation.x) * 0.1;
    ref.current.rotation.y += (targetRot.current.y - ref.current.rotation.y) * 0.1;
    ref.current.position.x += (targetPos.current.x - ref.current.position.x) * 0.1;
    ref.current.position.y += (targetPos.current.y - ref.current.position.y) * 0.1;
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <ErrorBoundary fallback={<CarFallback />}>
        <CarModel scale={1.2} />
      </ErrorBoundary>
    </group>
  );
}

export default function CarHero() {
  return (
    <section className="relative pt-24 md:pt-28">
      <div className="h-[75vh] md:h-[85vh]">
        <Canvas
          shadows
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0.9, 4.5], fov: 50 }}
        >
          {/* Lights */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <directionalLight position={[-5, 3, -3]} intensity={0.3} />

          {/* Model rig that follows cursor */}
          <Rig />

          {/* Ground contact shadow */}
          <ContactShadows position={[0, -0.9, 0]} opacity={0.35} scale={10} blur={2.5} far={4} />

          {/* Subtle environment */}
          <Environment preset="studio" />
        </Canvas>
      </div>

      {/* Optional overlay title */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]">
          F1 Car
          <span className="text-brand">.</span>
        </h1>
      </div>
    </section>
  );
}