import React from "react";

const Contact: React.FC = () => (
  <div className="max-w-3xl mx-auto px-6 py-12 text-gray-100">
    <h1 className="text-4xl font-extrabold mb-6 text-blue-400">Get in Touch</h1>
    <p className="text-gray-300 mb-6">
      Let's build something amazing together. Whether you have an idea or just a question, feel free to reach out.
    </p>

    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;