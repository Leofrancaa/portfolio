import React from "react";
import { Code2, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código limpo, eficiente e bem documentado",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Foco em aplicações rápidas e otimizadas",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho bem em equipe e comunico claramente",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Entrego sempre o melhor resultado possível",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Sobre{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mim
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Sou um desenvolvedor apaixonado por tecnologia com mais de 3
                anos de experiência criando soluções digitais inovadoras. Minha
                jornada começou com curiosidade sobre como as coisas funcionam e
                evoluiu para uma carreira dedicada a transformar ideias em
                realidade através do código.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Especializo-me em desenvolvimento full-stack, com foco em
                Next.js, Node.js e tecnologias modernas. Acredito que o bom
                código não é apenas funcional, mas também elegante e
                sustentável. Estou sempre aprendendo novas tecnologias e
                metodologias para me manter atualizado neste campo em constante
                evolução.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Quando não estou codando, gosto de compartilhar conhecimento,
                contribuir para projetos open-source e explorar novas tendências
                em tecnologia. Meu objetivo é sempre entregar soluções que não
                apenas atendam aos requisitos técnicos, mas que também
                proporcionem uma excelente experiência para o usuário final.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 md:grid-cols-3 gap-8">
            {[
              { number: "10+", label: "Projetos Concluídos" },
              { number: "3+", label: "Anos de Experiência" },
              { number: "10+", label: "Tecnologias" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
