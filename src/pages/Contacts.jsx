import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Footer from "../components/Footer";
import Particles from "../components/animations/Particles";
import Earth from "../components/Earth";

export default function Contacts() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_dj0daom",       // Replace with your actual EmailJS service ID
                "template_s4dyjre",      // Replace with your template ID
                form.current,
                "8jiGjP8mEOsvFklc8"        // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("Failed to send message: " + error.text);
                }
            );
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#090909]">
            <div className="absolute inset-0 z-10 pointer-events-none">
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

            <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-20 min-h-[calc(100vh-60px)] z-20 relative">
                <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                        Send Me a Message
                    </h2>

                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <textarea
                            name="message"
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

            <Footer />
        </div>
    );
}
