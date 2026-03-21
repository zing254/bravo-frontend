import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function App() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Basic Three.js scene for command center visualization
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0a0a0a' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <div style={{
        position: 'absolute', top: 20, left: 20, color: '#0ff',
        fontFamily: 'monospace', fontSize: '14px'
      }}>
        <h1>Bravo Command Center</h1>
        <p>System status: <span style={{ color: '#0f0' }}>ONLINE</span></p>
      </div>
    </div>
  );
}

export default App;
