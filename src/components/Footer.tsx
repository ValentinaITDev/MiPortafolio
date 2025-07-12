import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            >
              Desarrolladora de Software
            </a>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Sobre Mi</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Contacto</a>
          </div>
          
          <div className="text-gray-600 dark:text-gray-400 flex items-center">
            <span>© {currentYear} Creado </span>
            <Heart size={16} className="mx-1 text-red-500" />
            <span>por Valentina Tovar</span>
          </div>
        </div>

        <div className="w-full border-t border-purple-200 dark:border-purple-900 my-6"></div>
        <div className="flex space-x-4 mt-4">
          <a href="mailto:tovarv145@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail size={20} className="text-cyan-500 hover:text-purple-500 transition-colors" />
          </a>
          <a href="https://github.com/ValentinaITDev" target="_blank" rel="noopener noreferrer">
            <Github size={20} className="text-cyan-500 hover:text-purple-500 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/valentina-tovar-44bbb71b4/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} className="text-cyan-500 hover:text-purple-500 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;