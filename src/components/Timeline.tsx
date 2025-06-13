
import React from 'react';
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

const Timeline = () => {
  const timelineItems = [
    {
      type: "work",
      icon: Briefcase,
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "São Paulo, SP",
      period: "2022 - Presente",
      description: "Lidero o desenvolvimento de aplicações web complexas usando React, Node.js e AWS. Responsável por arquitetura de software e mentoria de desenvolvedores júnior.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2021 - 2022",
      description: "Desenvolvi MVP de plataforma SaaS do zero, implementando autenticação, sistema de pagamentos e dashboard analytics. Stack: React, Express, MongoDB.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Pós-graduação em Desenvolvimento Web",
      company: "Universidade Tecnológica",
      location: "São Paulo, SP",
      period: "2020 - 2021",
      description: "Especialização em tecnologias web modernas, arquitetura de software e boas práticas de desenvolvimento.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Frontend Developer",
      company: "AgênciaWeb",
      location: "São Paulo, SP",
      period: "2019 - 2021",
      description: "Desenvolvimento de interfaces responsivas e interativas para diversos clientes. Trabalho com React, Vue.js e integração com APIs REST.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Bacharelado em Ciência da Computação",
      company: "Universidade Federal",
      location: "São Paulo, SP",
      period: "2015 - 2019",
      description: "Formação sólida em algoritmos, estruturas de dados, engenharia de software e desenvolvimento de sistemas.",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      type: "achievement",
      icon: Award,
      title: "Primeiro Projeto Freelance",
      company: "Cliente Local",
      location: "São Paulo, SP",
      period: "2018",
      description: "Desenvolvi meu primeiro website profissional para uma empresa local, marcando o início da minha jornada no desenvolvimento web.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Minha <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Jornada</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Uma linha do tempo da minha trajetória profissional e acadêmica
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <item.icon size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className={`${item.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          {item.company}
                        </div>
                        
                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {item.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {item.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Type Badge */}
                      <div className="mt-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r ${item.color}`}>
                          <item.icon size={12} />
                          {item.type === 'work' ? 'Trabalho' : item.type === 'education' ? 'Educação' : 'Conquista'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para o Próximo Desafio
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Estou sempre em busca de novos projetos e oportunidades para aplicar 
                meus conhecimentos e continuar crescendo profissionalmente.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105"
              >
                Vamos Conversar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
