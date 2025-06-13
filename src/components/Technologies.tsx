
import React from 'react';

const Technologies = () => {
  const techCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "Vue.js", level: 88, color: "bg-green-500" },
        { name: "TypeScript", level: 92, color: "bg-blue-600" },
        { name: "Next.js", level: 85, color: "bg-gray-800" },
        { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "Express.js", level: 88, color: "bg-gray-700" },
        { name: "FastAPI", level: 80, color: "bg-teal-600" },
        { name: "GraphQL", level: 75, color: "bg-pink-500" }
      ]
    },
    {
      title: "Database & Cloud",
      color: "from-purple-500 to-indigo-500",
      technologies: [
        { name: "MongoDB", level: 87, color: "bg-green-700" },
        { name: "PostgreSQL", level: 82, color: "bg-blue-800" },
        { name: "Redis", level: 78, color: "bg-red-500" },
        { name: "AWS", level: 80, color: "bg-orange-500" },
        { name: "Docker", level: 85, color: "bg-blue-400" }
      ]
    },
    {
      title: "Mobile & Tools",
      color: "from-red-500 to-pink-500",
      technologies: [
        { name: "React Native", level: 83, color: "bg-purple-500" },
        { name: "Git", level: 95, color: "bg-orange-600" },
        { name: "Webpack", level: 75, color: "bg-blue-300" },
        { name: "Jest", level: 80, color: "bg-red-600" },
        { name: "Figma", level: 85, color: "bg-purple-600" }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Minhas <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tecnologias</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas e eficientes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Technologies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-4 h-8 bg-gradient-to-b ${category.color} rounded-full mr-4`}></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies List */}
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="group">
                      {/* Tech Name and Percentage */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                          {tech.name}
                        </span>
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                          {tech.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${tech.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                          style={{ 
                            width: `${tech.level}%`,
                            animation: `fillBar 1.5s ease-out ${techIndex * 0.2}s both`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Outras Competências
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Metodologias Ágeis",
                "Design Patterns",
                "Clean Code",
                "API REST",
                "Microservices",
                "DevOps",
                "UI/UX Design",
                "Testing",
                "Performance Optimization",
                "Security Best Practices"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--final-width); }
        }
      `}</style>
    </section>
  );
};

export default Technologies;
