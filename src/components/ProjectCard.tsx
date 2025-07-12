import React, { useState } from 'react';
import { ExternalLink, Github, Heart } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = () => {
  return (
    <div 
      className="relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 bg-white dark:bg-gray-800 hover:shadow-xl hover:shadow-pink-400/20 group"
    >
      <div className="aspect-video overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        {/* Imagen vacía */}
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              {/* Título vacío */}
            </h3>
            <div className="flex space-x-3">
              {/* Sin enlaces */}
            </div>
          </div>
          
          <p className="text-gray-100 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {/* Descripción vacía */}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {/* Sin tecnologías */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;