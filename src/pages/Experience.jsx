import React from "react";
import ijseLogo from "../assets/ijse.png";
import sltcLogo from "../assets/sltc.png";
import Particles from "../components/animations/Particles";
import ExperienceCard from "../components/ExperienceCard";

const experiences = [
  {
    logo: sltcLogo,
    title: "BSc (Hons) in Engineering",
    company: "SLTC",
    duration: "2018 - 2022",
    description: [
      "Successfully completed a Bachelor of Science (Hons) in Engineering.",
      "Studied core engineering subjects with hands-on project work.",
      "Built a solid foundation in problem-solving and critical thinking.",
    ],
    align: "left",
  },
  {
    logo: ijseLogo,
    title: "Direct Entry Program (Full-Stack)",
    company: "IJSE",
    duration: "2023 - 2024",
    description: [
      "Currently enrolled in the Direct Entry Program at IJSE to specialize in full-stack development.",
      "Focusing on both frontend and backend technologies, including React.js, Angular, and Spring Boot.",
      "Gaining practical experience by working on live projects with industry professionals.",
      "Learning cloud computing, containerization using Docker, and deployment on platforms like Firebase.",
      "Developing skills in DevOps practices, software architecture, and system design.",
      "In-depth focus on real-world software engineering practices to build production-grade applications.",
    ],
    align: "right",
  },
  {
    logo: ijseLogo,
    title: "Trainee Software Engineer",
    company: "IJSE",
    duration: "May 2024 - Present",
    description: [
      "Developing and maintaining web applications using React.js, Angular, and related technologies.",
      "Implementing responsive designs and ensuring cross-browser compatibility.",
      "Building and maintaining backend services using Spring Boot, Java, and Jakarta EE.",
      "Hands-on experience with the MERN stack for full-stack development.",
      "Collaborating with designers, product managers, and other developers to deliver high-quality software.",
      "Working with databases such as MySQL, PostgreSQL, and MongoDB.",
      "Deploying applications using Docker and Firebase.",
    ],
    align: "left",
  },
];

function Experience() {
  return (
      <div className="relative mt-0 px-4 bg-black py-6 overflow-hidden min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Particles />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 px-4 sm:px-6 md:px-16 text-white max-w-7xl mx-auto">
          My Pathway
        </h2>

        {/* Center line only on md and above */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full z-10" />

        <div className="flex flex-col gap-20 max-w-7xl mx-auto relative z-20">
          {experiences.map((exp, idx) => (
              <div
                  key={idx}
                  className={`
              relative flex flex-col md:flex-row items-center
              md:my-24
              ${exp.align === "left" ? "md:justify-start" : "md:justify-end"}
            `}
              >
                {/* On mobile: full width cards stacked */}
                {/* On md+: show timeline layout */}

                {exp.align === "left" ? (
                    <>
                      <div className="w-full md:w-1/2 md:flex md:justify-end md:pr-10 animate-slide-in-left">
                        <ExperienceCard {...exp} />
                      </div>

                      {/* Center circle with logo */}
                      <div
                          className="absolute md:left-1/2 md:transform md:-translate-x-1/2
                    top-[-32px] md:top-1/2 md:translate-y-[-50%]
                    w-16 h-16 bg-white border-4 border-blue-500 rounded-full shadow
                    flex items-center justify-center z-30
                    mx-auto md:mx-0 mb-6 md:mb-0"
                      >
                        <img
                            src={exp.logo}
                            alt="logo"
                            className="w-10 h-10 object-contain"
                        />
                      </div>

                      {/* empty half for right */}
                      <div className="hidden md:block md:w-1/2" />
                    </>
                ) : (
                    <>
                      {/* empty half for left */}
                      <div className="hidden md:block md:w-1/2" />

                      {/* Center circle with logo */}
                      <div
                          className="absolute md:left-1/2 md:transform md:-translate-x-1/2
                    top-[-32px] md:top-1/2 md:translate-y-[-50%]
                    w-16 h-16 bg-white border-4 border-blue-500 rounded-full shadow
                    flex items-center justify-center z-30
                    mx-auto md:mx-0 mb-6 md:mb-0"
                      >
                        <img
                            src={exp.logo}
                            alt="logo"
                            className="w-10 h-10 object-contain"
                        />
                      </div>

                      <div className="w-full md:w-1/2 md:flex md:justify-start md:pl-10 animate-slide-in-right">
                        <ExperienceCard {...exp} />
                      </div>
                    </>
                )}
              </div>
          ))}
        </div>
      </div>
  );
}

export default Experience;
