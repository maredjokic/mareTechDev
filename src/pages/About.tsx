import React from "react";

const About: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-12 text-gray-100">
    <h1 className="text-4xl font-extrabold mb-6 text-blue-400">Who We Are</h1>

    <p className="mb-6 text-lg leading-relaxed text-gray-300">
      <strong>MARE Tech Development</strong> is a modern software development company specialized in building high-performance web applications, tailored business solutions, and scalable APIs.
      <br /><br />
      With a focus on cutting-edge technologies like <span className="text-white">React, TypeScript, Node.js</span>, and <span className="text-white">.NET</span>, we help startups and enterprises turn ideas into powerful digital products.
    </p>

    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-blue-300 mb-3">Our Mission</h2>
      <p className="text-gray-400">
        To deliver clean, scalable, and maintainable software with precision and care — always aligned with your business goals.
      </p>
    </div>

    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-blue-300 mb-3">Core Values</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>✅ Quality over quantity</li>
        <li>🚀 Performance and scalability</li>
        <li>🤝 Transparency and trust</li>
        <li>📈 Long-term partnership focus</li>
      </ul>
    </div>

    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mt-12">
      <h3 className="text-xl font-semibold mb-2 text-blue-300">Want to work with us?</h3>
      <p className="mb-4 text-gray-400">
        Whether you need a new website, web application, or a long-term development partner — we’d love to hear from you.
      </p>
      <p className="text-gray-300">
        📧 <strong>Email:</strong> <a href="mailto:contact@maretech.dev" className="text-blue-400 hover:underline">contact@maretech.dev</a><br />
        🌐 <strong>Website:</strong> <a href="https://maretech.dev" target="_blank" className="text-blue-400 hover:underline">maretech.dev</a>
      </p>
    </div>
  </div>
);

export default About;