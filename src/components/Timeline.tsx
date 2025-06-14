import React from "react";
import {
  Calendar,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      type: "work",
      icon: Briefcase,
      title: "Estagio em automação",
      company: "SENAI CIMATEC",
      location: "Salvador, BA",
      period: "2024 - Presente",
      description:
        "Estágio de 2 anos iniciado em 05/12/2024 na área de automação, onde estou participando de diversos projetos envolvendo automação. Nesses projetos, tenho atuado no desenvolvimento de APIs em Python, aplicações em React Native, modelagem de banco de dados e interação frequente com CLPs.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },

    {
      type: "work",
      icon: Briefcase,
      title: "Estágio em banco de dados",
      company: "Softwell Solutions",
      location: "Salvador, BA",
      period: "2024 - 2024",
      description:
        "Passei apenas 15 dias nesse estágio, mas tive a oportunidade de aprender sobre a gestão de bancos de dados voltada para a administração pública municipal, atuando em áreas como contabilidade, saúde, educação, entre outras. Durante esse breve período, pude ter uma visão inicial sobre como os sistemas de informação são estruturados e utilizados por órgãos públicos, além de entender a importância da integridade e segurança dos dados nessas aplicações.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Fullstack Developer",
      company: "Cimatec Jr.",
      location: "Salvador, BA",
      period: "2022 - 2024",
      description:
        "A CIMATEC Jr. é uma empresa júnior da qual participei de dezembro de 2022 a dezembro de 2023. Lá, pude desenvolver diversas soft skills que considero importantes, como liderança, comunicação assertiva e trabalho em equipe. Além disso, também adquiri hard skills na área de computação e na área comercial, na qual também atuei dentro da empresa.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Bacharelado em Engenharia da computação",
      company: "Universidade Senai CIMATEC",
      location: "Salvador, BA",
      period: "2022 - 2026",
      description:
        "Iniciei o curso de Engenharia da Computação em 2022 e atualmente estou no 7º semestre. A conclusão está prevista para dezembro de 2026. Ao longo do curso, tenho adquirido uma base sólida em programação, sistemas embarcados, redes de computadores e automação, além de participar ativamente de projetos acadêmicos e extracurriculares que fortalecem minha formação prática e teórica.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },

    {
      type: "education",
      icon: GraduationCap,
      title: "Curso de Desenvolvimento Web Full Stack",
      company: "Jovem de futuro",
      location: "Remoto",
      period: "2021 - 2022",
      description:
        "Lá, aprendi desde os fundamentos da lógica de programação até JavaScript, Python, HTML, CSS e WordPress. Esse curso me proporcionou uma base sólida em diversas linguagens de programação e tecnologias de desenvolvimento web.s",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Estágio em eletrotécnica",
      company: "VIATEK",
      location: "Conceição do Jacuípe, BA",
      period: "2021 - 2022",
      description:
        "A Viatek é uma fábrica que trabalha com moldagem por injeção de termoplásticos. Lá, realizei a manutenção de máquinas de injeção e auxiliei eletrotécnicos na execução de diversos tipos de reparos nas máquinas.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Curso técnico em eletrotécnica",
      company: "IFBA",
      location: "Feira de Santana, BA",
      period: "2017 - 2021",
      description:
        "Participei do curso de Eletrotécnica no IFBA, onde obtive uma formação abrangente em engenharia elétrica. A grade curricular abordou temas como circuitos elétricos, sistemas de potência, eletrônica, automação e sistemas de controle. Esse curso me proporcionou tanto conhecimento teórico quanto habilidades práticas, por meio de atividades em laboratório e projetos aplicados ao mundo real.",
      color: "from-yellow-400 to-yellow-600", // cor diferente
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Curso de idiomas em inglês",
      company: "CCAA",
      location: "Feira de Santana, BA",
      period: "2013 - 2018",
      description:
        "Fiz um curso de inglês no CCAA de 2013 a 2018, onde desenvolvi minha proficiência na língua inglesa, incluindo habilidades de leitura, escrita, compreensão auditiva e conversação.",
      color: "from-pink-400 to-pink-600", // cor diferente
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-[90%] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Minha{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Jornada
              </span>
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
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <item.icon size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-4"
                        : "md:ml-auto md:pl-4"
                    }`}
                  >
                    <div
                      className={`${item.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
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
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r ${item.color}`}
                        >
                          <item.icon size={12} />
                          {item.type === "work"
                            ? "Trabalho"
                            : item.type === "education"
                            ? "Educação"
                            : "Conquista"}
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
                Estou sempre em busca de novos projetos e oportunidades para
                aplicar meus conhecimentos e continuar crescendo
                profissionalmente.
              </p>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
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
