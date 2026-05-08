import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      className="overflow-hidden rounded-3xl shadow-lg transition-all duration-500 bg-white dark:bg-gray-800 hover:shadow-xl hover:shadow-pink-400/20 group"
    >
      <div className="aspect-video overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-gray-500">Sin imagen</div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-300"
              aria-label="Enlace al proyecto"
            >
              <ExternalLink size={22} />
            </a>
          )}
        </div>

        <p className="text-gray-800 dark:text-gray-300 mb-5 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;