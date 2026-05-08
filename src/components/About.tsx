import React, { useEffect, useRef } from 'react';
import { Code, Lightbulb, Rocket, LayoutGrid, Briefcase } from 'lucide-react';

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
    'Bootstrap', 'Tailwind CSS', 'Docker',
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
            Soy estudiante graduada de desarrollo de software con una pasión por la creación de experiencias
            web atractivas y funcionales. Me encanta aprender nuevas tecnologías y mejorar mis habilidades
            en el desarrollo frontend. Estoy emocionada por el futuro y las oportunidades que me esperan.
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
              Recientemente me gradué como estudiante de desarrollo de software en la tecnología de Ingeniería de Sistemas en Tecnológico Comfenalco.
              He trabajado en varios proyectos académicos, donde he podido aplicar mis habilidades y aprender nuevas tecnologías.
              Además, tengo experiencia profesional como Soporte Técnico en Yara, una empresa internacional, donde he desarrollado habilidades en resolución de problemas y atención al cliente.
              Me gusta trabajar en equipo y colaborar con otros desarrolladores para crear soluciones innovadoras.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Estoy emocionada por el futuro y las oportunidades que me esperan en el mundo del desarrollo web.
              Siempre estoy buscando aprender y mejorar mis habilidades, y estoy abierta a nuevas oportunidades y desafíos.
              Combino mi formación en desarrollo de software con mi experiencia en soporte técnico para ofrecer soluciones completas y enfocadas en el usuario.
              Si estás buscando a alguien apasionada por el desarrollo web, con experiencia técnica y dispuesta a aprender, ¡no dudes en contactarme!
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

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Laboral</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            <div
              ref={el => itemRefs.current[6] = el}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-8"
              style={{ transitionDelay: `1000ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white flex-shrink-0">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">IT Support / Help Desk</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-semibold">Yara Latinoamérica</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Contrato de prácticas • ago. 2025 - feb. 2026 • 7 meses • Colombia · Presencial</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Soporte técnico presencial y remoto a usuarios en entorno corporativo multinacional, garantizando continuidad operativa y adecuada experiencia de usuario.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <p className="text-gray-700 dark:text-gray-300">Gestión, priorización y resolución de incidentes mediante ServiceNow (ITSM), bajo cumplimiento de tiempos de atención (SLA).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <p className="text-gray-700 dark:text-gray-300">Diagnóstico y solución de fallas en hardware y software (Windows, herramientas corporativas Microsoft).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <p className="text-gray-700 dark:text-gray-300">Soporte a conectividad básica de red y VPN corporativa.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <p className="text-gray-700 dark:text-gray-300">Configuración, alistamiento, entrega y cambio de equipos (laptops, monitores y accesorios).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <p className="text-gray-700 dark:text-gray-300">Administración, control y trazabilidad de inventario de activos tecnológicos.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <p className="text-gray-700 dark:text-gray-300">Gestión de accesos, restablecimiento de contraseñas y soporte a cuentas de usuario.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <p className="text-gray-700 dark:text-gray-300">Soporte inicial a impresoras, validación con proveedor y escalamiento de incidentes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <p className="text-gray-700 dark:text-gray-300">Apoyo al equipo de Cyber Defense en revisión de equipos fuera de red y validación de eventos básicos de seguridad.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <p className="text-gray-700 dark:text-gray-300">Coordinación con equipos locales y globales para validaciones técnicas y seguimiento de casos.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <p className="text-gray-700 dark:text-gray-300">Atención a usuarios corporativos bajo estándares de servicio y enfoque en resolución eficiente de incidentes.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-200">
                  ServiceNow (ITSM)
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-200">
                  Hardware & Software
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-200">
                  Windows
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-200">
                  Redes
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-200">
                  Inglés
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;