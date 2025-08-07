import React from "react";
import martechdevImage from "./../assets/maretechdevImage.png";

const testimonials = [
  {
    name: "Ana K.",
    country: "Croatia",
    comment: "Fast, reliable and professional. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "John D.",
    country: "USA",
    comment:
      "Mare Tech delivered our MVP in record time. The code quality was top-notch.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Marko P.",
    country: "Serbia",
    comment:
      "Odlična komunikacija, ozbiljan tim i moderan dizajn. Svaka preporuka!",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const Home: React.FC = () => (
  <div className="bg-gray-950 min-h-screen text-gray-100">
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero + Why Choose Us section */}
      <section className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8">
        <div className="flex-1 space-y-6">
          <div className="transition-all duration-700 ease-in-out transform hover:scale-105">
            <h1 className="text-4xl font-extrabold mb-4 text-blue-400">
              Welcome to MARE Tech Dev
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              We build fast, scalable, and modern web solutions tailored to your
              business needs.
            </p>
            <a
              href="/services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Why Choose Us inserted here */}
          <div className="transition-all duration-700 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Cutting-edge technologies and tools</li>
              <li>Experienced team with real-world projects</li>
              <li>Clean, maintainable and scalable code</li>
              <li>Fast delivery and continuous communication</li>
            </ul>
          </div>
        </div>

        {/* Image on the right */}
        <div className="flex-1 max-w-md mx-auto transform transition-transform duration-700 hover:scale-105">
          <img
            src={martechdevImage}
            alt="Tech illustration"
            className="rounded-lg shadow-lg w-full max-w-xs object-cover"
          />
        </div>
      </section>

      {/* Testimonials section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Client Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow transition-all duration-500 hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.country}</p>
                </div>
              </div>
              <p className="text-gray-300 italic transition-opacity duration-300 hover:opacity-80">
                "{t.comment}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="transition-transform duration-700 hover:translate-y-1">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to start?</h2>
        <p className="text-gray-400 mb-4">
          Check out our{" "}
          <a href="/services" className="text-blue-500 underline hover:text-blue-400">
            services
          </a>{" "}
          or{" "}
          <a href="/contact" className="text-blue-500 underline hover:text-blue-400">
            get in touch
          </a>{" "}
          for a free consultation.
        </p>
      </section>
    </div>
  </div>
);

export default Home;