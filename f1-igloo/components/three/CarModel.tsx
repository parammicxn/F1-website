"use client";

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

export function CarFallback() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.6, 1.2]} />
        <meshStandardMaterial color="#e10600" metalness={0.2} roughness={0.4} />
      </mesh>
      <mesh position={[0.9, -0.45, 0.6]}>
        <cylinderGeometry args={[0.35, 0.35, 0.3, 24]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[-0.9, -0.45, 0.6]}>
        <cylinderGeometry args={[0.35, 0.35, 0.3, 24]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[0.9, -0.45, -0.6]}>
        <cylinderGeometry args={[0.35, 0.35, 0.3, 24]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[-0.9, -0.45, -0.6]}>
        <cylinderGeometry args={[0.35, 0.35, 0.3, 24]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </group>
  );
}

type CarModelProps = {
  url?: string;
  scale?: number;
  rotationY?: number;
};

export default function CarModel({ url = "/models/f1.glb", scale = 1.0, rotationY = Math.PI / 8 }: CarModelProps) {
  const { scene } = useGLTF(url);

  const car = useMemo(() => {
    const root = scene.clone() as Group;
    root.traverse((obj) => {
      const anyObj = obj as unknown as { castShadow?: boolean; receiveShadow?: boolean };
      anyObj.castShadow = true;
      anyObj.receiveShadow = true;
    });
    root.rotation.y = rotationY;
    root.scale.setScalar(scale);
    return root;
  }, [scene, scale, rotationY]);

  return <primitive object={car} />;
}

useGLTF.preload("/models/f1.glb");