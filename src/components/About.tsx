import React, { useEffect, useRef } from 'react';
import { Code, Lightbulb, Rocket, LayoutGrid } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const skills = [
    'JavaScript', 'Java', 'React', 'CSS', 'HTML','MongoDB', 'Git',
    'Responsivo', 'UI/UX', 'RESTful APIs', 'MySQL',
    'Bootstrap', 'Tailwind CSS',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-950 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Mi</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soy un estudiante de desarrollo de software con una pasión por la creación de experiencias
            web atractivas y funcionales. Me encanta aprender nuevas tecnologías y mejorar mis habilidades
            en el desarrollo frontend. Estoy emocionado por el futuro y las oportunidades que me esperan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={el => itemRefs.current[0] = el}
            className="opacity-0 transition-all duration-1000 delay-300 transform translate-y-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mi perfil</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Soy Valentina, una desarrolladora web apasionada por la creación de aplicaciones
              y sitios web que no solo son funcionales, sino también visualmente atractivos.
              Desde que era pequeña, siempre me ha fascinado la tecnología y cómo puede cambiar el mundo.
              Comencé mi viaje en el desarrollo web hace unos años y desde entonces he estado aprendiendo distintas tecnologías y herramientas.
              Me encanta trabajar con JavaScript y Java, y estoy aprendiendo en frameworks como React.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Actualmente estoy en Quinto semestre de la tecnología en Ingenieria de sistemas en Tecnologico Comfenalco.
              He trabajado en varios proyectos académicos, donde he podido aplicar mis habilidades y aprender nuevas tecnologías.
              Me gusta trabajar en equipo y colaborar con otros desarrolladores para crear soluciones innovadoras.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Estoy emocionada por el futuro y las oportunidades que me esperan en el mundo del desarrollo web.
              Siempre estoy buscando aprender y mejorar mis habilidades, y estoy abierta a nuevas oportunidades y desafíos.
              Estoy en busqueda de una pasantía o trabajo a tiempo parcial donde pueda aplicar mis habilidades y aprender de otros desarrolladores.
              Si estás buscando a alguien apasionada por el desarrollo web y dispuesta a aprender, ¡no dudes en contactarme!
            </p>
          </div>

          <div
            ref={el => itemRefs.current[1] = el}
            className="opacity-0 transition-all duration-1000 delay-500 transform translate-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Habilidades</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: <Code size={32} />,
              title: "Codificación Limpia",
              description: "Mi código es limpio, legible y fácil de mantener."
            },
            {
              icon: <LayoutGrid size={32} />,
              title: "Diseño Responsivo",
              description: "Mis aplicaciones se ven bien en todos los dispositivos, me enfoco en la experiencia del usuario."
            },
            {
              icon: <Lightbulb size={32} />,
              title: "Soluciones Creativas",
              description: "Busco soluciones innovadoras para problemas complejos y actuales."
            },
            {
              icon: <Rocket size={32} />,
              title: "Flexibilidad",
              description: "Puedo aprender nuevas tecnologias, siempre estoy dispuesta a aprender."
            }
          ].map((item, i) => (
            <div
              key={i}
              ref={el => itemRefs.current[i + 2] = el}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-8"
              style={{ transitionDelay: `${700 + i * 100}ms` }}
            >
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;