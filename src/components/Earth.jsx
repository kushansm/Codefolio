import { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader, Vector3 } from "three";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Import textures
import EarthDayMap from "../assets/img/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/img/8k_earth_normal_map.jpg";
import EarthCloudsMap from "../assets/img/8k_earth_clouds.jpg";

export default function Earth() {
    const earthRef = useRef();
    const cloudsRef = useRef();
    const velocity = useRef(new Vector3(0, 0, 0));
    const tempVec = new Vector3();

    const [colorMap, normalMap, cloudsMap] = useLoader(TextureLoader, [
        EarthDayMap,
        EarthNormalMap,
        EarthCloudsMap,
    ]);

    const { gl, mouse, camera } = useThree();
    gl.toneMappingExposure = 1.5;

    useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();

        // Rotate Earth and Clouds
        if (earthRef.current) earthRef.current.rotation.y = elapsed / 6;
        if (cloudsRef.current) cloudsRef.current.rotation.y = elapsed / 6;

        // Mouse interaction
        if (earthRef.current) {
            // Get mouse position in 3D space
            const mouseVec = new Vector3(mouse.x, mouse.y, 0.5);
            mouseVec.unproject(camera);

            // Vector from Earth to mouse
            const dir = tempVec.copy(mouseVec).sub(earthRef.current.position);

            const distance = dir.length();

            // Push Earth away if close
            if (distance < 3) {
                dir.normalize();
                velocity.current.add(dir.multiplyScalar(0.02)); // Push force
            }

            // Apply velocity to position
            earthRef.current.position.add(velocity.current);
            cloudsRef.current.position.copy(earthRef.current.position);

            // Apply damping to slow down over time
            velocity.current.multiplyScalar(0.95);
        }
    });

    return (
        <>
            <ambientLight intensity={0.6} />
            <directionalLight color="#ffffff" position={[5, 2, 5]} intensity={1.5} />

            {/* Earth Clouds */}
            <mesh ref={cloudsRef}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.4}
                    depthWrite
                    transparent
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Earth Surface */}
            <mesh ref={earthRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    metalness={0.4}
                    roughness={0.6}
                    emissive={new THREE.Color(0x111111)}
                    emissiveIntensity={0.1}
                />
            </mesh>

            {/* Controls */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                rotateSpeed={0.5}
                autoRotate={false} // Disable autoRotate for better effect
            />
        </>
    );
}
