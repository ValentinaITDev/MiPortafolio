import React, { useState } from 'react';
import socials from '../data/socials';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/{TU_ID_DE_FORMULARIO}', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Github':
        return <Github size={24} />;
      case 'Linkedin':
        return <Linkedin size={24} />;
      case 'Twitter':
        return <Twitter size={24} />;
      case 'Mail':
        return <Mail size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Estemos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Contacto</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Si tienes alguna pregunta o comentario, no dudes en enviarme un mensaje.
            Estoy aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Por aquí</h3>
            <iframe
              title="Formulario de contacto"
              src="https://form.jotform.com/tovarv145/enviame-un-mensaje"
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Conectate conmigo</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <a
                href="mailto:tovarv145@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                  <Mail size={24} />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">Email</span>
              </a>
              <a
                href="https://github.com/ValentinaITDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                  <Github size={24} />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/valentina-tovar-44bbb71b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                  <Linkedin size={24} />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">LinkedIn</span>
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Disponibilidad</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Lunes - Sabados: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;