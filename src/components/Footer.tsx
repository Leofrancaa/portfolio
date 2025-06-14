import React from "react";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Tecnologias", href: "#technologies" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais
              inovadoras e experiências de usuário excepcionais.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegação</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 leofrancal17@gmail.com</p>
              <p>📱 +55 (71) 99660-1709</p>
              <p>📍 Salvador, BA - Brasil</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4">
              <h4 className="font-semibold mb-2">
                Disponível para novos projetos
              </h4>
              <p className="text-sm text-blue-100">
                Vamos trabalhar juntos no seu próximo projeto!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Leonardo Franca. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Feito com <Heart size={16} className="text-red-500" /> usando
              React + TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
