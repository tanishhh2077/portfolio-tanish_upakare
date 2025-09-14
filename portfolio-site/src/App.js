import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      <header className="text-center py-10 text-4xl font-bold">Tanish Upakare</header>

      <section id="about" className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          I'm a student pursuing a B.S. in Computer Science and Economics with minors in Business, Data Science, and Entrepreneurship. I'm on track to graduate in 3 years and seeking roles in software development, data analysis, business analysis, or quantitative development.
        </p>
      </section>

      <section id="skills" className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-300">
          <li>Python</li>
          <li>SQL</li>
          <li>React</li>
          <li>Excel</li>
          <li>Tableau</li>
          <li>Git</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>

      <section id="projects" className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold">Portfolio Website</h3>
          <p className="text-gray-400">
            Developed a responsive and interactive personal website using React, Tailwind CSS, and GitHub Pages. Integrated animations, a contact form, and project modals.
          </p>
        </div>
      </section>

      <section id="resume" className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <a href="/resume.pdf" download className="text-blue-400 hover:underline">
          Download Resume
        </a>
      </section>

      <section id="contact" className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        {!showContact ? (
          <button onClick={() => setShowContact(true)} className="bg-blue-600 px-4 py-2 rounded text-white">
            Send a Message
          </button>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4"
            action="https://formspree.io/f/your-id" method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="p-2 rounded bg-gray-700 text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="p-2 rounded bg-gray-700 text-white"
              required
            />
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded text-white">
              Send
            </button>
          </motion.form>
        )}
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Tanish Upakare. All rights reserved.
      </footer>
    </div>
  );
}
