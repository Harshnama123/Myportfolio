import { useState, useEffect } from 'react'
import { ChevronDown, Download, Github, Linkedin, Mail, Phone, Code, Database, Brain, Zap } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = 'Full-Stack Software Engineer'

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const achievements = [
    { number: "300+", label: "DSA Problems Solved", icon: Code },
    { number: "10+", label: "Production Apps", icon: Database },
    { number: "95%", label: "System Accuracy", icon: Brain },
    { number: "99%", label: "App Uptime", icon: Zap }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/30 rotate-45 animate-spin-slow hidden md:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-green-400/30 animate-bounce hidden md:block"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rotate-12 animate-pulse hidden lg:block"></div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-gradient">
            HARSH
          </span>
          <span className="block bg-gradient-to-r from-green-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-gradient">
            NAMDEV
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl lg:text-3xl mb-8 font-mono min-h-[2rem]">
          <span className="text-cyan-400">{displayText}</span>
          <div className="inline-block w-1 h-6 md:h-8 bg-cyan-400 ml-1 animate-pulse"></div>
        </div>
        
        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Innovative Computer Science graduate specializing in AI-integrated web applications. 
          Expert in React.js, Node.js, and Python with proven ability to deliver production-ready 
          solutions. Built AI chatbot serving 100+ users and computer vision systems with 95% accuracy.
        </p>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {achievements.map(({ number, label, icon: Icon }, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 rounded-full border-2 border-cyan-400/50 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
              </div>
              <div className="text-lg md:text-2xl font-bold text-cyan-400">{number}</div>
              <div className="text-xs md:text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            View My Projects
          </button>
          <a
            href="/resume.pdf"
            download="Harsh_Namdev_Resume.pdf"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-4 md:space-x-6 mb-8">
          <a href="https://github.com/Harshnama123" target="_blank" rel="noopener noreferrer"
             className="p-3 border border-gray-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group">
            <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-namdev-b01441264/" target="_blank" rel="noopener noreferrer"
             className="p-3 border border-gray-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group">
            <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:harshnama1234@gmail.com"
             className="p-3 border border-gray-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group">
            <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a href="tel:+918824646810"
             className="p-3 border border-gray-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group">
            <Phone className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>
        
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mx-auto" />
        </button>
      </div>
    </section>
  )
}

export default Hero