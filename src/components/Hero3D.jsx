import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Text, Torus, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// 3D Pipe Component
const Pipe = ({ position, rotation, color }) => {
    return (
        <group position={position} rotation={rotation}>
            {/* Main Pipe Segment */}
            <Cylinder args={[0.3, 0.3, 3, 32]} material-color={color} material-metalness={0.6} material-roughness={0.2} />
            {/* Joint */}
            <Torus args={[0.4, 0.1, 16, 32]} rotation={[Math.PI / 2, 0, 0]} material-color="#555" position={[0, 1.5, 0]} />
            <Torus args={[0.4, 0.1, 16, 32]} rotation={[Math.PI / 2, 0, 0]} material-color="#555" position={[0, -1.5, 0]} />
        </group>
    );
};

// Water Joint Component
const WaterJoint = ({ position }) => {
    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#00d2ff" transparent opacity={0.8} roughness={0} metalness={0.2} />
            </mesh>
        </group>
    )
}

// Animated Water Drop
const WaterDrop = ({ position }) => {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.position.y -= 0.05;
        if (mesh.current.position.y < -5) {
            mesh.current.position.y = 5;
        }
    });

    return (
        <mesh ref={mesh} position={position}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#00d2ff" />
        </mesh>
    );
};

const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[-10, 15, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Background Pipes Structure */}
                <Pipe position={[-3, 0, -5]} rotation={[0, 0, Math.PI / 4]} color="#a0a0a0" />
                <Pipe position={[3, 1, -4]} rotation={[0, 0, -Math.PI / 3]} color="#808080" />
                <Pipe position={[0, -2, -6]} rotation={[Math.PI / 2, 0, 0]} color="# silver" />

                {/* Connecting Joints */}
                <WaterJoint position={[-3, 1.2, -5]} />
                <WaterJoint position={[3, -0.2, -4]} />

                {/* Falling Water Drops */}
                <WaterDrop position={[-2.8, 1, -4]} />
                <WaterDrop position={[3.2, 0, -3]} />
            </Float>

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </>
    );
};

const Hero3D = ({
    title = "Next-Gen Plumbing Solutions",
    subtitle = "Experience the future of plumbing with precision, speed, and durability."
}) => {
    return (
        <div className="hero-3d-container" style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden' }}>
            {/* 3D Canvas Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                    <Scene />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div className="container hero-content" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10">
                        <h1 className="display-3 fw-bold text-white mb-4" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                            {title}
                        </h1>
                        <p className="lead text-white mb-5" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
                            {subtitle}
                        </p>
                        <div className="hero-btn-group">
                            <Link to="/services"><button className="btn btn-primary btn-lg btn-glow me-3 rounded-pill px-5">Book Service</button></Link>
                            <Link to="/about"><button className="btn btn-outline-light btn-lg rounded-pill px-5">Learn More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero3D;
