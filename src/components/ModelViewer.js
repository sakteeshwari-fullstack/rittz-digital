'use client';
import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% loaded</Html>;
}
function RobotModel({ rotationY }) {
  const { scene } = useGLTF('/models/cute_robot.glb');
  const modelRef = useRef();


  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotationY;
    }
  }, [rotationY]);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = -2; 
    }
  }, []);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2}
      position={[0, -1, 0]}
    />
  );
}


export default function RobotViewer() {
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth;
      const rotation = (x - 1) * Math.PI;
      setRotationY(rotation);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Canvas style={{ height: '500px', width: '500px', top: '70px', left: '-220px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      <Suspense fallback={<Loader />}>
        <RobotModel rotationY={rotationY} />
      </Suspense>
    </Canvas>
  );
}
