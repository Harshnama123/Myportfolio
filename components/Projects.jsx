import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MERN-GPT: AI Chatbot Platform",
      tagline: "Intelligent Conversational AI",
      description: "Full-stack AI chatbot with Google Gemini API integration, supporting real-time conversations and persistent chat history for 100+ concurrent users. Features secure JWT authentication, responsive design, and scalable architecture.",
      image: "/merngpt-preview.png",
      tech: ["React.js", "Node.js", "MongoDB", "TypeScript", "JWT", "Google Gemini API", "Tailwind CSS"],
      metrics: { users: "100+", uptime: "99%", responseTime: "<2s" },
      liveUrl: "https://mern-gpt-beta.vercel.app/",
      githubUrl: "https://github.com/Harshnama123/MERN-GPT",
      featured: true,
      highlights: [
        "Real-time AI conversations with context awareness",
        "Secure user authentication with httpOnly cookies",
        "Persistent chat history with MongoDB integration",
        "Responsive design optimized for all devices"
      ]
    },
    {
      id: 2,
      title: "Advanced Attendance System",
      tagline: "Computer Vision Attendance Solution",
      description: "AI-powered attendance management system using facial recognition technology. Achieves 95% accuracy across 200+ student database with multiple attendance modes including live webcam, image upload, and manual entry.",
      image: "/attendance-preview.png",
      tech: ["Python", "OpenCV", "Flask", "MongoDB", "face-recognition", "Bootstrap", "Pandas"],
      metrics: { accuracy: "95%", students: "200+", modes: "3" },
      githubUrl: "https://github.com/Harshnama123/Advanced-Attendance-System",
      featured: false,
      highlights: [
        "Advanced facial recognition with 95% accuracy",
        "Multiple attendance tracking methods",
        "Automated Excel report generation",
        "Admin dashboard for class management"
      ]
    },
    {
      id: 3,
      title: "Interactive Portfolio Website",
      tagline: "Next.js Portfolio Platform",
      description: "Modern, responsive portfolio website built with Next.js 14 and Tailwind CSS. Features server-side rendering, SEO optimization, smooth animations, and cyberpunk-inspired design elements.",
      image: "/interactive-preview.png",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
      metrics: { performance: "98%", mobile: "100%", seo: "95%" },
      liveUrl: "https://harsh-portfolio-pearl.vercel.app/",
      githubUrl: "https://github.com/Harshnama123/portfolio-website-",
      featured: false,
      highlights: [
        "Server-side rendering for optimal performance",
        "Fully responsive design with smooth animations",
        "SEO optimized with meta tags and structured data",
        "Unique cyberpunk-inspired visual design"
      ]
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">Building the future, one line of code at a time</p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex ${project.featured ? 'md:scale-105' : ''}`}
            >
              {/* Holographic border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Project Image */}
              <div className="md:w-1/2 relative">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-cyan-400 to-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="relative overflow-hidden bg-gray-800/50 rounded-lg h-[400px] md:h-[500px]">
                  {project.image ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain p-4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800/80"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gray-700/50 flex items-center justify-center">
                      <div className="text-gray-500 text-lg">Project Preview</div>
                    </div>
                  )}
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="md:w-1/2 p-6 md:p-8 bg-gray-800/50 backdrop-blur-sm relative">
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-cyan-400 text-sm font-semibold mb-4">{project.tagline}</p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-cyan-400 border border-cyan-400/30 hover:border-cyan-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="flex justify-between text-sm text-gray-400 mb-6 bg-gray-700/30 rounded-lg p-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold text-cyan-400 text-lg">{value}</div>
                      <div className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-center font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-cyan-400 rounded-lg text-center font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Harshnama123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-400/50 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects