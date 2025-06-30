import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  

  const handleDownloadCV = () => {
    console.log('CV download functionality would be implemented here');
  };

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-white mb-2">Hi, my name is</p>
        
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">
            Anjana Shakthi
          </h1>
          
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Innovating the web with purpose and precision. As a full-stack engineer, I create accessible, user-friendly digital experiences that leave a lasting impact.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-200 text-2xl"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary"
            >
              Get in Touch
            </button>
            <button
              onClick={handleDownloadCV}
              className="btn-secondary"
            >
              CV Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 