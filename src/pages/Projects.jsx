import React from 'react';
import googleIcon from '../assets/expieience-img/google.png';
import remoteIcon from '../assets/expieience-img/Remote-Desktop-Client.png';
import browserIcon from '../assets/expieience-img/Dep-Browser.jpg';
import poolIcon from '../assets/expieience-img/connection-pool.png';

import bookHubIcon from '../assets/expieience-img/book-hub.png';
import nutsAndPOSIcon from '../assets/expieience-img/nutsandpos.jpeg';
import codefolioIcon from '../assets/expieience-img/codefolio.png';

import ProjectCard from '../components/ProjectCard';

function Projects() {
    const projects = [
        {
            iconSrc: bookHubIcon,
            title: "Book Hub ",
            description: "A full-stack Book Inventory System (MERN) built with responsive UI, CRUD operations, React Router, dynamic modals, and secure MongoDB Atlas integration using .env configuration.",
            techStack: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Bootstrap", "Vite"],
            link: "https://github.com/kushansm/BookHub"
        },
        {
            iconSrc: nutsAndPOSIcon,
            title: "NutsAndPOS ",
            description: "POS System for Hardware Inventory with Angular frontend and Spring Boot backend. Features real-time CRUD, responsive design, modal routing, and MySQL integration.",
            techStack: ["Angular", "Spring Boot", "Java", "RESTful APIs", "MySQL", "Bootstrap"],
            link: "https://github.com/kushansm/NutsAndPOS"
        },
        {
            iconSrc: codefolioIcon,
            title: "Codefolio",
            description: "Personal portfolio website showcasing projects and skills with clean UI, dynamic routing, animations, and email sending via EmailJS.",
            techStack: ["React", "emailjs", "Bootstrap", "Vite"],
            link: "https://github.com/kushansm/Codefolio"
        },
        {
            iconSrc: remoteIcon,
            title: "Remote Desktop Client ",
            description: "A feature-rich remote desktop client that enables secure file transfers, real-time video/audio calls, text messaging, and remote desktop control.",
            techStack: ["Java", "JavaFX", "Networking", "Multi-threading", "Sockets"],
            link: "https://github.com/kushansm/Remote-Desktop-Client"
        },
        {
            iconSrc: browserIcon,
            title: "QuickBrowse ",
            description: "Custom Web Browser (JavaFX) built with sleek UI, WebView, custom socket-based HTTP handling, dynamic URL parsing, basic response processing, and auto-select address bar.",
            techStack: ["Java", "JavaFX", "WebView", "UI/UX Design"],
            link: "https://github.com/kushansm/Dep-Browser"
        },
        {
            iconSrc: poolIcon,
            title: "Simple Connection Pool",
            description: "A high-performance connection pooling system to manage database connections efficiently for Java web applications.",
            techStack: ["Java", "JDBC", "Servlets", "Multi-threading"],
            link: "https://github.com/kushansm/connection-pool"
        },
        {
            iconSrc: googleIcon,
            title: "Google Clone",
            description: "A modern, responsive Google search clone with an intuitive UI replicating Google's homepage.",
            techStack: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/kushansm/google-clone"
        }
    ];

    return (
        <div className="p-12 bg-black min-h-screen">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        iconSrc={project.iconSrc}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
