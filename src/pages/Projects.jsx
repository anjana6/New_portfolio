import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'SH Movies.LK',
      description: 'This is a movie website designed to meet user expectations by providing an intuitive interface for exploring films. Users can watch movie trailers and download movies directly from the platform. The application is built using React, Node.js, and Sass, and integrates with the TMDB API to fetch real-time movie data and details.',
      image: 'https://res.cloudinary.com/ashakthi/image/upload/v1699059490/portfolio/rf9rp76kprixaf3awywu.png',
      technologies: ['React', 'JavaScript', 'Sass', 'TMDB'],
      githubLink: 'https://github.com/anjana6/SH_Movie',
      liveLink: 'https://sh-movie-anjana6.vercel.app/'
    },
    {
      id: 2,
      title: 'Portfolio WebApp',
      description: 'This is a personal portfolio web application developed using React.js, Tailwind CSS, and custom CSS. It is a fully frontend-only project, designed to highlight my skills, experience, and featured projects in a clean and responsive layout.',
      image: '/assets/portfolio.png', 
      technologies: ['React.js', 'Tailwind CSS', 'CSS'],
      githubLink: 'https://github.com/anjana6/anjana_portfolio',
      liveLink: 'https://anjana-portfolio.vercel.app/'
    },
    {
      id: 3,
      title: 'Fun Chat App',
      description: 'This is a small chat application I developed during university to gain experience with Socket.IO. It is built using React, Redux, and Node.js. Socket.IO is used to handle real-time messaging, while MongoDB serves as the database for storing user details and chat messages.',
      image: '/assets/webchatapp.png',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Material UI'],
      githubLink: 'https://github.com/anjana6/Web-ChatApp',
      liveLink: 'https://youtu.be/XrQGqp-Idos'
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-mono">
          My Featured Projects
        </h1>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
              
              <div className="flex-1">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <a
                        href={project.githubLink}
                        className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-xl text-gray-800" />
                      </a>
                      <a
                        href={project.liveLink}
                        className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="text-xl text-gray-800" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 