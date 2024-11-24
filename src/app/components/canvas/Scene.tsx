'use client';

import { StrictMode } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from '../../experience/Experience';
import { LevaPane } from '../../experience/common';

const Scene = () => {
  return (
    <div className="relative h-screen">
      <StrictMode>
        <LevaPane />
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 100,
            position: [-4, 3, 6],
          }}
        >
          <Experience />
        </Canvas>
      </StrictMode>
    </div>
  );
};

export default Scene;
