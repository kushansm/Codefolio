import React from 'react';
import googleIcon from '../assets/expieience-img/google.png';
import remoteIcon from '../assets/expieience-img/Remote-Desktop-Client.png';
import browserIcon from '../assets/expieience-img/Dep-Browser.jpg';
import poolIcon from '../assets/expieience-img/connection-pool.png';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    const projects = [
        {
            iconSrc: remoteIcon,
            title: "Remote Desktop Client",
            description: "A feature-rich remote desktop client that enables secure file transfers, real-time video/audio calls, text messaging, and remote desktop control.",
            techStack: ["Java", "JavaFX", "Networking", "Multi-threading", "Sockets"],
            link: "https://github.com/kushansm/Remote-Desktop-Client"
        },
        {
            iconSrc: browserIcon,
            title: "DEP Browser",
            description: "A custom-built web browser with multi-tab support, browsing history, and a responsive UI.",
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
