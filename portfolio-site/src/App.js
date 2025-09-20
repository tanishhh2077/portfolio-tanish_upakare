import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [showContact, setShowContact] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const activities = [
    { 
      text: "I code", 
      image: "/images/coding-laptop.jpg", // Your coding laptop photo
      description: "Building digital solutions"
    },
    { 
      text: "I lift", 
      image: "/images/gym-workout.jpg", // Your gym photo
      description: "Building physical strength"
    },
    { 
      text: "I travel", 
      image: "/images/nyc-travel.jpg", // Your New York travel photo
      description: "Exploring the world"
    },
    { 
      text: "I analyze", 
      image: "/images/bloomberg-terminal.jpg", // Your Bloomberg terminal photo
      description: "Making data-driven decisions"
    },
    { 
      text: "I create", 
      image: "/images/suit-portrait.jpg", // Your professional suit photo
      description: "Bringing ideas to life"
    }
  ];

  const skills = {
    frontend: [
      { name: "JavaScript", logo: "🟨" },
      { name: "CSS", logo: "🔵" },
      { name: "React", logo: "⚛️" },
      { name: "HTML", logo: "🟠" },
      { name: "Tailwind CSS", logo: "🌊" },
      { name: "Framer Motion", logo: "🎬" }
    ],
    backend: [
      { name: "Node.js", logo: "🟢" },
      { name: "Python", logo: "🐍" },
      { name: "Express.js", logo: "⚡" },
      { name: "Next.js", logo: "▲" }
    ],
    database: [
      { name: "MongoDB", logo: "🍃" },
      { name: "SQL", logo: "🗃️" },
      { name: "PostgreSQL", logo: "🐘" }
    ],
    tools: [
      { name: "Git", logo: "🌿" },
      { name: "Excel", logo: "📊" },
      { name: "Tableau", logo: "📈" },
      { name: "VS Code", logo: "💻" }
    ]
  };

  const projects = [
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard built with React and D3.js for visualizing complex datasets",
      tech: ["React", "D3.js", "Python", "SQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin panel",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "#"
    },
    {
      title: "Financial Modeling Tool",
      description: "Advanced financial modeling application with real-time data integration",
      tech: ["Python", "Pandas", "React", "FastAPI"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "#"
    }
  ];

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      setIsHovering(true);
    };
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
      {/* Classical Art Background - Always visible */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/1/13/Fran%C3%A7ois_Lemoyne_-_L%27Apoth%C3%A9ose_d%27Hercule_-_Google_Art_Project.jpg')"
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-black/40" />
      
      {/* Interactive Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: cursorPosition.x - 8,
          y: cursorPosition.y - 8,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className={`w-4 h-4 rounded-full ${isHovering ? 'bg-white' : 'bg-black'} transition-colors duration-200`}></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-start p-8">
          <div className="space-y-2">
            <h1 className="text-lg font-light tracking-wider">TANISH UPAKARE</h1>
            <p className="text-sm font-light tracking-widest uppercase">COMPUTER SCIENCE & ECONOMICS STUDENT</p>
          </div>
          <nav className="flex space-x-8 text-sm font-light tracking-wider">
            <a href="#about" className="hover:text-gray-300 transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-gray-300 transition-colors">SKILLS</a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">CONTACT</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Main Title */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-sm font-light tracking-wider uppercase">creative</p>
                <div className="space-y-2">
                  <h2 className="text-6xl lg:text-8xl font-bold tracking-tight leading-none">
                    DEVELOPER
                  </h2>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl font-light">&</span>
                  </div>
                  <h2 className="text-6xl lg:text-8xl font-bold tracking-tight leading-none">
                    ANALYST
                  </h2>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Bio and Info */}
            <div className="space-y-12">
              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl font-bold">24</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-sm font-light">
                  <p className="uppercase tracking-wider">december</p>
                  <p className="uppercase tracking-wider">available for work</p>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-right space-y-4"
              >
                <p className="text-sm font-light leading-relaxed">
                  I AM A COMPUTER SCIENCE AND ECONOMICS STUDENT BASED IN THE UNITED STATES. 
                  I AM PURSUING A B.S. WITH MINORS IN BUSINESS, DATA SCIENCE, AND ENTREPRENEURSHIP. 
                  I LOVE BUILDING SOLUTIONS THAT BRIDGE TECHNOLOGY AND BUSINESS. 
                  I LOVE LEARNING, PROBLEM-SOLVING, AND CREATING MEANINGFUL IMPACT.
                </p>
              </motion.div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-right"
              >
                <button 
                  onClick={() => setShowContact(true)}
                  className="px-8 py-3 border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 uppercase tracking-wider text-sm font-light"
                >
                  CONTACT ME
                </button>
              </motion.div>
            </div>
          </div>
        </main>

        {/* About Section with Scrolling Activities */}
        <section id="about" className="px-8 py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              <h3 className="text-3xl font-light tracking-wider uppercase">About Me</h3>
              
              {/* Headshot and Scrolling Activities */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                {/* Headshot */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <img 
                    src="/images/headshot.jpg" 
                    alt="Tanish Upakare"
                    className="max-w-80 max-h-80 rounded-2xl"
                  />
                </motion.div>

                {/* Scrolling Activity Display */}
                <div className="relative h-[500px] overflow-hidden flex-1 max-w-2xl">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    key={currentActivity}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-center space-y-6">
                      <div className="relative aspect-video w-full max-w-2xl mx-auto rounded-2xl overflow-hidden">
                        <img 
                          src={activities[currentActivity].image} 
                          alt={activities[currentActivity].text}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-4xl font-bold tracking-wider uppercase">
                        {activities[currentActivity].text}
                      </h4>
                      <p className="text-lg font-light text-gray-300">
                        {activities[currentActivity].description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto">
                I'm a passionate student pursuing a B.S. in Computer Science and Economics with minors in Business, Data Science, and Entrepreneurship. 
                I'm on track to graduate in 3 years and seeking roles in software development, data analysis, business analysis, or quantitative development. 
                My goal is to create innovative solutions that solve real-world problems through the intersection of technology and business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h3 className="text-3xl font-light tracking-wider uppercase text-center">Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="space-y-6"
                  >
                    <h4 className="text-xl font-bold tracking-wider uppercase text-center">
                      {category.toUpperCase()}
                    </h4>
                    <div className="space-y-4">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          className="flex items-center space-x-3 hover:bg-white/10 p-2 rounded transition-colors duration-200"
                        >
                          <span className="text-2xl">{skill.logo}</span>
                          <span className="text-sm font-light tracking-wider">{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </div>
      </section>

        {/* Projects Section */}
        <section id="projects" className="px-8 py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h3 className="text-3xl font-light tracking-wider uppercase text-center">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <h4 className="text-xl font-light tracking-wider mb-4">{project.title}</h4>
                    <p className="text-sm font-light leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/20 text-xs font-light tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
      </section>

        {/* Contact Section */}
        <section id="contact" className="px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-light tracking-wider uppercase">Get In Touch</h3>
        {!showContact ? (
                <button 
                  onClick={() => setShowContact(true)} 
                  className="px-8 py-3 border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 uppercase tracking-wider text-sm font-light"
                >
            Send a Message
          </button>
        ) : (
          <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
                  className="space-y-6"
            action="https://formspree.io/f/your-id" method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
                    className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-all duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
                    rows="4"
                    className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-all duration-300 resize-none"
              required
            />
                  <button 
                    type="submit" 
                    className="px-8 py-3 border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 uppercase tracking-wider text-sm font-light"
                  >
                    Send Message
            </button>
          </motion.form>
        )}
            </motion.div>
          </div>
      </section>

        {/* Footer */}
        <footer className="px-8 py-8 text-center text-sm font-light tracking-wider text-white/60">
        © {new Date().getFullYear()} Tanish Upakare. All rights reserved.
      </footer>
      </div>
    </div>
  );
}