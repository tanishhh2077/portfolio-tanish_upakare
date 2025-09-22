import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [showContact, setShowContact] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextActivity, setNextActivity] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [showWebsite, setShowWebsite] = useState(false);

  const activities = [
    { 
      text: "I code", 
      image: "/images/coding-laptop.jpg", // Your coding laptop photo
      description: "In a loop"
    },
    { 
      text: "I lift", 
      image: "/images/gym-workout.jpg", // Your gym photo
      description: "245 lbs bench press"
    },
    { 
      text: "I travel", 
      image: "/images/nyc-travel.jpg", // Your New York travel photo
      description: "Top of the Rock, New York City, Summer of '25"
    },
    { 
      text: "I analyze", 
      image: "/images/bloomberg-terminal.jpg", // Your Bloomberg terminal photo
      description: "Making money at 2:30 AM in Wisconsin Busines School"
    }
  ];

  const skills = {
    languages: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    ],
    frameworks: [
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
    ],
    dataAnalytics: [
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      { name: "Tableau", logo: "https://img.icons8.com/color/48/000000/tableau-software.png" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Apache Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
      { name: "BigQuery", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" }
    ],
    cloudDevOps: [
      { name: "AWS", logo: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
      { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" }
    ],
    tools: [
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "PyCharm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ]
  };

  const projects = [
    {
      title: "CHRONEX - Co-Founder",
      description: "Co-founded fintech startup focused on developing innovative financial technology solutions and building scalable business models",
      tech: ["Leadership", "Strategy", "Product Development", "Business Growth"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "#"
    },
    {
      title: "Real-time Stock Analysis Platform (Present)",
      description: "Technical implementation of portfolio tracking and market analysis tools with real-time alerts and data visualization",
      tech: ["Python", "Power BI", "React", "SQL", "Real-time APIs"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "#"
    },
    {
      title: "NLP Text Classifier",
      description: "Fine-tuned BERT on IMDB dataset, achieving 92% accuracy on sentiment classification",
      tech: ["Python", "Hugging Face", "PyTorch", "scikit-learn", "Streamlit"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "#"
    },
    {
      title: "Algorithmic Trading Simulator",
      description: "Python backtesting tool that evaluates trading strategies using historical stock data",
      tech: ["Python", "Pandas", "NumPy", "yFinance API", "SQLite"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "#"
    }
  ];

  useEffect(() => {
    const handleMouseEnter = (e) => {
      setIsHovering(true);
    };
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentActivity + 1) % activities.length;
      setNextActivity(next);
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentActivity(next);
        setIsTransitioning(false);
      }, 1500); // Match CSS animation duration
    }, 4000);
    return () => clearInterval(interval);
  }, [currentActivity, activities.length]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create mailto link as a simple solution
    const subject = encodeURIComponent('Portfolio Contact Form');
    const body = encodeURIComponent(`Email: ${email}\n\nMessage: ${message}`);
    window.open(`mailto:tanishupakare2077@gmail.com?subject=${subject}&body=${body}`);
    
    // Reset form
    e.target.reset();
    setShowContact(false);
    alert('Thank you for your message! Your email client should open with a pre-filled message.');
  };

  // Landing page component
  if (!showWebsite) {
    return (
      <div className="relative min-h-screen text-white font-sans overflow-x-hidden flex items-center justify-center">
        {/* Classical Art Background */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/1/13/Fran%C3%A7ois_Lemoyne_-_L%27Apoth%C3%A9ose_d%27Hercule_-_Google_Art_Project.jpg')",
            filter: "brightness(0.9) contrast(1.4) saturate(1.15)"
          }}
        />
        
        {/* Darker overlay for better text readability */}
        <div className="fixed inset-0 bg-black/40" />
        
        
        {/* Landing Content */}
        <div className="relative z-10 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-light tracking-widest"
              style={{
                color: '#FFF8DC',
                textShadow: '0 0 4px rgba(255, 215, 0, 0.2)'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.1
              }}
              whileHover={{ 
                scale: 1.02,
                color: '#FFD700',
                textShadow: '0 0 6px rgba(255, 215, 0, 0.3)',
                transition: { duration: 0.3 }
              }}
            >
              TANISH UPAKARE
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl font-light tracking-widest uppercase text-white/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                delay: 0.2
              }}
              whileHover={{ 
                scale: 1.05,
                color: "rgba(255, 255, 255, 0.9)",
                transition: { duration: 0.3 }
              }}
            >
              DEVELOPER & ENTREPRENEUR
            </motion.p>
            
            <motion.p 
              className="text-lg font-thin tracking-wider text-white/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                delay: 0.3
              }}
              whileHover={{ 
                scale: 1.03,
                color: "rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.3 }
              }}
            >
              COMPUTER SCIENCE & ECONOMICS STUDENT
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button
              onClick={() => setShowWebsite(true)}
              className="px-12 py-4 border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 uppercase tracking-wider text-lg font-light hover:scale-105"
            >
              Enter Portfolio
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
      {/* Classical Art Background - Always visible */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/1/13/Fran%C3%A7ois_Lemoyne_-_L%27Apoth%C3%A9ose_d%27Hercule_-_Google_Art_Project.jpg')",
          filter: "brightness(0.9) contrast(1.4) saturate(1.15)"
        }}
      />
      
      {/* Darker overlay for better text readability */}
      <div className="fixed inset-0 bg-black/40" />
      
      

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-4 sm:space-y-0">
          <div className="space-y-1 sm:space-y-2 w-full sm:w-auto">
            <motion.h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-widest text-center sm:text-left"
              style={{
                color: '#E6D073', // More golden color
                textShadow: '0 0 6px rgba(255, 215, 0, 0.4)' // More prominent golden shadow
              }}
              whileHover={{
                scale: 1.02,
                color: '#FFD700', // Brighter golden on hover
                textShadow: '0 0 6px rgba(255, 215, 0, 0.3)', // Enhanced glow on hover
                transition: { duration: 0.3 }
              }}
            >
              TANISH UPAKARE
            </motion.h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-widest uppercase text-center sm:text-left">COMPUTER SCIENCE & ECONOMICS STUDENT</p>
          </div>
          
          {/* Social Links - Center */}
          <div className="flex justify-center sm:justify-end space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 w-full sm:w-auto">
            <motion.a 
              href="mailto:tanishupakare2077@gmail.com"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/tanish-upakare/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: -5,
                boxShadow: "0 8px 25px rgba(0, 119, 181, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://github.com/tanishhh2077" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: 3,
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://orcid.org/0009-0001-3398-3678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: -3,
                boxShadow: "0 8px 25px rgba(166, 206, 57, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#A6CE39"/>
                <text x="12" y="16" textAnchor="middle" fontSize="8" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">iD</text>
              </svg>
            </motion.a>
          </div>
          
          <nav className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 text-xs sm:text-sm lg:text-base font-normal tracking-wider mt-2 sm:mt-0">
            <a href="#about" className="hover:text-gray-300 transition-colors px-2 py-1">ABOUT</a>
            <a href="#skills" className="hover:text-gray-300 transition-colors px-2 py-1">SKILLS</a>
            <a href="#projects" className="hover:text-gray-300 transition-colors px-2 py-1">PROJECTS</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors px-2 py-1">CONTACT</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
            {/* Left Side - Main Title */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wider uppercase">SOFTWARE</p>
                <div className="space-y-1 sm:space-y-2">
                  <motion.h2 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-none text-white inline-block"
                    whileHover={{
                      color: '#FFD700',
                      textShadow: '0 0 8px rgba(255, 215, 0, 0.5)',
                      transition: { duration: 0.3 }
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ width: 'fit-content' }}
                  >
                    DEVELOPER
                  </motion.h2>
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-light">&</span>
                  </div>
                  <motion.h2 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-none text-white inline-block"
                    whileHover={{
                      color: '#FFD700',
                      textShadow: '0 0 8px rgba(255, 215, 0, 0.5)',
                      transition: { duration: 0.3 }
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ width: 'fit-content' }}
                  >
                    ENTREPRENEUR
                  </motion.h2>
                </div>
              </motion.div>
              
              {/* Song of the Month Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-16 sm:mt-24 md:mt-32 max-w-xs sm:max-w-sm py-8 sm:py-12 md:py-16"
              >
                <a
                  href="https://open.spotify.com/track/1eyzqe2QqGZUmfcPZtrIyt?si=10a805adc7c04749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-1 border border-purple-300/30 hover:from-purple-500/30 hover:to-pink-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xs font-light tracking-wider uppercase text-white/90 mb-2 text-center">
                    Song of the Month!
                  </h3>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/1/1a/Midnight_city.jpeg" 
                      alt="M83 - Hurry Up, We're Dreaming"
                      className="w-10 h-10 rounded-md object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">Midnight City</p>
                      <p className="text-xs text-gray-300 truncate">M83</p>
                    </div>
                    <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Right Side - Bio and Info */}
            <div className="space-y-8 sm:space-y-12">

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center sm:text-right space-y-3 sm:space-y-4"
              >
                   <div className="text-xs sm:text-sm font-light leading-relaxed space-y-1 sm:space-y-1">
                     <p>COMPUTER SCIENCE & ECONOMICS @ UNIVERSITY OF WISCONSIN–MADISON</p>
                     <p>RESEARCH ASSISTANT @ KAUFMAN LAB / ADAPTIVE INFERENCE LABS, UW–MADISON</p>
                     <p>LEARNING AND BUILDING SOLUTIONS THAT BRIDGE TECHNOLOGY & BUSINESS SINCE 2020</p>
                     <p>Prev @ ICICLE AI INSTITUTE</p>
                     <p>Co-Founder @ CHRONEX</p> 
                     <p>Hometown: Dhule, Maharashtra, India</p> 
                   </div>
              </motion.div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center sm:text-right"
              >
                <motion.button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="contact-button px-8 py-3 border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 uppercase tracking-wider text-sm font-light"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
                    borderColor: "rgba(255, 255, 255, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  CONTACT ME
                </motion.button>
                
                {/* Painting Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8 sm:mt-12 md:mt-16 text-center sm:text-right"
                >
                  <p className="text-base text-white/70 italic font-light">
                    "The Apotheosis of Hercules" (1736) by François Lemoyne
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>

        {/* About Section with Scrolling Activities */}
        <section id="about" className="px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 bg-black/20 backdrop-blur-sm mt-6 sm:mt-8 md:mt-12 lg:mt-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider uppercase">About Me</h3>
              
              {/* About Me Content - Face and Text Side by Side */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
                {/* About Me Text - Left Side */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-1"
                >
                <p className="text-lg font-light leading-relaxed mb-6">
  I'm a student at the University of Wisconsin–Madison pursuing a B.S. in Computer Science and Economics, 
  with minors in Business, Data Science, and Entrepreneurship. 
  Accelerating my degree to finish in just three years, I specialize in translating complex data and algorithms into 
  high-impact software solutions. 
  My interests lie in software engineering, data science, and quantitative development—where I can leverage my skills 
  in programming, analytics, and problem-solving to build scalable systems and uncover actionable insights. 
  I’m motivated to join teams that push technological boundaries and turn innovative ideas into products that drive real-world value.
</p>

                  
                  {/* Quote */}
                  <blockquote className="text-base font-light leading-relaxed text-white/70 italic border-l-2 border-white/30 pl-4 mb-2">
                    "Like Fibonacci and compounding interest, true growth is recursive — small steps, patiently taken, become lasting pursuits."
                  </blockquote>
                  
                  {/* Signature */}
                  <p className="text-sm font-light text-white/70 text-right">
                    - Tanish Upakare
                  </p>
                </motion.div>

                {/* Headshot - Right Side */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-shrink-0 order-1 lg:order-2 mb-6 lg:mb-0"
                >
                  <motion.img 
                    src="/images/headshot.jpg" 
                    alt="Tanish Upakare"
                    className="max-w-64 sm:max-w-72 md:max-w-80 max-h-64 sm:max-h-72 md:max-h-80 rounded-2xl cursor-pointer mx-auto lg:mx-0"
                    style={{ filter: "brightness(0.9) contrast(1.1)" }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                      transition: { 
                        duration: 0.3, 
                        ease: "easeOut"
                      }
                    }}
                    whileTap={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </motion.div>
              </div>

              {/* Visual Separator - Text with Full Width Ornaments */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center justify-center mt-32 sm:mt-40 md:mt-48 lg:mt-56 mb-16 sm:mb-24 md:mb-32 w-full"
              >
                <div className="flex items-center w-full">
                  {/* Left ornaments - Extended Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89) */}
                  <div className="flex items-center flex-1">
                    <div className="flex-1 h-px bg-white/40"></div>
                    <motion.div 
                      className="text-white/35 text-xs mx-1" 
                      style={{fontSize: '6px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >●</motion.div>
                    <motion.div 
                      className="text-white/40 text-xs mx-1" 
                      style={{fontSize: '8px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >●</motion.div>
                    <motion.div 
                      className="text-white/45 text-xs mx-1" 
                      style={{fontSize: '8px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >●</motion.div>
                    <motion.div 
                      className="text-white/50 text-sm mx-1" 
                      style={{fontSize: '12px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◈</motion.div>
                    <motion.div 
                      className="text-white/55 text-base mx-1" 
                      style={{fontSize: '16px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◈</motion.div>
                    <motion.div 
                      className="text-white/60 text-lg mx-2" 
                      style={{fontSize: '20px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◆</motion.div>
                    <motion.div 
                      className="text-white/65 text-xl mx-2" 
                      style={{fontSize: '24px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◆</motion.div>
                    <motion.div 
                      className="text-white/70 text-2xl mx-2" 
                      style={{fontSize: '28px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >✦</motion.div>
                    <motion.div 
                      className="text-white/75 text-3xl mx-3" 
                      style={{fontSize: '32px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >✦</motion.div>
                    <motion.div 
                      className="text-white/80 text-4xl mx-3" 
                      style={{fontSize: '36px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◊</motion.div>
                    <motion.div 
                      className="text-white/85 text-5xl mx-4" 
                      style={{fontSize: '40px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◊</motion.div>
                    <motion.div 
                      className="text-white/90 text-6xl mx-4" 
                      style={{fontSize: '44px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◆</motion.div>
                    <div className="w-8 h-px bg-white/30"></div>
                  </div>
                  
                  {/* Center text */}
                  <motion.div 
                    className="px-6 py-2 mx-4"
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.span 
                      className="text-2xl font-bold text-white/90" 
                      style={{fontFamily: 'Playfair Display, sans-serif'}}
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      What I Do
                    </motion.span>
                </motion.div>

                  {/* Right ornaments - Extended Fibonacci sequence reversed (89, 55, 34, 21, 13, 8, 5, 3, 2, 1, 1) */}
                  <div className="flex items-center flex-1">
                    <div className="w-8 h-px bg-white/30"></div>
                    <motion.div 
                      className="text-white/90 text-6xl mx-4" 
                      style={{fontSize: '44px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◆</motion.div>
                    <motion.div 
                      className="text-white/85 text-5xl mx-4" 
                      style={{fontSize: '40px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◊</motion.div>
                    <motion.div 
                      className="text-white/80 text-4xl mx-3" 
                      style={{fontSize: '36px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◊</motion.div>
                    <motion.div 
                      className="text-white/75 text-3xl mx-3" 
                      style={{fontSize: '32px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >✦</motion.div>
                    <motion.div 
                      className="text-white/70 text-2xl mx-2" 
                      style={{fontSize: '28px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >✦</motion.div>
                    <motion.div 
                      className="text-white/65 text-xl mx-2" 
                      style={{fontSize: '24px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◆</motion.div>
                    <motion.div 
                      className="text-white/60 text-lg mx-2" 
                      style={{fontSize: '20px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◆</motion.div>
                    <motion.div 
                      className="text-white/55 text-base mx-1" 
                      style={{fontSize: '16px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◈</motion.div>
                    <motion.div 
                      className="text-white/50 text-sm mx-1" 
                      style={{fontSize: '12px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >◈</motion.div>
                    <motion.div 
                      className="text-white/45 text-xs mx-1" 
                      style={{fontSize: '8px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >●</motion.div>
                    <motion.div 
                      className="text-white/40 text-xs mx-1" 
                      style={{fontSize: '8px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >●</motion.div>
                    <motion.div 
                      className="text-white/35 text-xs mx-1" 
                      style={{fontSize: '6px'}}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >●</motion.div>
                    <div className="flex-1 h-px bg-white/40"></div>
                  </div>
                </div>
              </motion.div>

              {/* Scrolling Activity Display - Below */}
                  <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden w-full max-w-5xl mx-auto mt-6 sm:mt-8 md:mt-12 lg:mt-16"
              >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    key={currentActivity}
                  >
                    <div className="text-center space-y-4 sm:space-y-6 px-4">
                      <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9', height: 'clamp(140px, 18vw, 350px)' }}>
                        {/* Current image blurring out */}
                        <img 
                          src={activities[currentActivity].image} 
                          alt={activities[currentActivity].text}
                          className={`absolute inset-0 w-full h-full object-cover object-center cursor-pointer activity-photo ${isTransitioning ? 'blur-out' : ''}`}
                        />
                        {/* Next image blurring in */}
                        {isTransitioning && (
                          <img 
                            src={activities[nextActivity].image} 
                            alt={activities[nextActivity].text}
                            className="absolute inset-0 w-full h-full object-cover object-center cursor-pointer activity-photo blur-in"
                          />
                        )}
                      </div>
                      <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider uppercase leading-tight">
                        {activities[currentActivity].text}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light text-gray-300 leading-relaxed">
                        {activities[currentActivity].description}
                      </p>
                      
                    </div>
                    </div>
                  </motion.div>

            </motion.div>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h3 className="text-3xl font-light tracking-wider uppercase text-center">Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 max-w-full overflow-hidden justify-items-center">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="space-y-6"
                  >
                    <h4 className="text-2xl font-bold tracking-wider text-center">
                      {category === 'dataAnalytics' ? 'Data' : 
                       category === 'cloudDevOps' ? 'Cloud' : 
                       category.charAt(0).toUpperCase() + category.slice(1)}
                    </h4>
                    <div className="space-y-6">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          className="flex items-center space-x-3 hover:bg-white/10 p-2 rounded transition-colors duration-200"
                        >
                          <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.marginLeft = '0';
                            }}
                          />
                            <span className="text-xl font-light tracking-wider">{skill.name}</span>
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
                  className="contact-button px-8 py-3 border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 uppercase tracking-wider text-sm font-light"
                >
            Send a Message
          </button>
        ) : (
          <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
                  className="space-y-6"
            onSubmit={handleSubmit}
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
        <footer className="px-8 py-8 text-center text-sm font-light tracking-wider text-white/60 space-y-2">
          <div>© {new Date().getFullYear()} Tanish Upakare. All rights reserved.</div>
          <div className="text-sm text-white/40 italic">
            Background: "The Apotheosis of Hercules" (1736) by François Lemoyne
          </div>
      </footer>
      </div>
    </div>
  );
}