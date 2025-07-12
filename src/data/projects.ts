import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, user authentication, and payment processing. Implemented responsive design and optimized for performance.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    image: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/username/ecommerce-platform',
    link: 'https://ecommerce-demo.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with real-time updates. Features include task categorization, deadlines, and team collaboration tools.',
    technologies: ['React', 'TypeScript', 'Firebase', 'React DnD', 'Styled Components'],
    image: 'https://images.pexels.com/photos/7654986/pexels-photo-7654986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/username/task-manager',
    link: 'https://task-manager-demo.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time weather data and forecasts. Implemented geolocation and weather API integration with animated weather visualizations.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API', 'Chart.js'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/username/weather-dashboard',
    link: 'https://weather-app-demo.com'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal portfolio website with smooth animations and responsive design. Implemented light/dark mode toggle and optimized for accessibility.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/username/portfolio',
    link: 'https://portfolio-demo.com'
  }
];

export default projects;