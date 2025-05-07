import React from "react";
import Card from "../components/Card";
import { MdCode, MdDeveloperMode, MdQueryStats } from "react-icons/md";

function Services() {
  return (
    <div className="bg-black text-white px-4 sm:px-6 md:px-16 py-10 md:py-20 text-base md:text-lg leading-relaxed" data-aos="fade-up">
      {/* Intro */}
      <section className="mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          What I Do?
        </h2>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mb-12">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">About Me</h3>
        <p>
          I'm an expert Web Developer from Sri Lanka who enjoys working on
          challenging designs and innovative functionalities. I have hands-on
          experience in developing and designing modern web applications. In
          addition to my passion for technology, I'm also deeply interested in
          investing and building businesses that thrive through research and
          development.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Front End Development", iconName: <MdCode/>},
          { title: "Back End Development", iconName: <MdDeveloperMode/> },
          { title: "Research & Development", iconName: <MdQueryStats/> },
        ].map((service, index) => (
          <Card key={index} title={service.title} iconName={service.iconName} />
        ))}
      </section>
    </div>
  );
}

export default Services;
