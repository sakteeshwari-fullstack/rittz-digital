'use client';
import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const Particle = forwardRef(({ position }, ref) => {
  const meshRef = useRef();

  // Expose blast() to parent via ref
  useImperativeHandle(ref, () => ({
    blast: () => {
      const dir = new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
      );

      gsap.to(meshRef.current.position, {
        x: dir.x,
        y: dir.y,
        z: dir.z,
        duration: 1.5,
        ease: 'power3.out',
      });

      gsap.to(meshRef.current.material, {
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
      });
    }
  }));

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color={'white'} transparent opacity={1} />
    </mesh>
  );
});

function Cloud({ particleRefs }) {
  const positions = Array.from({ length: 50 }, () => [
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
  ]);

  return (
    <>
      {positions.map((pos, i) => (
        <Particle key={i} ref={(el) => (particleRefs.current[i] = el)} position={pos} />
      ))}
    </>
  );
}

export default function CloudBlastScene() {
  const particleRefs = useRef([]);

  const handleBlast = () => {
    particleRefs.current.forEach((particle) => {
      particle?.blast();
    });
  };

  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ height: '100vh' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Cloud particleRefs={particleRefs} />
      </Canvas>

      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <button
          onClick={handleBlast}
          style={{
            padding: '10px 20px',
            background: '#222',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          💥 Blast Cloud
        </button>
      </div>
    </>
  );
}
