import React from "react";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NEXUS",
      description:
        "Ferramenta completa para controle de finanças pessoais, com gráficose relatórios.",
      image: "/NEXUS.png",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "TypeScript",
        "Next.js",
      ],
      liveUrl: "https://github.com/Leofrancaa/Website_about_COD",
      githubUrl: "https://github.com/Leofrancaa/finance-frontend",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      title: "Omni News",
      description:
        "Site de notícias com integração de API, sistema de comentários e autenticação de usuários.",
      image: "/omni.png",
      technologies: [
        "Next.js",
        "Express",
        "Node.js",
        "Tailwind CSS",
        "MongoDB",
        "Typescript",
      ],
      liveUrl: "https://omni-news-pi.vercel.app",
      githubUrl: "#",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "WarzoneXT",
      description:
        "O meu primeiro projeto. Um site informativo sobre o jogo Call of Duty, com informações sobre mapas, armas e modos de jogo.",
      image: "/COD.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/Leofrancaa/Website_about_COD",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "IconePos",
      description:
        "Um site institucional informativo para uma empresa de cursos de odontologia, informações sobre os cursos, professores, área de contato e área do aluno.",
      image: "/iconepos.png",
      technologies: [
        "Next.js",
        "Express",
        "Node.js",
        "Tailwind CSS",
        "MongoDB",
        "Typescript",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Leofrancaa/iconePos",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    /*
    {
      title: "Mobile Banking App",
      description:
        "Aplicativo móvel para transações bancárias com autenticação biométrica e notificações push.",
      image:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      title: "AI Content Generator",
      description:
        "Ferramenta de geração de conteúdo usando IA com interface intuitiva e múltiplos formatos de saída.",
      image:
        "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
    */
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meus{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projetos
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Uma seleção dos projetos que desenvolvi, demonstrando diferentes
              tecnologias e soluções criativas
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group ${project.bgColor} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                        title="Ver projeto"
                      >
                        <ExternalLink size={20} className="text-gray-700" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                        title="Ver código"
                      >
                        <Github size={20} className="text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${project.color}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r ${project.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105`}
                    >
                      <Play size={16} />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center gap-2 py-2 px-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
