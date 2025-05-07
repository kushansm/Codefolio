import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Footer from "../components/Footer";
import Particles from "../components/animations/Particles";
import Earth from "../components/Earth";

export default function Contacts() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#090909]">
      <div className="absolute inset-0 z-10">
        <div className="w-full h-screen relative overflow-hidden p-8">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>

      <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-20 min-h-[calc(100vh-60px)]">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Send Me a Message
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-2 rounded border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* 3D Earth */}
        <div className="w-full max-w-md h-[400px]">
          <Canvas
            camera={{ position: [2, 0, 3], fov: 45 }}
            gl={{
              toneMapping: THREE.ACESFilmicToneMapping,
              outputColorSpace: THREE.SRGBColorSpace,
            }}
          >
            <Earth />
          </Canvas>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
