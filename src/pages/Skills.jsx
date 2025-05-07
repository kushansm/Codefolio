import React, { useRef } from "react";
import Particles from "../components/animations/Particles";
import JS from "../assets/tech-stack/javascript.png";
import Java from "../assets/tech-stack/java1.png";
import Ts from "../assets/tech-stack/ts.png";
import Html from "../assets/tech-stack/html.png";
import Css from "../assets/tech-stack/css.png";
import Re from "../assets/tech-stack/react.png";
import An from "../assets/tech-stack/angular.png";
import Sp from "../assets/tech-stack/spring.svg";
import Nd from "../assets/tech-stack/node.png";
import Bs from "../assets/tech-stack/bootstrap.png";
import Tw from "../assets/tech-stack/tailwind.png";

import Gh from "../assets/tech-stack/github.png";
import Docker from "../assets/tech-stack/docker.png";
import Mysql from "../assets/tech-stack/mysql.png";
import Mongo from "../assets/tech-stack/mongo.png";
import Postgress from "../assets/tech-stack/postgress.png";

function TechIcon({ src, alt }) {
  const iconRef = useRef(null);

  const handleMouseMove = (e) => {
    const icon = iconRef.current;
    if (!icon) return;
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 10).toFixed(2);
    const rotateY = (x / 10).toFixed(2);

    icon.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  };

  const handleMouseLeave = () => {
    const icon = iconRef.current;
    if (!icon) return;
    icon.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      className="transition-transform duration-300 ease-in-out hover:scale-125 animate-zoom"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={iconRef}
    >
      <img src={src} alt={alt} className="w-20 h-20 object-contain" />
    </div>
  );
}

const skillCategories = [
  {
    title: "Languages",
    items: [
      { src: JS, alt: "JavaScript" },
      { src: Java, alt: "Java" },
      { src: Ts, alt: "TypeScript" },
      { src: Html, alt: "HTML" },
      { src: Css, alt: "CSS" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { src: Re, alt: "React" },
      { src: An, alt: "Angular" },
      { src: Sp, alt: "Spring Framework" },
      { src: Nd, alt: "Node.js" },
      { src: Bs, alt: "Bootstrap" },
      { src: Tw, alt: "Tailwind CSS" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { src: Gh, alt: "GitHub" },
      { src: Docker, alt: "Docker" },
    ],
  },
  {
    title: "Databases",
    items: [
      { src: Mysql, alt: "MySQL" },
      { src: Mongo, alt: "MongoDB" },
      { src: Postgress, alt: "PostgreSQL" },
    ],
  },
];

function Skills() {
  return (
    <div className="w-full h-screen relative bg-black overflow-hidden p-8">
      
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 px-4 sm:px-6 md:px-16 text-white">
        My Techstack
      </h2>

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


      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center gap-16 text-white overflow-y-auto">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col items-center w-full">
            <h2 className="text-lg font-bold mb-2">{category.title}</h2>
            <div className="flex flex-wrap gap-8 justify-center px-4">
              {category.items.map((tech, index) => (
                <TechIcon key={index} src={tech.src} alt={tech.alt} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
