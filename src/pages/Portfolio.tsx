import React from "react";

const projects = [
  {
    name: "Crypto Dashboard",
    description: "A real-time dashboard for tracking cryptocurrency prices and trends.",
    tech: "React, Tailwind, Node.js",
  },
  {
    name: "Restaurant Finder",
    description: "Searchable restaurant app with reservation system.",
    tech: "Vue 3, TypeScript, Pinia",
  },
  {
    name: "E-Commerce Backend",
    description: "Headless e-commerce backend with JWT auth and payment integration.",
    tech: ".NET 8, PostgreSQL, Stripe",
  },
];

const Portfolio: React.FC = () => (
  <div className="section max-w-5xl mx-auto px-6 py-12 text-gray-100">
    <h1 className="text-4xl font-extrabold mb-6 text-blue-400">Portfolio</h1>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <div key={i} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-2">{p.name}</h2>
          <p className="text-gray-400 mb-2">{p.description}</p>
          <p className="text-sm text-gray-500">Tech stack: {p.tech}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;
