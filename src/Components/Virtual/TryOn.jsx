import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as THREE from 'three';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import glassesSrc from './path_to_your_glasses_image.png';

const TryOn = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [model, setModel] = useState(null);
    const [glassesMesh, setGlassesMesh] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const setup = async () => {
            // Camera Access
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (webcamRef.current) {
                webcamRef.current.srcObject = stream;
            }

            // Three.js Setup
            const width = canvasRef.current.clientWidth;
            const height = canvasRef.current.clientHeight;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 5;
            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
            renderer.setSize(width, height);
            renderer.setAnimationLoop(() => renderer.render(scene, camera));

            // Load Model
            const loadedModel = await faceLandmarksDetection.load(
                faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
                { maxFaces: 1 }
            );
            setModel(loadedModel);

            // Load Glasses Mesh
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(glassesSrc, (texture) => {
                texture.encoding = THREE.sRGBEncoding; // Fix colorSpace issue
                const geometry = new THREE.PlaneGeometry(2, 1);
                const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
                const glasses = new THREE.Mesh(geometry, material);
                scene.add(glasses);
                setGlassesMesh(glasses);
            });
        };

        setup();

        // Clean up
        return () => {
            // Release resources if needed
        };
    }, []);

    useEffect(() => {
        let isRunning = true;
    
        const detectAndPositionGlasses = async () => {
            if (!isRunning || !webcamRef.current || !model || !glassesMesh) return;
            const video = webcamRef.current.video;
            if (video.readyState !== 4) return;
    
            const faceEstimates = await model.estimateFaces({ input: video });
            if (!isRunning) return; // Ensure no action if component unmounted during async operation
            if (faceEstimates.length > 0) {
                setIsLoading(false);
                // Face mesh keypoints
                const keypoints = faceEstimates[0].scaledMesh;
                const leftEye = keypoints[130];
                const rightEye = keypoints[359];
                const eyeCenter = keypoints[168];
    
                // Eye distance for glasses scaling
                const eyeDistance = Math.sqrt(Math.pow(rightEye[0] - leftEye[0], 2) + Math.pow(rightEye[1] - leftEye[1], 2));
                const scaleMultiplier = eyeDistance / 140;
    
                // Glasses scaling and offset values
                const scaleX = -0.01;
                const scaleY = -0.01;
                const offsetX = 0.00;
                const offsetY = -0.01;
    
                // Glasses positioning
                glassesMesh.position.x = (eyeCenter[0] - video.videoWidth / 2) * scaleX + offsetX;
                glassesMesh.position.y = (eyeCenter[1] - video.videoHeight / 2) * scaleY + offsetY;
                glassesMesh.scale.set(scaleMultiplier, scaleMultiplier, scaleMultiplier);
                glassesMesh.position.z = 1;
    
                // Rotate glasses to align with eyes - rotation depth
                const eyeLine = new THREE.Vector2(rightEye[0] - leftEye[0], rightEye[1] - leftEye[1]);
                const rotationZ = Math.atan2(eyeLine.y, eyeLine.x);
                glassesMesh.rotation.z = rotationZ;
            }
        };
    
        const intervalId = setInterval(detectAndPositionGlasses, 120);
    
        return () => {
            clearInterval(intervalId);
            isRunning = false;
        };
    }, [model, glassesMesh]);
    

    return (
        <>
            <div style={{ position: 'relative', margin: '0 auto', width: '800px', height: '800px' }}>
                {isLoading && (
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                        <h3>Loading...</h3>
                    </div>
                )}
                <Webcam ref={webcamRef} autoPlay playsInline style={{ width: '800px', height: '800px' }} mirrored={true} />
                <canvas ref={canvasRef} style={{ width: '800px', height: '800px', position: 'absolute', top: 0, left: 0 }} />
            </div>
        </>
    );
};

export default TryOn;
