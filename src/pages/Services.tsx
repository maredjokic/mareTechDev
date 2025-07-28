import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Custom web apps using React, TypeScript, .NET, and Node.js."
  },
  {
    title: "API Design",
    description: "RESTful and GraphQL APIs built for scalability and security."
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and clean interfaces focused on user experience."
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing improvements, updates and technical support."
  },
];

const Services: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-12 text-gray-100">
    <h1 className="text-4xl font-extrabold mb-6 text-blue-400">Our Services</h1>
    <div className="grid gap-6 sm:grid-cols-2">
      {services.map((s, i) => (
        <div key={i} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">{s.title}</h2>
          <p className="text-gray-400">{s.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;