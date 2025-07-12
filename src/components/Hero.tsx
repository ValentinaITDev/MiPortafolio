import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400/20 via-purple-400/20 to-mint-400/20 dark:from-pink-400/30 dark:via-purple-400/30 dark:to-mint-400/30"></div>
      
      <div 
        className={`container mx-auto px-4 py-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-4 p-2 rounded-3xl bg-gradient-to-r from-pink-400 to-purple-400 animate-float">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-3">
              <span className="text-2xl">🌸</span>
            </div>
          </div>
          
          <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-3">
            Holaaa, soy
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="block">Valentina Tovar</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-mint-400">
              Desarrolladora de Software 
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Soy estudiante de desarrollo de software y me apasiona crear experiencias web atractivas y funcionales. 
            Estoy aquí para ayudarte a dar vida a tus ideas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/25 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            >
              Mira mi trabajo <span className="ml-1">💖</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-all hover:border-pink-400 hover:text-pink-400 dark:hover:border-pink-400 dark:hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
            >
              Enviame un mensaje <span className="ml-1">✉️</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-pink-400 dark:text-pink-400 hover:text-purple-400 dark:hover:text-purple-400 transition-colors">
        <Heart size={28} className="animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;