import React from "react";

function ExperienceCard({ title, company, duration, description, align }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-[#1f1d2b] p-8 rounded-lg shadow-lg text-white max-w-xl w-full animate-fade-in-up">
        {/* Arrow pointing to logo */}
        {align === "right" ? (
          <div className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-12 border-r-[#1f1d2b] border-b-8 border-b-transparent"></div>
        ) : (
          <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#1f1d2b] border-b-8 border-b-transparent"></div>
        )}

        {/* Centered heading info */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold">{title}</h3>
          <h4 className="text-lg font-bold text-blue-400">{company}</h4>
          <span className="text-sm text-gray-400">{duration}</span>
        </div>

        {/* Left-aligned description */}
        <ul className="list-disc text-md mt-4 pl-6 text-left">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
