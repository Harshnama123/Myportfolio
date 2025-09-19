import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Layout = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])

  // Generate particles after hydration
  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    }))
    setParticles(generatedParticles)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Neural Network Background
  const NeuralBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
      {/* Animated particles - only render after hydration */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  )

  // Custom Cursor
  const CustomCursor = () => (
    <div
      className="fixed w-6 h-6 pointer-events-none z-50 hidden md:block"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transition: 'all 0.1s ease-out'
      }}
    >
      <div className="w-full h-full rounded-full border border-cyan-400/50 animate-pulse"></div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <NeuralBackground />
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-gray-900/90 backdrop-blur-lg border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-sm md:text-base">
                HN
              </span>
              <div className="w-2 h-5 bg-cyan-400 animate-pulse"></div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'home', section: 'home' },
                { name: 'projects', section: 'projects' },
                { name: 'skills', section: 'skills' },
                { name: 'contact', section: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  className="font-mono text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  onClick={() => {
                    const element = document.getElementById(item.section)
                    element?.scrollIntoView({ behavior: 'smooth' })
                    setActiveSection(item.section)
                  }}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {[
                { name: 'home', section: 'home' },
                { name: 'projects', section: 'projects' },
                { name: 'skills', section: 'skills' },
                { name: 'contact', section: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  className="text-2xl font-mono text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => {
                    const element = document.getElementById(item.section)
                    element?.scrollIntoView({ behavior: 'smooth' })
                    setActiveSection(item.section)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 font-mono text-sm">
              harsh_namdev@portfolio:~$ Built with ❤️ using Next.js & Tailwind CSS
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com/Harshnama123" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/harsh-namdev-b01441264/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:harshnama1234@gmail.com"
                 className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+918824646810"
                 className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              © 2024 Harsh Namdev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout