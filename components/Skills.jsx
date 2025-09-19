import { Code, Database, Brain, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code,
      color: "from-cyan-400 to-blue-500",
      level: 90,
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Backend Development", 
      icon: Database,
      color: "from-green-400 to-cyan-500",
      level: 85,
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "Python", "Flask"]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-400 to-pink-500",
      level: 80,
      items: ["OpenCV", "face-recognition", "Python", "Google APIs", "Computer Vision", "MediaPipe"]
    },
    {
      category: "Tools & Technologies",
      icon: Wrench,
      color: "from-orange-400 to-red-500", 
      level: 85,
      items: ["Git", "GitHub", "Docker", "Vercel", "VS Code", "PyCharm", "Postman", "MongoDB Atlas"]
    }
  ]

  const certifications = [
    "MERN Stack Developer",
    "React.js Developer", 
    "MongoDB",
    "Data Structure and Algorithm"
  ]

  const codingStats = [
    { platform: "LeetCode", solved: "200+", rank: "Top 15%" },
    { platform: "GeeksforGeeks", solved: "200+", rank: "5★" },
    { platform: "CodeStudio", solved: "150+", rank: "Expert" },
    { platform: "GitHub", repos: "20+", stars: "50+" }
  ]

  return (
    <section id="skills" className="py-16 md:py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">Technologies I work with to build amazing products</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {skillCategories.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-20`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">{skill.level}%</span>
                </div>
                
                <div className="mb-6 bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:animate-pulse`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `fillBar 2s ease-out forwards`
                    }}
                  ></div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Coding Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Coding Achievements
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {codingStats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-800/30 rounded-xl p-4 md:p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-lg md:text-xl font-bold text-cyan-400 mb-1">{stat.platform}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {stat.solved || stat.repos}
                </div>
                <div className="text-sm text-gray-400">{stat.rank || stat.stars}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications & Learning
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-cyan-400 font-bold">✓</span>
                  </div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                    {cert}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
